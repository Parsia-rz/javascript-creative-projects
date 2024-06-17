const colorBtns = document.querySelectorAll('.btn')
const themeCssVariables = document.querySelector(":root");


colorBtns.forEach((btn) => {
    btn.addEventListener('click' , (event) => {
        let btnColor = event.target.dataset.color;
        
        themeCssVariables.style.setProperty('--theme-color' , btnColor);
    })
})