import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Backend from '../Layouts/Backend';
import { connect } from 'react-redux';
import Loading from '../Helpers/Loading';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class Decision extends Component {

    constructor(props) {
        super(props);
        this.state = {
          decision1: null,
          decision2: null,
          decision3: null,
          availableVoteId: null,
          controlNumber: null,
          sqlDataVerified: null,
          hyperLedgerVerification: null,
          voterConcent: null,
        };
    }

  // ------------------------------------------------------
  // Helper functions to set state of vote decision
  // ------------------------------------------------------

    // Set states for Decision 1
    handleChange1_new = (value) => {
      
        if(value === "yes"){
        this.setState({decision1: "YES"});

      } else if (value === "no") {
         this.setState({decision1: "NO"});

      } else if (value === "abstain") {
        this.setState({decision1: "ABSTAIN"});
      }

    };

    // Set states for Decision 2
    handleChange2_new = (value) => {

      if(value === "yes"){
        this.setState({decision2: "YES"});

      } else if (value === "no"){
          this.setState({decision2: "NO"});

      } else if (value === "abstain"){
        this.setState({decision2: "ABSTAIN"});
      }

    };

  // ------------------------------------------------------
  // WINDOW ALERT FUNCTIONS ON CLICK
  // ------------------------------------------------------

    // Window alert when SUBMIT button is clicked
    onSubmitClicked = () => {
        if (window.confirm('Are you sure you want to submit your vote?')){
            this.loadData();
        }
    };

    // Window alert when DECLINE button is clicked
    onDeclineClicked = ()=> {
        if (window.confirm('Are you sure you want to decline your vote?')){
            this.loadDataOnDecline();
        }
    };

  // ------------------------------------------------------
  // API CALLS
  // ------------------------------------------------------    

    // LoadData helper submits XHTTP request to put new information into vote instance with voteId as newId
    loadData = () => {
        const that = this
        fetch('https://hypervote.io/mysql', {
            method: 'post',
            body: JSON.stringify({"ctrlNumber": document.getElementById("controlNumber").value})
        })
        .then(function(isAuthentic){
            if (isAuthentic.status === 200){
                console.log(isAuthentic)
                console.log('Control Number is Valid')
                fetch("https://hypervote.io/api/queries/availableVote?identifier="+document.getElementById("controlNumber").value )
                .then(response => response.json())
                .then(function(response){
                    if (response.length > 0) {
                        that.props.history.push('/error', that.state)
                        console.log("This Control Number has already been Used. Please check the Past Votes page to see your Vote.")
                    }
                    else { 
                        console.log('Control Number is Voting for the first time')
                        fetch("https://hypervote.io/api/queries/availableVote?identifier=string")
                        .then(response => response.json())
                        .then(data => {
                            console.log(data.length)
                            var randVal_2 = Math.floor(Math.random() * data.length)
                            console.log(randVal_2)
                            console.log(data)
                            console.log(data[0])
                            console.log("here: "+data[0].VoteId);
                            console.log(that.state.decision1)
                            console.log(that.state.decision2)
                            console.log(document.getElementById("controlNumber").value)
                            
                            fetch('https://hypervote.io/api/Vote/'+data[randVal_2].VoteId, {
                                method: 'put',
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify(
                                    {
                                      "$class": "org.acme.sample.Vote",
                                      "VoteId": data[randVal_2].VoteId,
                                      "description": "ACA Vote",
                                      "company": "ACA",
                                      "Votedecision": that.state.decision1,
                                      "Votedecision_2": that.state.decision2,
                                      "Votedecision_3": "APPROVED",
                                      "Votedecision_4": "string",
                                      "Votedecision_5": "string",
                                      "identifier": document.getElementById("controlNumber").value,
                                      "Voteclaimed": "True",
                                      "Voterconsent": "True",
                                      "owner":"hypervote2018",
                                      "issuer":"hypervote2018"
                                    }),
                                mode: 'cors',
                                cache: 'default'
                            }).then(function(isBlank){
                                console.log(isBlank)
                                if(isBlank.status === 200){
                                    that.props.history.push('/success', that.state)
                                }
                                else {
                                    that.props.history.push('/error', that.state)
                                }
                            }
                        )
                        })

                        }
                    })
                }
                    else {
                        console.log('CONTROL NUMBER IS NOT VALID')
                        that.props.history.push('/error', that.state)
                    }
                    return;
                })
        }

        // Called onclick of the Decline vote button
        loadDataOnDecline = () => {
            const that = this
            //that.mysqlAuth()
            fetch('https://hypervote.io/mysql', {
                method: 'post',
                body: JSON.stringify({"ctrlNumber": document.getElementById("controlNumber").value})
            })
            //.catch(err => console.error(err.toString()).then(that.props.history.push('/error', that.state)))
            .then(function(isAuthentic){
                if (isAuthentic.status === 200){
                    console.log(isAuthentic)
                    console.log('Control Number is Valid')
                    fetch("https://hypervote.io/api/queries/availableVote?identifier="+document.getElementById("controlNumber").value )
                    .then(response => response.json())
                    .then(function(response){
                    // console.log(response.length)
                        if (response.length > 0) {
                            that.props.history.push('/error', that.state)
                            console.log("This Control Number has already been Used. Please check the Past Votes page to see your Vote.")
                        }
                        else {
                            console.log('Control Number is Voting for the first time')
                            fetch("https://hypervote.io/api/queries/availableVote?identifier=string")
                            .then(response => response.json())
                            .then(data => {
                                console.log(data.length)
                               //var dataLength = data.length;
                                var randVal = Math.floor(Math.random() * data.length)
                                console.log(randVal)
                                //var x = rand(0,data.length)
                                //console.log(data)
                                //console.log(data[0])
                                that.setState({decision1: "DECLINED"});
                                that.setState({decision2: "DECLINED"});
                                that.setState({decision3: "DECLINED"});
                                console.log("here: "+data[0].VoteId);
                                console.log(that.state.decision1);
                                console.log(that.state.decision2);
                                console.log(document.getElementById("controlNumber").value)
                                fetch('https://hypervote.io/api/Vote/'+data[randVal].VoteId, {
                                    method: 'put',
                                    headers: {"Content-Type": "application/json"},
                                    body: JSON.stringify(
                                        {
                                        "$class": "org.acme.sample.Vote",
                                        "VoteId": data[randVal].VoteId,
                                        "description": "ACA Vote",
                                        "company": "ACA",
                                        "Votedecision": that.state.decision1,
                                        "Votedecision_2": that.state.decision2,
                                        "Votedecision_3": that.state.decision3,
                                        "Votedecision_4": "string",
                                        "Votedecision_5": "string",
                                        "identifier": document.getElementById("controlNumber").value,
                                        "Voteclaimed": "True",
                                        "Voterconsent": "True",
                                        "owner":"hypervote2018",
                                        "issuer":"hypervote2018"
                                        }),
                                    mode: 'cors',
                                    cache: 'default'
                                }).then(function(isBlank){
                                    console.log(isBlank)
                                    if(isBlank.status === 200){
                                        that.props.history.push('/success', that.state)
                                    }
                                    else {
                                      that.setState({decision1: null});
                                      that.setState({decision2: null});
                                      that.setState({decision3: null});
                                      console.log(that.state.decision3);
                                      that.props.history.push('/error', that.state)
                                    }
                                }
                            )
                            })

                            }
                        })
                    }
                        else {
                            console.log('CONTROL NUMBER IS NOT VALID')
                            that.props.history.push('/error', that.state)
                        }
                        return;
                    })
            }


    render() {

        var displayNone ={display: 'none'}

        return (
            this.props.isFetching ? <Backend><div className="content-inner"><Loading /></div></Backend> :
              <Backend>

                    <div className="content-inner-decision1">

                        <div className="voteOptions">

                            <h3 className="voteTitle"> Do you approve the ACA strategic 2019 plan?</h3>
                            <div className="projects" style={{margin: 30}}>

                                <RadioGroup onChange={ this.handleChange1_new } horizontal>
                                    <RadioButton value= "yes" pointColor="#7EC453">
                                        YES
                                    </RadioButton>
                                    <RadioButton value= "no" pointColor="#7EC453" >
                                        NO
                                    </RadioButton>
                                    <RadioButton value= "abstain" pointColor="#7EC453" >
                                        ABSTAIN
                                    </RadioButton>
                                </RadioGroup>

                            </div>

                            <h3 className="voteTitle"> Do you approve the ACA annual audited statements? </h3>
                            <div className="projects" style={{margin: 30}}>

                            <RadioGroup onChange={this.handleChange2_new } horizontal>
                                <RadioButton value="yes" pointColor="#7EC453">
                                    YES
                                </RadioButton>
                                <RadioButton value="no" pointColor="#7EC453">
                                    NO
                                </RadioButton>
                                <RadioButton value="abstain" pointColor="#7EC453">
                                    ABSTAIN
                                </RadioButton>
                            </RadioGroup>

                            </div>

                        </div>


                        <div className="controlNumber">
                            <div className="row">
                                <div className="col">
                                    <h3>Form controls</h3>

                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="controlNumber">Control Number</label>
                                            <input type="text" className="form-control" id="controlNumber" aria-describedby="controlNumber" placeholder="Enter control number" required/>
                                                <small id="emailHelp" className="form-text text-muted">please input the control number that was sent to you by email</small>
                                        </div>

                                        <div className="form-check">
                                            <label className="form-check-label" style={displayNone}>
                                                <input type="checkbox" className="form-check-input" required/>
                                                I consent to submitting my vote online
                                            </label>
                                        </div>

                                        <h4>Note: You can only vote once</h4>

                                        <div className="form-check">
                                          <label className="form-check-label" style={displayNone}>
                                              <input type="checkbox" className="form-check-input" required/>
                                              I consent to submitting my vote online
                                          </label>
                                        </div>

                                        <button type="submit" className="submitVoteButton" onClick={this.onSubmitClicked}>SUBMIT VOTE</button>

                                        <button type="submit" className="declineButton" onClick={this.onDeclineClicked}>DECLINE VOTE</button>

                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>

            </Backend>
        );
    }
}

Decision.propTypes = {
    dispatch: PropTypes.func,
    isFetching: PropTypes.bool.isRequired,
    projects: PropTypes.array.isRequired
};

export default connect((store) => {
    return {
        projects: store.projectState.data,
        pagination: store.projectState.pagination,
        isFetching: store.projectState.isFetching
    };
})(Decision)