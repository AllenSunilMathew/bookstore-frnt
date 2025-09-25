import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Users/pages/Home'
import Preloader from './Component/Preloader'
import Auth from './Pages/Auth'
import AllBooks from './Users/pages/AllBooks'
import Careers from './Users/pages/Careers'
import Contact from './Users/pages/Contact'
import Profile from './Users/pages/Profile'
import ViewBook from './Users/pages/ViewBook'
import AdminDashbord from './Admin/pages/AdminDashbord'
import CareerAdmin from './Admin/pages/CareerAdmin'
import ResourceAdmin from './Admin/pages/ResourceAdmin'
import SettingAdmin from './Admin/pages/SettingAdmin'
import Pnf from './Pages/Pnf'

function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])

  return (
    <>
      <Routes>
        <Route path={'/'} element={loading ? <Preloader /> : <Home />} />
        <Route path={'/login'} element={<Auth />} />
        <Route path={'/register'} element={<Auth register />} />
        <Route path={'/all-books'} element={<AllBooks />} />
        <Route path={'/careers'} element={<Careers />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/books/:id/view'} element={<ViewBook />} />

        <Route path={'/admin-dashbord'} element={<AdminDashbord />} />
        <Route path={'/admin-career'} element={<CareerAdmin />} />
        <Route path={'/admin-resource'} element={<ResourceAdmin />} />
        <Route path={'/admin-settings'} element={<SettingAdmin />} />


        <Route path={'/*'} element={<Pnf />} />
      </Routes>

    </>
  )
}

export default App
