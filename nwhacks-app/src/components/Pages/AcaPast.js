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
                                <h1>Vote Results</h1>
                            </div>

                                <table>
                                  <thead>
                                    <tr>
                                      <th>Question</th>
                                      <th>Answer</th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    <tr>
                                      <td>Can anyone see what I vote for?</td>
                                      <td>No, your votes are anonymous through our UUID system, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet tristique nunc, sit amet facilisis dolor. Suspendisse euismod augue quam, ac feugiat nisl venenatis in. Suspendisse quam orci, finibus a interdum sed, dictum in eros. Duis commodo justo sit amet convallis efficitur. Ut maximus quam diam, eu congue diam consectetur sit amet. Sed rhoncus libero sed erat malesuada rutrum. Aliquam erat volutpat. Vivamus maximus odio molestie sapien venenatis, id pretium ex porta.</td>
                                    </tr>

                                    <tr>
                                      <td>How are my votes stored?</td>
                                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet tristique nunc, sit amet facilisis dolor. Suspendisse euismod augue quam, ac feugiat nisl venenatis in. Suspendisse quam orci, finibus a interdum sed, dictum in eros. Duis commodo justo sit amet convallis efficitur. Ut maximus quam diam, eu congue diam consectetur sit amet. Sed rhoncus libero sed erat malesuada rutrum. Aliquam erat volutpat. Vivamus maximus odio molestie sapien venenatis, id pretium ex porta.</td>
                                    </tr>

                                    <tr>
                                      <td>What happens if I lose my password?</td>
                                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet tristique nunc, sit amet facilisis dolor. Suspendisse euismod augue quam, ac feugiat nisl venenatis in. Suspendisse quam orci, finibus a interdum sed, dictum in eros. Duis commodo justo sit amet convallis efficitur. Ut maximus quam diam, eu congue diam consectetur sit amet. Sed rhoncus libero sed erat malesuada rutrum. Aliquam erat volutpat. Vivamus maximus odio molestie sapien venenatis, id pretium ex porta.</td>
                                    </tr>

                                    <tr>
                                      <td>hello</td>
                                      <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet tristique nunc, sit amet facilisis dolor. Suspendisse euismod augue quam, ac feugiat nisl venenatis in. Suspendisse quam orci, finibus a interdum sed, dictum in eros. Duis commodo justo sit amet convallis efficitur. Ut maximus quam diam, eu congue diam consectetur sit amet. Sed rhoncus libero sed erat malesuada rutrum. Aliquam erat volutpat. Vivamus maximus odio molestie sapien venenatis, id pretium ex porta.</td>
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
