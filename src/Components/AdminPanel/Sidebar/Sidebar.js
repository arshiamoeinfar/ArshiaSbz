import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import swal from "sweetalert"
import './Sidebar.css'
import { useContext } from "react";
import AuthContext from "../../../context/authContext"
export default function Sidebar() {

  const authContext = useContext(AuthContext)

  // console.log(authContext);
  

  const navigate = useNavigate()

  const logoutAdmin = (event) => {
    event.preventDefault();

  
    
  swal({
    title: "شما از حساب کاربریتان خارج شدید!!",
    icon: "success",
    buttons: "رفتن به صفحه اصلی"
  }).then(() => {
    authContext.logout()
    navigate("/")
  })
    
  }
  return (
    <div id="sidebar" class="col-2">
      <div class="sidebar-header">
        <div class="sidebar-logo">
          <a href="#">
            <img src="/images/logo/Logo.png" alt="Logo" />
          </a>
        </div>

        <div class="sidebar-menu-btn">
          <i class="fas fa-bars"></i>
        </div>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li class="active-menu">
            <Link to="/p-admin">
              <span>صفحه اصلی</span>
            </Link>
          </li>
          <li>
            <Link to="courses">
              <span>دوره ها</span>
            </Link>
          </li>
          <li>
            <Link to="menus">
              <span>منو ها</span>
            </Link>
          </li>
          <li>
            <Link to="articles">
              <span>مقاله ها</span>
            </Link>
          </li>
          <li>
            <Link to="users">
              <span>کاربران</span>
            </Link>
          </li>
          <li>
            <a href="#">
              <span>کدهای تخفیف</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span>دسته‌بندی‌ها</span>
            </a>
          </li>
          <li>
            <Link to="/" onClick={logoutAdmin}>
              <span>خروج</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
