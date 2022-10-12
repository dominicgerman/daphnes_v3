import React, { useState } from 'react'
import AboutTab from './AboutTab'
import SpecsTab from './SpecsTab'
import SimilarToTab from './SimilarToTab'
import {
  OutletContainer,
  TabsContainer,
} from '../styles/StyledContainers.styled'
import { TabButton } from '../styles/StyledButtons.styled'

const RecipeTabs = ({ recipe, recipes }) => {
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <>
      <TabsContainer>
        <TabButton
          onClick={() => setActiveTab('tab1')}
          className={activeTab === 'tab1' ? 'active' : ''}
        >
          About
        </TabButton>
        <TabButton
          onClick={() => setActiveTab('tab2')}
          className={activeTab === 'tab2' ? 'active' : ''}
        >
          Recipe
        </TabButton>
        <TabButton
          onClick={() => setActiveTab('tab3')}
          className={activeTab === 'tab3' ? 'active' : ''}
        >
          Similar to
        </TabButton>
      </TabsContainer>
      <OutletContainer>
        {activeTab === 'tab1' ? (
          <AboutTab recipes={recipes} recipe={recipe} />
        ) : null}
        {activeTab === 'tab2' ? (
          <SpecsTab recipes={recipes} recipe={recipe} />
        ) : null}
        {activeTab === 'tab3' ? (
          <SimilarToTab recipes={recipes} recipe={recipe} />
        ) : null}
      </OutletContainer>
    </>
  )
}
export default RecipeTabs
