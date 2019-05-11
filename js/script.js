$(document).ready(function(){

    // Toggle Button
    $('.btn').click(function(){
    	 $('.nav-links').slideToggle(3000);
    	 $('.btn').toggleClass('change');
    })
    
    // Transparent Background
     $(window).scroll(function(){
         
         let position = $(window).scrollTop();

         if(position>=100){
         	  $('nav, nav-container').addClass('navBackground');
         }else{
         	 $('nav, nav-container').removeClass('navBackground');
         }

     })


     // Smooth
     $('.nav-links a').click(function(link){
          
          link.preventDefault();

            let target = $(this).attr('href');

            $('html, body').stop().animate({
            	 scrollTop:$(target).offset().top
            },1000)

     })
})