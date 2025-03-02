import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"

export default function Topbar() {
  const [adminInfo, setAdminInfo] = useState({});
  const [adminNotifications, setAdminNotifications] = useState([]);
  const [isShowNotificationsBox, setIsShowNotificationsBox] = useState(false);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    fetch(`http://localhost:4000/v1/auth/me`, {
      headers: {
        Authorization: `Bearer ${localStorageData.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAdminInfo(data);
        setAdminNotifications(data.notifications);
      });
  }, []);


  const seeNotfication = (notfic) => {
    console.log(notfic);
    
  }

  return (
    <div class="container-fluid">
      <div class="container">
        <div
          class={`home-header ${
            isShowNotificationsBox && "active-modal-notfication"
          }`}
        >
          <div class="home-right">
            <div class="home-searchbar">
              <input type="text" class="search-bar" placeholder="جستجو..." />
            </div>
            <div class="home-notification">
              <button
                type="button"
                onMouseEnter={() => setIsShowNotificationsBox(true)}
              >
                <i class="far fa-bell"></i>
              </button>
            </div>
            <div
              class="home-notification-modal"
              onMouseEnter={() => setIsShowNotificationsBox(true)}
              onMouseLeave={() => setIsShowNotificationsBox(false)}
            >
              <ul class="home-notification-modal-list">
                {adminNotifications.map((notification) => (
                  <li class="home-notification-modal-item">
                    <span class="home-notification-modal-text">
                      {notification}
                    </span>
                    <label class="switch">
                    <Link to="#" onClick={() => seeNotfication(notification._id)}>دیدم</Link>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="home-left">
            <div class="home-profile">
              <div class="home-profile-image">
                <a href="#">
                  <img src={adminInfo.profile} alt="" />
                </a>
              </div>
              <div class="home-profile-name">
                <a href="#">{adminInfo.name}</a>
              </div>
              <div class="home-profile-icon">
                <i class="fas fa-angle-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
