const VideoChannelCard = ({ image, title, sNumber, onClick}) =>{
  return(
  <div className="flex w-[450px] mt-3 cursor-pointer" onClick={onClick}>
    <img className=" w-[80px] h-[80px] rounded-full" src={image}/>
    <div className="pl-[40px] w-[300px]">
      <p className="text-[25px]">{title}</p>
      <p className="text-[15px] text-gray-500">{sNumber}</p>
    </div>
    <i className="fa-regular fa-bell w-[120px] h-[32px] text-xl pl-[8px] py-0.5   mt-[30px] border border-solid  border-white rounded-lg  hover:bg-sidebarButtonColor hover:scale-105 duration-200"></i>
</div>
  )
}

export default VideoChannelCard