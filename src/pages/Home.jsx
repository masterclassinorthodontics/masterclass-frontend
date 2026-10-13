import { useState, useEffect, lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet'
import '../App.css'

// 1. Keep above-the-fold components imported normally for instant load
import Navbar from '../components/Navbar'
import BannerSection from '../sub-pages/Homepage-components/banner'
import CountdownSection from '../sub-pages/Homepage-components/countdownsec'
import AboutWorkshopSection from '../sub-pages/Homepage-components/about-workshop'

// 2. Lazy load below-the-fold components to split the JS bundle
// const AboutWorkshopSection = lazy(() => import('../sub-pages/Homepage-components/about-workshop'))
const SpeakersSection = lazy(() => import('../sub-pages/Homepage-components/speaker-section'))
const BegBannerSection = lazy(() => import('../sub-pages/Homepage-components/bengaluru-banner-img'))
const MasterclassSection = lazy(() => import('../sub-pages/Homepage-components/readmore-toggle'))
const TestimonialsSection = lazy(() => import('../sub-pages/Homepage-components/Testimonial'))
const ImageCarouselSection = lazy(() => import('../sub-pages/Homepage-components/Image-carousel'))
const VideoGridSection = lazy(() => import('../sub-pages/Homepage-components/videogrid-section'))
const ContactSection = lazy(() => import('../sub-pages/Homepage-components/contact-section'))
const FAQSection = lazy(() => import('../sub-pages/Homepage-components/faq-section'))
const Footer = lazy(() => import('../components/Footer'))

const Home = () => {
    const [loadRest, setLoadRest] = useState(false)

    useEffect(() => {
        // Defer loading the remaining sections by 1.2 seconds 
        // to let the initial page render completely smoothly first
        const timer = setTimeout(() => {
            setLoadRest(true)
        }, 1200)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <Helmet>
                <title>HOME - Masterclass in Orthodontics</title>
                <meta name="description" content="Masterclass in Orthodontics - Learn from top experts and enhance your skills." />

                {/* Open Graph */}
                <meta property="og:title" content="Masterclass in Orthodontics" />
                <meta property="og:description" content="Join the leading orthodontics masterclass with expert speakers and workshops." />
                <meta property="og:image" content="https://masterclassinorthodontics.com/preview.jpg" />
                <meta property="og:url" content="https://masterclassinorthodontics.com/" />
                <meta property="og:type" content="website" />

                {/* WhatsApp / Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Masterclass in Orthodontics" />
                <meta name="twitter:description" content="Join expert orthodontics training sessions." />
                <meta name="twitter:image" content="https://masterclassinorthodontics.com/logo.png" />
            </Helmet>

            <div>
                {/* Immediate Above-the-Fold Content */}
                <Navbar />
                <BannerSection />
                <CountdownSection />
                <AboutWorkshopSection/>

                {/* Progressive / Lazy Loaded Below-the-Fold Content */}
                {loadRest && (
                    <Suspense fallback={<div style={{ textAlign: 'center', padding: '2rem' }}>Loading more content...</div>}>
                        {/* <AboutWorkshopSection /> */}
                        <SpeakersSection />
                        <BegBannerSection />
                        <MasterclassSection />
                        <TestimonialsSection />
                        <ImageCarouselSection />
                        <VideoGridSection />
                        <ContactSection />
                        <FAQSection />
                        <Footer />
                    </Suspense>
                )}
            </div>
        </>
    )
}

export default Home;