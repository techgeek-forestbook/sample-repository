document.addEventListener('DOMContentLoaded', function () {
  const urlParams = new URLSearchParams(window.location.search);
  const menu = urlParams.get('menu');
  const menuLinkList = document.querySelectorAll('.booking-app_menu-link');
  menuLinkList.forEach((menuLink) => {
    if (menuLink.getAttribute('data-menu') === menu) {
      menuLink.classList.add('active');
    }
  });
});