import StyleChannelCard from "@/components/StyleChannelCard"
import { useParams, useNavigate } from "react-router-dom"
import {Api} from "@/api/module/video.js"
import { useState,useEffect } from "react"


const Style = () => {
  const navigate = useNavigate() //跳轉頁面
  const [coverData, setCoverData] = useState([])
  const {id} = useParams()
  console.log(id)

  const getCoverData = ()=>{
    Api.getChannels().then( res =>{
      const data = res.data
      const sData = data.filter(item => item.danceStyle == id)
      setCoverData(sData)
    })}

    useEffect(()=>{
      getCoverData()
      console.log(coverData)
    },[])

  return(
    <div className="flex pl-5">
      {coverData?.map( item =>(
        <StyleChannelCard title={item.channelTitle} image={item.channelImage} 
        style={item.danceStyle} introduction={item.channelDescription} onClick={()=>navigate(`/channel/${item.channelId}`)} />
      ))}
    </div>
  )
}

export default Style