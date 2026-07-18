import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import TabBar from './components/TabBar.jsx'
import Home from './screens/Home.jsx'
import VirtualCare from './screens/VirtualCare.jsx'
import InClinicCare from './screens/InClinicCare.jsx'
import WhoWeAre from './screens/WhoWeAre.jsx'
import More from './screens/More.jsx'
import PrivacyPolicy from './screens/PrivacyPolicy.jsx'
import TermsOfUse from './screens/TermsOfUse.jsx'

const SCREENS = {
  home: Home,
  virtual: VirtualCare,
  clinic: InClinicCare,
  about: WhoWeAre,
  more: More,
  privacy: PrivacyPolicy,
  terms: TermsOfUse,
}

function getInitialTab() {
  const hash = window.location.hash.replace('#', '')
  return SCREENS[hash] ? hash : 'home'
}

export default function App() {
  const [tab, setTab] = useState(getInitialTab)
  const Screen = SCREENS[tab]

  // Keep the URL hash in sync so shared links deep-link to the right screen,
  // and so back/forward + reload preserve the current tab.
  useEffect(() => {
    const newHash = `#${tab}`
    if (window.location.hash !== newHash) {
      window.history.replaceState(null, '', newHash)
    }
  }, [tab])

  // Support browser back/forward navigation between tabs
  useEffect(() => {
    const onHashChange = () => setTab(getInitialTab())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return (
    <>
      <Header />
      <main style={{ flex: 1, overflowY: 'auto', paddingBottom: '84px' }}>
        <Screen onNavigate={setTab} />
      </main>
      <TabBar active={tab} onChange={setTab} />
    </>
  )
}
