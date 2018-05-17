import React, { Component } from 'react';
import { Grid, Row, Col, PanelGroup, Panel, Button, Glyphicon, ListGroup, ListGroupItem, Jumbotron, Image, Tabs, Tab } from 'react-bootstrap';
import CommentPage from './CommentPage';
import './MainPage.css'

export default class MainPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <Grid fluid={true}>
                <Row>
                    <Col sm={2}>
                        <PanelGroup>
                            <Panel expanded={this.state.open}>
                                <Panel.Heading>
                                    <Button onClick={() => this.setState({ open: !this.state.open })}>
                                        CATEGORIES
                                        <Glyphicon glyph="menu-down" />
                                    </Button>
                                </Panel.Heading>
                                <Panel.Collapse>
                                    <ListGroup>
                                        <ListGroupItem href="/" to="/">Adventure</ListGroupItem>
                                    </ListGroup>
                                    <ListGroup>
                                        <ListGroupItem href="/" to="/">Food</ListGroupItem>
                                    </ListGroup>
                                    <ListGroup>
                                        <ListGroupItem href="/" to="/">Romance</ListGroupItem>
                                    </ListGroup>
                                    <ListGroup>
                                        <ListGroupItem href="/" to="/">Leisure</ListGroupItem>
                                    </ListGroup>
                                    <ListGroup>
                                        <ListGroupItem href="/" to="/">Gaming</ListGroupItem>
                                    </ListGroup>
                                </Panel.Collapse>
                            </Panel>
                        </PanelGroup>
                    </Col>
                    <Col sm={7}>
                        <Jumbotron>
                            <div>
                                <a><h4>Taoist Temple</h4></a>
                            </div>
                            <div className="CaptionContainer">
                                <p className="PostCaption">This is a sample caption.</p>
                            </div>
                            <div className="PostImage">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Taoist_Temple%2C_Cebu%2C_Philippines.jpg/1200px-Taoist_Temple%2C_Cebu%2C_Philippines.jpg" responsive/>
                            </div>
                            <div className="FeedTabs">
                                <Tabs defaultActiveKey={2}>
                                    <Tab eventKey={1} title="Description">
                                        <div className="DescriptionContainer">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non commodo lectus. Etiam commodo massa sed turpis molestie, vel rhoncus turpis condimentum. Nam in felis nisi. Morbi quis lacus arcu. Fusce arcu odio, tempor vitae mattis sit amet, volutpat eget ipsum. Morbi eget sem eleifend, tristique diam venenatis, mollis ex. In auctor lorem nunc, nec aliquam dolor feugiat ac. Nunc convallis ex quis velit finibus, et vestibulum mauris eleifend. Mauris id magna volutpat, fermentum massa id, posuere eros. Sed magna enim, efficitur ac vehicula varius, iaculis id libero. Quisque ut lectus aliquam, luctus lacus fermentum, mollis metus. Cras lacinia est sed augue fermentum molestie. Fusce nunc ligula, ornare a enim nec, bibendum fringilla arcu. Mauris at sodales sem. Integer aliquam, velit nec convallis finibus, urna tortor cursus diam, vel mollis massa libero vel massa.</p>
                                        </div>
                                    </Tab>
                                    <Tab eventKey={2} title="Comment">
                                        <CommentPage/>
                                    </Tab>
                                    <Tab eventKey={3} title="Rating">

                                    </Tab>
                                </Tabs>
                            </div>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        )
    }
}