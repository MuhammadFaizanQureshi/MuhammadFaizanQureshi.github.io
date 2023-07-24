// MENU OPENER
function openMenu() {
  document.querySelector('#toggler').classList.toggle('active');
  document.querySelector('#navbar').classList.toggle('active');
}

// WINDOW SCROLL
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {

  // HEADER COLOR
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    document.querySelector('.header').classList.add('fixed')
  } else {
    document.querySelector('.header').classList.remove('fixed')
  }

  // SCROLL BAR
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.querySelector(".scroller").style.height = scrolled + "%";
}

// PORTFOLIO SLIDER
const swiper1 = new Swiper('.portfolio-slider', {
  spaceBetween: 10,
  freeMode: true,
  breakpoints: {
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
    991: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// TESTIMONIAL SLIDER
const swiper2 = new Swiper('.testimonial-slider', {
  spaceBetween: 10,
  breakpoints: {
    // 480: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
    991: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
})

// PARTICLE JS
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#707070",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "pull"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
requestAnimationFrame();
