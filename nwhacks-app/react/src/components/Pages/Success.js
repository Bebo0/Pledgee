import React, { Component } from 'react';

import Backend from '../Layouts/Backend';

export default class Invoice extends Component {
    render() {
        return (
            <Backend>
                <div className="content-inner">
                    <div className="invoice-wrapper">
                        <div className="invoice">
                                <h1>Success!</h1>
                                <p>Thank you for Voting! Your ballot has been successfully recorded to the Blockchain. Please head over to the Past Vote Explorer to track ballots. Results will be visible on closing of voting period!</p>
                                <a href="/past"><button className="submitButton">To Past Vote Explorer</button></a>
                        </div>
                  </div>
              </div>
            </Backend>
        );
    }
}
