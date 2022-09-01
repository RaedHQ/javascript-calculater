let numbers = [];
let visibleArea = [];
function numbr1(){
    numbers.push(1);
    visibleArea.push(1);
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function numbr2(){
    numbers.push(2);
    visibleArea.push(2);
   let vr = visibleArea.join('');
   document.getElementById('result').innerHTML=vr
};
function numbr3(){
    numbers.push(3);
    visibleArea.push(3);
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function numbr4(){
    numbers.push(4);
    visibleArea.push(4);
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function numbr5(){
    numbers.push(5);
    visibleArea.push(5);
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function numbr6(){
    numbers.push(6);
    visibleArea.push(6);
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function numbr7(){
    numbers.push(7);
    visibleArea.push(7);
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function numbr8(){
    numbers.push(8);
    visibleArea.push(8);
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function numbr9(){
    numbers.push(9);
    visibleArea.push(9);
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function numbr0(){
    numbers.push(0);
    visibleArea.push(0);
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function mul(){
    numbers.push('*');
    visibleArea.push('X');
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function dev(){
    numbers.push('/');
    visibleArea.push('÷');
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function plus(){
    numbers.push('+');
    visibleArea.push('+');
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};
function minus(){
    numbers.push('-');
    visibleArea.push('-');
    let vr = visibleArea.join('');
    document.getElementById('result').innerHTML=vr
};

function result(){
    
    let isMul = numbers.includes('*');
    let isSum = numbers.includes('+');
    let isMinus = numbers.includes('-');
    let isDev = numbers.includes('/');
    let nmbrs = numbers.join('');
    
    if(isMul == true){
        let arrRes = nmbrs.split('*'); 
    
        let res = arrRes.reduce(function(res,currentValue){
        
        return res * currentValue});
        numbers = [];
        numbers.push(res);
        visibleArea = []
        visibleArea.push(res) 
    }
     
    else if (isSum == true){
            let arrRes = nmbrs.split('+'); 
    
            let res = arrRes.reduce(function(res,currentValue){
        
            return Number(res) + Number(currentValue)},0);
            numbers = [];
            numbers.push(res);
            visibleArea = []
            visibleArea.push(res)}

    else if (isMinus == true){
            let arrRes = nmbrs.split('-');    
            
            let res = arrRes.reduce(function(res,currentValue){
            
            return res - currentValue});
            numbers = [];
            numbers.push(res);
            visibleArea = []
            visibleArea.push(res)}
        
    else if (isDev == true){
            let arrRes = nmbrs.split('/');  
            
            let res = arrRes.reduce(function(res,currentValue){
            
            return res / currentValue});
            numbers = [];
            numbers.push(res);
            visibleArea = []
            visibleArea.push(res)};
    
           console.log(numbers)
         
         document.getElementById('result').innerHTML = numbers

        };
   
