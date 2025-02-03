import SubscribeButton from './SubscribeButton';
import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useVideoStore } from "@/store/video.js"

const VideoChannelCard = ({ image, title, sNumber, onClick, id}) =>{
  return(
  <div className='flex'>
  <div className="flex w-[300px] mt-3 cursor-pointer" onClick={onClick}>
    <img className=" w-[80px] h-[80px] rounded-full" src={image}/>
    <div className="pl-[40px] w-[300px]">
      <p className="text-[25px]">{title}</p>
      <p className="text-[15px] text-gray-500">{sNumber}</p>
    </div>
  </div>
  <SubscribeButton id={id} className='h-[20px]' />
</div> 
  )
}

export default VideoChannelCard