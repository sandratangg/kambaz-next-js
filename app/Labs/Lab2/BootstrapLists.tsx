"use client";

import React from "react";
import { ListGroup, FormGroup, FormLabel, FormControl, FormSelect, Form, InputGroup, Row, Col, Button } from "react-bootstrap";

export default function BootstrapLists() {
    return (
        <>
            <div id="wd-css-styling-lists">
                <h2>Favorite movies</h2>
                <ListGroup>
                    <ListGroup.Item active>Aliens</ListGroup.Item>
                    <ListGroup.Item>Terminator</ListGroup.Item>
                    <ListGroup.Item>Blade Runner</ListGroup.Item>
                    <ListGroup.Item>Lord of the Ring</ListGroup.Item>
                    <ListGroup.Item disabled>Star Wars</ListGroup.Item>
                </ListGroup>
            </div>

            <div id="wd-css-hyperlink-list">
                <h3>Favorite books</h3>
                <ListGroup>
                    <ListGroup.Item action active
                        href="https://en.wikipedia.org/wiki/Dune_(novel)">
                        Dune
                    </ListGroup.Item>
                    <ListGroup.Item action
                        href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings">
                        Lord of the Rings
                    </ListGroup.Item>
                    <ListGroup.Item action
                        href="https://en.wikipedia.org/wiki/The_Forever_War">
                        The Forever War
                    </ListGroup.Item>
                    <ListGroup.Item action
                        href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)">
                        2001 A Space Odyssey
                    </ListGroup.Item>
                    <ListGroup.Item action disabled
                        href="https://en.wikipedia.org/wiki/Ender%27s_Game">
                        Ender&apos;s Game
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => alert("New book added")}>
                        Add another book
                    </ListGroup.Item>
                </ListGroup>
            </div>

            <div id="wd-css-styling-forms">
                <h2>Forms</h2>
                <FormGroup className="mb-3" controlId="wd-email">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="name@example.com" />
                </FormGroup>
                <FormGroup className="mb-3" controlId="wd-textarea">
                    <FormLabel>Example textarea</FormLabel>
                    <FormControl as="textarea" rows={3} />
                </FormGroup>
            </div>

            <div id="wd-css-styling-dropdowns">
                <h3>Dropdowns</h3>
                <FormSelect defaultValue="">
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </FormSelect>
            </div>

            <div id="wd-css-styling-switches">
                <h3>Switches</h3>
                <Form.Check type="switch" id="wd-switch-1"
                    label="Unchecked switch checkbox input" />
                <Form.Check type="switch" defaultChecked id="wd-switch-2"
                    label="Checked switch checkbox input" />
                <Form.Check type="switch" disabled
                    id="wd-switch-3"
                    label="Unchecked disabled switch checkbox input" />
                <Form.Check type="switch" defaultChecked disabled
                    id="wd-switch-4"
                    label="Checked disabled switch checkbox input" />
            </div>

            <div id="wd-css-styling-range-and-sliders">
                <h3>Range</h3>
                <FormGroup controlId="wd-range1">
                    <FormLabel>Example range</FormLabel>
                    <Form.Range min="0" max="5" step="0.5" />
                </FormGroup>
            </div>



            <div id="wd-css-styling-addons">
                <h3>Addons</h3>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                    <FormControl />
                </InputGroup>
                <InputGroup>
                    <FormControl />
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                </InputGroup>
            </div>

            <div id="wd-css-responsive-forms-1">
                <h3>Responsive forms</h3>
                <Form.Group as={Row} className="mb-3" controlId="email1">
                    <Form.Label column sm={2}>
                        Email
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="email" placeholder="email@example.com" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="password1">
                    <Form.Label column sm={2}>
                        Password
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="textarea2">
                    <Form.Label column sm={2}>
                        Bio
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control as="textarea" style={{ height: "100px" }} placeholder="Enter your bio" />
                    </Col>
                </Form.Group>
            </div>

            <div id="wd-css-responsive-forms-2">
                <h3>Responsive forms</h3>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}> Email </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={2}> Password </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <fieldset>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label as="legend" column sm={2}>
                                Radios </Form.Label>
                            <Col sm={10}>
                                <Form.Check 
                                    type="radio" 
                                    label="first radio"
                                    defaultChecked 
                                    name="formHorizontalRadios" 
                                    id="radio1" />
                                <Form.Check 
                                    type="radio" 
                                    label="second radio"
                                    name="formHorizontalRadios" 
                                    id="radio2" />
                                <Form.Check 
                                    type="radio" 
                                    label="third radio"
                                    name="formHorizontalRadios" 
                                    id="radio3" />
                            </Col>
                        </Form.Group>
                    </fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Form.Check label="Remember me" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col>
                            <Button type="submit">Sign in</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>


        </>
    )
}
