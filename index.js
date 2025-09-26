
document.querySelectorAll(".dropdown").forEach((item) => {
  item.addEventListener("click", () => {
    
    if (item.classList.contains("open")) {
      item.classList.remove("open");
      item.nextElementSibling?.remove();
    } else {
      
      document.querySelectorAll(".dropdown.open").forEach((openItem) => {
        openItem.classList.remove("open");
        openItem.nextElementSibling?.remove();
      });

      
      item.classList.add("open");

     
      const answer = document.createElement("div");
      answer.classList.add("dropdown-answer");
      answer.style.padding = "10px 16px";
      answer.style.fontSize = "14px";
      answer.style.color = "#555";

      
      if (item.textContent.includes("Sizing")) {
        answer.textContent = "We provide multiple sizes (S, M, L). Please check the size chart for guidance.";
      } else if (item.textContent.includes("Free resizing")) {
        answer.textContent = "Yes! We offer one free resizing within 30 days of purchase.";
      } else if (item.textContent.includes("Money back")) {
        answer.textContent = "We provide a 30-day money-back guarantee with free returns.";
      }

      item.insertAdjacentElement("afterend", answer);
    }
  });
});


const mainImage = document.querySelector(".product-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    
    thumbnails.forEach((t) => t.classList.remove("active"));

    
    thumb.classList.add("active");

    
    const newSrc = thumb.querySelector("img").src;
    mainImage.src = newSrc;
  });
});


