// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// log
import { fetchData } from "../data/dataActions";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";

const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  console.log('payload connect success', payload)
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "8043bb2cf99347b1bfadfb233c5325c0" // required
    }
  },
  fortmatic: {
    package: Fortmatic, // required
    options: {
      key: "FORTMATIC_KEY" // required
    }
  }
};

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
  providerOptions // required
});

export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());

    const provider = await web3Modal.connect();

    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const CONFIG = await configResponse.json();

    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;
    console.log('metamaskIsInstalled', metamaskIsInstalled)
    if (metamaskIsInstalled) {
       Web3EthContract.setProvider(provider);
      let web3 = await new Web3(provider);

      try {
        const accounts = await web3.eth.getAccounts();
       console.log('accounts==', accounts)
        const networkId = await web3.eth.net.getId();
        console.log('networkId', networkId)

      // const accounts = await ethereum.request({
      //   method: "eth_requestAccounts",
      // });
      // const networkId = await ethereum.request({
      //   method: "net_version",
      // });

        if (networkId == CONFIG.NETWORK.ID) {
          const SmartContractObj = new Web3EthContract(
            abi,
           CONFIG.CONTRACT_ADDRESS
          );

     //     console.log('SmartContractObj', SmartContractObj)
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          provider.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          provider.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
        }
      } catch (err) {
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
