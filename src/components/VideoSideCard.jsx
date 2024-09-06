const VideoSideCard = ({title, image, channelTitle, channelImage, onClick })=>{
  return(
    <div  onClick={onClick} className="mt-5  flex w-[380px] h-[150px] hover:bg-slate-500 hover:scale-105 duration-200 rounded-lg">
      <img src={image} className="w-[178px] h-[140px] ml-2 my-auto rounded-lg object-cover" />
      <div className="w-[200px] h-full ml-3">
          <h1 className="mt-2 text-[13px] overflow-hidden ">{title}</h1>
          <p className="text-[10px]  mt-0.5 text-slate-400">觀看次數：2次 ， 兩個月前</p>
          <div  className="flex justify-start mt-0.5 ml-2 w-full items-center p-2 rounded-md " >
            <img src={channelImage} className="h-[30px] rounded-full" />
            <span className="ml-3" >{channelTitle}</span>
          </div>
      </div>
  </div>
  )
}

export default VideoSideCard