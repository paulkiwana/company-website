function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('visible');
    content.classList.toggle('shifted');
}

//submit contact form code
document.getElementById('contactForm').addEventListener('submit', () => {

    var formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
    formMessage.style.color = 'purple';
formMessage.style.backgroundColor = 'yellow'
    this.reset();
});

//home toggle logic
const homeToggle = document.getElementById('home-toggle');
//global variable to allow me call this logic in the side bar navs 
//and header navs without having to write it again #low-redundancy :) :D ;)

const func2 = () => {
about.style.display = about.style.display === 'block'? 'none':'none';
projectSection.style.display = projectSection.style.display === 'block' ?  'none' : 'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'none';
contactForm.style.display = contactForm.style.display === 'block'? 'none' : 'none';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
    navImg.style.display = window.innerWidth >= 800 ? 'grid' : 'block';
    formMessage.textContent = '';
    navImg.classList.add('animate')
}
//when the sidebar home nav is clicked
homeToggle.addEventListener('click', ()=>{
    func2()
!toggleSidebar()//my own algorithm :D
})
// header home tag
const headerHome = document.getElementById('header-home');
headerHome.addEventListener('click', func2)// header home tag

//resize window listener
window.addEventListener('resize', ()=>{
navImg.style.display = window.innerWidth >= 800 ? 'grid' : 'block';
const sections = document.querySelectorAll('.section')
sections.forEach(section=>{

if(section.style.display ==='block'){
navImg.style.display = 'none';
}

})
    
 //my own algorithm :D :) refactored no idea why I was so afraid of using forEach
})

//click content to toggle the side bar you might not always instinctively click the toggle button 
const content = document.querySelector('.content')
content.addEventListener('click', ()=>{
    if(sidebar.classList.toggle('visible')&content.classList.toggle('shifted')){
        !toggleSidebar()//my own algorithm :D :)
        
    }
})//my own algorithm :D

// logic for about-us toggle
const toggleLink = document.getElementById('toggle-link');

const about = document.getElementById('about');
//global variable
const func1 = () => {
about.style.display = 'block';
projectSection.style.display = projectSection.style.display === 'block' ?  'none' : 'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'none';
contactForm.style.display = contactForm.style.display === 'block'? 'none' : 'none';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
    navImg.style.display = 'none';
   } 
   // when the sidebar about button is clicked :) 
toggleLink.addEventListener('click',()=>{
   func1()
!toggleSidebar()//my own algorithm :D
})
// header about tag
const headerAbout = document.getElementById('header-about');
headerAbout.addEventListener('click', func1)// header about tag

//logic for interior paints
const interior = document.getElementById("interior");
const intDiv = document.querySelector('.interior');



intDiv.addEventListener("click", () => {
interior.style.display = interior.style.display === 'none'? 'block':'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'block';
backBtn.style.display = "block"; 
interior.classList.add('animate')
})

//logic for exterior paints
const exterior = document.getElementById("exterior");
const extDiv = document.querySelector(".exterior");


extDiv.addEventListener("click",()=>{
exterior.style.display = exterior.style.display === 'none'? 'block':'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'block';
backBtn2.style.display = "block"; 
exterior.classList.add('animate')

})

//logic for texture paints
const texture = document.getElementById("texture");
const textDiv = document.querySelector(".texture");

textDiv.addEventListener("click",()=>{
texture.style.display = texture.style.display === 'none'? 'block':'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'block';
backBtn3.style.display = "block"; 
texture.classList.add('animate')

});

//logic to toggle contact form
const contact = document.getElementById('contact-toggle')
const contactForm = document.getElementById('contactForm')
// contact form global variable
const func5 = ()=> {
    contactForm.style.display = 'block';
projectSection.style.display = projectSection.style.display === 'block' ?  'none' : 'none';
about.style.display = about.style.display === 'block'? 'none':'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'none';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
    navImg.style.display = 'none';
}
//sidebar nav
contact.addEventListener('click', ()=>{
func5()
!toggleSidebar()//my own algorithm :D
})
// header contact nav 
const headerContact = document.getElementById('header-contact');
headerContact.addEventListener('click', func5)

//logic to toggle product section
const product = document.getElementById('product-toggle')

const productSection = document.querySelector('.featured-products')
// global variable for all the product navigation tags
const func3 = () => {
    productSection.style.display = 'block';
    interior.style.display = interior.style.display === 'block'? 'none':'none';
    texture.style.display = texture.style.display === 'block'? 'none':'none';
    exterior.style.display = exterior.style.display === 'block'? 'none':'none';
    projectSection.style.display = projectSection.style.display === 'block' ?  'none' : 'none';
    about.style.display = about.style.display === 'block'? 'none':'none';
    contactForm.style.display = contactForm.style.display === 'block'? 'none' : 'none';
        navImg.style.display = 'none';
        productSection.classList.add('animate');
        }
        //sidebar product nav tag
product.addEventListener('click', ()=>{
    func3()
!toggleSidebar()//my own algorithm :D
})
 // explore products button
const ctaBtn = document.querySelector('.cta-button');
ctaBtn.addEventListener('click', func3)

// header product tag, it wasnt working before because
// I was calling the function before it was declared. rookie mistakes ;)
const headerProduct = document.getElementById('header-product');
headerProduct.addEventListener('click', func3)

//logic to toggle the project section

const project = document.getElementById('project-toggle');
const projectSection = document.getElementById('projects')
const func4 = () =>{
     projectSection.style.display = "block";
productSection.style.display = productSection.style.display === 'block' ? 'none':'none';
about.style.display = about.style.display === 'block'? 'none':'none';
contactForm.style.display = contactForm.style.display === 'block'? 'none' : 'none';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
    navImg.style.display = 'none';
}
// side bar project nav tag
project.addEventListener('click', ()=>{
   func4()
!toggleSidebar()//my own algorithm :D
})

// header project tag
const headerProject = document.getElementById('header-project');
headerProject.addEventListener('click', func4)

//logic for navigation through the images 
const interiorImg = document.getElementById('int');
const navImg = document.getElementById('nav-image')
interiorImg.addEventListener('click', ()=>{
interior.style.display = 'block'
  navImg.style.display = 'none';
  backBtn.style.display = "block";
})

const exteriorImg = document.getElementById('ext');
exteriorImg.addEventListener('click', ()=>{
exterior.style.display = 'block'
  navImg.style.display = 'none'; 
  backBtn2.style.display = "block"; 
})

const textureImg = document.getElementById('text');
textureImg.addEventListener('click', ()=>{
texture.style.display = 'block';
navImg.style.display = 'none';
backBtn3.style.display = "block"; 

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
}//chatgpt algorithm
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

/*document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});*/
 
