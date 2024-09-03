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
  {searchVideos.map( item => (
    <SearchCard title={item.title} image={item.thumbnails?.maxres?.url} channelTitle={item.channelTitle} 
    channelImage={item.channelImage} onClick={() => navigate(`/video/${item.videoId}`)}
    />
  ))}
 </>)
}

export default Search