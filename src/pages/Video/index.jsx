import boy from "@/assets/images/boy.jpg"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useVideoStore } from "@/store/video.js"
import {Api} from "@/api/module/video.js"
import VideoChannelCard from "@/components/VideoChannelCard"
import CommentCard from "@/components/CommentCard"
import VideoSideCard from "@/components/VideoSideCard"
import LikeButton from "@/components/LikeButton"
import axios from "axios"


const Video = () => {
  const [coverData, setCoverData] = useState([])
  const [commentsData, setCommentsData] = useState([])
  const {allVideos, setAllVideos} = useVideoStore()
  const [sideVideo, setSideVideo] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  const getComment = async() =>{
    const res =  await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${id}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc`);
    const arr = res.data.items
    const data = []
    for(const item of arr){
      data.push({...item.snippet.topLevelComment.snippet})
    }
    setCommentsData(data)
  }

  const getVideo = () =>{
    Api.getVideos().then(res =>{
      const videoData = res.data.find( item => item.videoId === id)
      setCoverData(videoData)
    })
  }

  const getSideVideo = () =>{
    const sideVideo = allVideos.filter(item => item.channelId == coverData?.channelId )
    console.log(sideVideo)
    setSideVideo(sideVideo)
  }
  
  console.log(coverData.channelId)

  useEffect(()=>{
      getVideo()
      getComment()
      getSideVideo()
  },[])

  return(
  <div className=" flex" >
    <div className="ml-2 w-[970px]">
      <div className="mt-2">
       <iframe className="rounded-xl" width="950" height="535" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <p className="text-[20px] w-[800px] pt-2">{coverData?.title}</p>
      </div>
      <div className=" flex w-[900px]">
        <VideoChannelCard id={coverData?.channelId} image={coverData?.channelImage} title={coverData?.channelTitle} sNumber={coverData?.sNumber} onClick={() => navigate(`/channel/${coverData?.channelId}`)} />
        <div className="flex ml-[170px] my-auto">
          <LikeButton id={coverData?.videoId} />
          <i className="fa-regular fa-thumbs-down cursor-pointer text-black text-[35px] border  rounded-full w-[120px] h-[45px] py-1 pl-4 bg-slate-200 hover:scale-110 duration-200 mx-2"></i>
          <i className="fa-solid fa-ellipsis cursor-pointer text-[30px] text-black border  rounded-full w-[45px] h-[45px] pl-2.5 pt-1.5 bg-slate-200 hover:scale-110 duration-200 ml-6" ></i>
        </div>
      </div>
      <div className="mt-[40px] flex">
        <img src={boy} className="rounded-full w-[70px] h-[70px]"/>
        <div className="ml-8 ">
          <p>惠勝</p>
          <input className="mt-2 w-[450px] bg-black  text-[15px] text-slate-400  border-b border-solid border-sidebarBorder  " placeholder="請輸入文字" type="text"></input>
          <button className="text-[15px] ml-3 px-2 py-1 hover:bg-slate-400 duration-200 bg-slate-600 rounded-xl " >留言</button>
        </div>
      </div>
      {commentsData.map( item => (
        <CommentCard id={item.authorChannelId} image={item.authorProfileImageUrl} name={item.authorDisplayName} text={item.textDisplay} />
      ))}
    </div>
    <div className=" ml-3 w-[380px] h-[1000px] ">
      {sideVideo.map( item =>(
        <VideoSideCard title={item.title} image={item.thumbnails?.maxres?.url} channelTitle={item.channelTitle}
        channelImage={item.channelImage} onClick={() => navigate(`/video/${item.videoId}`)} />
      ))}
    </div>
  </div>
  )
}

export default Video