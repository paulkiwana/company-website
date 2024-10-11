function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('visible');
    content.classList.toggle('shifted');
}

//submit contact form code
const sendBtn = document.getElementById("send")
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
    navImg.style.display = window.innerWidth >= 768 ? 'grid' : 'block';
   text.style.width = window.innerWidth >= 650  ? '655px' : '380px';//this code is absolute guess work
   navImg.style.display = window.innerWidth >= 650 ? 'grid' : 'block';//this code is absolute guess work
    formMessage.textContent = '';
    navImg.classList.add('animate')
    gallery.style.display = 'none'
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
navImg.style.display = window.innerWidth >= 768 ? 'grid' : 'block';
 text.style.width = window.innerWidth >= 650  ? '655px' : '380px';//this code is absolute guess work
 navImg.style.display = window.innerWidth >= 650 ? 'grid' : 'block';//this code is absolute guess work
const sections = document.querySelectorAll('.section')
sections.forEach(section=>{

if(section.style.display ==='block'){
navImg.style.display = 'none';
}

})
    
    if(gallery.style.display==='block'){
      navImg.style.display = 'none';
    }
    if(sidebar.classList.toggle('visible')&content.classList.toggle('shifted')){
      !sidebar.classList.toggle('visible');
      !content.classList.toggle('shifted');
    }
 
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
    gallery.style.display = 'none'
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
    gallery.style.display = 'none'
    
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
        gallery.style.display = 'none';
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
    gallery.style.display = 'none'
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
 
const galleryLink = document.getElementById('gallery-link');
const gallery = document.getElementById('gallery');

galleryLink.addEventListener('click', ()=>{
  gallery.style.display = 'block'
 projectSection.style.display = "none"
});

const project2 = document.getElementById('project2')

project2.addEventListener('click',()=>{
  gallery.style.display = 'block'
 projectSection.style.display = "none"
})
const galleryBckBtn = document.getElementById("galleryBtn")

galleryBckBtn.addEventListener("click",()=>{
  gallery.style.display = 'none'
 projectSection.style.display = "block"
})

const paintPrices = {
      silk: 15000,
      weatherguard: 20000,
      emprofile: 20000,
      matt: 10000,
      undercoat: 2500,
      stucco: 25000,
      primer: 3000
    };

    //const paintTypesContainer = document.getElementById('paint-types');
    const paintTypesContainer = document.getElementById('paint-type-${paintTypeIndex}')
    
    const resultDiv = document.getElementById('result');
const calculator = document.querySelector('.calculator')


//colorInputFunction()
    
let paintTypeIndex = 0;
let firstPaintTypeAdded = false
// Function to add new paint type


