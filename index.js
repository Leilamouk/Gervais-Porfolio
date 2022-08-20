let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ambourouetgervais12@gmail.com",
        Password : "kinny03",
        To : 'ambourouetgervais12@gmail.com',
        From : document.getElementById("email") .value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
}