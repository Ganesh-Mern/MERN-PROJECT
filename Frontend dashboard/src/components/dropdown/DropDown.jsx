import React, { useState } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Menu } from 'antd';

const DropDown = ({data}) => {
    console.log(data);
    
    
      // State to store selected language, default is English
      const [selectedLanguage, setSelectedLanguage] = useState('English');
    
      // Function to handle language selection
      const handleMenuClick = (e) => {
        const selected = data.find((item) => item.key === e.key);
        setSelectedLanguage(selected.label);
      };
    
      // Define the menu for the dropdown
      const menu = (
        <Menu
          onClick={handleMenuClick}
          items={data}
        />
      );
  return (
    <Dropdown overlay={menu} trigger={['click']} className='bg-[rgba(245,246,250,1)] h-full p-0 sm:p-[0.75rem] rounded hidden sm:inline'>
    <a onClick={(e) => e.preventDefault()} href="/" >
      <Space>
        {selectedLanguage}
        <DownOutlined className='' />
      </Space>
    </a>
  </Dropdown>
  )
}

export default DropDown