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
       <i  className={clsx("fa-regular fa-bell font-bold text-base px-4 py-2 border border-solid border-white rounded-[24px]  hover:bg-sidebarButtonColor cursor-pointer duration-200", subscribeStatus ? "fa-solid" : "fa-regular" )} >
        {subscribeStatus ? ' 已訂閱' : ' 訂閱'}
       </i>
    </div>
  )
}

export default SubscribeButton