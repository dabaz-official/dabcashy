import Head from 'next/head'
import Header from '../components/Header'
import Faq from '../components/home-page/Faq'
import Features from '../components/home-page/Features'
import GetStarted from '../components/home-page/GetStarted'
import Hero from '../components/home-page/Hero'
import Pricing from '../components/home-page/Pricing'

export default function Home() {
  return (
    <div>
      <Head>
        <title>DabCash</title>
        <link rel="icon" href="/logos/primary-logo.svg" />
      </Head>
      
      <Header />
      <main>
        <Hero />
        <Features />
        <GetStarted />
        <Pricing />
        <Faq />
      </main>
    </div>
  )
}