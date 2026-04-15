import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Navbar from '../components/Navbar'
import BannerSection from '../sub-pages/Homepage-components/banner'
import CountdownSection from '../sub-pages/Homepage-components/countdownsec'
import AboutWorkshopSection from '../sub-pages/Homepage-components/about-workshop'
import SpeakersSection from '../sub-pages/Homepage-components/speaker-section'
import BegBannerSection from '../sub-pages/Homepage-components/bengaluru-banner-img'
import MasterclassSection from '../sub-pages/Homepage-components/readmore-toggle'
import TestimonialsSection from '../sub-pages/Homepage-components/Testimonial'
import VideoGridSection from '../sub-pages/Homepage-components/videogrid-section'
import ContactSection from '../sub-pages/Homepage-components/contact-section'
import FAQSection from '../sub-pages/Homepage-components/faq-section'
import Footer from '../components/Footer'
import ImageCarouselSection from '../sub-pages/Homepage-components/Image-carousel'


const Home=()=>{
    return(
        <>
        <Helmet>
            <title>HOME - Masterclass in Orthodontics</title>
        </Helmet>
            <div>
                <Navbar/>
                <BannerSection/>
                <CountdownSection/>
                <AboutWorkshopSection/>
                <SpeakersSection/>
                <BegBannerSection/>
                <MasterclassSection/>
                <TestimonialsSection/>
                <ImageCarouselSection/>
                <VideoGridSection/>
                <ContactSection/>
                <FAQSection/>
                <Footer/>
            </div>
            
        </>
    )
}

export default Home;