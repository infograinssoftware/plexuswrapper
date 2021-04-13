import React, { Component } from "react";
import "./plexuswrapper.css";

import { Container, Row, Col, Navbar, Nav, Button, Image, Modal } from "react-bootstrap";

import Logo from "../../assets/logofull.png";
import { Link } from "react-router-dom";

import Uniswap_Img from "../../assets/icons/uniswap.png";
import Sushi_Img from "../../assets/icons/sushi.png";
import Eth_Img from "../../assets/icons/eth.png";
import Inch_Img from "../../assets/icons/1inch.webp";
import Aave_Img from "../../assets/icons/aave.png";
import Alpha_Img from "../../assets/icons/alpha.png";
import Amp_Img from "../../assets/icons/amp.png";
import Ampl_Img from "../../assets/icons/ampl.png";

import USDC_Img from "../../assets/icons/usdc.png";
import UST_Img from "../../assets/icons/ust.png";
import WNXM_Img from "../../assets/icons/wnxm.png";
import YFI_Img from "../../assets/icons/yfi.png";
import XSUSHI_Img from "../../assets/icons/xsushi.png";
import YAM_Img from "../../assets/icons/yam.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync,  } from "@fortawesome/free-solid-svg-icons";
import { faBell, faFile, faHeart } from "@fortawesome/free-regular-svg-icons";

import Select from 'react-select';

const options = [
  
  { value: 'ETH', label: <div><Image  src={Eth_Img} className="lIcon2" />  ETH</div> },
  { value: 'ETH', label: <div><Image  src={Inch_Img} className="lIcon2" />  1INCH</div> },
  { value: 'ETH', label: <div><Image  src={Aave_Img} className="lIcon2" />  AAVE</div> },
  { value: 'ETH', label: <div><Image  src={Alpha_Img} className="lIcon2" />  ALPHA</div> },
  { value: 'ETH', label: <div><Image  src={Amp_Img} className="lIcon2" />  AMA</div> },
  { value: 'ETH', label: <div><Image  src={Ampl_Img} className="lIcon2" />  AMPL</div> },
  // { value: 'ETH', label: 'ETH', Image: '<Image src={Eth_Img} className="lIcon2" />' },
  // { value: 'ETH', label: 'ETH', Image: '<Image src={Eth_Img} className="lIcon2" />' },
  
];

const optionsOne = [
  
  { value: 'ETH', label: <div><Image  src={USDC_Img} className="lIcon2" />  USDC</div> },
  { value: 'ETH', label: <div><Image  src={UST_Img} className="lIcon2" />  UST</div> },
  { value: 'ETH', label: <div><Image  src={WNXM_Img} className="lIcon2" />  WNXM</div> },
  { value: 'ETH', label: <div><Image  src={YFI_Img} className="lIcon2" />  YFI</div> },
  { value: 'ETH', label: <div><Image  src={XSUSHI_Img} className="lIcon2" />  XSUSHI</div> },
  { value: 'ETH', label: <div><Image  src={YAM_Img} className="lIcon2" />  YAM</div> },
  // { value: 'ETH', label: 'ETH', Image: '<Image src={Eth_Img} className="lIcon2" />' },
  // { value: 'ETH', label: 'ETH', Image: '<Image src={Eth_Img} className="lIcon2" />' },
  
];


class Index extends Component {
  constructor(props) {
    super(props);
    this.state={
      handleShow:true,
      show: true,
      handleClose: false,
    }
  }

  setShow = () => (
    this.setState(
      {
        show:!this.state.show,
      }
    )
  )
  state = {
    selectedOptionOne: null,
    selectedOptionTwo: null,
  };
  handleChange = selectedOptionOne => {
    this.setState({ selectedOptionOne });
    console.log(`Option selected:`, selectedOptionOne);
  };

  handleChange = selectedOptionTwo => {
    this.setState({ selectedOptionTwo });
    console.log(`Option selected:`, selectedOptionTwo);
  };

