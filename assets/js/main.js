$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    
    if (scroll < 400) {
        alert('test');
        $(".navbar").removeClass("bg-theme"); 
        $('#back-top').fadeOut(500);
    } else {
        alert('test');
        $(".navbar").addClass("bg-theme");
        $('#back-top').fadeIn(500);
    }
});
   