function addPaintType() {
    if (firstPaintTypeAdded) {
        const previousPaintTypeFields = document.getElementById(`paint-type-${paintTypeIndex}`);
        
        // Check if previous fields are filled
        if (
            previousPaintTypeFields.querySelector(`#paintType-${paintTypeIndex}`).value !== '' &&
            previousPaintTypeFields.querySelector(`#squareMeters-${paintTypeIndex}`).value !== '' &&
            previousPaintTypeFields.querySelector(`#color-${paintTypeIndex}`).value !== '' &&
            previousPaintTypeFields.querySelector(`#coats-${paintTypeIndex}`).value !== ''
        ) {
            paintTypeIndex++;
            const paintTypeHTML = `
                <div id="paint-type-${paintTypeIndex}">
                    <div class="paint-type">
                        <label>Paint Type:</label>
                        <select id="paintType-${paintTypeIndex}" name="paintType">
                            <option value="silk">Silk</option>
                            <option value="weatherguard">Weatherguard</option>
                            <option value="emprofile">Emprofile</option>
                            <option value="matt">Matt</option>
                            <option value="undercoat">Undercoat</option>
                            <option value="stucco">Stucco</option>
                             <option value="primer">Primer</option>
                        </select>
                        <label>Square Meters:</label>
                        <input type="number" id="squareMeters-${paintTypeIndex}" name="squareMeters">
                        <label>Color:</label>
                        <input type="text" id="color-${paintTypeIndex}" name="color" href="#colorChart" placeholder="select from color chart" class="colorInput">
                        <label>Number of Coats:</label>
                        <input type="number" id="coats-${paintTypeIndex}" name="coats">
                    </div>
                </div>
            `;
            
        
            paintTypesContainer.insertAdjacentHTML('beforeend', paintTypeHTML);
            storePaintTypeValues(); // Store values on add
        } else {
            alert('Please fill in the previous fields before adding a new paint type.');
        }
    } else {
        firstPaintTypeAdded = true;
        paintTypeIndex++;
        const paintTypeHTML = `
            <div id="paint-type-${paintTypeIndex}">
                <div class="paint-type">
                    <label>Paint Type:</label>
                    <select id="paintType-${paintTypeIndex}" name="paintType">
                        <option value="silk">Silk</option>
                        <option value="weatherguard">Weatherguard</option>
                        <option value="emprofile">Emprofile</option>
                        <option value="matt">Matt</option>
                        <option value="undercoat">Undercoat</option>
                        <option value="stucco">Stucco</option>
                        <option value="primer">Primer</option>
                    </select>
                    <label>Square Meters:</label>
                    <input type="number" id="squareMeters-${paintTypeIndex}" name="squareMeters">
                    <label>Color:</label>
                    <input type="text" id="color-${paintTypeIndex}" name="color" href="#colorChart" placeholder="select from color chart?" class="colorInput">
                    <label>Number of Coats:</label>
                    <input type="number" id="coats-${paintTypeIndex}" name="coats">
                </div>
            </div>
        `;
        
    
        paintTypesContainer.insertAdjacentHTML('beforeend', paintTypeHTML);
        storePaintTypeValues(); // Store values on add
    }
}

// Add event listener to "Add Paint Type" button
const addPaintTypeButton = document.getElementById('add-paint-type')
addPaintTypeButton.addEventListener('click', ()=>{
  firstChildPaintValue = document.getElementById("paintType-${paintTypeIndex}").value
  firstChildSquareMetersValue = document.getElementById("squareMeters-${paintTypeIndex}").value
  firstChildColorValue = document.getElementById("color-${paintTypeIndex}").value
  firstChildCoatsValue = document.getElementById("coats-${paintTypeIndex}").value
  if(!firstChildPaintValue ||
  !firstChildSquareMetersValue||
  !firstChildColorValue||
  !firstChildCoatsValue){
    return alert('Please fill in the previous fields before adding a new paint type.');
    
  }else{
    addPaintType()
  }
  

     
});
//Add paint type if 

// Store input values in local storage
function storePaintTypeValues() {
  const paintTypes = [];
  Array.from(paintTypesContainer.children).forEach((paintType) => {

    const paintTypeValue = paintType.querySelector('select').value;
    const squareMeters = paintType.querySelector('input[type="number"][name="squareMeters"]').value;
    const color = paintType.querySelector('input[type="text"][name="color"]').value;
    const coats = paintType.querySelector('input[type="number"][name="coats"]').value;
    paintTypes.push({ paintType: paintTypeValue, squareMeters, color, coats });
    
  });
  localStorage.setItem('paintTypes', JSON.stringify(paintTypes));
}

// Retrieve stored values and populate fields on page load
//document.addEventListener('DOMContentLoaded', retrievePaintTypeValues);

function retrievePaintTypeValues() {
  const storedPaintTypes = JSON.parse(localStorage.getItem('paintTypes'));
  if (storedPaintTypes) {
    storedPaintTypes.forEach((paintType, index) => {
     const paintTypeElement = paintTypesContainer.children[index];
      paintTypeElement.querySelector('select').value = paintType.paintType;
      paintTypeElement.querySelector('input[type="number"][name="squareMeters"]').value = paintType.squareMeters;
      paintTypeElement.querySelector('input[type="text"][name="color"]').value = paintType.color;
      paintTypeElement.querySelector('input[type="number"][name="coats"]').value = paintType.coats;
      
     
    });
  
    }


}

