import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem, FormControl, FormGroup, Button, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Grid fluid={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Tamb-ai</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Navbar.Form pullLeft>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search for Places"/>
                            </FormGroup>{' '}
                            <Button type="submit">
                                <Glyphicon glyph="search" />
                            </Button>
                        </Navbar.Form>
                        <Nav pullRight>
                            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                                Page 1
                            </NavItem>
                            <NavItem eventKey={2} componentClass={Link} href="/" to="/">
                                Page 2
                            </NavItem>
                            <NavItem eventKey={3} componentClass={Link} href="/" to="/">
                                Page 3
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Grid>
            </Navbar>
        )
    }
}