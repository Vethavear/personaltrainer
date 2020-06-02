window.addEventListener('scroll', () => {
  if (window.scrollY > 1) {
    document.querySelector('#nav').style.background = '#15191C';
  } else {
    document.querySelector('#nav').style.background = 'rgba(0,0,0,0)';
  }
});


$('#links .link a').on('click', function (event) {
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
  const links = document.getElementById('links');
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    links.style.height = '100vh';
    burger.classList.toggle('toggle');
  })
links.addEventListener('click', (e) =>{
    const target = e.target;   
if(target.matches('.link')|| target.matches('a')){
  links.classList.remove('active');
  burger.classList.remove('toggle');
}
  })
};

navSlide();

