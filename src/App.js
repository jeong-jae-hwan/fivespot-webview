import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import ScrollBtnTop from './module/ScrollBtnTop'
import ScrollToTop from './module/ScrollToTop'
import SubmitPage from './submit/Submit-page'

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submit-page" element={<SubmitPage />} />
        </Routes>
      </BrowserRouter>
      <ScrollBtnTop />
    </>
  )
}

export default App
