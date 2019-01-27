import React, { Component } from 'react';

import Empty from '../Layouts/Empty';

// eslint-disable-next-line
import { Button }  from '../UI/Button';

export default class Login extends Component {


    constructor(props){

        super(props);
            this.state = {
              username: ""
            }
    }


    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

        localStorage.setItem('Username', this.state.username);

    }

    handleClick = () => {
        this.props.history.push('/Dashboard')
    }


    
    render() {
        return (
            <Empty>
                <h1>Welcome to Sponsor a kid</h1>

                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="username" className="form-control" value= {this.state.username} onChange={e => this.change(e)}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" name="password"  className="form-control"/>
                    </div>

                    <div className="form-group form-group-button">
                        <div className="form-group-button-description">
                            <a href="/forgot" >I forgot password</a>
                        </div>

                            <button type ='submit' className="button-primary button-right" onClick={this.handleClick}>
                            Login
                        </button>
                    </div>

                    <div className="form-group">
                        <div className="form-group-button-description">
                            <a href="/register">Not a member? Register here</a>
                        </div>
                    </div>     

                </form>           

                {/* <div className="form-description">
                    <Button to='#' classes="button-block button-google">Login using Google+</Button>
                    <Button to='#' classes="button-block button-facebook">Login using Facebook</Button>
                </div> */}
            </Empty>
        );
    }
}
