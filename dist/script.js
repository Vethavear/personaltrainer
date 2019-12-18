window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    document.querySelector('#nav').style.background = '#15191C';
  } else {
    document.querySelector('#nav').style.background = 'rgba(0,0,0,0)';
  }
});


$('a, button').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate({
        scrollTop: $(hash).offset().top - 100

      },
      800
    );
  }
});

// Burger Menu
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('#links');
  const navbar = document.querySelector('#nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    navbar.style.height = '100%';
    burger.classList.toggle('toggle');
  })
};

navSlide();
$('.links a').on("click", function () {
  $('.links').removeClass('active');
  $('.burger').removeClass('toggle');
});