
import React, { Component } from 'react';
import { Image, Row, Col } from 'react-bootstrap'
import './index.css'
import moka from '../../assests/moka.png'
import rightArrow from '../../assests/right_arrow.png'
import geckoboard from '../../assests/geckoboard.png'


class firstPage extends Component {
    render() {
        return (

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

        );
    }
}

export default firstPage;