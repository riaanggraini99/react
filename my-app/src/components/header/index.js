
import React, { Component } from 'react';
import { Image, Row, Col, Navbar } from 'react-bootstrap'
// import {Navbar, NavItem, MenuItem, NavDropdown, Nav, Image} from 'react-bootstrap'
import './index.css'
import moka from '../../assests/moka.png'
import rightArrow from '../../assests/right_arrow.png'  
import geckoboard from '../../assests/geckoboard.png'
import styled from 'styled-components'

const AppWrapper = styled.div`;
  max-width: 100%;
  margin: 0;
  display: flex;
  min-height: 100%;
  padding: 0;
  flex-direction: column;
`;

class firstPage extends Component {
    render() {
        return (
            <AppWrapper>
            <div>
                <Row className="show-grid">
                    <Col xs={6} md={2}>
                        <Row className="logo">
                            <Image src={moka} responsive />
                        </Row>
                    </Col>
                    <Col xs={6} md={2}>
                        <Row className="right-arrow">
                            <Image src={rightArrow} responsive />
                        </Row>
                    </Col>
                    <Col xs={6} md={2}>
                        <Row className="gecko">
                            <Image src={geckoboard} responsive />
                        </Row>
                    </Col>
                </Row>
            </div>
            </AppWrapper>



        //     <Navbar className='header'>
        //     <Navbar.Header  >
        //       <Navbar.Brand className="navheader">
        //       <Image src={moka} responsive />
        //       </Navbar.Brand>
        //     </Navbar.Header>
        //     <Nav>
        //       <NavItem eventKey={1} href="#">Link</NavItem>
        //       <NavItem eventKey={2} href="#">Link</NavItem>
        //       <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        //         <MenuItem eventKey={3.1}>Action</MenuItem>
        //         <MenuItem eventKey={3.2}>Another action</MenuItem>
        //         <MenuItem eventKey={3.3}>Something else here</MenuItem>
        //         <MenuItem divider />
        //         <MenuItem eventKey={3.3}>Separated link</MenuItem>
        //       </NavDropdown>
        //     </Nav>
        //   </Navbar>

        );
    }
}

export default firstPage;