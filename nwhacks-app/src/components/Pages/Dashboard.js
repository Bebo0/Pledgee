import React, { Component } from 'react';

import Stat, { StatsWrapper } from '../UI/Stat';
import Box from '../UI/Box';

// eslint-disable-next-line
import Card, { CardsWrapper } from '../UI/Card';

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
            </Backend>
        );
    }
}
