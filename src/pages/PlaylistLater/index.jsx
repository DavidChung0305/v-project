import axios from "axios"
import beigow from "@/assets/images/beigow.jpeg"
import './style.css'
import LikeVideoCard from "@/components/LikeVideoCard"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useVideoStore } from "@/store/video.js"


const PlaylistLater= () =>{

  const navigate = useNavigate()
  const {allVideos, setAllVideos} = useVideoStore()
  const watchLaterData = allVideos.filter( item => item.watchLater === true  )
  console.log(watchLaterData )

  return(
    <div className="flex mt-4 ml-20 ">
      <div className='card'>
        <div className="mx-auto w-[280px]">
          <img src={beigow} className="w-full h-[160px] mt-5 rounded-lg"/>
          <h1 className="text-[30px] font-bold  mt-5">喜歡的影片</h1>
          <p className="font-bold  mt-3">惠勝</p>
          <p className="text-[13px]  mt-2 text-slate-500">722 部影片  ，  觀看次數：2次</p>
          <i className="fa-solid fa-play w-[120px] h-[30px] border border-solid rounded-full px-4 py-1.5 mt-5 cursor-pointer"> 全部播放</i>
        </div>
      </div>
      <div className="ml-4">
        <i className="fa-solid fa-arrows-up-down w-[400px] h-[60px] text-[30px] pl-3 pt-3 "></i>
        {watchLaterData.map( item =>(
          <LikeVideoCard image={item.thumbnails.maxres?.url} title={item.title} onClick={()=>navigate(`/video/${item.videoId}`)}/>
        ))}
      </div>
    </div>
  )
}

export default PlaylistLater