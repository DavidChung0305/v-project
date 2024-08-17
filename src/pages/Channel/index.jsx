import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import ChannelInfo from "@/components/ChannelInfo"
import ChannelVideoCard from "@/components/ChannelVideoCard"
import { useEffect, useState } from "react"
import { SwiperSlide } from 'swiper/react'
import Swiper from "@/components/Swiper/manipulate.jsx"
import {Api} from "@/api/module/video.js"
import { useVideoStore } from "@/store/video.js"

const Channel = () => {
const { channels, setChannels} = useVideoStore()
const { subList, setSubList} = useVideoStore()
const navigate = useNavigate()

  const { id } = useParams()
  /* // 以下是YouTube channel data 取法

  const getChannel = async() => {
  const { data: channelData } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${id}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=contentDetails`)
  const playListId = channelData.items[0].contentDetails.relatedPlaylists.uploads
  const { data: playList } = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playListId}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=snippet,contentDetails,status&maxResults=6`)
  setCoverData(playList.items)
  console.log(playList.items[0].snippet)
  }
  */

  const getChannel = async() => {
    Api.getChannels().then(res =>{
      const channelDatas = res.data
      const channelData = channelDatas.find(item => item.channelId === id)
      setChannels(channelData)
    })
  }
  
  const subButton = ()=>{
    const subItem = document.getElementById(`${channels.channelId}`)
    subItem.classList.toggle('sub-checked')
    if(!subItem.classList.contains('sub-checked')){
      subItem.innerText = ' 未訂閱'
      subItem.classList.remove('fa-solid')
      subItem.classList.add("fa-regular")
      channels.channelSubStatus = false
      }else{
        subItem.innerText = ' 已訂閱'
        subItem.classList.remove('fa-regular')
        subItem.classList.add("fa-solid")
        channels.channelSubStatus = true
      }
      setSubStatus()
      setChannels(channels)
  }
  
//還是要做一個subList全局狀態來儲存 image,title,id,subStatus
  //id用來匹配頻道頁，subStatus傳遞去顯示畫面是否訂閱
  //再用subList渲染sideBar

  const setSubStatus = ()=>{
    //放訂閱狀態資料，再篩選出已訂閱的資料來渲染頻道按鈕和sidebar你的訂閱
    const foundItem = subList.find(item => item.id === channels.channelId);

    if (foundItem !== undefined) {
      foundItem.subStatus = !foundItem.subStatus;
    }
    else{
      subList.push({ id:channels.channelId, title:channels.channelTitle, image:channels.channelImage, subStatus:channels.channelSubStatus})
    }
    setSubList(subList)
  }
  


  useEffect(() => {
    if(channels == null){
      getChannel()
    }
    if(channels.channelId !== id){
      getChannel()
    }

  }, [channels])

  return (
  <div className="pl-3">
    <ChannelInfo id={channels?.channelId} onClick={()=>subButton()} title={channels?.channelTitle} image={channels?.channelImage} SVnumber={channels?.SVnumber} introduction={channels?.channelDescription} />
    <h4 className="mt-3 font-bold">為你推薦</h4>
    <div className="flex mt-4 border-b border-solid border-sidebarBorder pb-2">
    <Swiper >
        {channels?.videos?.map(data => (
        <SwiperSlide key={data.videoId} >
          <ChannelVideoCard title={data.title} image={data.thumbnails.maxres?.url} describe={data.description} onClick={() => navigate(`/video/${data.videoId}`)} />
        </SwiperSlide>
        ))}
      </Swiper>
    </div> 
  </div>
  )
}

export default Channel

