import { useState, lazy, Suspense } from 'react'
import { Route,Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/scrolltop'
import AboutPage from './pages/About'

// Loading Fallback Component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
)

// Lazy load all page components
const Home = lazy(() => import('./pages/Home'))
const GallerySection = lazy(() => import('./pages/Gallery'))
const FAQmainSection = lazy(() => import('./pages/FAQ'))
const BlogSection = lazy(() => import('./pages/Blog'))
const ContactpageSection = lazy(() => import('./pages/Contact'))
const Foreword = lazy(() => import('./pages/Foreword'))
const EnrollmentForm = lazy(() => import('./pages/Applyformasterclass-form'))
const Insticollabsection = lazy(() => import('./pages/Instituition-collaboration'))
const PasswordLogin = lazy(() => import('./pages/password-form'))
const FacultySection = lazy(() => import('./pages/Facultysection'))
const AcademicCurriculumsection = lazy(() => import('./pages/Academic-curriculum'))
const TradePlatformSection = lazy(() => import('./pages/Trade-collab'))
const FinancialdetailForm = lazy(() => import('./pages/Financial-detailsform'))
const ZoomSection = lazy(() => import('./pages/Zoom-meeting'))
const Refundpolicysection = lazy(() => import('./pages/Refundpolicy'))
const PrivacyPolicySection = lazy(() => import('./pages/PrivacyPolicy'))
const ShippingDeliverysection = lazy(() => import('./pages/Shipping-Delivery'))
const TermsConditions = lazy(() => import('./pages/Termscondition'))
const MoreBlogsection = lazy(() => import('./pages/Blogmore'))
const RegistrationType = lazy(() => import('./pages/Registerpage'))
const CourseARegistration = lazy(() => import('./pages/CourseAregistration'))
const CourseBRegistration = lazy(() => import('./pages/CourseBregistration'))
const CourseABRegistration = lazy(() => import('./pages/CourseABregistration'))
const Invoice = lazy(() => import('./callpages/invoice'))
const BangGallerySection = lazy(() => import('./pages/Bangalore-Gallery'))
const DelhiGallerySection = lazy(() => import('./pages/Delhi-Gallery'))
const PaymentSuccess = lazy(() => import('./callpages/payment-success'))
const MasterclassUniversityProgram = lazy(() => import('./sub-pages/Masterclass-university-program-components/university'))
const MasterclassFaculty = lazy(() => import('./pages/Masterclass-faculty'))
const TradeForm = lazy(() => import('./pages/Trade-page'))  
const About = lazy(()=>import('./pages/About'))
const Subscriptionone = lazy(()=>import('./pages/Subscription-onemonth'))
const Subscriptionindividual = lazy(()=>import('./pages/subscription-individual'))
const Subscriptionthree = lazy(()=>import('./pages/Subscription-threemonth'))
const Subscriptionsix = lazy(()=>import('./pages/Subscription-sixmonth'))
const Subscriptiontwelve = lazy(()=>import('./pages/Subscription-twelvemonth'))
const Masterclassaward = lazy(()=> import('./pages/Masterclass-Awards'))
const Paymentsuccess = lazy(()=>import('./pages/Payment-sucess'))

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ScrollToTop/>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route
          path='/masterclass-university-program'
          element={<MasterclassUniversityProgram/>}
          />
          <Route path='/gallery' element={<GallerySection/>}/>
          <Route path='/faq' element={<FAQmainSection/>}/>
          <Route path='/blogs' element={<BlogSection/>}/>
          <Route path='/contact' element={<ContactpageSection/>}/>
          <Route path='/foreword' element={<Foreword/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='form' element={<EnrollmentForm/>}/>
          <Route path='/institution-in-collaboration-images' element={<Insticollabsection/>}/>
          <Route path='/password-form' element={<PasswordLogin/>}/>
          <Route path='/list-of-faculty-associated-with-masterclass-university-program-individual' element={<FacultySection/>}/>
          <Route path='/academic-curriculum-under-masterclass-university-program' element={<AcademicCurriculumsection/>}/>
          <Route path='/trade-collaboration' element={<TradePlatformSection/>}/>
          <Route path='/financial-details-form-faculty-of-masterclass-university-program' element={<FinancialdetailForm/>}/>
          <Route path='zoom-meeting' element={<ZoomSection/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicySection/>}/>
          <Route path='/refund-policy' element={<Refundpolicysection/>}/>
          <Route path='/shipping-delivery' element={<ShippingDeliverysection/>}/>
          <Route path='/terms-conditions' element={<TermsConditions/>}/>
          <Route path='/revolutionizing-orthodontics-the-synergy-of-3d-printed-appliances-and-temporary-anchorage-devices-tads' element={<MoreBlogsection/>}/>
          <Route path='/register' element={<RegistrationType/>}/>
          <Route path='/registercourseA' element={<CourseARegistration/>}/>
          <Route path='/registercourseB' element={<CourseBRegistration/>}/>
          <Route path='/registercourseAB' element={<CourseABRegistration/>}/>
          <Route path='/invoice/:id' element={<Invoice/>}/>
          <Route path='/masterclass-session-bangalore' element={<BangGallerySection/>}/>
          <Route path='/masterclass-session-delhi' element={<DelhiGallerySection/>}/>
          <Route path='/payment-success/:id' element={<PaymentSuccess/>}/>
          <Route path='/masterclass-faculty' element={<MasterclassFaculty/>}/>
          <Route path='/trade-registration' element={<TradeForm/>}/>
          <Route path='/subscription-individual' element={<Subscriptionindividual/>}/>
          <Route path='/subscription-onemonth' element={<Subscriptionone/>}/>
          <Route path='/subscription-threemonth' element={<Subscriptionthree/>}/>
          <Route path='/subscription-sixmonth' element={<Subscriptionsix/>}/>
          <Route path='/subscription-twelve' element={<Subscriptiontwelve/>}/>
          <Route path='/masterclass-awards' element={<Masterclassaward/>}/>
          <Route path='/payment-success' element={<Paymentsuccess/>}/>
        </Routes>
      </Suspense>
    </div>
    </>
  )
}

export default App
