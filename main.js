const dynamicText = document.getElementById('dynamicText');
const words = [ 'a Web developer', 'a designer', 'a Django developer'];
let wordIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < words[wordIndex].length) {
        dynamicText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100); // Typing speed (adjust as needed)
    } else {
        setTimeout(eraseText, 1500); // Wait before erasing text
    }
}

function eraseText() {
    if (charIndex > 0) {
        dynamicText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50); // Erasing speed (adjust as needed)
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeText, 500); // Wait before typing next word
    }
}

setTimeout(typeText, 1000); // Start typing after 1 second delay


let listElements = document.querySelectorAll('.link');

listElements.forEach(listElement => {
  listElement.addEventListener('click', () => {
    // Toggle active class on the clicked element
    listElement.classList.toggle('active');

    // Get the submenu element within the clicked element
    const submenu = listElement.querySelector('.submenuItems');

    // Toggle the display of the submenu based on the active state
    submenu.style.display = listElement.classList.contains('active') ? 'block' : 'none';
  });
});



document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.navlist a');
  
  navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent default link behavior
          
          const targetId = this.getAttribute('href').substring(1); // Get target section ID
          
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the target section
          }
      });
  });
});



