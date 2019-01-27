import React, { Component } from 'react';
// import logo from '..../public/img/logo.png'

export default class SidebarTitle extends Component {
    toggleBodyClass() {
        document.body.classList.toggle('sidebar-title-content-open');
    }

    

    render() {
        return (
            <h1 className="sidebar-title-wrapper">
                <div className="sidebar-title-inner" onClick={this.toggleBodyClass.bind(this)} style={{flex: 1}}>
                    
                </div>
            </h1>
        );
    }
}
