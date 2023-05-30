/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: 'http://localhost:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in Successful');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
    console.log(err.response);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://localhost:3000/api/v1/users/logout',
    });

    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    showAlert('error', 'Error logging out! Try again.');
    console.log(err.response);
  }
};


var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;
// Đóng mở moible menu 
mobileMenu.onclick = function () {
  var isClose = header.clientHeight === headerHeight;
  if (isClose) {
    header.style.height = 'auto';
  } else {
    header.style.height = null;
  }
}

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];

  menuItem.onclick = function (event) {
    var isParentMenu = this.nextElementSibling;
    if (isParentMenu) {
      event.preventDefault();
    } else {
      header.style.height = null;
    }
  }
}