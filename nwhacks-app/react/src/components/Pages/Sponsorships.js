import React, { Component } from 'react';
import Backend from '../Layouts/Backend';


export default class Sponsorships extends Component {

    state = {
        numPages: null,
        pageNumber: 1,
      }

    submitForm (e) {
            e.preventDefault()
            this.props.history.push('/2d460cd4');
        }

    

    render() {

        return (
            <Backend>
                <div className="content-inner">


                
                   
              </div>
            </Backend>
        );
    }
}
