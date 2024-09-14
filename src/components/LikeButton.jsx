import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useVideoStore } from "@/store/video.js"

const LikeButton = ({ id }) =>{
  const {allVideos, setAllVideos} = useVideoStore()
  const isLike = allVideos.find( item => item.videoId === id)?.isLike
  const [LikeStatus,setLikeStatus] = useState(isLike)
  
  const handleLike = () => {
    setLikeStatus(!isLike)
    console.log(isLike)
    const newList = allVideos.map( item => {
      if( item.videoId === id){
        item.isLike = !item.isLike;
        return item
      }
      return item
    });
    setAllVideos(newList)
  }


  useEffect(()=>{
    setLikeStatus(isLike)
  },[isLike])

  /*"fa-regular fa-thumbs-up 
    cursor-pointer text-black text-[35px] border  rounded-full w-[120px] h-[45px] py-1 pl-4 bg-slate-200
     hover:scale-110 duration-200 mx-2 "*/

  return(
    <i id={id} onClick={ handleLike } className={ clsx("fa-regular fa-thumbs-up cursor-pointer text-black text-[35px] border  rounded-full w-[120px] h-[45px] py-1 pl-4 bg-slate-200 hover:scale-110 duration-200 mx-2", LikeStatus ? "fa-solid" : "fa-regular" )} ></i>
  )
}
export default LikeButton