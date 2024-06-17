const counters = document.querySelectorAll('.num');
let benefitsContainer = document.querySelector('.benefits')
let startCounter = false;

window.addEventListener('scroll' , () => {
    if(window.scrollY >= benefitsContainer.offsetTop) {
        if(!startCounter){
            counters.forEach(counter => setCounter(counter))
        }
        startCounter = true;
    }
})

function setCounter(el) {
    let elementCounter = el.dataset.count;
    
    let counterInterval = setInterval(()=> {
        if(el.textContent == elementCounter) {
            clearInterval(counterInterval)
        }
        el.textContent++;
},2)
}