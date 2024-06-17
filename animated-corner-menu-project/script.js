const toggleBtn = document.querySelector('#toggle-btn');
const menuItems = document.querySelectorAll('.menu a')
let isMenuActive = false;


toggleBtn.addEventListener('click' , () => {
    if(!isMenuActive){ 
        console.log('منو باز شد');
        toggleBtn.classList.add('active');
        menuItems.forEach(item => item.classList.add('active'))        
        isMenuActive = true;
    } else{
        console.log('منو بسته شد');
        toggleBtn.classList.remove('active');
        menuItems.forEach(item => item.classList.remove('active'))        
        isMenuActive = false;
    }
})
