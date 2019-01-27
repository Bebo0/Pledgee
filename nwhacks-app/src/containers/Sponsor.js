import React, { Component } from "react";
import { render } from "react-dom";
import { Card, CardHeader, CardBody, CardFooter, CardActions } from "react-simple-card";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link, Route, Switch } from 'react-router-dom';
import Login from "./Login";



export default class Sponsor extends Component {
    render() {
      return (
        <div>
        <Card>
            <CardHeader>
                <h1>Tier 3</h1> 
                </CardHeader>
            <CardBody>
                <h3>$10/month</h3> 
            </CardBody>
            <CardFooter>
            
                <Button href={'/login'} size="large">Sponsor Now! </Button>
            </CardFooter>
        </Card>

        <Card>
        <CardHeader>
            <h1>Tier 2</h1> 
            </CardHeader>
        <CardBody>
            <h3>$20/month</h3> 
        </CardBody>
        <CardFooter>

            <Button href={'/login'} size="large">Sponsor Now! </Button>
        </CardFooter>
        </Card>

        <Card>
            <CardHeader>
                <h1>Tier 1</h1> 
                </CardHeader>
            <CardBody>
                <h3>$30/month</h3> 
            </CardBody>
            <CardFooter>
            
                <Button href={'/login'} size="large">Sponsor Now! </Button>
            </CardFooter>
        </Card>
        </div>
      );
    }
  }
