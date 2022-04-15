$(document).ready(function() {

    /* DIET VARIANT */
    $('.variant-text').click(function() {
        $('.diet-variants menu').toggle('fast');
    });

    $('.diet-variants menu li').click(function() {
        $(this).parent().hide();
        $('.variant-text').text($(this).find('a').text());
        return false;
    });
    
    $('.product-container.view_mobile').click( function() {
		$('.product-container.view_mobile').removeClass('active');
		$(this).addClass('active');
	});


    /* SAME HEIGHT FOR DIET EXAMPLE */
    $('.example-diet-col').matchHeight();

    /* QUANTITY ACTIONS */
    $('.quantity-plus').on('click', function() {
        var input = $('.quantity-val');
        var current = parseFloat($(input).val());
        current++;
        $(input).val(current);
        return false;
    });

    $('.quantity-minus').on('click', function() {
        var input = $('.quantity-val');
        var current = parseFloat($(input).val());
        current--;
        if (current < 1)
            current = 1;
        $(input).val(current);
        return false;
    });

    /* CUSTOM CHECKBOX */
    $('.check-checkbox').unbind('click');
    $('.check-checkbox').on('click', function() {
        if ($(this).is('.checked')) {
            $(this).removeClass('checked');
            $(this).find('input').prop('checked', false).trigger('change');
        } else {
            $(this).addClass('checked');
            $(this).find('input').prop('checked', true).trigger('change');

        }
    });

    /* SHOW FIXED HEADER */
    $(window).scroll(function() {
        var header = $(document).scrollTop();
        var headerHeight = $("header").outerHeight();
        if (header > headerHeight) {
            $(".fixed-header").addClass("show-fixed");
        } else {
            $(".fixed-header").removeClass("show-fixed");
        }
    });


    /* SHOW FIXED MENU */
    $('.show-menu, .fixed-show-menu').click(function() {
        $('.menu-rwd-1').fadeIn('fast');
    })
    $('.menu-close').click(function() {
        $('.menu-rwd-1').fadeOut('fast');
    })

    $(".menu-content nav ul li .show-submenu").click(function() {
        if ($(this).hasClass('clicked')) {
            $(this).next().slideUp('fast');
            $(this).removeClass('clicked');
        } else {
            $(".menu-content nav ul.first-level ul").slideUp('fast');
            $(this).next().slideDown('fast');
            $(".menu-content nav ul li .show-submenu").removeClass('clicked');
            $(this).addClass('clicked');
        }
    });





});

var price = 0;
var day = 1;
cart_diet = null;

function check_cart_diet(price0, price1, price2, price3, title) {
    price = price1;
    $("#product_cal").val(title);
    $( "#price" ).html( (Math.round((price * day) * 10) / 10) );
}

$('#plus_day').click(function () {
    day++;;
    $( "#price" ).html( (Math.round((price * day) * 10) / 10) );
});

$('#minus_day').click(function () {
    day--;
    if (day < 1){
        day = 1;
    }
    $( "#price" ).html( (Math.round((price * day) * 10) / 10) );
});


$("#day_text").change(function () {
    day = $( this ).val();

    var numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
  
    if(!numberRegex.test(day)) { 
        day = 1;
        $("#day_text").val(1);
        $( "#price" ).html( 0 );
    }

    $( "#price" ).html( (Math.round((price * day) * 10) / 10) );
});


$(document).ready(function($) {

    $('.accordion').find('.accordion-title').click(function() {
        $(this).next().slideToggle('fast');
    });

    $( ".accordion-title" ).click(function() {
        $( "span", this ).toggleClass('glyphicon-circle-arrow-up glyphicon-circle-arrow-down');
    });






});
var k = false;

window.addEventListener("click", function(event) {
    var display =  $(".single-diet .diet-variants menu").css("display");

    if(display=="block" && k == true)
    {
        k = false;
        $(".single-diet .diet-variants menu").css("display", "none");
    }else if(display=="block" && k == false) {
        k = true;
    }
});




$(".single-diet .diet-variants menu li").on('click', function(event){
    k = false;
});


$(function(){ 

 var tabIMG = document.getElementsByClassName('data-src');



  var w = window.innerWidth;
  if (w > 991) {
    for (let i=0; i<tabIMG.length; i++) { //pętla po wszystkich buttonach o klasie .btn
       tabIMG[i].src = tabIMG[i].getAttribute("src-data");
    } 
  }
});




