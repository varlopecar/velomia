import React from 'react'
import MainLayout from './layouts/MainLayout'
import SectionMain from './components/SectionMain'
import SectionOffers from './components/SectionOffers'
import SectionFeedback from './components/SectionFeedback'
import SectionPartners from './components/SectionPartners'
import SectionAbout from './components/SectionAbout'

function App() {
  return (
    <MainLayout>
      <SectionMain />
      <SectionOffers />
      <SectionAbout />
      <SectionFeedback />
      <SectionPartners />
    </MainLayout>
  )
}

export default App
