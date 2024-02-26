// const observer =new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         console.log(entry)
//         if(entry.isIntersecting){
//             entry.target.classList.add('show');
//         }
//         else{
//             entry.target.classList.remove('show');
//         }
//     });
// });


// const hiddenElements =document.querySelectorAll('.hidden');
// hiddenElements.forEach((el)=>observer.observe(el));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
         } else {
           entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle("active");
        const answer = faq.querySelector('.answer');
        if (faq.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});
