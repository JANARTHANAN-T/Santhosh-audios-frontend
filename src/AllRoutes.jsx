import React from 'react'
import {Routes,  Route} from 'react-router-dom'
import Contact from './pages/Contact/Contact'
import Gallery from './pages/Gallery/Gallery'
import LandingPage from './pages/LandingPage/LandingPage'
import PageNotFound from './pages/PageNotFound/PageNotFound'



function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<LandingPage />} />
        <Route path='/service' element={<LandingPage />} />
        <Route path='/works' element={<LandingPage />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>  
  )
}

export default AllRoutes