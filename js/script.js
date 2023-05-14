// // Deployed (Heroku postgres)
// //const baseUrl = "https://next-up-movies.herokuapp.com/"
//   const baseUrl = "http://127.0.0.1:5000/"
// var url = baseUrl

// // Header

// // Select2
// $(document).ready(function() {
//     $('.select2').select2();
// });

// // Search select
// function movieSelect()
// {
//     let selection = document.getElementById('movieSelect');
//     let selectedMovie = selection.options[selection.selectedIndex].text;

//     url = baseUrl+"movie/"+selectedMovie;
//     window.location.href = url;
// }



// // Sign-up Page
// $(document).ready(function() {
//     var upBtn = document.getElementById("up-btn");
//     if (!(upBtn == null)) {
//         var handleClick = function (event) {
//             var upForm = document.getElementById("up-form")
//             var email = upForm.elements['user_email'].value;
//             var mobile = upForm.elements['user_mobile'].value;
//             var password = upForm.elements['user_password'].value;

//             if(email=="" || mobile=="" || password=="") {
//                 var errorMsg = "Please fill all the fields.";
//                     document.getElementById("error").innerHTML = errorMsg;
//             }
//             else {
//                 url = baseUrl+"signup";
//                 $.post(url, {
//                     email: email,
//                     mobile: mobile,
//                     password: password,
//                 },function(data, status) {
//                     console.log(data, status);
//                     if(data == "choices") {
//                         url = baseUrl+"choices";
//                         window.location.href = url;
//                     }
//                     else {
//                         var errorMsg = data;
//                         document.getElementById("error").innerHTML = errorMsg;
//                     }
//                 });
//             }

//             event.preventDefault();
//         };
//         upBtn.onclick = handleClick;
//     }
// });



// // Sign-in Page
// $(document).ready(function() {
//     var inBtn = document.getElementById("in-btn");
//     if (!(inBtn == null)) {
//         var handleClick = function (event) {
//             var inForm = document.getElementById("in-form")
//             var email = inForm.elements['user_email'].value;
//             var password = inForm.elements['user_password'].value;

//             if(email=="" || password=="") {
//                 var errorMsg = "Please fill all the fields.";
//                     document.getElementById("error-msg").innerHTML = errorMsg;
//             }
//             else {
//                 url = baseUrl+"signin";
//                 $.post(url, {
//                     email: email,
//                     password: password,
//                 },function(data, status) {
//                     console.log(data, status);
//                     if(data == "recommendations") {
//                         url = baseUrl+"recommendations";
//                         window.location.href = url;
//                     }
//                     else {
//                         var errorMsg = data;
//                         document.getElementById("error-msg").innerHTML = errorMsg;
//                     }
//                 });
//             }

//             event.preventDefault();
//         };
//         inBtn.onclick = handleClick;
//     }

//     var forgotLink = document.getElementById("forgot");
//     if (!(forgotLink == null)) {
//         var handleClick = function (event) {
//             var inForm = document.getElementById("in-form")
//             var email = inForm.elements['user_email'].value;
//             if(email=="") {
//                 var errorMsg = "Please enter your email address.";
//                 document.getElementById("error-msg").innerHTML = errorMsg;
//                 event.preventDefault();
//             }
//             else {
//                 url = baseUrl+"forgot";
//                 $.post(url, {
//                     email: email,
//                 },function(data, status) {
//                     console.log(data, status);
//                     if(data == "forgot") {
//                         url = baseUrl+"forgot";
//                         window.location.href = url;
//                     }
//                     else {
//                         var errorMsg = data;
//                         document.getElementById("error-msg").innerHTML = errorMsg;
//                         event.preventDefault();
//                     }
//                 });
//             }
//         };  
//         forgotLink.onclick = handleClick;
//     }
// });




// // forgotPass Page
// $(document).ready(function() {
//     var forgotBtn = document.getElementById("forgot-btn");
//     if (!(forgotBtn == null)) {
//         var handleClick = function (event) {
//             var forgotForm = document.getElementById("forgot-form")
//             var otp = forgotForm.elements['user_otp'].value;

//             if(otp=="") {
//                 var errorMsg = "Please enter OTP.";
//                 document.getElementById("err").innerHTML = errorMsg;
//             }
//             else {
//                 url = baseUrl+"reset";
//                 $.post(url, {
//                     otp: otp,
//                 },function(data, status) {
//                     console.log(data, status);
//                     if(data == "valid") {
//                         url = baseUrl+"reset";
//                         window.location.href = url;
//                     }
//                     else {
//                         var errorMsg = data;
//                         document.getElementById("err").innerHTML = errorMsg;
//                     }
//                 });
//             }

//             event.preventDefault();
//         };
//         forgotBtn.onclick = handleClick;
//     }
// });



// // Reset Page
// $(document).ready(function() {
//     var resetBtn = document.getElementById("reset-btn");
//     if (!(resetBtn == null)) {
//         var handleClick = function (event) {
//             var resetForm = document.getElementById("reset-form")
//             var newPass = resetForm.elements['new_password'].value;

//             if(newPass=="") {
//                 var errorMsg = "Please enter new password.";
//                 document.getElementById("reset-err").innerHTML = errorMsg;
//             }
//             else {
//                 url = baseUrl+"change";
//                 $.post(url, {
//                     newPass: newPass,
//                 },function(data, status) {
//                     console.log(data, status);
//                     url = baseUrl+"recommendations";
//                     window.location.href = url;
//                 });
//             }

