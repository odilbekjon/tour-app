import React from 'react';
import './modal.scss';
import { Input, DatePicker, Modal } from 'antd'

export const ModalPlanning = ({ isModalVisible, setIsModalVisible }) => {
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  }
  return (
    <Modal footer={null} visible={isModalVisible} onCancel={handleCancel}>
      <div className='planning__form--content'>
        <h3 className='planning__form--title'>Sayohatingizni rejalashtiring</h3>
        <Input className='planning__form--input' size='large' placeholder="Manzilingizni kiriting" />
        <DatePicker className='planning__form--input' size='large' onChange={onChange} placeholder='Sana kiriting' />
        <button className='planning__form--btn'>
          Rejalashtirish
        </button>
      </div>
    </Modal>
  )
}
