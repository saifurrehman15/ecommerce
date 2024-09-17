import React from 'react';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import {
  LogoutOutlined,
} from "@ant-design/icons";
const AppButton = ({className,name,path,onClick,icon}) => (
  
  <Flex gap="small" wrap>
    <Link to={path}>
    <Button onClick={onClick} className={className}>{icon}{name}</Button>
    </Link>
   
  </Flex>
);
export default AppButton;