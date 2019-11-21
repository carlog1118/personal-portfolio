//open/close hamburger menu
function toggleList(){
    $('.hamburger').click(function(){
        $('.nav-list').toggleClass('hidden');
    });
}

function aboutScroll(){
    $('#js-about-me').click(function(){
        $('html, body').animate({
            scrollTop: ($('.aboutme').offset().top-100)
        },500)
    });
}

function workScroll(){
    $('#js-work').click(function(){
        $('html, body').animate({
            scrollTop: ($('.mywork').offset().top-100)
        },500)
    });
}

function contactScroll(){
    $('#js-contact').click(function(){
        $('html, body').animate({
            scrollTop: ($('.contactme').offset().top-100)
        },500)
    });
}


    
function domReady(){
    toggleList();
    aboutScroll();
    workScroll();
    contactScroll()
}

$(domReady);