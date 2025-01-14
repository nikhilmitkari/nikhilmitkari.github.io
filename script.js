// script.js
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
       event.preventDefault();  // Prevent the default form submission

       // Collect form data
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const message = document.getElementById('message').value;

       // EmailJS configuration
       emailjs.init("MqfT9E_0vLXBcP8-J"); 

       emailjs.send('service_mf7a1m6', 'template_a056cwp', {
           from_name: name,
           from_email: email,
           message: message
       })
       .then((response) => {
           alert('Your message was sent successfully!');
       }, (error) => {
           alert('Failed to send message. Please try again.');
       });
   });
});
    