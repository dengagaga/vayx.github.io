window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
  });


  const body = document.body
  const footerMenuLinkBl = document.querySelector('.footer-menu_link-bl')
  const footerAddList = document.querySelector('.footer-add_list')
  footerMenuLinkBl.onclick = () => {
    footerAddList.classList.toggle('footerAddList-none')
    body.classList.toggle('body-scrollNone')
  }