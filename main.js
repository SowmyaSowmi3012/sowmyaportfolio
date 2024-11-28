var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Web Wizard"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const homeLink = document.getElementById("home-link");
homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo(0, 0); // Scroll to the top of the page
});

document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    function handleScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                el.style.animation = el.dataset.animation + " 1s ease forwards";
            }
        });
    }

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();
});
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('show');
}

document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-links').classList.remove('show');
    });
});
function toggleMenu() {
    console.log('Hamburger clicked');
    const menu = document.querySelector('.menu-links');
    menu.classList.toggle('show');
}
function downloadFile(fileUrl, fileName) {
    const anchor = document.createElement('a');
    anchor.href = fileUrl;
    anchor.download = fileName;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
// Initialize EmailJS with your User ID
// Function to send email when the form is submitted
// Wait until the DOM is fully loaded before attaching event listeners
// Initialize EmailJS with your User ID
emailjs.init("EIar16oJpGY1D9u9w"); // Replace with your EmailJS user ID

document.addEventListener("DOMContentLoaded", function() {
    // Get the form by its ID
    const form = document.getElementById('contactForm');
  
    // Ensure the form is found before proceeding
    if (form) {
        form.addEventListener('submit', sendEmail);
    } else {
        console.error('Form with ID "contactForm" not found.');
    }
  
    // Function to handle form submission and send email using EmailJS
    function sendEmail(event) {
        event.preventDefault(); // Prevent default form submission
  
        // Send the form data to EmailJS using the service ID and template ID
        emailjs.sendForm('Sowmya', 'template_wotkenr', form) // Pass the form element here
            .then(function(response) {
                console.log('Email sent successfully:', response);
                alert('Your message has been sent successfully!');
                form.reset();
            })
            
            .catch(function(error) {
                console.error('Error sending email:', error);
                alert('There was an error sending your message. Please try again later.');
            });
    }
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting and changing the URL
  
    const formData = new FormData(this); // Collect form data
  
    // Here you would call your EmailJS API or similar service
    emailjs.sendForm('Sowmya', 'template_wotkenr',formData)
      .then(function(response) {
        console.log('Success:', response);
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  });
