import React, { Component } from 'react';

// eslint-disable-next-line
import { Panel, PanelUser, PanelAction, PanelActionWrapper, PanelList, PanelListItem, PanelListTitle, PanelListWrapper } from '../UI/Panel';

export default class ExamplePanel extends Component {
    render() {
        return (
            <Panel>
                <PanelUser name="User Name" subtitle="Basic User" />

                <PanelListWrapper>

                    <PanelListTitle>Welcome to Pledgey!</PanelListTitle>

                    <PanelList>
                        <PanelListItem>.</PanelListItem>
                    </PanelList>

                    <PanelListTitle>Today's Tasks</PanelListTitle>

                   

                </PanelListWrapper>

                {/* <PanelActionWrapper>
                    <PanelAction title="Create" icon="bookmark_border" />
                    <PanelAction title="Phone" icon="phone" />
                    <PanelAction title="Status" icon="show_chart" />
                    <PanelAction title="Search" icon="search" />
                    <PanelAction title="Create" icon="group_add" />
                    <PanelAction title="Chat" icon="chat_bubble_outline" />
                </PanelActionWrapper> */}
            </Panel>
        );
    }
}
