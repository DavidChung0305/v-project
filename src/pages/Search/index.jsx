import beigow from "@/assets/images/beigow.jpeg"
import snow from "@/assets/images/snow.png"
import SearchCard from "@/components/SearchCard"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useVideoStore } from "@/store/video.js"


const Search = () =>{
  const { searchVideos, setSearchVideos} = useVideoStore()
  const navigate = useNavigate()

  console.log(searchVideos)
 return (<>
  <div  className="mt-3 ml-[200px] flex w-[1069px] h-[290px] hover:bg-slate-500 hover:scale-105 duration-200 rounded-lg">
      <img src={beigow} className="w-[440px] h-[280px] ml-2 my-auto rounded-lg object-cover" />
      <div className="w-[650px] h-full ml-3">
          <h1 className="mt-3 text-[19px] ">你各位。</h1>
          <p className="text-[13px]  mt-2 text-slate-400">talk街舞  ，  觀看次數：2次 ， 兩個月前</p>
          <div  className="flex justify-start mt-3 ml-2 w-full items-center p-2 rounded-md " >
            <img src={snow} className="h-[40px] rounded-full" />
            <span className="ml-3" >ps</span>
          </div>
      </div>
  </div>
  {searchVideos.map( item => (
    <SearchCard title={item.title} image={item.thumbnails?.maxres} channelTitle={item.channelTitle} 
    channelImage={item.channelImage} onClick={() => navigate(`/video/${item.videoId}`)}
    />
  ))}
 </>)
}

export default Search