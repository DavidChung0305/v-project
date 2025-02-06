const StyleChannelCard = ({ title, style, introduction, image, onClick })=>{
  return(
    <div onClick={onClick} className=" flex bg-slate-800 hover:bg-slate-700 hover:scale-110 duration-300 w-[400px] h-[240px] rounded-xl mx-5 mt-5">
        <img className="h-[230px] w-[186px] my-auto mx-1.5  rounded-lg" src={image}/>
        <div className=" w-[190px] h-[220px] pl-1 my-auto ">
          <h1 className=" mt-2 text-[23px] ">{title}</h1>
          <h1 className=" mt-4 text-slate-500 text-[19px] ">{style}</h1>
          <div className=" px-1 py-1 mt-4 bg-slate-900 w-full h-[123px] rounded-md overflow-hidden">
            <p className=" text-slate-500 ">{introduction}</p>
          </div>
        </div>
      </div>
  )
}

export default StyleChannelCard