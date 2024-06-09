import React from 'react'
import Topbar from '../components/layout/Topbar'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Hero from '../components/home/Hero'
import Travel from '../components/home/Travel'
import ChangePlan from '../components/home/ChangePlan'
import HowWork from '../components/home/HowWork'
import Enjoy from '../components/home/Enjoy'
import Recommand from '../components/home/Recommand'
import PMethod from '../components/home/PMethod'
import Plastic from '../components/home/Plastic'
import FAQ from '../components/home/FAQ'
import Download from '../components/home/Download'

const Index = () => {
  return (
    <>
      <Topbar/>
      <Header/>
      <Hero/>
      <Travel/>
      <ChangePlan/>
      <HowWork/>
      <Enjoy/>
      <Recommand/>
      <PMethod/>
      <Plastic/>
      <FAQ/>
      <Download/>
      <Footer/>
    </>
  )
}

export default Index