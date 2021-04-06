function scrollSuave(selector){
    $(selector).click(function(event){
        event.preventDefault();
        var target = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(target).offset().top
    },1000)
    });    

}

scrollSuave('a[href*=panel-about');
scrollSuave('a[href*=panel-speakers');
scrollSuave('a[href*=panel-form');