document.getElementById('calculate').addEventListener('click',calculateQuote);

/*function calculateQuote() {
  const resultHtml = [];
  const paintTypes = paintTypesContainer.children;
  Array.from(paintTypes).forEach((paintType, index) => {
    

    const paintTypeValue = paintType.querySelector('select').value;
    const squareMetersValue = parseFloat(paintType.querySelector('input[name="squareMeters"]').value);
    const colorValue = paintType.querySelector('input[name="color"]').value;
    const coatsValue = parseInt(paintType.querySelector('input[name="coats"]').value);

    // Check for null values
    if (!paintTypeValue || !squareMetersValue || !colorValue || !coatsValue) return;
    
    const totalCost = squareMetersValue * coatsValue * paintPrices[paintTypeValue];
    const totalLitres = squareMetersValue * coatsValue;
    const buckets = totalLitres / 20;
    resultHtml.push(`
      ${paintTypeValue} - ${colorValue}
      Total Cost: shs${totalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      Total litres: ${totalLitres.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} litres (${buckets} bucket(s))
    `);
  });

  // Display results
  resultDiv.value = resultHtml.join('\n\n');
}*/

function calculateQuote() {
    const resultHtml = [];
    const paintTypes = paintTypesContainer.children;
    const tableHeaders = ['Paint Type', 'Color', 'Total Cost', 'Total Litres', 'Buckets'];

    // Create table header
    resultHtml.push('<table>');
    resultHtml.push('<tr>');
    tableHeaders.forEach(header => {
        resultHtml.push(`<th>${header}</th>`);
    });
    resultHtml.push('</tr>');

    Array.from(paintTypes).forEach((paintType, index) => {
        const paintTypeValue = paintType.querySelector('select').value;
        const squareMetersValue = parseFloat(paintType.querySelector('input[name="squareMeters"]').value);
        const colorValue = paintType.querySelector('input[name="color"]').value;
        const coatsValue = parseInt(paintType.querySelector('input[name="coats"]').value);

        // Check for null values
        if (!paintTypeValue || !squareMetersValue || !colorValue || !coatsValue) return;

        const totalCost = squareMetersValue * coatsValue * paintPrices[paintTypeValue];
        const totalLitres = squareMetersValue * coatsValue;
        const buckets = totalLitres / 20;

        // Create table row
        resultHtml.push('<tr>');
        resultHtml.push(`
            <td>${paintTypeValue}</td>
            <td>${colorValue}</td>
            <td>shs${totalCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
            <td>${totalLitres.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} litres</td>
            <td>${buckets} bucket(s)</td>
        `);
        resultHtml.push('</tr>');
    });

    // Close table
    resultHtml.push('</table>');

    // Join and display resultHtml
    const resultHtmlString = resultHtml.join('');
    const result = document.getElementById('result');
    
    result.innerHTML = resultHtmlString
    const paintQuote = document.getElementById('paint-quote')
    
    paintQuote.value = result.innerText
   console.log(paintQuote.value)
}


const colorPalette = document.querySelector('.color-palette');
const selectedColorHex = document.getElementById('selected-color-hex');
const selectedColorRgb = document.getElementById('selected-color-rgb');

