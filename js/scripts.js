function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
/*-----------------Menu---------------------*/

const getId = (link) => link.getAttribute('href').replace('#', '');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
  if(entry.isIntersecting) {
    document.querySelectorAll('.header__menu-item__link').forEach((link) => {
      link.classList.toggle('menu-active',
      getId(link) === entry.target.id);

      });
    }
  });
}, {
  threshold: 0.7,
});

document.querySelectorAll('.section').forEach((section) => observer.observe(section), );

document.querySelector('.header__menu-items').addEventListener('click', (event) => {
  if (event.target.classList.contains('header__menu-item__link')) {
    event.preventDefault();

    window.scrollTo({
      top: document.getElementById(getId(event.target)).offsetTop,
      behavior: "smooth",

    })
  }
});
  /*------Preloader---------*/
window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
  }, 500);
};



