let res = document.querySelector('#res');
let btn0 = document.querySelector('#btn0');
let btn1 = document.querySelector('#btn1');
let btnClr = document.querySelector('#btnClr');
let btnEql = document.querySelector('#btnEql');
let btnSum = document.querySelector('#btnSum');
let btnsub = document.querySelector('#btnSub');
let btnMul = document.querySelector('#btnMul');
let btnDiv = document.querySelector('#btnDiv');

btn0.addEventListener('click' , ()=>{
    res.innerHTML += 0 ;
})

btn1.addEventListener('click' , ()=>{
    res.innerHTML += 1 ;
})

btnClr.addEventListener('click' , ()=>{
    res.innerHTML = "" ;
})

function chcekOpExists(){
    if(res.innerHTML.includes('+') || res.innerHTML.includes('-') 
    ||res.innerHTML.includes('*') || res.innerHTML.includes('/')){
        console.log('includes')
        return true;
    }
    else
        return false;    
}

btnSum.addEventListener('click' , (e)=>{
    if(res.innerHTML.length >0 && !chcekOpExists())
        res.innerHTML += '+';
    else{
        e.preventDefault();    
    }
})

btnSub.addEventListener('click' , (e)=>{
    if(res.innerHTML.length >0 && !chcekOpExists())
        res.innerHTML += '-';
    else{
        e.preventDefault();    
    }
})


btnMul.addEventListener('click' , (e)=>{
    if(res.innerHTML.length >0 && !chcekOpExists())
        res.innerHTML += '*';
    else{
        e.preventDefault();    
    }
})

btnDiv.addEventListener('click' , (e)=>{
    if(res.innerHTML.length >0 && !chcekOpExists())
        res.innerHTML += '/';
    else{
        e.preventDefault();    
    }
})

function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}

function dec_to_bin(dec){
    return parseInt(dec, 10).toString(2);
}

btnEql.addEventListener('click' , (e)=>{
    let lHS = 0 ;
    let rHS= 0 ;
    
    if(res.innerHTML.includes('+')){
        res.innerHTML = res.innerHTML.trim();

        lHS = res.innerHTML.substr(0 , res.innerHTML.indexOf('+'));
        rHS = res.innerHTML.substr(res.innerHTML.indexOf('+')+1);
       // console.log(lHS.length + '  ' + rHS.length);

        let decResult = bin_to_dec(lHS) + bin_to_dec(rHS);

        res.innerHTML = dec_to_bin(decResult) ;

      //  console.log(dec_to_bin(ress))
        
    }
    else if (res.innerHTML.includes('-')){
        res.innerHTML = res.innerHTML.trim();
        lHS = res.innerHTML.substr(0 , res.innerHTML.indexOf('-'));
        rHS = res.innerHTML.substr(res.innerHTML.indexOf('-')+1);
        let decResult = bin_to_dec(lHS) - bin_to_dec(rHS);
        res.innerHTML = dec_to_bin(decResult) ;
    }
    else if(res.innerHTML.includes('*')){
        res.innerHTML = res.innerHTML.trim();
        lHS = res.innerHTML.substr(0 , res.innerHTML.indexOf('*'));
        rHS = res.innerHTML.substr(res.innerHTML.indexOf('*')+1);
        let decResult = bin_to_dec(lHS) * bin_to_dec(rHS);
        res.innerHTML = dec_to_bin(decResult) ;
        
    }
    else{
        res.innerHTML = res.innerHTML.trim();
        lHS = res.innerHTML.substr(0 , res.innerHTML.indexOf('/'));
        rHS = res.innerHTML.substr(res.innerHTML.indexOf('/')+1);
        let decResult = bin_to_dec(lHS) / bin_to_dec(rHS);
        res.innerHTML = dec_to_bin(decResult) ;

    }
})