import { Outlet } from "react-router-dom"
import Footer from "../components/Shared/Footer"
import Navbar from "../components/Shared/Navbar"


function MainLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout
