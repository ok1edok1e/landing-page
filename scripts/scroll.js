// When the user scrolls down 56px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (56px out of the top view)

window.onscroll = function () { scrollNavbar(), scrollBanner() };

function scrollNavbar() {
  if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
    document.getElementById('nav').style.top = "0";
  } else {
    document.getElementById('nav').style.top = "-56px";
  }
}

// In order to get the link to stay the same color you should use a 'class' which you can name and implement it on the link for the page you are currently on.

const navLinkEls = document.querySelectorAll('.nav__link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'overview';
window.addEventListener('scroll', () => {
  sectionEls.forEach(sectionEl => {
    if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 4)) {
      currentSection = sectionEl.id;
    }
  });

  navLinkEls.forEach(navLinkEl => {
    if (navLinkEl.href.includes(currentSection)) {
      document.querySelector('.active').classList.remove('active');
      navLinkEl.classList.add('active');
    }
  });
});


function scrollBanner() {
  if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
    document.getElementById('banner').style.bottom = "16px";
  } else {
    document.getElementById('banner').style.bottom = "-96px";
  }
}