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
                                <h1>Frequently Asked Questions</h1>
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
                                      <td>The only people that can associate your vote with your identity are the system administrators at HyperVote. Your UUID that is provided to you protects your identity, and allows you to view your vote on the HyperVote blockchain.HyperVote is committed to protecting users data, and will not share UUIDs with anyone, including the association that is administrating your vote. <br/> <br/> All voters can view all the votes that have been made. Therefore it is important that you do not share your UUID with anyone, as that would allow them to associate a vote with you.</td>
                                    </tr>

                                    <tr>
                                      <td>How are my votes stored?</td>
                                      <td> The votes you make on the HyperVote platform are stored on a permissioned Hyperledger Fabric blockchain. The blockchain stores the voters UUID, the vote decisions they made, and the timestamp for the vote. For further information on how the Hyperledger Fabric blockchain works, and the way it protects data please read the following link<a href="https://www.ibm.com/developerworks/cloud/library/cl-top-technical-advantages-of-hyperledger-fabric-for-blockchain-networks/index.html" target="blank">(here)</a>. <br/> <br/> </td>
                                    </tr>

                                    <tr>
                                      <td>How do I view my votes once I have voted?</td>
                                      <td>You will either be given access to view votes as they are made, or once the voting period has ended. To view votes click the “tick mark” button on the left side of the website. You should then be able to click on a past votes button, and you will be redirected to a webpage that shows all the votes that have been made. Your UUID will allow you to locate your vote, and confirm that the decisions you have made have been recorded correctly.</td>
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
