import boy from "@/assets/images/boy.jpg"
import { useState } from "react"
import clsx from "clsx"

const CommentCard = ({image, name, text, children}) => {
  const[showReply, setShowReply] = useState(false)
  const[reply, setReply] = useState([])
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) =>{
    setInputValue(event.target.value);
  };

  const addReply = () =>{
    const data = [];
    data.push({ image:boy, name:'惠勝', text:inputValue })
    setReply(data)
    setInputValue('')
    console.log(data)
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
            <button  onClick={() => setShowReply(true)} className="text-[12px] ml-[20px] px-1 py-1 rounded-lg duration-200 hover:scale-105 hover:bg-slate-500 ">回覆</button>
          </div>
            <div  className={clsx([ showReply ? "flex" : "hidden" ],"mt-1")} >
              <img src={boy} className="rounded-full w-[30px] h-[30px]"/>
              <div className="ml-3 ">
                <input className="mt-2 w-[350px] bg-black  text-[12px] text-slate-400  border-b border-solid border-sidebarBorder  " placeholder="請輸入文字" type="text" value={inputValue} onChange={handleInputChange}></input>
                <button onClick={addReply} className="text-[12px] ml-3 px-2 py-1 hover:bg-slate-400 duration-200 bg-slate-600 rounded-xl " >留言</button>
                <button  onClick={() => setShowReply(false)} className="text-[12px] ml-3 px-2 py-1 hover:bg-slate-400 duration-200 bg-slate-500 rounded-xl " >取消</button>
            </div>
          </div>
          <div>
              {reply.map((item) => (
                <CommentCard image={item.image} name={item.name} text={item.text} />
              ))}
            </div>
        </div>
      </div>
  )
}

export default CommentCard