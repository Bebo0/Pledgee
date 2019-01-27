import React, { Component } from 'react';
import { connect } from 'react-redux';
// eslint-disable-next-line
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import Backend from '../Layouts/Backend';
import Loading from '../Helpers/Loading';
import Progress from '../UI/Progress';

// eslint-disable-next-line
import Filter from '../Helpers/Filter';

import { actionCreators } from '../../actions';

class Contacts extends Component {
    componentWillMount() {
        this.props.dispatch(actionCreators.fetchContacts());
    }

    render() {
        // eslint-disable-next-line
        let results = this.props.contacts.map((contact) => {
            return <Contact key={contact.id} contact={contact} />
        });

        return (
            this.props.isFetching ? <Backend><div className="content-inner"><Loading /></div></Backend> :
            <Backend>
                <div className="content-inner">

                    <h3>Note: Vote results will not be viewable until after: July XX</h3>

                    {/* <a href="http://35.183.34.167/index.html"> */}
                        <button className="button-new" >ACA 2018 Results</button>
                    {/* </a> */}
                    
                </div>
            </Backend>
        );
    }
}

Contacts.propTypes = {
    dispatch: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
    contacts: PropTypes.array.isRequired,
}

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            contact: props.contact
        }
    }

    render() {
        return (
            <tr>
                <td className="min-width">
                    {/* {this.state.contact.avatar ?
                        <div className="avatar" style={{backgroundImage: 'url(' + this.state.contact.avatar + ')'}}/> : ''} */}

                    <div className="title-wrapper">
                        <div className="title">{this.state.contact.name}</div>
                        <div className="subtitle">{this.state.contact.company}</div>
                    </div>
                </td>

                <td>
                    {this.state.contact.profile_size ?
                        <Progress size={this.state.contact.profile_size} description={this.state.contact.profile_description} /> : 'No data found'}
                </td>

                <td className="new-lines">{this.state.contact.address}</td>

                <td className="actions min-width">
                    <div className="button-dropdown">
                        <i className="md-icon">more_horiz</i>

                        <ul>
                            <li><a>Update</a></li>
                            <li><a>Remove</a></li>
                        </ul>
                    </div>
                </td>
            </tr>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

export default connect((store) => {
    return {
        contacts: store.contactState.data,
        pagination: store.contactState.pagination,
        isFetching: store.contactState.isFetching
    };
})(Contacts)
