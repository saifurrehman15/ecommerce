import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import AppButton from "./Button";
import { auth, onAuthStateChanged, signOut } from "../utils/firebase";
import { Badge } from "antd";
import {
  HomeOutlined,
  SettingOutlined,
  ProductOutlined,
  ContactsOutlined,
  SunFilled,
  MoonFilled,
  EyeOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import UserProfileCard from "./UserProdile"; // Fixed import typo
import { ThemeContext } from "../Context/ThemeContext";
import { cart } from "../Context/addtoCart";
import { userInfo } from "../Context/userContext";
function AppNavbar() {
  const themeColor = useContext(ThemeContext);
  const { theme, setTheme } = themeColor;
  const carts = useContext(cart);
  const { cartItem } = carts;

  let totalQuantity = cartItem.reduce((accumulator, num) => {
    return accumulator + num.quantity;
  }, 0);

  const { userData, setUserData } = useContext(userInfo);
  const { avatar } = userData;

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out");
        handleClose();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUserData(user);
  //       console.log("user found", user);
  //     } else {
  //       console.log("User not found");
  //     }
  //   });
  // }, []);

  // Content for UserProfileCard
  const content = (
    <img src={avatar} alt="" className="h-full w-full rounded-full" />
  );
  const devices = screen.width < 992;
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className={`navbarMain px-16 ${
            theme === "light" ? "bg-white" : "bg-black"
          }`}
        >
          <Container>
            <Navbar.Brand href="/">
              <img style={{ width: 120 }} src={logo} alt="Logo" />
            </Navbar.Brand>
            {screen.width < 778 ? (
              <div className="flex gap-1">
                <Link to={"/profile"}>
                  <button
                    className={"h-10 rounded-full w-10 border border-gray-500 cursor-pointer"}
                  >
                    {avatar ? content : <UserOutlined />}
                  </button>
                </Link>{" "}
                <Badge count={totalQuantity}>
                  <AppButton
                    icon={<ShoppingCartOutlined />}
                    className={"h-10 rounded-full w-10 "}
                    path={"/carts"}
                    onClick={handleClose}
                  />
                </Badge>
              </div>
            ) : (
              ""
            )}
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              onClick={handleShow}
            />
            <Navbar.Offcanvas
              show={showOffcanvas}
              onHide={handleClose}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img style={{ width: 120 }} src={logo} alt="Logo" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1">
                  <ul className="menu">
                    <li>
                      <Link to="/home" onClick={handleClose}>
                        {devices ? (
                          <span className="NavbarIcons flex items-center gap-2 ">
                            <HomeOutlined />
                            Home
                          </span>
                        ) : (
                          <>
                            <span className="NavbarIcons">
                              <HomeOutlined />
                            </span>
                            Home
                          </>
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" onClick={handleClose}>
                        {devices ? (
                          <span className="NavbarIcons flex items-center gap-2 mt-2">
                            <SettingOutlined />
                            About
                          </span>
                        ) : (
                          <>
                            <span className="NavbarIcons">
                              <SettingOutlined />
                            </span>
                            About
                          </>
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="/Product" onClick={handleClose}>
                        {devices ? (
                          <span className="NavbarIcons flex items-center gap-2 mt-2">
                            <ProductOutlined />
                            Products
                          </span>
                        ) : (
                          <>
                            <span className="NavbarIcons">
                              <ProductOutlined />
                            </span>
                            Products
                          </>
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={handleClose}>
                        {devices ? (
                          <span className="NavbarIcons flex items-center gap-2 mt-2">
                            <SettingOutlined />
                            Contact
                          </span>
                        ) : (
                          <>
                            <span className="NavbarIcons">
                              <SettingOutlined />
                            </span>
                            Contact
                          </>
                        )}
                      </Link>
                    </li>
                  </ul>
                </Nav>
                <div className=" flex gap-2 items-center">
                  {devices ? (
                    ""
                  ) : (
                    <div className="flex gap-2">
                      <Link to={"/profile"}>
                        <button
                          className={
                            "h-10 rounded-full w-10 border border-gray-500 cursor-pointer"
                          }
                        >
                          {avatar ? content : <UserOutlined />}
                        </button>
                      </Link>

                      <Badge count={totalQuantity}>
                        <AppButton
                          icon={<ShoppingCartOutlined />}
                          className={"h-10 rounded-full w-10 "}
                          path={"/carts"}
                          onClick={handleClose}
                        />
                      </Badge>
                    </div>
                  )}
                  <AppButton
                    icon={theme === "light" ? <MoonFilled /> : <SunFilled />}
                    className={"h-10 rounded-full w-10"}
                    onClick={() => {
                      theme === "light" ? setTheme("dark") : setTheme("light");

                      handleClose();
                    }}
                  />
                  <span
                    className={`font-bold cursor-pointer ${
                      theme === "light"
                        ? "text-black"
                        : devices || "text-white"
                    }`}
                    onClick={() => {
                      theme === "light" ? setTheme("dark") : setTheme("light");

                      handleClose();
                    }}
                  >
                    {theme}
                  </span>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default AppNavbar;
