import boy from "@/assets/images/boy.jpg"
import big from "@/assets/images/big.jpg"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useVideoStore } from "@/store/video.js"
import {Api} from "@/api/module/video.js"
import VideoChannelCard from "@/components/VideoChannelCard"
import CommentCard from "@/components/CommentCard"
import axios from "axios"


const Video = () => {
  const [coverData, setCoverData] = useState([])
  const [commentsData, setCommentsData] = useState([])
  const {likeVideos, setLikeVideos} = useVideoStore()
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

  const getVideo = ()=>{
    Api.getVideos().then(res =>{
      const videoData = res.data.find( item => item.videoId === id)
      setCoverData(videoData)
    })
  }

  const setLikeStatus = ()=>{
    const foundItem = likeVideos.find(item => item.id === coverData.videoId);

    if (foundItem !== undefined) {
      foundItem.likeStatus = !foundItem.likeStatus;
    }
    else{
      likeVideos.push({ id:coverData.videoId, title:coverData.title , image:coverData.thumbnails?.maxres , likeStatus: true })
    }
    setLikeVideos(likeVideos)
  }

  const likeButton = ()=>{
    const likeItem = document.getElementById(`${coverData?.videoId}`)
    likeItem.classList.toggle('like-checked')
    if(likeItem.classList.contains('like-checked')){
      likeItem.classList.remove('fa-solid')
      likeItem.classList.add("fa-regular")
      likeItem.likeStatus = false
      }else{
        likeItem.classList.remove('fa-regular')
        likeItem.classList.add("fa-solid")
        likeItem.likeStatus = true
      }
      setLikeStatus()
      setCoverData(coverData)
  }
 
  useEffect(()=>{
      getVideo()
      getComment()
  },[])

  return(
    <div className="ml-2">
      <div className="mt-2">
       <iframe className="rounded-xl" width="950" height="535" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <p className="text-[20px] w-[800px] pt-2">{coverData?.title}</p>
      </div>
      <div className=" flex w-[900px]">
        <VideoChannelCard key={coverData?.videoId} image={coverData?.channelImage} title={coverData?.channelTitle} sNumber={coverData?.sNumber} onClick={() => navigate(`/channel/${coverData?.channelId}`)} />
        <div className="flex ml-[170px] my-auto">
          <i id={coverData?.videoId} onClick={()=>likeButton()} className="like-checked fa-regular fa-thumbs-up cursor-pointer text-black text-[35px] border  rounded-full w-[120px] h-[45px] py-1 pl-4 bg-slate-200 hover:scale-110 duration-200 mx-2 "></i>
          <i className="fa-regular fa-thumbs-down cursor-pointer text-black text-[35px] border  rounded-full w-[120px] h-[45px] py-1 pl-4 bg-slate-200 hover:scale-110 duration-200 mx-2"></i>
          <i className="fa-solid fa-ellipsis cursor-pointer text-[30px] text-black border  rounded-full w-[45px] h-[45px] pl-2.5 pt-1.5 bg-slate-200 hover:scale-110 duration-200 ml-6" ></i>
        </div>
      </div>
      <div className="mt-[40px] flex">
        <img src={boy} className="rounded-full w-[70px] h-[70px]"/>
        <div className="ml-8 ">
          <p>惠勝</p>
          <input className="w-[450px] bg-black  text-[20px] text-slate-400  border-b border-solid border-sidebarBorder  " placeholder="請留言" type="text"></input>
        </div>
      </div>
      <div className="mt-[40px] flex w-[450px]">
        <img src={big} className="rounded-full w-[60px] h-[60px]"/>
        <div className="ml-8 w-full">
          <p>ㄢㄤ不分 還是要當碗路霜民！</p>
          <p className=" text-slate-400"> 這有很厲害嗎？我啊罵在公園跳的更好😗</p> 
          <div className="flex pt-2">
            <i className="fa-solid fa-thumbs-up pl-[100px]"></i>
            <i className="fa-solid fa-thumbs-down pl-[20px]"></i>
            <button className="text-[12px] pl-[20px]">回覆</button>
          </div>
        </div>
      </div>
      {commentsData.map( item => (
        <CommentCard id={item.authorChannelId} image={item.authorProfileImageUrl} name={item.authorDisplayName} text={item.textDisplay} />
      ))}
    </div>

  )
}

export default Video