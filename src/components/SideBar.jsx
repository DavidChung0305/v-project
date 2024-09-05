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
  const { subList, setSubList} = useVideoStore()
  const subData = subList.filter( item => item.subStatus  )
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
      <h3 className="pt-2 font-bold">訂閱內容</h3>
      <button className="flex justify-start w-full items-center p-2 rounded-md hover:bg-sidebarButtonColor " onClick={()=>navigate(`/`)}>
          <img src='data:image/jpeg;base64,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' className="h-[40px] rounded-full" />
          <span className="ml-3" >你開心就好</span>
      </button>
      {subData.map( item => (
        <SideBarSubCard image={item.image} title={item.title} onClick={()=>navigate(`/channel/${item.id}`)} />
      ))}
    </div>
  )
}

export default SideBar