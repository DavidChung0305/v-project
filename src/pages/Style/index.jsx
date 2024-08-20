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
      <div className=" flex bg-slate-800 hover:bg-slate-700 hover:scale-110 duration-300 w-[400px] h-[240px] rounded-xl mx-5 mt-5">
        <img className="h-[230px] w-[186px] my-auto mx-1.5  rounded-lg" src='https://scontent.ftpe2-1.fna.fbcdn.net/v/t39.30808-6/407686796_267440842978032_7109015090120144939_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_7ztxAx3eFUQ7kNvgEDKp8f&_nc_ht=scontent.ftpe2-1.fna&cb_e2o_trans=t&oh=00_AYA64seiRoyJ55SyWBAjvUoowAb5DNTxocdwfwYMPtiTQA&oe=66C8B243'/>
        <div className=" w-[190px] h-[220px] pl-1 my-auto ">
          <h1 className=" mt-2 ">馬努嘎膩</h1>
          <h1 className=" mt-4 " >舞風:</h1>
          <div className=" px-1 py-1 mt-4 bg-slate-900 w-[180px] h-[125px] rounded-md overflow-hidden">
            <p className=" text-slate-500 ">介紹:怎樣？ 到底？ 你說呢？ RRRRR! 好了沒？ yi～～博～～～～ 你開心就好。 緊架啊怕呦...</p>
          </div>
        </div>
      </div>
      {coverData?.map( item =>(
        <StyleChannelCard title={item.channelTitle} image={item.channelImage} 
        style={item.danceStyle} introduction={item.channelDescription} onClick={()=>navigate(`/channel/${item.channelId}`)} />
      ))}
    </div>
  )
}

export default Style