function wlcm(e){
    e.preventDefault()
    var x=document.getElementById("username").value;
    document.getElementById("loginusername").innerHTML=x;
    var y=document.getElementById("password").value;  
    if (x==null || x==""){  
      alert("Name can't be blank");  
      return ;  
    }else if(y.length<6){  
      alert("Password must be at least 6 characters long.");  
      return ;  
      } 
      else{
        document.getElementById("loginusername").innerHTML=x;
        $('.login-form').removeClass('popup');
      } 
      
    } 
    $(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });

    function validate()
    { 
        var user
    }

    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });

    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        $('.login-form').removeClass('popup');

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let id = $(this).attr('id');
            let offset = $(this).offset().top - 200;

            if(top > offset && top < offset + height){
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }


        });

    });
    
}); 

function sendEmail(){
    Email.send({
       Host : "smtp.elasticemail.com",
       Username : "anuparasakthi6@gmail.com",
       Password : "4BDEA013ACF1DB4501DE2BC2A24999A13511",
       To : "anuparasakthi6@gmail.com",
       From : document.getElementById("email").value,
       Subject : "New Contact Form ",
       Body :  "Name:"+ document.getElementById("name").value
       +"<br> Email:"+ document.getElementById("email").value
       +"<br> Message:"+ document.getElementById("message").value
    }).then(
    
    message => alert("Message send succesfully")
    );
}
