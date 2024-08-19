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
  const subData = subList.filter( item => item.subStatus === true  )
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
          <img src='https://scontent.ftpe2-1.fna.fbcdn.net/v/t39.30808-6/407686796_267440842978032_7109015090120144939_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=_7ztxAx3eFUQ7kNvgEDKp8f&_nc_ht=scontent.ftpe2-1.fna&cb_e2o_trans=t&oh=00_AYA64seiRoyJ55SyWBAjvUoowAb5DNTxocdwfwYMPtiTQA&oe=66C8B243' className="h-[40px] rounded-full" />
          <span className="ml-3" >你開心就好</span>
      </button>
      {subData.map( item => (
        <SideBarSubCard image={item.image} title={item.title} onClick={()=>navigate(`/channel/${item.id}`)} />
      ))}
    </div>
  )
}

export default SideBar