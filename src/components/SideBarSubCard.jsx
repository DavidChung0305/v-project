const SideBarSubCard = ({ image, title, onClick})=>{
  return(
    <button onClick={onClick} className="flex justify-start w-full items-center p-2 rounded-md hover:bg-sidebarButtonColor " >
        <img src={image} className="h-[40px] rounded-full" />
        <span className="ml-3" >{title}</span>
    </button>
  )
}

export default SideBarSubCard