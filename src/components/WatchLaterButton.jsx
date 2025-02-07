import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useVideoStore } from "@/store/video.js"

const WatchLaterButton = ({ id }) =>{
  const {allVideos, setAllVideos} = useVideoStore()
  const watchLater = allVideos.find( item => item.videoId === id)?.watchLater 
  const [watchLaterStatus,setWatchLaterStatus] = useState(watchLater)
  
  const handleWatchLater = () => {
    setWatchLaterStatus(!watchLater)
    if (watchLaterStatus === true) {
      alert('已加入稍後觀看')
      return
    }
    console.log(watchLater)
    const newList = allVideos.map( item => {
      if( item.videoId === id){
        item.watchLater  = !item.watchLater ;
        return item
      }
      return item
    });
    setAllVideos(newList)
  }


  useEffect(()=>{
    setWatchLaterStatus(watchLater)
  },[watchLater])

  /*"fa-regular fa-thumbs-up 
    cursor-pointer text-black text-[35px] border  rounded-full w-[120px] h-[45px] py-1 pl-4 bg-slate-200
     hover:scale-110 duration-200 mx-2 "*/

  return(
    <>
      <button id={id} onClick={ handleWatchLater } className="flex text-black h-[33px] w-[138px]  rounded-md hover:bg-slate-400 ">
          <i className="m-0.5 fa-solid fa-hourglass-start text-[28px] "></i>
          <p className="text-[15px] mx-1 mt-2">
            {watchLaterStatus? '已儲存至稍後觀看' : '儲存至稍後觀看'}
          </p>
      </button>
    </>
    )
}
export default WatchLaterButton