
 document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar
    const toggleBtn = document.querySelector('.toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('visible');
        content.classList.toggle('shifted');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
            sidebar.classList.remove('visible');
            content.classList.remove('shifted');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Slideshow
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 5000);

    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function() {
       // e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message. We will get back to you soon!');
        contactForm.reset();
    });

    // Fade-in animation for sections
    const sections = document.querySelectorAll('section');
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        fadeInObserver.observe(section);
    });
});
// interior product list logic
const products = document.getElementById('products')
const interior = document.getElementById('interior')
const intBtn = document.querySelector('.interior')
const backBtn = document.getElementById("back-to-featured");
intBtn.addEventListener('click', ()=>{
    interior.style.display = 'flex'
    products.style.display ='none'
    backBtn.style.display = 'block'
})
// back to featured products section

backBtn.addEventListener("click", ()=>{
    products.style.display = "block";
    backBtn.style.display = "none";
    interior.style.display = 'none';
})

// exterior product list logic

const exterior = document.getElementById('exterior')
const extBtn = document.querySelector('.exterior')

extBtn.addEventListener('click', ()=>{
    exterior.style.display = 'flex'
    products.style.display ='none'
    backBtn2.style.display = 'block'
})
// back to featured products section
const backBtn2 = document.getElementById("back-to-featured2");
backBtn2.addEventListener("click", ()=>{
    products.style.display = "block";
    backBtn2.style.display = "none";
    exterior.style.display = 'none';
})
// texture product list logic

const texture = document.getElementById('texture')
const textBtn = document.querySelector('.texture')

textBtn.addEventListener('click', ()=>{
    texture.style.display = 'flex'
    products.style.display ='none'
    backBtn3.style.display = 'block'
})
// back to featured products section
const backBtn3 = document.getElementById("back-to-featured3");
backBtn3.addEventListener("click", ()=>{
    products.style.display = "block";
    backBtn3.style.display = "none";
    texture.style.display = 'none';
})
//gallery logic
const ideal = document.getElementById('ideal')
const residentials = document.getElementById('residentials')
const gallery = document.getElementById('gallery')
const projects = document.getElementById('projects')
const galleryBtn = document.getElementById('galleryBtn')
const gallery2 = document.getElementById('gallery2')
const galleryBtn2 = document.getElementById('galleryBtn2')

residentials.addEventListener('click', ()=>{
gallery.style.display = 'block'
projects.style.display = 'none'
galleryBtn.style.display = 'block' 
})

ideal.addEventListener('click', ()=>{
    gallery2.style.display ="block"
    projects.style.display ="none"
    galleryBtn2.style.display = 'block' 
})

galleryBtn.addEventListener('click',()=>{
    gallery.style.display = 'none'
    projects.style.display = 'block'
    galleryBtn.style.display = 'none'
})
galleryBtn2.addEventListener('click',()=>{
    gallery2.style.display = 'none'
    projects.style.display = 'block'
    galleryBtn2.style.display = 'none'
})

//CALCULATOR LOGIC... it's hella big :(
    const paintPrices = {
        silk: 13000,
        weatherguard: 14000,
        emprofile: 8000,
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
              <td>${totalLitres.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ltr(s)</td>
              <td>${buckets} bckt(s)</td>
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
  
  orderBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    calculator.style.display = calculator.style.display === "none" ? "block":"none"
    send.innerText = send.innerText === "Send Message" ? "Send Message and Order":"Send Message"
    order.innerText = order.innerText === "Paint Calculator (optional)" ? "Close Calculator": "Paint Calculator (optional)"
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

   const image = document.querySelector('.image')
   image.addEventListener("click",()=>{
       image.classList.toggle('zoom');
   })
  // document.querySelector('body').addEventListener('click',()=>{
  //  image.classList.remove('zoom');
  // })
  function openModal(src){
      document.getElementById("modalImage").src = src;
      document.getElementById("imageModal").style.display = "block";
  }
  function closeModal(){
    document.getElementById("imageModal").style.display = "none"; 
  }
  
 
