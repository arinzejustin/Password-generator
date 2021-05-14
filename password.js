const output = document.querySelector('.screen .output');
const copy = document.getElementById('copy');
const passwordLength = document.getElementById('passlength');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');

// ¨Passwords.
let symbolstr = '&_)$*%^!=-/<>(@``ç#|@\)=&';
let uppercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZGDJD';
let lowercaseStr = 'abcdefghijklmnopqrstuvwxyzhgsfd';
let numbersStr = '0123456789635694378265487';

/* Every time you click on the generate btn it is going to check if the checkbox is checked 
 then it gives you the checked output */
generate.addEventListener('click', () =>{
    // All Probabilities. a lot of if statements but that's the easy way to do it.
    if(uppercase.checked && lowercase.checked && symbols.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&hA5$jL9@sB5_mP1&nV6)cR5L*gF32';
        output.value = allStr.slice(random, random + +passwordLength.value);

    }else if(uppercase.checked && lowercase.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'hA5jL9sB5mP1nV6cR5LgF32Lo5Fd18';
        output.value = allStr.slice(random, random + +passwordLength.value);

    }else if(uppercase.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'hA5ZL9DB5MP1QV6VR5LgF32LG5FZ18';
        output.value = allStr.slice(random, random + +passwordLength.value);

    }else if(symbols.checked && numbers.checked && lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&h5$j9@s5_m1&n6)c5*g32)5l@9p#0';
        output.value = allStr.slice(random, random + +passwordLength.value);

    }else if(symbols.checked && numbers.checked && uppercase.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&Q5$R9@s5_T1&L6)V5*A32)5l@9M#0';
        output.value = allStr.slice(random, random + +passwordLength.value);

    }else if(uppercase.checked && lowercase.checked && symbols.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'jY=Sn@Vt$&hA$jL@sB_mP&nV)cRL*gF';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }
    else if(uppercase.checked && lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'hAjLsBmPnVcRLgFkGvEjIgOpScTnY';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }else if(symbols.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&5$9@5_1&6)5*32@4\8=9!5<0#3}0+';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }else if(symbols.checked && uppercase.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&-O"P)Z$B?Q#%U(+GS~A*N>C:T-!&D/';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }
    else if(symbols.checked && lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '&-p"q)v$a?md%r*(+sn~*n>w:l-+!&kg/';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }else if(uppercase.checked && numbers.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = '4A3L7B2P7V0RL1F9G5E6I11OS7T3Y';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }else if(numbers.checked && lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        let allStr = 'h9j5s3m8n7c40g1k9v6j5g2p9c2n5';
        output.value = allStr.slice(random, random + +passwordLength.value);
    }
    else if(symbols.checked){
        let random = Math.floor(Math.random() * 5);
        output.value = symbolstr.slice(random, random + +passwordLength.value);

    }
    else if(numbers.checked){
        let random = Math.floor(Math.random() * 5);
        output.value = numbersStr.slice(random, random + +passwordLength.value);

    }else if(lowercase.checked){
        let random = Math.floor(Math.random() * 10);
        output.value = lowercaseStr.slice(random, random + +passwordLength.value);

    }else if(uppercase.checked){
        let random = Math.floor(Math.random() * 10);
        output.value = uppercaseStr.slice(random, random + +passwordLength.value);
    }
});

// Ability to copy the Text.
function copyText(){
    output.select();
    output.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.getElementById('alert').innerText = "Text has been copied to clipboard.";
}
function clear(){ document.getElementById('alert').innerText = "";
}
document.getElementById("generate").addEventListener('click', clear);
