document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".img-slide");
    const root = document.documentElement; // Access the :root
    const slideButtonsContainer = document.querySelector(".slide-buttons");
  
    const colorSets = [
      { primary: "--triplepurplee", secondary: "--triplepurplee-2", border: "--triplepurplee-3", shadow: "--triplepurplee-4", extra: "--triplepurplee-5" },
      { primary: "--orange", secondary: "--orange-2", border: "--orange-3", shadow: "--orange-4", extra: "--orange-5" },
      { primary: "--pink", secondary: "--pink-2", border: "--pink-3", shadow: "--pink-4", extra: "--pink-5" },
      { primary: "--green", secondary: "--green-2", border: "--green-3", shadow: "--green-4", extra: "--green-5" },
      { primary: "--caju", secondary: "--caju-2", border: "--caju-3", shadow: "--caju-4", extra: "--caju-5" },
    ];
  
    const textSets = [
        {
            extra: "True fruits",
            title: "Smoothie triple purple",
            subtitle: "More vibrant lifestyle starts with AGAVE",
            description: "Naturally flavored with blackberry, blueberry, raspberry, orange, banana and apple.",
        },
        {
            extra: "True fruits",
            title: "Smoothie orange",
            subtitle: "More vibrant lifestyle starts with AGAVE",
            description: "Naturally flavored with goji, mango, banana, acerola and apple.",
        },
        {
            extra: "True fruits",
            title: "Smoothie pink",
            subtitle: "More vibrant lifestyle starts with AGAVE",
            description: "Naturally flavored with pink dragon fruit, banana, guanabana and apple.",
        },
        {
            extra: "True fruits",
            title: "Smoothie green",
            subtitle: "More vibrant lifestyle starts with AGAVE",
            description: "Naturally flavored with chlorella, mint, carrot, pear, arugula, mango and apple.",
        },
        {
            extra: "True fruits",
            title: "Smoothie green v2",
            subtitle: "More vibrant lifestyle starts with AGAVE",
            description: "Naturally flavored with mint, lime, caju, banana, orange, apple and pineapple.",
        },
    ];
  
    const extraDiv = document.querySelector(".content .extra");
    const titleDiv = document.querySelector(".content .title");
    const subtitleDiv = document.querySelector(".content .subtitle");
    const descriptionDiv = document.querySelector(".content .description");
  
    let currentIndex = 0;
    let interval;
  
    // Create navigation buttons
    images.forEach((_, index) => {
      const button = document.createElement("button");
      button.dataset.index = index;
      button.addEventListener("click", () => goToSlide(index));
      slideButtonsContainer.appendChild(button);
    });
  
    const buttons = slideButtonsContainer.querySelectorAll("button");
  
    function goToSlide(index) {
      // Stop automatic sliding
      clearInterval(interval);
  
      // Update images
      const currentImage = images[currentIndex];
      const nextImage = images[index];
  
      currentImage.classList.add("slide-out");
      currentImage.classList.remove("active");
  
      nextImage.classList.remove("hidden");
      nextImage.classList.add("slide-in");
  
      setTimeout(() => {
        currentImage.classList.add("hidden");
        currentImage.classList.remove("slide-out");
  
        nextImage.classList.remove("slide-in");
        nextImage.classList.add("active");
      }, 300);
  
      // Update colors
      currentIndex = index;
      changeColors();
      updateTexts();
      updateButtons();
  
      // Restart the interval
      startInterval();
    }
  
    function changeColors() {
      const colors = colorSets[currentIndex];
      root.style.setProperty("--triplepurple", `var(${colors.primary})`);
      root.style.setProperty("--triplepurple-2", `var(${colors.secondary})`);
      root.style.setProperty("--triplepurple-3", `var(${colors.border})`);
      root.style.setProperty("--triplepurple-4", `var(${colors.shadow})`);
      root.style.setProperty("--triplepurple-5", `var(${colors.extra})`);
    }
  
    function updateTexts() {
      const texts = textSets[currentIndex];
      extraDiv.textContent = texts.extra;
      titleDiv.textContent = texts.title;
      subtitleDiv.textContent = texts.subtitle;
      descriptionDiv.textContent = texts.description;
    }
  
    function updateButtons() {
      buttons.forEach((button, index) => {
        button.classList.toggle("active", index === currentIndex);
      });
    }
  
    function startInterval() {
      interval = setInterval(() => goToSlide((currentIndex + 1) % images.length), 3000);
    }
  
    // Initialize
    updateButtons();
    startInterval();
  });



  // nav-btn
  let navbtn = document.querySelector(".nav-btn");

  document.querySelector(".hamburger-menu").onclick = () => {
    navbtn.classList.toggle("active");
    // searchForm.classList.remove("active");
    cartItem.classList.remove("active");
  };
  
  // let searchForm = document.querySelector(".search-form");
  
  // document.querySelector("#search-btn").onclick = () => {
  //   searchForm.classList.toggle("active");
  //   navbtn.classList.remove("active");
  //   cartItem.classList.remove("active");
  // };
  
  let cartItem = document.querySelector(".cart-items-container");
  
  document.querySelector(".btn-carrito").onclick = () => {
    cartItem.classList.toggle("active");
    navbtn.classList.remove("active");
    searchForm.classList.remove("active");
  };
  
  window.onscroll = () => {
    navbtn.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
  };
  
  
  // nav-btn
  

  // FORM
  // function myFunction() {
  //   document.getElementById("frm1").submit();
  // }

  // const results = document.getElementById("form-control");
  // function myFunction2() {
  //   let text = results.value;
  //   document.getElementById("show").innerHTML = text;
  // }

  // FORM ENDS