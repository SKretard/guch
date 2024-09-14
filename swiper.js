/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  slidesPerView: '2',
  loop: true,
  spaceBetween: 32,
  grabCursor: true,


  pagination: {
    el: '.swiper-pagination',
  },


  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    300: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 2,
    },
  },
});
  let swiperCards1 = new Swiper(".card__content1", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  

    pagination: {
      el: '.swiper-pagination1',
    },
  
  
    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });

  let swiperCards2 = new Swiper(".card__content2", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  

    pagination: {
      el: '.swiper-pagination2',
    },
  
  
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });

  let swiperCards3 = new Swiper(".card__content3", {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  

    pagination: {
      el: '.swiper-pagination3',
    },
  
  
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });

  let swiperCards4 = new Swiper(".card__content4", {
    slidesPerView: '2',
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
  
    pagination: {
      el: '.swiper-pagination4',
    },
  
  
    navigation: {
      nextEl: ".swiper-button-next4",
      prevEl: ".swiper-button-prev4",
    },
  
    breakpoints:{
      300: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 2,
      },
    },
  });

  let swiperCards5 = new Swiper(".card__content5", {
    slidesPerView: '2',
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
  
    pagination: {
      el: '.swiper-pagination5',
    },
  
  
    navigation: {
      nextEl: ".swiper-button-next5",
      prevEl: ".swiper-button-prev5",
    },
  
    breakpoints:{
      300: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 2,
      },
    },
  });

  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {}
    }
  }