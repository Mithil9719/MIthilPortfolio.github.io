$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 1){
            $('.navbar').addClass("color");
        }else{
            $('.navbar').removeClass("color");

        }

    });
    $('.menu-btn').click(() => {
            $('.navbar .menu').toggleClass("action");
            $('.menu-btn i').toggleClass("action");
        });
});