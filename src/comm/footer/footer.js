import React, { Component } from "react";
import "./footer.css";

import { Container, Row, Col, Navbar, Nav, Button, Image, } from "react-bootstrap";

import Logo from "../../assets/logofull.png";
import { Link } from "react-router-dom";

import Uniswap_Img from "../../assets/icons/uniswap.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync, faHome,  } from "@fortawesome/free-solid-svg-icons";
import { faBell, faFile, faHeart } from "@fortawesome/free-regular-svg-icons";

class Footer extends Component {

  render() {
 
    return (
      <Container fluid >
         <Row>
              <Col md="10">
                
                <div className="footer_section">
                 
                  <p className="">Copyright © 2020 PLEXUS, All rights reserved.</p>
                </div>

              </Col>

              <Col md="2">

                <div className="footer_section">
                  <p style={{float:"right"}}>Coded with <FontAwesomeIcon className="heart_icon_style" icon={faHeart} /></p>
                </div>

              </Col>
            </Row>
      </Container>
    );
  }
}


export default Footer;
