function test() {
    let i = 0;
    const time = setInterval(() => {
      console.log(i);
      i += 5;
      if (i > 100) {
        clearInterval(time);
      }
    }, 1000);
  }
test() 


  
const arrayNum = [10, 20, 30, 40, 50];
function arrayFunc(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(arr[i] + 5);
    }
    return result;
  }

 const outputArr = arrayFunc(arrayNum);
   console.log(outputArr); 


const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const dataB = new FormData(form);
    const object = {};
    dataB.forEach((i, index) => object[index] = i);
    console.log(object); 
});
