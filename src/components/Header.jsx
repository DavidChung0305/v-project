import logo from "@/assets/images/flat-icon-people-bboy-dance-set-isolated-on-white-background-free-vector.png"
import { useNavigate } from "react-router-dom"
import {Api} from "@/api/module/video.js"
import { useVideoStore } from "@/store/video.js"
import { useEffect, useState } from "react"


const Header = () => {
  const navigate = useNavigate()
  const { searchVideos, setSearchVideos} = useVideoStore()
  const { allVideos, setAllVideos } = useVideoStore()
  
  const getAllVideos = ()=>{
    Api.getVideos().then(res =>{
      setAllVideos(res.data)
    })
  }
  const searchInput = document.getElementById('search-input')

  const search = () =>{
    const keyword = searchInput?.value
    if (!keyword) {
      alert('請輸入有效的字串')
      return
    }
    const filterSearchVideos = allVideos.filter(item => item.title?.includes(keyword))
    setSearchVideos(filterSearchVideos)
    console.log(filterSearchVideos)

    navigate('/search')

  }

  const sideBarControll = () =>{
    document.getElementById("sideBar").classList.toggle('-translate-x-full')
    document.getElementById("mask").classList.toggle('hidden')
  }

  useEffect(() =>{
    if(allVideos.length == 0 ){
      getAllVideos ()
    }
  },[])
  
  return(
  <header className="fixed top-0 w-full z-40 h-[72px] bg-white text-black  text-xl header">
    <div className='px-5 py-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <i className="fa-solid fa-list text-3xl mr-3 cursor-pointer" onClick={()=>sideBarControll()}></i>
            <img src={logo} className="h-12 cursor-pointer" onClick={()=>navigate(`/`)} />
          </div>
          <div className='flex justify-center items-center'>
            <input id='search-input' className="border border-black border-solid focus:outline-none h-10 rounded mr-2 w-56 pl-3" />
            <button onClick={search} className='hover:bg-slate-300 rounded duration-200 h-10 w-10'>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <button className="login" onClick={()=>navigate(`/login`)}>
            <i className="fa-solid fa-circle-user text-3xl"></i>
          </button>
        </div>
    </div>
  </header>
  )
}

export default Header