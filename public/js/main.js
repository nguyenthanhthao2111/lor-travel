
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