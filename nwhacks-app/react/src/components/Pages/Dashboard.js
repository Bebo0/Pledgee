import React, { Component } from 'react';

import Stat, { StatsWrapper } from '../UI/Stat';
import Box from '../UI/Box';
import { Card, CardHeader, CardBody, CardFooter, CardActions } from "react-simple-card";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {  BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// eslint-disable-next-line
//import Card, { CardsWrapper } from '../UI/Card';

import Backend from '../Layouts/Backend';

// eslint-disable-next-line
import Chart from '../Helpers/ChartBars';
import PageHeader from '../Helpers/PageHeader';


export default class Dashboard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            student_id: "",
            sponsor_name: localStorage.getItem('Username')
        };
    }

    render() {
        return (
            <Backend>
                <div className="content-inner no-padding-top no-padding-left no-padding-right">
                    <PageHeader/>
                
                    

                </div>

                <div>
                        
                    <Card>
                        <CardHeader>
                            <h1>Tier 1</h1> 
                            </CardHeader>
                        <CardBody>
                            <h3>$55 per month</h3> 
                        </CardBody>
                        <CardFooter>
                            <Link to="/sponsorships">
                                <Button size="large">Sponsor Now!</Button>
                            </Link>
                            
                        </CardFooter>

                    </Card>

                </div>

                <div>
                        
                    <Card>
                        <CardHeader>
                            <h1>Tier 2</h1> 
                            </CardHeader>
                        <CardBody>
                            <h3>$35 per month</h3> 
                        </CardBody>
                        <CardFooter>
                            <Link to="/sponsorships">
                                <Button size="large">Sponsor Now! </Button>
                            </Link>
                            
                        </CardFooter>

                    </Card>

                </div>


                

                <div>
                        
                    <Card>
                        <CardHeader>
                            <h1>Tier 3</h1> 
                            </CardHeader>
                        <CardBody>
                            <h3>$15 per month</h3> 
                        </CardBody>
                        <CardFooter>
                            <Link to="/sponsorships">
                                <Button size="large">Sponsor Now! </Button>
                            </Link>
                            
                        </CardFooter>

                    </Card>

                </div>
            </Backend>
        );
    }
}
