import boy from "@/assets/images/boy.jpg"

const CommentCard = ({image, name, text}) => {

  const reply = () =>{
    const item =  document.getElementById('massage')
    item.classList.remove('hidden')
  }

  return(
    <div className="mt-[36px] flex w-[800px] pb-3 ">
        <img src={image} className="rounded-full w-[60px] h-[60px]"/>
        <div className="ml-8 w-full">
          <p>{name}</p>
          <p className=" text-slate-400">{text}</p> 
          <div className="flex pt-2">
            <i className="fa-solid fa-thumbs-up pl-[100px]"></i>
            <i className="fa-solid fa-thumbs-down pl-[20px]"></i>
            <button  onClick={reply} className="text-[12px] ml-[20px] px-1 py-1 rounded-lg duration-200 hover:scale-105 hover:bg-slate-500 ">回覆</button>
          </div>
            <div id='massage' className=" hidden mt-1 flex  ">
              <img src={boy} className="rounded-full w-[30px] h-[30px]"/>
              <div className="ml-3 ">
                <input className="mt-2 w-[350px] bg-black  text-[12px] text-slate-400  border-b border-solid border-sidebarBorder  " placeholder="請輸入文字" type="text"></input>
                <button className="text-[12px] ml-3 px-2 py-1 hover:bg-slate-400 duration-200 bg-slate-600 rounded-xl " >留言</button>
                <button className="text-[12px] ml-3 px-2 py-1 hover:bg-slate-400 duration-200 bg-slate-500 rounded-xl " >取消</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CommentCard