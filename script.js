let hamburger = document.getElementById("hamburger");
let navLinks = document.getElementById("navLinks");
let slides = document.getElementById("carousel-inner");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;

// Hamburger menu toggle
hamburger.addEventListener("click", () => {
    //if hamburger is clicked, toggle the class "show" on nav-Links ul
    navLinks.classList.toggle("show");
});

// Show the current slide based on the index

function showSlide(index) { 
    // total number of slides => 3
    const totalSlides = slides.children.length;
    //check if index is greater than total slides, if so set currentIndex to 0
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) { 
        //check if index is less than 0, if so set currentIndex to totalSlides - 1
        currentIndex = totalSlides - 1;
    } else {
        //if index is valid, set currentIndex to index
        currentIndex = index;
    }
    
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

prevBtn.addEventListener("click", () => { 
    //if prevBtn is clicked, show the previous slide
    showSlide(currentIndex - 1);
})
nextBtn.addEventListener("click", () => { 
    //if nextBtn is clicked, show the next slide
    showSlide(currentIndex + 1);
})
// change slide every 5s
setInterval(() => showSlide(currentIndex + 1), 5000);


// Form submission and validation

const form = document.getElementById("registrationForm");
const email = document.getElementById('emailInput').value.trim();
const resultDiv = document.getElementById('validationResult');

// Validate business email address
function validateBusinessEmail(email) {
    // Check if the email format is valid 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return false;
    
    const freeEmailProviders = [
        'gmail.com', 'yahoo.com', 'hotmail.com', 
        'outlook.com', 'aol.com', 'protonmail.com'
    ];
    
    const domain = email.split('@')[1].toLowerCase();
    // Check if the email contains a free domain 
    if (freeEmailProviders.includes(domain)) return false;
    
    //  Check if the email contains a business domain
    const businessTlds = ['.com', '.net', '.org', '.co', '.biz'];
    const hasBusinessTld = businessTlds.some(tld => domain.endsWith(tld));
    
    const hasSubdomain = domain.split('.').length > 2;
    
    return hasBusinessTld || hasSubdomain;
}
// Validate phone number format (11 digits)
function validatePhoneNumber(phone) {
    return /^\d{11}$/.test(phone);
}



form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the values from the form inputs
    const email = document.getElementById('emailInput').value.trim();
    const resultDiv = document.getElementById('validationResult');
    const phone = document.getElementById('phone').value.trim();

    //check if email is invalid
    if (!validateBusinessEmail(email)) {
        resultDiv.textContent = "please enter a valid business email e.g., no Gmail/Yahoo ";
        resultDiv.className = "invalid";
    }
    //check if phone is invalid
    if (!validatePhoneNumber(phone)) {
        resultDiv.textContent = "please enter a valid phone number e.g., 11 digits ";
        resultDiv.className = "invalid";
    }

    //if both email and phone are valid
    if (validateBusinessEmail(email) && validatePhoneNumber(phone)) { 
        resultDiv.textContent = "Registration successful!";
        resultDiv.className = "valid";

        // Display the form data in alert 
        const data = {
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        phone: form.phone.value,
        purpose: form.purpose.value,
    };
    alert(`Registration Submitted:\n${JSON.stringify(data, null, 2)}`);
    // Reset the form after submission
    form.reset();
    }

});






































// // script.js

// // Navbar toggle
// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("navLinks");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("show");
// });

// // Slider functionality
// const slides = document.getElementById("slides");
// const prevBtn = document.getElementById("prevBtn");
// const nextBtn = document.getElementById("nextBtn");
// let currentIndex = 0;

// function showSlide(index) {
//   const totalSlides = slides.children.length;
//   if (index >= totalSlides) currentIndex = 0;
//   else if (index < 0) currentIndex = totalSlides - 1;
//   else currentIndex = index;

//   slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
// }

// nextBtn.addEventListener("click", () => {
//   showSlide(currentIndex + 1);
// });
// prevBtn.addEventListener("click", () => {
//   showSlide(currentIndex - 1);
// });

// // Auto-slide every 5s
// setInterval(() => showSlide(currentIndex + 1), 5000);

// // Form submission
// const form = document.getElementById("registrationForm");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const data = {
//     firstName: form.firstName.value,
//     lastName: form.lastName.value,
//     email: form.email.value,
//     phone: form.phone.value,
//     purpose: form.purpose.value,
//   };
//   alert(`Registration Submitted:\n${JSON.stringify(data, null, 2)}`);
//   form.reset();
// });
