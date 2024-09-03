const SearchCard = ({title, image, channelTitle, channelImage, onClick })=>{
  return(
    <div  onClick={onClick} className="mt-3 ml-[200px] flex w-[1069px] h-[290px] hover:bg-slate-500 hover:scale-105 duration-200 rounded-lg">
      <img src={image} className="w-[440px] h-[280px] ml-2 my-auto rounded-lg object-cover" />
      <div className="w-[650px] h-full ml-3">
          <h1 className="mt-3 text-[19px] ">{title}</h1>
          <p className="text-[13px]  mt-2 text-slate-400">觀看次數：2次 ， 兩個月前</p>
          <div  className="flex justify-start mt-3 ml-2 w-full items-center p-2 rounded-md " >
            <img src={channelImage} className="h-[40px] rounded-full" />
            <span className="ml-3" >{channelTitle}</span>
          </div>
      </div>
  </div>
  )
}

export default SearchCard