//             event.preventDefault();
//         };
//         resetBtn.onclick = handleClick;
//     }
// });



// // Recommendations Page

// //Movie Slider carousel
// $('.carousel').carousel({
//     interval: 5000,
//     keyboard: true
// })

// // select by genre
// function genreSelected()
// {
//     let selection = document.getElementById("genres");
//     let selectedGenre = selection.options[selection.selectedIndex].text;
//     url = baseUrl+"getByGenre";
//     $.post(url, {
//         genre: selectedGenre,
//     },function(data, status) {
//         console.log(data, status);
//         var htmlContent="";
//         for(var i=0; i<data[0].genre_movies.length; i++) {
//             htmlContent = htmlContent + "<div class='col-6 col-sm-4 col-md-2 movie-card'><a href='/movie/"+data[0].genre_movies[i]+"'><img src='"+data[1].genre_posters[i]+"' alt='' style='width: 100%;height: auto;'><p>"+data[0].genre_movies[i]+"</p></a></div>";
//         }
//         document.getElementById("genre-row").innerHTML = htmlContent;
//     });
// }

// function yearSelected() {
//     let selection = document.getElementById("years");
//     let selectedYear = selection.options[selection.selectedIndex].text;
//     url = baseUrl+"getByYear";
//     $.post(url, {
//         year: selectedYear,
//     },function(data, status) {
//         console.log(data, status);
//         var htmlContent="";
//         for(var i=0; i<data[0].year_movies.length; i++) {
//             htmlContent = htmlContent + "<div class='col-6 col-sm-4 col-md-2 movie-card'><a href='/movie/"+data[0].year_movies[i]+"'><img src='"+data[1].year_posters[i]+"' alt='' style='width: 100%;height: auto;'><p>"+data[0].year_movies[i]+"</p></a></div>";
//         }
//         document.getElementById("year-row").innerHTML = htmlContent;
//     });
// }



// // Choice Page

// var genreLimit = 3;
// $('input.genre-checkbox').on('change', function(evt) {
//     if($('input[name="genre-checkbox"]:checked').length > genreLimit) {
//         this.checked = false;
//     }
// });

// var castLimit = 5;
// $('input.cast-checkbox').on('change', function(evt) {
//     if($('input[name="cast-checkbox"]:checked').length > castLimit) {
//         this.checked = false;
//     }
// });

// var choiceBtn = document.getElementById("choice-btn");
// if (!(choiceBtn == null)) {
//     var handleClick = function (event) {
//         genres = $('input[name="genre-checkbox"]:checked').length;
//         cast = $('input[name="cast-checkbox"]:checked').length;
    
//         if(genres == 3 && cast == 5) {
//             document.getElementById("choice-form").submit();
//         }
//         else {
//             alert("Please select 3 genres and 5 casts.");
//             event.preventDefault();
//         }
//     };
//     choiceBtn.onclick = handleClick;
// }



// // Movie Page

// $(document).on('click','#thumbs-up',function(e) {
//     $("i#thumbs-up").toggleClass("active");
//     $("i#thumbs-down").removeClass("active");
// });

// $(document).on('click','#thumbs-down',function(e) {
//     $("i#thumbs-down").toggleClass("active");
//     $("i#thumbs-up").removeClass("active");
// });









/**
* Template Name: Gp
* Updated: Mar 10 2023 with Bootstrap v5.2.3
* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all)
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
          selectEl.addEventListener(type, listener)
        }
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
      let position = window.scrollY + 200
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select('#header')
      let offset = header.offsetHeight
  
      let elementPos = select(el).offsetTop
      window.scrollTo({
        top: elementPos - offset,
        behavior: 'smooth'
      })
    }
  
    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      window.addEventListener('load', headerScrolled)
      onscroll(document, headerScrolled)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
      select('#navbar').classList.toggle('navbar-mobile')
      this.classList.toggle('bi-list')
      this.classList.toggle('bi-x')
    })
  
    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function(e) {
      if (select('#navbar').classList.contains('navbar-mobile')) {
        e.preventDefault()
        this.nextElementSibling.classList.toggle('dropdown-active')
      }
    }, true)
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault()
  
        let navbar = select('#navbar')
        if (navbar.classList.contains('navbar-mobile')) {
          navbar.classList.remove('navbar-mobile')
          let navbarToggle = select('.mobile-nav-toggle')
          navbarToggle.classList.toggle('bi-list')
          navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
      }
    }, true)
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash)
        }
      }
    });
  
    /**
     * Preloader
     */
    let preloader = select('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove()
      });
    }
  
    /**
     * Clients Slider
     */
    new Swiper('.clients-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });
  
    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
      let portfolioContainer = select('.portfolio-container');
      if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item'
        });
  
        let portfolioFilters = select('#portfolio-flters li', true);
  
        on('click', '#portfolio-flters li', function(e) {
          e.preventDefault();
          portfolioFilters.forEach(function(el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');
  
          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          portfolioIsotope.on('arrangeComplete', function() {
            AOS.refresh()
          });
        }, true);
      }
  
    });
  
    /**
     * Initiate portfolio lightbox 
     */
    const portfolioLightbox = GLightbox({
      selector: '.portfolio-lightbox'
    });
  
    /**
     * Portfolio details slider
     */
    new Swiper('.portfolio-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  
    /**
     * Testimonials slider
     */
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false
      });
    });
  
    /**
     * Initiate Pure Counter 
     */
    new PureCounter();
  
  })()