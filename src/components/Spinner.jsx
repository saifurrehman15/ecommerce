import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
const AppSpinner = ({className}) => (
    <Flex className={className} >
        <Spin
            indicator={
                <LoadingOutlined
                style={{
                    fontSize: 48,
                }}
                spin
                />
            }
            />
    </Flex>

);
export default AppSpinner;
