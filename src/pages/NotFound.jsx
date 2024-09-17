import React, { useContext } from "react";
import { Button, Result } from "antd";
import { Link, Navigate } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";

const AppNotFound = () => {
  const themeColor = useContext(ThemeContext);
  const { theme, setTheme } = themeColor;
  return (
    <Result
      className={`notFoundIcon`}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={"/home"}>
          <Button type="primary">Back Home</Button>
        </Link>
      }
    />
  );
};

export default AppNotFound;
