import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row } from "react-bootstrap";
import { mydata2 } from "./Map";
import logo from "../assets/img/svg/Logo.svg";
import dashbord from "../assets/img/svg/dashbord.png";
import file from "../assets/img/svg/file.png";
import box from "../assets/img/svg/Union.png";
import usernav from "../assets/img/svg/user.svg";
import Massage from "../assets/img/svg/Massage.png";
import help from "../assets/img/svg/Support.png";
import Accordion from "react-bootstrap/Accordion";
import notification from "../assets/img/png/Notificationball.png";
import calander from "../assets/img/png/calendar.png";
import gridbox from "../assets/img/png/layout-grid.png";
import glob from "../assets/img/png/globe.png";
import logout from "../assets/img/png/logout.png";
import settings from "../assets/img/png/Settings.png";
import user from "../assets/img/png/Avatar.png";
import searchoicon from "../assets/img/png/search.png";
import thunder from "../assets/img/png/thunder.png";
import Ravenu from "./Map";
import wave from "../assets/img/png/Line Chart.png";
import THREEDoT from "../assets/img/png/dotzvatrical.png";
import lrftarrow from "../assets/img/png/arrow-left.png";
import rightarrow from "../assets/img/png/arrow-right.png";

function Hader() {
  const [show, setShow] = useState(0);
  const [count, setCount] = useState(1);

  const mySlider = useRef();
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <section className=" min-vh-100  d-flex flex-row">
        <div className=" container-fluid  ">
          <div
            className={`${
              show ? "shownav" : "hidenav"
            } d-lg-none overflow-auto`}
          >
            <div className=" bg-white h_1024 min-vh-100 px-2">
              <div className="d-flex flex-column justify-content-between h-100 py-3">
                <nav className="sidenav pb-3  ">
                  <div className="">
                    <div className="d-flex justify-content-between">
                      <img
                        onClick={() => setShow(!show)}
                        src={logo}
                        alt="logo"
                      />
                      <div className="d-flex gap-4">
                        <span className="d-none-d-lg-flex">
                          <a className="" href="/">
                            <img
                              className="hover_effact"
                              src={notification}
                              alt=""
                            />
                          </a>
                        </span>
                        <span className="d-none-d-lg-flex">
                          <a href="/">
                            <img src={calander} alt="" />
                          </a>
                        </span>
                        <span className="d-none-d-lg-flex">
                          <a href="/">
                            <img src={gridbox} alt="" />
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="my-2 ">
                      <p className=" ff_inter fw-bold fs_xsm text_greylight">
                        D A S H B O A R D
                      </p>
                    </div>
                    <Accordion
                      defaultActiveKey=""
                      className="bordewr-0 bg-transparent d-flex  flex-column gap-1"
                    >
                      <Accordion.Item
                        eventKey="1"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={dashbord} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              Dashbord
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-2">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="2"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={Massage} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              Messages
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-2">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="3"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={usernav} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              Dashbord
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-2">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="4"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={box} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              Dashbord
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-2">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <p className="py-1 ff_inter fw-bold fs_xsm text_greylight">
                      P A G E S
                    </p>
                    <Accordion
                      defaultActiveKey=""
                      className="bordewr-0 bg-transparent d-flex  flex-column gap-3"
                    >
                      <Accordion.Item
                        eventKey="0"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={help} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              Help Center
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-2">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="1"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={file} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              File Manager
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-2">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </nav>
                <div className="d-flex justify-content-between bg-white bordertop_links pt-4 px-4">
                  <span>
                    <a href="/">
                      <img src={settings} alt="" />
                    </a>
                  </span>
                  <span>
                    <a className="scale_hover" href="/">
                      {" "}
                      <img src={logout} alt="" />
                    </a>
                  </span>
                  <span>
                    <a className="scale_hover" href="/">
                      {" "}
                      <img src={glob} alt="" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row position-relative justify-content-end">
            <div className="col-3 bg-white h_1024 d-lg-block d-none">
              <div className="d-flex justify-content-between flex-column h-100 py-3">
                <nav className="sidenav pb-3  ">
                  <div className="">
                    <div className="d-inline block">
                      <img src={logo} alt="logo" />
                    </div>
                    <div className="my-5 pt-2">
                      <p className=" ff_inter fw-bold fs_xsm text_greylight">
                        D A S H B O A R D
                      </p>
                    </div>
                    <Accordion
                      defaultActiveKey="0"
                      className="bordewr-0 bg-transparent d-flex  flex-column gap-2"
                    >
                      <Accordion.Item
                        eventKey="0"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={dashbord} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              Dashbord
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-3">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="1"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={dashbord} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              Dashbord
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-4">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="2"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={dashbord} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              Dashbord
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-4">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="3"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={dashbord} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              Dashbord
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-4">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="4"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={dashbord} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              Dashbord
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-4">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <p className="py-2 ff_inter fw-bold fs_xsm text_greylight">
                      P A G E S
                    </p>
                    <Accordion
                      defaultActiveKey=""
                      className="bordewr-0 bg-transparent d-flex  flex-column gap-3"
                    >
                      <Accordion.Item
                        eventKey="0"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={dashbord} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              Help Center
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-4">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item
                        eventKey="1"
                        className=" bg-transparent border-0"
                      >
                        <Accordion.Header className="border-0 bg-transparent ">
                          <div className="d-flex gap-2">
                            <img src={dashbord} alt="dashbord" />
                            <span className=" ff_inter fs_md fw-semibold ">
                              File Manager
                            </span>
                          </div>
                        </Accordion.Header>
                        <Accordion.Body>
                          <div className="d-flec flex-column gap-4">
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Analytics
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Finance
                            </p>
                            <p className=" ff_inter fs_md fw_semibold active_text_dark text_grey">
                              Job Board
                            </p>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </div>
                </nav>
                <div className="d-flex justify-content-between bg-white bordertop_links pt-3 px-4">
                  <span>
                    <a href="/">
                      {" "}
                      <img src={settings} alt="" />
                    </a>
                  </span>
                  <span>
                    <a href="/">
                      {" "}
                      <img className="scale_hover" src={logout} alt="" />
                    </a>
                  </span>
                  <span>
                    <a href="/">
                      {" "}
                      <img className="scale_hover" src={glob} alt="" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-9 h-auto px-0">
              <div className="py-3 bg-white px-3 border_left_line d-flex gap-3 justify-content-between align-items-center">
                <label
                  htmlFor=""
                  className="w-100  h-100 position-relative d-none d-lg-block"
                >
                  <img
                    className="searchoicon position-absolute"
                    src={searchoicon}
                    alt=""
                  />
                  <input
                    className="w-100 ps-5 pe-3 py-2 zn_1"
                    type="text"
                    placeholder="Search..."
                  />
                </label>
                <div className="d-lg-none" onClick={() => setShow(!show)}>
                  <img src={logo} alt="logo" />
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <span className="d-none d-lg-flex">
                    <a className="" href="/">
                      <img className="hover_effact" src={notification} alt="" />
                    </a>
                  </span>
                  <span className="d-none d-lg-flex scale_hover">
                    <a href="/">
                      <img src={calander} alt="" />
                    </a>
                  </span>
                  <span className="d-none d-lg-flex scale_hover">
                    <a href="/">
                      <img src={gridbox} alt="" />
                    </a>
                  </span>
                  <span>
                    <a className="uselogo scale_hover" href="/">
                      <img src={user} alt="" />
                    </a>
                  </span>
                </div>
              </div>
              <div className="px-3">
                <div className=" bg_dark d-flex flex-column flex-md-row align-items-center justify-content-between my-3 px-3 py-4 rounded-4">
                  <div className="ps-3">
                    <h1 className="text-white ff_inter fs_xxl fw-semibold">
                      Unlock premium stats
                    </h1>
                    <p className="text-white ff_inter fw-normal fs_sm">
                      Get up to 10TB of storage for a limited time
                    </p>
                  </div>
                  <span className="btn_upgrade d-flex justify-content-center align-items-center thunderbox rounded-5 me-4">
                    <a
                      className="text-decoration-none bg-white ff_inter fs_md fw-semibold text_dark"
                      href="/"
                    >
                      <span onClick={() => setShow(!show)} className="me-2">
                        <img
                          className="thunder position-relative"
                          src={thunder}
                          alt=""
                        />
                      </span>
                      Upgrade
                    </a>
                  </span>
                </div>
                <div>
                  <div className="row justify-content-center">
                    {Ravenu.map((MYdata) => {
                      return (
                        <div className="col-xl-3 col-lg-3 col-md-6 my-2 my-md-3 my-xl-0 ">
                          <div className="revenubox h-100">
                            <h3 className=" ff_inter fs_md fw-semibold text_greylight">
                              {MYdata.data1}
                            </h3>
                            <h2 className=" ff_inter fs_xl fw-semibold">
                              {MYdata.data2}
                            </h2>
                            <div className="d-flex gap-2 align-items-center mt-4">
                              <img
                                className="badge1"
                                src={MYdata.Image}
                                alt="badge"
                              />
                              <p className=" ff_inter fw-semibold fs_xsm text_greylight mb-0">
                                {MYdata.data3}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="mx-sm-3 px-3 py-4 my-5 bg-white rounded-4">
                <div className="d-flex justify-content-between">
                  <h2 className=" ff_inter fs_lg fw-normal">Performanc</h2>
                  <span>
                    <img src={THREEDoT} alt="dotz" />
                  </span>
                </div>
                <div className="py-5">
                  <div className="row">
                    <div className="col-1">
                      <div className="d-flex flex-column gap_40">
                        <span>400</span>
                        <span>300</span>
                        <span>200</span>
                        <span>100</span>
                        <span>0</span>
                      </div>
                    </div>
                    <div className="col-11">
                      <div className="">
                        <span>
                          <img className="wave" src={wave} alt="wave" />
                        </span>
                        <div className="d-flex justify-content-between ">
                          <span>Sun</span>
                          <span>Mon</span>
                          <span>Tue</span>
                          <span>Wed</span>
                          <span>Fri</span>
                          <span>Sat</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-5">
                  <h4 className="mb-0 beforeinsta position-relative ff_inter fw_normal fs_sm ">
                    Instagram
                  </h4>
                  <h4 className="mb-0  beforefb position-relative ff_inter fw_normal fs_sm">
                    Facebook
                  </h4>
                </div>
              </div>{" "}
              <div className="mx-3 px-3 bg-white py-3 rounded-4">
                <div className="d-flex justify-content-between ">
                  <h2 className=" ff_inter fw-semibold fs_lg">
                    {" "}
                    Installed apps
                  </h2>
                  <span>
                    <img src={THREEDoT} alt="" />
                  </span>
                </div>
                <div>
                  <Slider ref={mySlider}>
                    <div className="overflow-auto ">
                      <div className=" w_1200 ">
                        <div className="py-4 px-0  ">
                          <Row className="bg_row_datatag px-2 align-items-center ">
                            <div className="col-2  ">
                              <h5>Source</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Amount</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Status</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>User ID</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Joined</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Group</h5>
                            </div>
                          </Row>{" "}
                        </div>
                        {mydata2.map((data2) => {
                          return (
                            <Row className="borderbottomrow justify-content-between">
                              <div className="col-2 ">
                                <div className="d-flex gap-3 py-3">
                                  <img src={data2.img} alt="zephlin" />
                                  <h2>{data2.data1}</h2>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3  ">
                                <div className="">
                                  <h5>{data2.data2}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3 ">
                                <div className=" d-flex justify-content-center align-items-center w-100">
                                  <img
                                    className="badge2"
                                    src={data2.data3}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data4}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3 ">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data5}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3 ">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data6}</h5>
                                </div>
                              </div>
                            </Row>
                          );
                        })}
                      </div>
                    </div>
                    <div className="overflow-auto">
                      <div className=" w_1200">
                        <div className="py-4 px-0  ">
                          <Row className="bg_row_datatag">
                            <div className="col-2">
                              <h5>Source</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Amount</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Status</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>User ID</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Joined</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Group</h5>
                            </div>
                          </Row>{" "}
                        </div>
                        {mydata2.map((data2) => {
                          return (
                            <Row className="borderbottomrow justify-content-between">
                              <div className="col-2 ">
                                <div className="d-flex gap-3 py-3">
                                  <img src={data2.img} alt="zephlin" />
                                  <h2>{data2.data1}</h2>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3  ">
                                <div className="">
                                  <h5>{data2.data2}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center align-items-center d-flex py-3 ">
                                <div className=" d-flex justify-content-center w-100">
                                  <img
                                    className="badge2"
                                    src={data2.data3}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data4}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3 ">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data5}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3 ">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data6}</h5>
                                </div>
                              </div>
                            </Row>
                          );
                        })}
                      </div>
                    </div>
                    <div className="overflow-auto">
                      <div className=" w_1200">
                        <div className="py-4 px-0  ">
                          <Row className="bg_row_datatag">
                            <div className="col-2">
                              <h5>Source</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Amount</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Status</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>User ID</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Joined</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Group</h5>
                            </div>
                          </Row>{" "}
                        </div>
                        {mydata2.map((data2) => {
                          return (
                            <Row className="borderbottomrow justify-content-between">
                              <div className="col-2 ">
                                <div className="d-flex gap-3 py-3">
                                  <img src={data2.img} alt="zephlin" />
                                  <h2>{data2.data1}</h2>
                                </div>
                              </div>
                              <div className="col-2 justify-content-around d-flex py-3  ">
                                <div className="">
                                  <h5>{data2.data2}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-around align-items-center d-flex py-3 ">
                                <div className=" d-flex justify-content-around w-100">
                                  <img
                                    className="badge2"
                                    src={data2.data3}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data4}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3 ">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data5}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3 ">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data6}</h5>
                                </div>
                              </div>
                            </Row>
                          );
                        })}
                      </div>
                    </div>
                    <div className="overflow-auto">
                      <div className=" w_1200">
                        <div className="py-4 px-0  ">
                          <Row className="bg_row_datatag">
                            <div className="col-2">
                              <h5>Source</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Amount</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Status</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>User ID</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Joined</h5>
                            </div>
                            <div className="col-2 justify-content-center d-flex">
                              <h5>Group</h5>
                            </div>
                          </Row>{" "}
                        </div>
                        {mydata2.map((data2) => {
                          return (
                            <Row className="borderbottomrow justify-content-between">
                              <div className="col-2 ">
                                <div className="d-flex gap-3 py-3">
                                  <img src={data2.img} alt="zephlin" />
                                  <h2>{data2.data1}</h2>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3  ">
                                <div className="">
                                  <h5>{data2.data2}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3 ">
                                <div className=" d-flex justify-content-center align-items-center w-100">
                                  <img
                                    className="badge2"
                                    src={data2.data3}
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data4}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3 ">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data5}</h5>
                                </div>
                              </div>
                              <div className="col-2 justify-content-center d-flex py-3 ">
                                <div className="">
                                  {" "}
                                  <h5>{data2.data6}</h5>
                                </div>
                              </div>
                            </Row>
                          );
                        })}
                      </div>
                    </div>
                  </Slider>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <span onClick={() => mySlider.slider.slickPrev()}>
                      {" "}
                      <img
                        onClick={() => setCount(count - 1)}
                        src={lrftarrow}
                        alt="buttonleft"
                      />
                    </span>
                    <p className="pt-2 " id="show">
                      {" "}
                      {count}/15
                    </p>{" "}
                    <span onClick={() => mySlider.slider.slickNext()}>
                      {" "}
                      <img
                        onClick={() => setCount(count + 1)}
                        src={rightarrow}
                        alt="rightarrow"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hader;
