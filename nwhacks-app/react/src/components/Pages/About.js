import React, { Component } from 'react';

import Backend from '../Layouts/Backend';

export default class About extends Component {
    render() {
        return (
            <Backend>
                <div className="content-inner">
                    <div className="invoice-wrapper">
                        <div className="invoice">
                                <h1>Who is HyperVote?</h1>
                                <p align="justify" >HyperVote was founded on the premise that current voting platforms are flawed. Whether voting as a shareholder, or for your local municipality, voting is susceptible to a lack of transparency, accuracy and security. In the worst cases these lead to over votes and fraud. Even functioning voting platforms make it impossible for a voter to be certain that their vote was correctly counted.</p>
                                <p>Using the Hyperledger Fabric blockchain, HyperVote aims to remove the pain points that currently exist in voting platforms. HyperVote is being developed to produce a voting platform that allows for greater transparency, by allowing users to track their votes; greater accuracy, as each vote is linked to a unique hash; and greater security as transactions in a blockchain are immutable and can be audited with ease.</p>
                                <p>HyperVote is based in Vancouver, BC, Canada</p>
                        </div>
                  </div>
              </div>
            </Backend>
        );
    }
}
