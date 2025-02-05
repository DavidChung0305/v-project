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
    <div className='border border-solid border-white rounded-[24px] text-white inline-block px-4 py-2 font-bold text-base cursor-pointer hover:bg-sidebarButtonColor'  onClick={subscribe} >
       <i  className={clsx("fa-regular fa-bell   duration-200", subscribeStatus ? "fa-solid" : "fa-regular" )} >
       </i>
       {subscribeStatus ? ' 已訂閱' : ' 訂閱'}
    </div>
  )
}

export default SubscribeButton