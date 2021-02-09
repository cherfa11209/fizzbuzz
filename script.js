const buzzmachine = document.getElementById('fb')

let fizz = 3;
let buzz = 5;


const fizzbuzz = () => {
    for(i=1; i<=100; i++){
        if(i % fizz == 0 && i % buzz == 0){
            console.log('fizzbuzz')
        } 
        else if(i % buzz == 0){
            console.log('buzz')
        }
        else if(i % fizz == 0){
            console.log('fizz')
        }
        else{
            console.log(i)
        }
    }
}

buzzmachine.addEventListener('click', fizzbuzz)
