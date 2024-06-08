
//consValue is the div element not the value we are modifying which  so it can be const
const countValue = document.querySelector(".count");

function increment (){
//value to which we are modifying
let value= parseInt(countValue.innerHTML);
value++;

countValue.innerHTML= value;


}


function decrement (){

    let value= countValue.innerHTML;
    
    value--;

countValue.innerHTML= value;
}
