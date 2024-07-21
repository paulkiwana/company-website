function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('visible');
    content.classList.toggle('shifted');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formMessage = document.getElementById('formMessage');
    formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
    formMessage.style.color = 'green';
    this.reset();
});

const toggleLink = document.getElementById('toggle-link');

const about = document.getElementById('about');

toggleLink.addEventListener('click',()=>{
about.style.display = about.style.display === 'none'? 'block':'none';
})

//logic for interior paints
const interior = document.getElementById("interior");
const intDiv = document.querySelector('.interior');

intDiv.addEventListener("click", () => {
interior.style.display = interior.style.display === 'none'? 'block':'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'block';
})

//logic for exterior paints
const exterior = document.getElementById("exterior");
const extDiv = document.querySelector(".exterior");

extDiv.addEventListener("click",()=>{
exterior.style.display = exterior.style.display === 'none'? 'block':'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'block';
})

//logic for texture paints
const texture = document.getElementById("texture");
const textDiv = document.querySelector(".texture");

textDiv.addEventListener("click",()=>{
texture.style.display = texture.style.display === 'none'? 'block':'none';
productSection.style.display = productSection.style.display === 'block' ? 'none':'block';
})

//Logic for toggling the vision, background and goals
const headings = document.querySelectorAll('h3');


headings.forEach((heading) => {
  heading.addEventListener('click', () => {
    // Get the next paragraph
    const para = heading.nextElementSibling;

    // Toggle the paragraph's display
    para.style.display = para.style.display === 'none' ? 'block' : 'none';
  });
});

//logic to toggle contact form
const contact = document.getElementById('contact-toggle')
const contactForm = document.getElementById('contactForm')
contact.addEventListener('click', ()=>{
contactForm.style.display = contactForm.style.display === 'none'? 'block' : 'none';
})

//logic to toggle product section
const product = document.getElementById('product-toggle')

const productSection = document.querySelector('.featured-products')

product.addEventListener('click', ()=>{
productSection.style.display = productSection.style.display === 'none' ? 'block':'none';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
})
 
const ctaBtn = document.querySelector('.cta-button');

ctaBtn.addEventListener('click', ()=>{
productSection.style.display = productSection.style.display === 'none' ? 'block':'none';
interior.style.display = interior.style.display === 'block'? 'none':'none';
texture.style.display = texture.style.display === 'block'? 'none':'none';
exterior.style.display = exterior.style.display === 'block'? 'none':'none';
})

//logic to toggle the project section

const project = document.getElementById('project-toggle');

const projectSection = document.querySelector('.finished-projects')

project.addEventListener('click', ()=>{
projectSection.style.display = projectSection.style.display === 'none' ?  'block' : 'none';

})
