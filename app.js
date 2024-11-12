// Here are the user stories for this lab:

// As a user, I want to be able to select numbers so that I can perform operations with them.
// As a user, I want to be able to add two numbers together.
// As a user, I want to be able to subtract one number from another.
// As a user, I want to be able to multiply two numbers together.
// As a user, I want to be able to divide one number by another.
// As a user, I want to be able to see the output of the mathematical operation.
// As a user, I want to be able to clear all operations and start from 0.



/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const equals = document.querySelector('.equals')
const calculatorElement = document.querySelector('#calculator')
const displayElement = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let result;
let text=""

let value1=null,value2=null,operator=null

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/


const handleSum =(value1,value2)=>{
    //console.log('Sum',value1+value2)
    displayElement.textContent= parseInt(value2)+parseInt(value1)
    //return value1+value2

}

const handleSubtract =(value1,value2)=>{
    //console.log('Subtract',value1-value2)
    displayElement.textContent= value1-value2
    //return value1-value2

}
const handleDivide =(value1,value2)=>{
    //console.log('Divide',value1/value2)
    displayElement.textContent= parseFloat(value1)/parseFloat(value2)
    //return value1/value2

}
const handleMultiply = (value1,value2)=>{
    //console.log('Multiply',value1*value2)
    displayElement.textContent= parseInt(value1)*parseInt(value2)
   

}
const clear= ()=>{
    
    value1=null
    value2=null
    operator=null
    displayElement.innerText=''
    console.log('Clear')
}
buttons.forEach(btn => {
     btn.addEventListener('click',(event)=>{
        
        if(event.target.innerText ==='C'){
            displayElement.textContent=''
        }else{
            
            if (event.target.classList.contains('number')) {
                displayElement.innerHTML=document.getElementById('.display')+event.target.innerText; 
            }
            displayElement.textContent =event.target.innerText
        }    
        //console.log('btnListener',event.target.innerText)

    })
    
});
calculatorElement.addEventListener('click',(event)=>{
    let result;
    if(event.target.classList.contains('number')){
        // console.log('number')
        if(value1===null){
            value1=event.target.innerText
            // console.log('got it 1')
        }else{
            value2=event.target.innerText
            // console.log('got it 2')
        }

    }
    if (event.target.classList.contains('operator')){
        operator=event.target.innerText
        console.log(operator)
    }    
        if(operator === 'C'){
            clear
            console.log('Clear')
        }else if (event.target.id==='equals' &&value1 !== null && value2 !==null){
            
            //console.log(handleSum(value1,value2))
            if(operator === '-'){   
                
                handleSubtract(value1,value2)
                
            }
            if(operator === '+'){
                handleSum(value1,value2)
            }
            else if(operator === '/'){
                handleDivide(value1,value2)
            }else if(operator === '*'){
                handleMultiply(value1,value2)
            }
            
           
        }
    
    
})
/*-------------------------------- Functions --------------------------------*/

console.log(buttons)