  render() {
    const { selectedOptionOne } = this.state;
    const { selectedOptionTwo } = this.state;
    return (
      <Container fluid >
        <Row>
          <Col md="6">
            <Image src={Logo} height="25" className="mt-2 mb-2 mt-4 mb-4 header_logo_style" />
          </Col>
          <Col md="6">

            <div className="top_right_headder">
              <div className="notif_div">
                <FontAwesomeIcon className="header_bell_icon_style" icon={faBell} />
                <span class="header_notif_span" ></span>
              </div>
              <Button variant="primary" className="header_wallet_btn_style">Connect Wallet</Button>
            </div>
             
          </Col>
        </Row>

        <Row>
          <Col>
            <Navbar className="navbar_style">

              <Nav className="mr-auto">
                <Nav.Link className="navLink_style navLink_style_active" href="#home">
                  <FontAwesomeIcon className="mr-3" icon={faSync} />
                  Generate LP Tokens  </Nav.Link>
                  <span className="ml-3 vl">|</span>
                <Nav.Link className="navLink_style" href="#features">
                  <FontAwesomeIcon className="mr-3" icon={faSync} />
                  Unwrap LP Tokens </Nav.Link>
                  <span className="ml-3 vl">|</span>
                <Nav.Link className="navLink_style" href="#pricing">
                  <FontAwesomeIcon className="mr-3" icon={faFile} />
                  FAQ
                </Nav.Link>
              </Nav>

            </Navbar>
          </Col>
        </Row>

        <Row>
          <div className="widget-content widget-content-area">
            <center>
              <div className="ui two item stackable tabs menu" style={{ width: "320px", marginBottom: "60px", marginTop: "10px" }}>

                <Link className=" item exOptions andUnder" data-tab="definition" onclick="toggleTo(1)">Uniswap <Image src={Uniswap_Img} style={{ width: "20px", marginLeft: "8px" }} /> </Link>

                <Link className="item exOptions active" data-tab="examples" onclick="toggleTo(2)">SushiSwap <Image src={Sushi_Img} style={{ width: "20px", marginLeft: "5px" }} /></Link>

              </div>


            </center>

            <center>

              <div className="ui right labeled left icon input" style={{ width: "320px" }} id="fromContainer">

                <input type="number" value="0.07" id="ethAmount" style={{ backgroundColor: "black", border: "0", paddingLeft: "10px", opacity: "1", color: "white" }} />
                <Link className="ui tag label bs-popover ethLabel" data-trigger="hover" >
                  
                  <Image src={Eth_Img} className="lIcon2" /> ETH
                </Link>
                
              </div>
              

              <div style={{ fontSize: "20px", marginTop: "30px", marginBottom: "30px", color: "white" }} id="arrowSection">
                ↓
              </div>

              <div style={{ backgroundColor: "black", borderRadius: "20px", opacity: ".8", borderWidth: "0.1px", borderColor: "black", width: "330px", borderStyle: "solid", padding: "50px", zIndex: "1", position: "relative" }}>
               

              <Select 
                value={selectedOptionOne}
                onChange={this.handleChange}
                options={options}
                className="select_style"
              />

                <div style={{ fontSize: "20px", marginTop: "30px", marginBottom: "30px", color: "white" }}>
                  +
                </div>

              <Select 
                value={selectedOptionTwo}
                onChange={this.handleChange}
                options={optionsOne}
                className="select_style"
              />

              </div>

              <div id="submitArea" style={{ marginTop: "50px", marginBottom: "50px", zIndex: "-100 !important" }}>

                <Button className="btn btn-primary mainButton">Generate UNI LP Tokens</Button>
               
              </div>

            </center>

          </div>

          <div className="footer-wrapper" style={{ paddingLeft: "20px", paddingRight: "20px", width: "100%" }}>

            <Row>
              <Col md="10">
                
                <div className="footer-section f-section-1 mb-5">
                  <p>Try out and read the smart contract on Etherscan: <Link href="#" id="contractLink" target="_blank" style={{ color: "white" }}>0x95DE267b94130B1AA6Dd664247433212B9a27286</Link></p><br />
                  <p className="">Copyright © 2021 PLEXUS, All rights reserved.</p>
                </div>

              </Col>

              <Col md="2">

                <div className="footer-section f-section-2">
                  <p style={{float:"right"}}>Coded with <FontAwesomeIcon className="heart_icon_style" icon={faHeart} /></p>
                </div>

              </Col>
            </Row>

          </div>

        </Row>

        <Modal
        show={this.state.show}
        onHide={this.setShow}
        
      >
        {/* style={{backgroundColor:"#0e1726"}} */}
       
        <Modal.Body style={{backgroundColor:"#0e1726"}}>
        <div className="swal2-icon swal2-warning swal2-animate-warning-icon" >
          <span className="swal2-icon-text">!</span>
        </div>

        <h2 class="swal2-title" id="swal2-title">Please connect your wallet for complete functionality</h2>

        
        <div className="swal2-content" style={{display: "block"}}>
          In order to use to use this LP token converter, you will need to be connected via MetaMask or 
          another Ethereum wallet provider.
        </div>

        <div class="swal2-actions" >
          <Button type="button" className="modal_btn_style"  style={{borderLeftColor: "rgb(27, 85, 226)", borderRightColor: "rgb(27, 85, 226)"}}>OK</Button>
        </div>
        
        </Modal.Body>
        {/* <Modal.Footer>
        <Button variant="secondary" onClick={this.setShow}>
            Close
          </Button>
          <Button variant="primary" onClick={this.setShow}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>

      </Container>
    );
  }
}


export default Index;
