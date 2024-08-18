
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('visible');
    content.classList.toggle('shifted');
}
/*logic for when the window is loaded
window.addEventListener('load', ()=>{
navImg.style.display = 'block'; 
});*/

document.getElementById('contactForm').addEventListener('submit', () => {

    var formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
    formMessage.style.color = 'purple';
formMessage.style.backgroundColor = 'yellow'
    this.reset();
});

//home toggle logic
const homeToggle = document.getElementById('home-toggle');
const welcome =document.getElementById('welcome')
homeToggle.addEventListener('click', ()=>{

about.style.display = about.style.display === 'block'? 'none':'none';
projectSection.style.display = projectSection.style.display === 'block' ?  'none' : 'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'none';
contactForm.style.display = contactForm.style.display === 'block'? 'none' : 'none';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
  navImg.style.display = window.innerWidth >= 800 ? 'grid' : 'block'; 
    formMessage.textContent = '';
    welcome.style.display = "block";
!toggleSidebar()

})
//logic to listen for the resize event so that we don't get the wrong display in the wrong view port width
window.addEventListener('resize', ()={
      navImg.style.display = window.innerWidth >= 800 ? 'grid' : 'block';
    
});


// logic for about-us toggle
const toggleLink = document.getElementById('toggle-link');

const about = document.getElementById('about');

toggleLink.addEventListener('click',()=>{
about.style.display = 'block';
projectSection.style.display = projectSection.style.display === 'block' ?  'none' : 'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'none';
contactForm.style.display = contactForm.style.display === 'block'? 'none' : 'none';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
    navImg.style.display = 'none';
    welcome.style.display = "none";
!toggleSidebar()
})

//logic for interior paints
const interior = document.getElementById("interior");
const intDiv = document.querySelector('.interior');

intDiv.addEventListener("click", () => {
interior.style.display = interior.style.display === 'none'? 'block':'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'block';
backBtn.style.display = "block"; 
})

//logic for exterior paints
const exterior = document.getElementById("exterior");
const extDiv = document.querySelector(".exterior");

extDiv.addEventListener("click",()=>{
exterior.style.display = exterior.style.display === 'none'? 'block':'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'block';
backBtn2.style.display = "block"; 
})

//logic for texture paints
const texture = document.getElementById("texture");
const textDiv = document.querySelector(".texture");

textDiv.addEventListener("click",()=>{
texture.style.display = texture.style.display === 'none'? 'block':'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'block';
backBtn3.style.display = "block"; 
});

//Logic for toggling the vision, background and goals
/*const headings = document.querySelectorAll('h3');


headings.forEach((heading) => {
  heading.addEventListener('click', () => {
    // Get the next paragraph
    const para = heading.nextElementSibling;

    // Toggle the paragraph's display
    para.style.display = para.style.display === 'none' ? 'block' : 'none';
  });
});*/

//logic to toggle contact form
const contact = document.getElementById('contact-toggle')
const contactForm = document.getElementById('contactForm')
contact.addEventListener('click', ()=>{
contactForm.style.display = 'block';
projectSection.style.display = projectSection.style.display === 'block' ?  'none' : 'none';
about.style.display = about.style.display === 'block'? 'none':'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'none';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
    navImg.style.display = 'none';
    welcome.style.display = "none";
!toggleSidebar()
})

//logic to toggle product section
const product = document.getElementById('product-toggle')

const productSection = document.querySelector('.featured-products')

product.addEventListener('click', ()=>{
productSection.style.display = 'block';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
projectSection.style.display = projectSection.style.display === 'block' ?  'none' : 'none';
about.style.display = about.style.display === 'block'? 'none':'none';
contactForm.style.display = contactForm.style.display === 'block'? 'none' : 'none';
    navImg.style.display = 'none';
    welcome.style.display = "none";
!toggleSidebar()

})
 
const ctaBtn = document.querySelector('.cta-button');

ctaBtn.addEventListener('click', ()=>{
productSection.style.display = 'block';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
projectSection.style.display = projectSection.style.display === 'block' ?  'none' : 'none';
about.style.display = about.style.display === 'block'? 'none':'none';
contactForm.style.display = contactForm.style.display === 'block'? 'none' : 'none';
    navImg.style.display = 'none';
    welcome.style.display = "none";
})

//logic to toggle the project section

const project = document.getElementById('project-toggle');

const projectSection = document.querySelector('.finished-projects')

project.addEventListener('click', ()=>{
projectSection.style.display = "block"
productSection.style.display = productSection.style.display === 'block' ? 'none':'none';
about.style.display = about.style.display === 'block'? 'none':'none';
contactForm.style.display = contactForm.style.display === 'block'? 'none' : 'none';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
    navImg.style.display = 'none';
    welcome.style.display = "none";
!toggleSidebar()
})
//logic for navigation through the images 
const interiorImg = document.getElementById('int');
const navImg = document.getElementById('nav-image')
interiorImg.addEventListener('click', ()=>{
interior.style.display = 'block'
  navImg.style.display = 'none';
  backBtn.style.display = "block";
  welcome.style.display = "none"; 
})
const exteriorImg = document.getElementById('ext');
exteriorImg.addEventListener('click', ()=>{
exterior.style.display = 'block'
  navImg.style.display = 'none'; 
  backBtn2.style.display = "block"; 
  welcome.style.display = "none";
})
const textureImg = document.getElementById('text');
textureImg.addEventListener('click', ()=>{
texture.style.display = 'block';
navImg.style.display = 'none';
backBtn3.style.display = "block"; 
welcome.style.display = "none";
})

//slideshow logic
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}
const backBtn = document.getElementById("back-to-featured");
backBtn.addEventListener("click", ()=>{
    productSection.style.display = "block";
    backBtn.style.display = "none";
    interior.style.display = 'none';
})
const backBtn2 = document.getElementById("back-to-featured2");
backBtn2.addEventListener("click", ()=>{
    productSection.style.display = "block";
    backBtn2.style.display = "none";
    exterior.style.display = 'none';
});
const backBtn3 = document.getElementById("back-to-featured3");
backBtn3.addEventListener("click", ()=>{
    productSection.style.display = "block";
    backBtn3.style.display = "none";
    texture.style.display = 'none';
});
