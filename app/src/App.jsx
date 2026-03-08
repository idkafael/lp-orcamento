import {
  HeroSection,
  VideoSection,
  ParaQuemSection,
  ParaQuemQuerSection,
  AvisoSection,
  OfertaSection,
  SergioLimaSection,
  FAQSection,
  CTASection,
  Footer,
} from './components'
import { submitLead } from './services/leads'

function App() {
  async function handleLeadSubmit(data) {
    return submitLead(data)
  }

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <HeroSection onSubmit={handleLeadSubmit} />
      <VideoSection />
      <ParaQuemSection />
      <ParaQuemQuerSection />
      <AvisoSection />
      <OfertaSection onSubmit={handleLeadSubmit} />
      <SergioLimaSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}

export default App
