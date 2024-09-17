import React, { useContext, useState } from "react";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import AppNavbar from "./Navbar";
import AppFooter from "../pages/Footer";
import { ThemeContext } from "../Context/ThemeContext";
const { Header, Content } = Layout;

const AppLayout = ({ children }) => {
  let themeColors = useContext(ThemeContext);
  let { theme: themeColor } = themeColors;
  return (
    <Layout>
      <AppNavbar />
      <Header
        className="header"
        style={{
          padding: 0,
          background: themeColor === "light" ? "white" : "black",
          color: themeColor === "light" ? "" : "white",
          height: 0,
        }}
      ></Header>
      <Content
        style={{
          margin: "0px 0px",
          padding: "0px 50px ",
          minHeight: innerHeight,
          backgroundColor: themeColor === "light" ? "white" : "black",
          color: themeColor === "light" ? "" : "white",
        }}
        className="contentDiv"
      >
        {children}
      </Content>
      <AppFooter />
    </Layout>
  );
};
export default AppLayout;
