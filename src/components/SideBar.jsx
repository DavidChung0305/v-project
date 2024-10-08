import SidebarButton from "@/components/SidebarButton"
import SideBarSubCard from "@/components/SideBarSubCard"
import { useNavigate } from "react-router-dom"
import { useVideoStore } from "@/store/video.js"

const contentList = [
  {
    title:"你的頻道",
    icon:"fa-solid fa-crown",
    path:'userChannel'
  },
  {
    title:"喜歡的影片",
    icon:"fa-solid fa-thumbs-up",
    path:"likeVideoList"
  },
  {
    title:"播放清單",
    icon:"fa-solid fa-hourglass-start",
    path:'playlistLater'
  }
]

const SideBar = () => {
  const navigate = useNavigate()
  const { dancerCards, setDancerCards} = useVideoStore()
  const subData = dancerCards.filter( item => item.channelSubStatus  )
  console.log(subData)

  return(
    <div id="sideBar" className="p-5 h-full fixed top-[72px] left-0 -translate-x-full transform transition-transform duration-300 ease-in-out bg-black z-50 ">
      <div className="w-[250px] border-b border-solid border-sidebarBorder pb-2">
        <button className="flex justify-start w-full items-center p-2 rounded-md hover:bg-sidebarButtonColor " onClick={()=>navigate(`/`)}>
          <i className="fa-solid fa-house mr-3"></i>
          <span>首頁</span>
        </button>
        <button className="flex justify-start w-full items-center p-2 rounded-md hover:bg-sidebarButtonColor" onClick={()=>navigate(`/short`)}>
          <i className="fa-regular fa-eye mr-3"></i>
         <span>短片</span>
       </button>
      </div>
      <h3 className="pt-2 font-bold">你的內容</h3>
      <div className="flex flex-col w-[250px] border-b border-solid border-sidebarBorder pb-2">
      {contentList.map(item => (
            <SidebarButton key={item.title} icon={item.icon} onClick={()=>navigate(`/${item.path}`)}>
              {item.title}
            </SidebarButton>
          ))}
      </div>
      {subData.map( item => (
        <SideBarSubCard key={item.channelTitle} image={item.channelImage} title={item.channelTitle} onClick={()=>navigate(`/channel/${item.channelId}`)} />
      ))}
    </div>
  )
}

export default SideBar