import React, { Component } from "react";
import "./header.css";

import { Container, Row, Col, Navbar, Nav, Button, Image, } from "react-bootstrap";

import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

import Stake_Img from "../../assets/house.png";
import Deposit_Img from "../../assets/block.png";
import Borrow_Img from "../../assets/block.png";
import Portfolio_Img from "../../assets/layout.png";
import File_Img from "../../assets/file.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faHome, } from "@fortawesome/free-solid-svg-icons";
import { faBell, faFile, faHeart } from "@fortawesome/free-regular-svg-icons";

class Header extends Component {

  render() {

    return (
      <Container fluid >
        <Row>
          <Col md="6">
            <Image src={Logo} height="25" className="mt-2 mb-2 mt-4 mb-4" />
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
            <Navbar className="header_navbar_style">

              <Nav className="mr-auto">
                <Nav.Link className="header_navLink_style header_navLink_style_active" href="#home">
                  {/* <FontAwesomeIcon className="mr-3" icon={faHome} /> */}
                  <Image src={Stake_Img} className="header_stake_Img" />
                  Stake
                </Nav.Link>
                <span className="ml-3 vl">|</span>
                <Nav.Link className="header_navLink_style" href="#features">
                  <Image src={Deposit_Img} className="header_deposit_Img" />
                  Deposit
                </Nav.Link>
                <span className="ml-3 vl">|</span>
                <Nav.Link className="header_navLink_style" href="#pricing">
                  <Image src={Borrow_Img} className="header_borrow_Img" />
                  Borrow
                </Nav.Link>
                <span className="ml-3 vl">|</span>
                <Nav.Link className="header_navLink_style" href="#pricing">
                  <Image src={Portfolio_Img} className="header_portfolio_Img" />
                  Portfolio
                </Nav.Link>
                <span className="ml-3 vl">|</span>
                <Nav.Link className="header_navLink_style" href="#pricing">
                  <Image src={File_Img} className="header_file_Img" />
                  FAQ
                </Nav.Link>
                <span className="ml-3 vl">|</span>
              </Nav>

            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Header;
