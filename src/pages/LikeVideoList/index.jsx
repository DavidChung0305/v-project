import axios from "axios"
import beigow from "@/assets/images/beigow.jpeg"
import './style.css'
import LikeVideoCard from "@/components/LikeVideoCard"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useVideoStore } from "@/store/video.js"


const LikeVideoList= () =>{
  const navigate = useNavigate()
  const {likeVideos, setLikeVideos} = useVideoStore()
  const likeData = likeVideos.filter( item => item.likeStatus === true  )
  console.log(likeData)



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
        <div className="flex w-[800px] h-[90px] hover:bg-slate-500 rounded-lg">
          <img src={beigow} className="w-[140px] h-[85px] ml-2 my-auto rounded-lg" />
          <div className="w-[350px] h-full ml-3">
            <h1 className="mt-3 text-[19px] ">ft.Beigow『你各位有什麼想問的快問～』</h1>
            <p className="text-[13px]  mt-2 text-slate-400">talk街舞  ，  觀看次數：2次 ， 兩個月前</p>
          </div>
        </div>
        {likeData.map( item =>(
          <LikeVideoCard image={item.image.url} title={item.title} onClick={()=>navigate(`/video/${item.id}`)}/>
        ))}
      </div>
    </div>
  )
}

export default LikeVideoList