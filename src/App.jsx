import { useState } from 'react'
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

export default function App() {
  const [tab, setTab] = useState('home')
  const Screen = SCREENS[tab]

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
