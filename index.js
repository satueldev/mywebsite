//const name = (phrase) => {
//     console.log(phrase)
  // let frequency = {}
 //for(letter of phrase){
   // if(letter in frequency){
     //   frequency[letter] = frequency[letter] +1
    //}
//    else{
  //      frequency[letter] = 1
    //}
 //}

   // return frequency
 
//}

//console.log(name('wussup'))

//word frequency function

//step1: create your funtioin
  const frequency = (phrase) =>{

    let frequency = {}
    let array = phrase.split(' ')

    for(const words of array){
  //      console.log(words)
        if (words in frequency) {
            frequency[words]++
        } else {
            frequency[words] = 1
        }
    }
  //  console.log(array)
    return frequency
  }
 // let userinput = prompt('please enter your phrase')
  //console.log(frequency(userinputyul))
    //step2: create your object with empty properties
    
    //step3: make your function name an array by splitiing them into words seperated by space
   
    
 //step4: create your for loop using a var name and the var used to hold the .split() function.
   

        //step5: console.log the var used to hold the .split() function variable.
     
            //if a particular word was found more than once  in the object ,then wee need to increment it by one,otherwise it will remain with the value of one.
  
    

     //const nums = [5, 5];
     //const result = nums.reduce((a, b)=>a * b)

    // console.log(result)

    
  

 /**    function redDiv(){
           console.log(' rock')
    }
    function yellowDiv(){
        console.log(' paper')
 }
 function greenDiv(){
    console.log(' scissros')
} */


let value = document.getElementById('item')
let name = document.getElementById('names')
function getinput(){
    console.log('this user name  is ' + ' ' + names.value);

console.log( ' and this user wants to order for  ' + ' ' + item.value);
console.save({'name': names.value, 'item':item.value})

}

(function(console){

    console.save = function(data, filename){
    
        if(!data) {
            console.error('Console.save: No data')
            return;
        }
    
        if(!filename) filename = names.value + ' order' + '.json'
    
        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }
    
        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')
    
        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
     }
    })(console)