import React, { Component } from 'react';

import Backend from '../Layouts/Backend';

export default class Invoice extends Component {
    render() {
        return (
            <Backend>
                <div className="content-inner">
                    <div className="invoice-wrapper">
                        <div className="invoice">
                            <div className="invoice-header">
                                <h1>Contact Us</h1>
                            </div>

                                <table>
                                  <thead>
                                    <tr>
                                      <th>Type</th>
                                      <th>Contact</th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    <tr>
                                      <td>Questions or Concerns?</td>
                                      <td>info@hypervote.io</td>
                                    </tr>

                                    <tr>
                                      <td>Twitter</td>
                                      <td>@hypervote</td>
                                    </tr>

                                    <tr>
                                      <td>Facebook</td>
                                      <td>facebook.com/hypervote</td>
                                    </tr>

                                  </tbody>
                                </table>

                        </div>
                  </div>
              </div>
            </Backend>
        );
    }
}
