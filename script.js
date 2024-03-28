let input = document.getElementById('input');

document.getElementById('acbtn').addEventListener('click', ()=> {
    input.value = '';
});

function appendValue(value) {
    input.value = input.value + value;
}

document.getElementById('zerobtn').addEventListener('click', ()=> {
    appendValue('0');
});
document.getElementById('onebtn').addEventListener('click', ()=> {
    appendValue('1');
});
document.getElementById('twobtn').addEventListener('click', ()=> {
    appendValue('2');
});
document.getElementById('threebtn').addEventListener('click', ()=> {
    appendValue('3');
});
document.getElementById('fourbtn').addEventListener('click', ()=> {
    appendValue('4');
});
document.getElementById('fivebtn').addEventListener('click', ()=> {
    appendValue('5');
});
document.getElementById('sixbtn').addEventListener('click', ()=> {
    appendValue('6');
});
document.getElementById('sevenbtn').addEventListener('click', ()=> {
    appendValue('7');
});
document.getElementById('eightbtn').addEventListener('click', ()=> {
    appendValue('8');
});
document.getElementById('ninebtn').addEventListener('click', ()=> {
    appendValue('9');
});

let operators = ['.', '%', '/', '*', '+', '-'];

function containsOperator(op) {
    for (let i = 0; i < operators.length; i++) {
        if (op.includes(operators[i])) {
            return true;
        }
    }
    return false;
}

document.getElementById('decimalbtn').addEventListener('click', ()=> {
    if (!containsOperator(input.value)) {
        appendValue('.');
    }
});

document.getElementById('modulusbtn').addEventListener('click', ()=> {
    if (!containsOperator(input.value)) {
        appendValue('%');
    }
});

document.getElementById('dividebtn').addEventListener('click', ()=> {
    if (!containsOperator(input.value)) {
        appendValue('/');
    }
});

document.getElementById('multiplybtn').addEventListener('click', ()=> {
    if (!containsOperator(input.value)) {
        appendValue('*');
    }
});

document.getElementById('plusbtn').addEventListener('click', ()=>{
    if (!containsOperator(input.value)) {
        appendValue('+');
    }
});

document.getElementById('minusbtn').addEventListener('click', ()=> {
    if (!containsOperator(input.value)) {
        appendValue('-');
    }
});

document.getElementById('equalbtn').addEventListener('click', ()=> {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = '';
        alert("Error");
    }
});
