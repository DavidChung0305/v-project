import { Button, Modal } from 'antd';
import { useState } from 'react';
import SubscribeButton from './SubscribeButton';

const ChannelInfo = ({image, title, SVnumber, introduction, id, onClick}) =>{
  //Modal以下
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  
  return(
    <div className="flex mt-4 border-b border-solid border-sidebarBorder pb-2">
      <img src={image} className=" w-[250px] h-[250px] rounded-full" />
      <div className="pl-6">
        <p className="text-[50px]">{title}</p>
        <p className="pl-5 text-gray-400 ">{SVnumber}</p>
        <div className="flex">
          <p className="text-[15px] text-gray-400 mt-2 w-[300px] h-[25px] overflow-hidden text-ellipsis">{introduction}</p>
          <button className="text-[15px] mt-[6px]" onClick={showModal}>...顯示更多</button>
        </div>
        <Modal title="舞者介紹" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          {introduction}
        </Modal>
        <SubscribeButton id={id} />
      </div>
    </div>
  )
}

export default ChannelInfo