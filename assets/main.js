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

let char = 150;
let contents = document.querySelectorAll(".post-text");

contents.forEach(content => {
  if (content.textContent.length < char) {
    content.nextElementSibling.style.display = "none";
  } else {
    let displayText = content.textContent.slice(0, char);
    let moreText = content.textContent.slice(char);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
})

function readMore(btn) {
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  // button.style.display = "none"
}