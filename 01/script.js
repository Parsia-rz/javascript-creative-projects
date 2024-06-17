let rightEye = document.querySelector('.righteye');
let leftEye = document.querySelector('.lefteye')
let userInput = document.querySelector('#userInput')
let passInput = document.querySelector('#passInput');

let leftEyeTop = 75;
let leftEyeLeft = 110;
let leftEyePaddingLeft = 0 ;
let leftEyePaddingTop = 0;

let rightEyeTop = 75;
let rightEyeLeft = 175;
let rightEyePaddingLeft = 0 ;
let rightEyePaddingTop = 0;

// user focuses on input
const userInputFocus = () => {
    let eyePosition = setInterval(() => {
        if(leftEyePaddingTop === 11){
            clearInterval(eyePosition)
        }

        leftEye.style.paddingTop = leftEyePaddingTop + 'px';
        leftEye.style.left = leftEyeLeft + 'px';

        rightEye.style.paddingTop = rightEyePaddingTop + 'px';
        rightEye.style.left = rightEyeLeft + 'px';

        leftEyePaddingTop++
        leftEyeLeft--
        rightEyePaddingTop++
        rightEyeLeft--;
    },10)
}

// user leaves user Input
const userInputBlur = () => {
    let eyePosition = setInterval(() => {
        if(leftEyePaddingTop === 0){
            clearInterval(eyePosition)
        }

        leftEye.style.paddingTop = leftEyePaddingTop + 'px';
        leftEye.style.left = leftEyeLeft + 'px';

        rightEye.style.paddingTop = rightEyePaddingTop + 'px';
        rightEye.style.left = rightEyeLeft + 'px';

        leftEyePaddingTop--
        leftEyeLeft++
        rightEyePaddingTop--
        rightEyeLeft++
    },10)
}

// user enter words
const userInputKeyHandler = (event) => {

    // function sees the false boolean then stops funtioning

    if(leftEyePaddingLeft > 20 ){
        return false;
    }

    // if user enters backSpace key
    if(event.keyCode === 8){
        leftEyePaddingLeft--;
        rightEyePaddingLeft--;
    } else{
        leftEyePaddingLeft++;
        rightEyePaddingLeft++;
    }

    leftEye.style.paddingLeft = leftEyePaddingLeft + 'px';
    rightEye.style.paddingLeft = rightEyePaddingLeft + 'px';

}

// user focus on password input
const passInputFocus = () => {
    let eyePosition = setInterval(() => {
        if(leftEyeTop === 60) {
            clearInterval(eyePosition)
        } 
       
            leftEye.style.top = leftEyeTop + 'px';
            leftEye.style.left = leftEyeLeft + 'px';
    
            rightEye.style.top = rightEyeTop + 'px';
            rightEye.style.left = rightEyeLeft + 'px';

        leftEyeTop--
        leftEyeLeft++
        rightEyeTop--
        rightEyeLeft--
    },10)
}

// user leaves the password input
const passInputBlur = () => {
    let eyePosition = setInterval(() => {
        if(leftEyeTop === 75) {
            clearInterval(eyePosition)
        }

        leftEye.style.top = leftEyeTop + 'px';
        leftEye.style.left = leftEyeLeft + 'px';

        rightEye.style.top = rightEyeTop + 'px';
        rightEye.style.left = rightEyeLeft + 'px';

        leftEyeTop++
        leftEyeLeft--
        rightEyeTop++
        rightEyeLeft++
    },10)
}


// functions 

userInput.addEventListener('focus' , userInputFocus);
userInput.addEventListener('blur' , userInputBlur);
userInput.addEventListener('keydown' , userInputKeyHandler)

passInput.addEventListener('focus' , passInputFocus);
passInput.addEventListener('blur' , passInputBlur);