// Create color swatches dynamically (replace with your color data)
const colors = [


  ["Red", "#FF0000"],
  ["Crimson", "#CC0000"],
  ["Deep Pink", "#FF0033"],
  ["Firebrick", "#FF3333"],
  ["Burnt Orange", "#CC3300"],
  ["Orange Red", "#FF3300"],
  ["Dark Orange", "#FF9900"],
  ["Amber", "#FFCC66"],
  ["Tangerine", "#FFCC99"],
  ["Golden Rod", "#FFCC00"],
  ["Chocolate", "#CC6600"],
  ["Yellow", "#FFFF00"],
  ["Lemon Chiffon", "#FFFF66"],
  ["Light Yellow", "#FFFF99"],
  ["Mint Cream", "#F0F001"],
  ["Green", "#008000"],
  ["Lime Green", "#009900"],
  ["Medium Sea Green", "#00CC00"],
  ["Lime", "#00FF00"],
  ["Pale Green", "#33CC33"],
  ["Yellow Green", "#99CC00"],
  ["Forest Green", "#004400"],
  ["Hunter Green", "#005500"],
  ["Navy Blue", "#0000FF"],
  ["Steel Blue", "#3366CC"],
  ["Sky Blue", "#3399FF"],
  ["Blue Grey", "#6699CC"],
  ["Light Blue Grey", "#C9E4CA"],
  ["Purple", "#660066"],
  ["Plum", "#770077"],
  ["Violet", "#880088"],
  ["Magenta", "#990099"],
  ["Fuchsia", "#CC00CC"],
  ["Pastel Pink", "#FF3399"],
  ["Pastel Purple", "#110011"],
  ["Dark Maroon", "#330022"],
  ["Dark Navy", "#003333"],
  ["Dark Grey", "#333"],
  ["Light Grey", "#eee"],
  ["Black", "#000000"],
  ["Grey", "#444444"],
  ["Grey Brown", "#886666"],
  ["Olive Drab", "#774400"],
  ["Brown", "#663300"],
  ["White Smoke", "#F1F1F1"],
  ["Silver", "#C0C0C0"],
  ["Snow", "#F7F7F7"],
  ["Gainsboro", "#D3D3D3"],
  ["Beige", "#F5F5DC"],
  ["Pink", "#FFC0CB"],
  ["Light Salmon", "#FF6666"],
  ["Light Coral", "#FFB6C1"],
  ["White", "#FFFFFF"],["white oak","#F5F5DC"],["light oak","#F0E4CC"],["dark oak","#964B00"]


  // Add more color hex codes here
];


colors.forEach((color) => {
  const colorSwatch = document.createElement('div');
  colorSwatch.classList.add('color-swatch');
  colorSwatch.style.backgroundColor = color[1];
  colorSwatch.innerText = `${color[0]}`;

  colorSwatch.addEventListener('click', () => {
    const paintTypes = paintTypesContainer.children;
     if (paintTypes.length > 0) {
      const lastPaintTypeIndex = paintTypes.length - 1;
      const colorField = document.getElementById(`color-${lastPaintTypeIndex}`);
      if (colorField) {
        colorField.value = color[0];
        colorChart.style.display = 'none'
        selectedColorHex.textContent = color[0];
       
       
      }
      firstChildColorField = document.getElementById("color-${paintTypeIndex}")
    if(firstChildColorField){
    firstChildColorField.value = color[0]
    
    }
   colorChart.style.display = 'none'
    }
    //first child swatch logic
   
  });
  
  colorPalette.appendChild(colorSwatch);
});




const orderBtn = document.getElementById('order');

orderBtn.addEventListener('click',()=>{
  calculator.style.display = calculator.style.display === "none" ? "block":"none"
  send.innerText = send.innerText === "Send Message" ? "Send Message and Order":"Send Message"
  colorChart.style.display = colorChart.style.display === 'block'? 'none':'none'
})
const colorChartBtn = document.getElementById('color-chart')
const colorChart = document.querySelector('.color-chart')

colorChartBtn.addEventListener('click', ()=>{
  colorChart.style.display = colorChart.style.display === 'none'? 'block':'none'
  colorChart.scrollIntoView({behavior:'smooth'})
})



 const reset = document.getElementById('reset')
 reset.addEventListener('click',()=>{
   result.innerHTML = "";
   while (paintTypesContainer.children.length > 1) {
    paintTypesContainer.removeChild(paintTypesContainer.lastChild);
}
document.querySelector('input[name="squareMeters"]').value =""
document.querySelector('input[name="color"]').value =""
document.querySelector('input[name="coats"]').value =""
 })