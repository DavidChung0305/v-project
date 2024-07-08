const Dancer = ({image, name, style, onClick}) =>{

  return(
    <div className="w-[110px] flex flex-col items-center mr-12" onClick={onClick} >
      <img src={image} className="snow w-[100px] h-[100px] rounded-full" />
      <span className="underline">{name}</span>
      <p className="text-gray-500">{style}</p>
      </div>)
}

export default Dancer