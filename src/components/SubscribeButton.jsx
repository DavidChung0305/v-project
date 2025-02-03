import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useVideoStore } from "@/store/video.js"

const SubscribeButton = ({ id }) =>{
  console.log(id)
  const { dancerCards, setDancerCards} = useVideoStore()
  const foundItem = dancerCards.filter( item => item.channelId === id )
  const status = foundItem[0]?.channelSubStatus
  const [ subscribeStatus, setSubscribeStatus] = useState()
  const subscribe = ()=>{    
    setSubscribeStatus(!subscribeStatus)
    const newSubList = dancerCards.map( item => {
      if( item.channelId === id){
        item.channelSubStatus = !item.channelSubStatus;
        return item
      }
      return item
    });
    setDancerCards(newSubList)
  };

  useEffect(()=>{
    setSubscribeStatus(status)
  },[status])

  
  return(
    <div onClick={subscribe} >
       <i  className={clsx("mt-8 fa-regular fa-bell w-[130px] h-[42px] text-2xl pl-[8px] pt-1  border border-solid border-white rounded-lg  hover:bg-sidebarButtonColor cursor-pointer duration-200", subscribeStatus ? "fa-solid" : "fa-regular" )} >
        {subscribeStatus ? ' 已訂閱' : ' 訂閱'}
       </i>
    </div>
  )
}

export default SubscribeButton