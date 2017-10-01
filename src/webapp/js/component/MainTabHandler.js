// @flow

import React from 'react'
import { Tab } from 'semantic-ui-react'
import PanelMessage from '../container/PanelMessage'
import DataListCard from '../container/dataListCard'

const panes = [
    { menuItem: 'Panel Messages', pane: { key: 'tab1',  content: <PanelMessage /> } },
    { menuItem: 'Cards List', pane: { active: true, key: 'tab2', active : true, content: <DataListCard /> } }
];

const MainTabs = () => (
    <div>
    <Tab renderActiveOnly={false} panes={panes} />
  </div>
);

export default MainTabs;