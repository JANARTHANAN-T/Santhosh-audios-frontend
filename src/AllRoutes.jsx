import React from 'react'
import {Routes,  Route} from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import LandingPage from './pages/LandingPage/LandingPage'
import PageNotFound from './pages/PageNotFound/PageNotFound'
import AboutPage from './pages/AboutPage/AboutPage'
import ServicePage from './pages/ServicePage/ServicePage'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import Quotation from './pages/Quotation/Quotation'



function AllRoutes({data}) {
  return (
    <Routes>
        <Route path='/' element={<LandingPage data={data} />} />
        <Route path='/about' element={<AboutPage data={data.About} /> } />
        <Route path='/service' element={<ServicePage data={data.Services} />} />
        <Route path='/gallery' element={<GalleryPage />} />
        <Route path='/contact' element={<Contact data={data.Contact} />} />
        <Route path='/quotation' element={<Quotation />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>  
  )
}

export default AllRoutes