import clsx from 'clsx'
import { useState, useEffect } from 'react'
import { useVideoStore } from "@/store/video.js"

const SubscribeButton = ({ id }) =>{
  const { subList, setSubList} = useVideoStore()
  const foundItem = subList.filter( item => item.id === id )
  const status = foundItem[0]?.subStatus
  const [ subscribeStatus, setSubscribeStatus] = useState()

  const subscribe = ()=>{    
    setSubscribeStatus(!subscribeStatus)
    const newSubList = subList.map( item => {
      if( item.id === id){
        item.subStatus = !item.subStatus;
        return item
      }
      return item
    });
    setSubList(newSubList)
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