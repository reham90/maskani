$(document).ready(function() {

// js for select box //
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
// end js for select box //

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// start js for navbar //
if($(window).width()<991){
(function($) { // Begin jQuery36.
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
$('.nav-dropdown').not($(this).siblings()).hide();
      
e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
       
    });
    $('.dropdown').click(function(e) {
      $('.drop-mobile').slideToggle();
      // Close one dropdown when selecting another
    });
    // Toggle open and close nav styles on click
    $('.nav-toggle').click(function() {
$(".re-show").toggle();
$(".re-hide").css("display" ,"block");
$(".cover").toggle();
    });
  $('.re-show').click(function(event) {
 if (document.dir=="rtl") {
     $('nav ').css("right" , "0");
}
else{
    $('nav ').css("left" , "0");

}
    $("body").css("overflow" , "hidden");
$(".navv").toggle();
  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});
$('.re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");
 $(".cover").toggle();
 $(".re-show").toggle();
});
 $('.cover').on('click', function() {
$(".re-hide").click();
 });
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"
}
if($(window).width()>991){
  (function($) { // Begin jQuery36.
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
 
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
       
    });
    // Toggle open and close nav styles on click
    $('.nav-toggle').click(function() {
$(".re-show").toggle();
$(".re-hide").css("display" ,"block");
$(".cover").toggle();
    });
  $('.re-show').click(function(event) {
 if (document.dir=="rtl") {
     $('nav ').css("right" , "0");
}
else{
    $('nav ').css("left" , "0");

}
    $("body").css("overflow" , "hidden");
$(".navv").toggle();
  if ($('.nav-list').hasClass('dismiss')) {
    $('.nav-list').removeClass('dismiss').addClass('selected').show();
  }
  event.preventDefault();
});
$('.re-hide').click(function(event) {
  if ($('.nav-list').hasClass('selected')) {
    $('.nav-list').removeClass('selected').addClass('dismiss');
  }
  event.preventDefault();
 $("body").css("overflow" , "auto");
 $(".cover").toggle();
 $(".re-show").toggle();
});
 $('.cover').on('click', function() {
$(".re-hide").click();
 });
    
  }); // end DOM ready
})(jQuery); // end jQuery83"9?"
}
// end  js for navbar //


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// start footer accordion  //
if($(window).width()<991){
   var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function myFunction(y) {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
});
}
}
//end footer accordion //

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// start slider carousel //
   var owl = $('.slider');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            }

        }
    })
  
// end slider carousel //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// product carousel //

    var owl = $('.product');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items:3
            },
            1200: {
                items: 6
            }

        }
    })
  
// end product carousel //

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// start slider-2 carousel //
   var owl = $('.slider-2');
    owl.owlCarousel({
        margin: 10,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1200: {
                items: 1
            }

        }
    })
  
// end slider-2 carousel //

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// products-to-buy carousel //

    var owl = $('.products-to-buy');
    owl.owlCarousel({
        margin: 30,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items:2
            },
            1200: {
                items: 6
            }

        }
    })
  
// end products-to-buy carousel //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// brands carousel //

    var owl = $('.brand');
    owl.owlCarousel({
        margin: 23,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items:2
            },
            1200: {
                items: 8
            }

        }
    })
  
// end brands carousel //

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// feature carousel //
if($(window).width()<991){
    var owl = $('.feature');
    owl.owlCarousel({
        margin: 23,
        nav: true,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='far fa-angle-right'></i>", "<i class='far fa-angle-left'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items:1
            },
            1200: {
                items: 1
            }

        }
    });
  };
  // end feature carousel //
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/// wow js ///
new WOW().init();
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// scroll to top button //
var btn = $('.myBtn');

$(window).scroll(function() {

});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
var atr = 0;
    $('.scroll-down').click(function () {
        atr = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(atr).offset().top
        }, 1000);

        return false;
    });
// end scroll to top button //

// search for mobile //
    $(".search-icon").click(function() {
        $(".search-screen").addClass("active");
    });

    // Remove Active Class
    $(".close-icon").click(function() {
        $(".search-screen").removeClass("active");
    });




// end search for mobile // 

// js for megamenu tabs //
function openElectric(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// end js for megamenu tabs //