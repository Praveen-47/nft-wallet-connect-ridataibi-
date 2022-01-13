import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import hero from '../../assets/images/hero.png'


import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";

export const Hero = () => {




  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [feedbackMsgStyle, setFeedbackMsgStyle] = useState(normalStyle);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = async () => {
    console.log('--------++ ')
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    console.log('blockchain==================', blockchain.smartContract.methods)


    await blockchain.smartContract.methods
      .mint(blockchain.account, mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log('Sorry, something went wrong please try again later.', err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
        setFeedbackMsgStyle(errorStyle);
      })
      .then((receipt) => {
        console.log(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`, receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        setFeedbackMsgStyle(successStyle);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 50) {
      newMintAmount = 50;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    // console.log('blockchain.account', blockchain.account)
    // console.log('blockchain.smartContract', blockchain.smartContract)
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    let data = getData();
    console.log('data', data)
  }, [blockchain.account]);

  return (
    <section className="hero">
      <Container>
        <Row>
          <Col md={4}>
            <h1>Presale minting will begin on January 10th.</h1>
            <p>To get presale access to ensure you are able to mint , join our discord below:</p>
            <button>Discord</button>
            <button>Mint</button>
          </Col>
          <Col md={8}>
            <img src={hero} alt="" />
          </Col>
          {/* <Col md={4} className="mobile-only">
            <h1>Presale minting will begin on January 10th.</h1>
            <p>To get presale access to ensure you are able to mint , join our discord below:</p>
            <button>Discord</button>
          </Col> */}
        </Row>
      </Container>
      <div className="overlay"></div>
    </section>
  );
};
