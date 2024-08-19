const LikeVideoCard = ({id ,image, title, onClick}) =>{
  return(
    <div onClick={onClick} className="my-3  flex w-[800px] h-[100px] hover:bg-slate-500 hover:scale-105 duration-200 rounded-lg">
          <img src={image} className="w-[140px] h-[95px] ml-2 my-auto rounded-lg object-cover" />
          <div className="w-[650px] h-full ml-3">
            <h1 className="mt-3 text-[19px] ">{title}</h1>
            <p className="text-[13px]  mt-2 text-slate-400">talk街舞  ，  觀看次數：2次 ， 兩個月前</p>
          </div>
        </div>
  )
}

export default LikeVideoCard 