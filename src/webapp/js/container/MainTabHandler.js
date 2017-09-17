// @flow

import React from 'react'
import { Tab } from 'semantic-ui-react'
import PanelMessage from '../component/PanelMessage'

const panes = [
    { menuItem: 'Tab Number 1', pane: { key: 'tab1', active : true, content: <PanelMessage /> } },
    { menuItem: 'Tab Number 2', pane: { key: 'tab2', active : true, content: 'Example tb 2 Content....'} }
];

const MainTabs = () => (
    <Tab renderActiveOnly={false} panes={panes} />
);

export default MainTabs;