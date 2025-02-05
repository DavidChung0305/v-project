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
    <div className="flex py-4 border-b border-solid border-sidebarBorder pb-2">
      <img src={image} className=" w-[160px] h-[160px] rounded-full" />
      <div className="pl-6">
        <p className="text-[42px]">{title}</p>
        <p className=" text-gray-400 text-sm mb-2">{SVnumber}</p>
        <div className="flex">
          <p className="text-sm text-gray-400  w-[300px] whitespace-nowrap overflow-hidden text-ellipsis">{introduction}</p>
          <button className="text-[15px] mt-[4px]" onClick={showModal}>顯示更多</button>
        </div>
        <SubscribeButton id={id} />
        <Modal title="舞者介紹" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          {introduction}
        </Modal>
        
      </div>
    </div>
  )
}

export default ChannelInfo