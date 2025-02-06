const ChannelVideoCard = ({image, title, onClick}) =>{
  return(
    <div className=" relative  rounded-xl  overflow-hidden cursor-pointer " onClick={onClick}>
        <img className="w-full h-[218px] object-cover rounded-2xl" src={image} />
        <p className=" w-full text-[18px] whitespace-nowrap text-ellipsis overflow-hidden ">{title}</p>
        <p className="text-[12px] text-gray-400">觀看次數：1280次 ， 時間：3年前</p>
    </div>
  )
}
export default ChannelVideoCard