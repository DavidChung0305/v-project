import Header from "./Header"
import Sidebar from "./SideBar"
import { Outlet } from 'react-router-dom'


const Layout = ()=>{
  return(
    <div id='layout' className="bg-black text-white">
      <Header />
      <Sidebar />
      <div id='mask' className="bg-slate-500 opacity-50 w-full h-full fixed z-30 hidden"></div>
      <div className="ml-[20px] pt-[72px] min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout