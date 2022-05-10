
const title = document.createElement('h1');
const info = document.createElement('div');
const tagBody = document.querySelector('body');
title.setAttribute('class', 'title');
info.setAttribute('class', 'info');
tagBody.appendChild(title);
tagBody.appendChild(info);
title.innerHTML = 'RSS Виртуальная клавиатура';
info.innerHTML = 'Клавиатура создана в операционной системе Windows. Для переключения языка комбинация: левый ctrl'

const keyboard = document.createElement('div');
const keyboardRow1 = document.createElement('div');
const keyboardRow1Shift = document.createElement('div');
const keyboardRow1Eng = document.createElement('div');
const keyboardRow2 = document.createElement('div');
const keyboardRow2Eng = document.createElement('div');
const keyboardRow2Caps = document.createElement('div');
const keyboardRow3 = document.createElement('div');
const keyboardRow3Eng = document.createElement('div');
const keyboardRow3Caps = document.createElement('div');
const keyboardRow4 = document.createElement('div');
const keyboardRow4Eng = document.createElement('div');
const keyboardRow4Caps = document.createElement('div');
const keyboardRow5 = document.createElement('div');
const textArea = document.createElement('textarea');

textArea.setAttribute('style', 'textarea');
tagBody.appendChild(textArea);

keyboard.setAttribute('class', 'keyboard');
tagBody.appendChild(keyboard);

keyboardRow1.setAttribute('class', 'keyboard__row1');
keyboard.appendChild(keyboardRow1);

keyboardRow1Shift.setAttribute('class', 'keyboard__row1Shift');
keyboard.appendChild(keyboardRow1Shift);

keyboardRow1Eng.setAttribute('class', 'keyboard__row1Eng');
keyboard.appendChild(keyboardRow1Eng);

keyboardRow2.setAttribute('class', 'keyboard__row2');
keyboard.appendChild(keyboardRow2);

keyboardRow2Eng.setAttribute('class', 'keyboard__row2Eng');
keyboard.appendChild(keyboardRow2Eng);

keyboardRow2Caps.setAttribute('class', 'keyboard__row2Caps');
keyboard.appendChild(keyboardRow2Caps);

keyboardRow3.setAttribute('class', 'keyboard__row3');
keyboard.appendChild(keyboardRow3);

keyboardRow3Eng.setAttribute('class', 'keyboard__row3Eng');
keyboard.appendChild(keyboardRow3Eng);

keyboardRow3Caps.setAttribute('class', 'keyboard__row3Caps');
keyboard.appendChild(keyboardRow3Caps);

keyboardRow4.setAttribute('class', 'keyboard__row4');
keyboard.appendChild(keyboardRow4);

keyboardRow4Eng.setAttribute('class', 'keyboard__row4Eng');
keyboard.appendChild(keyboardRow4Eng);

keyboardRow4Caps.setAttribute('class', 'keyboard__row4Caps');
keyboard.appendChild(keyboardRow4Caps);

keyboardRow5.setAttribute('class', 'keyboard__row5');
keyboard.appendChild(keyboardRow5);







//-----------маленькие руссские буквы-------------

let keyboardNumRow1Ru = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
let keyboardNumRow2Ru = [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92];
let keyboardNumRow3Ru = [1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101];
let keyboardNumRow4Ru = [1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];




function initRow1 () {
    let outRow1 = '';
    for (let i = 0; i < keyboardNumRow1Ru.length; i++) {
        outRow1 += '<div class="keyboard__key"><span class="key" >'+String.fromCharCode(keyboardNumRow1Ru[i])+ '</span></div>';
    }
    keyboardRow1.innerHTML = outRow1 + '<div class="keyboard__keyB Backspace"><span class="keyBack" >'+'Backspace'+ '</span></div>';
}
initRow1 ();

function initRow2 () {
    let outRow2 = '';
    for (let i = 0; i < keyboardNumRow2Ru.length; i++) {
        outRow2 += '<div class="keyboard__key"><span class="key" >'+String.fromCharCode(keyboardNumRow2Ru[i])+ '</span></div>';
    }
    keyboardRow2.innerHTML ='<div class="keyboard__key Tab"><span class="keyTab" >'+ 'Tab' + '</span></div>' + outRow2 + '<div class="keyboard__keyD Del"><span class="keyDel" >'+ 'Del' + '</span></div>';
}
initRow2 ();

function initRow3 () {
    let outRow3 = '';
    for (let i = 0; i < keyboardNumRow3Ru.length; i++) {
        outRow3 += '<div class="keyboard__key"><span class="key" >'+String.fromCharCode(keyboardNumRow3Ru[i])+ '</span></div>';
    }
    keyboardRow3.innerHTML = '<div class="keyboard__keyC Capslock"><span class="keyCaps">' + 'CapsLock' + '</span></div>' + outRow3 + '<div class="keyboard__keyE Enter"><span class="keyEnter" >'+ 'Enter' + '</span></div>';
}
initRow3 ();

function initRow4 () {
    let outRow4 = '';
    for (let i = 0; i < keyboardNumRow4Ru.length; i++) {
        outRow4 += '<div class="keyboard__key"><span class="key" >'+String.fromCharCode(keyboardNumRow4Ru[i])+ '</span></div>';
    }
    keyboardRow4.innerHTML = '<div class="keyboard__keyS Shift"><span class="keyShift" >'+ 'Shift' + '</span></div>' + outRow4 + '<div class="keyboard__key"><span class="keyUp" >'+ '▲' + '</span></div>' +'<div class="keyboard__keyS Shift2"><span class="keyShift" >'+ 'Shift' + '</span></div>';
}
initRow4 ();

function row5 () {
    keyboardRow5.innerHTML = '<div class="keyboard__keyK"><span class="key" >'+ 'Ctrl' + '</span></div>' +
                             '<div class="keyboard__keyW Win"><span class="key" >'+ 'Win' + '</span></div>' +
                             '<div class="keyboard__keyA Alt"><span class="key" >'+ 'Alt' + '</span></div>' +
                             '<div class="keyboard__key Space"><span class="key" >'+ ' ' + '</span></div>'+
                             '<div class="keyboard__keyA Alt"><span class="key" >'+ 'Alt' + '</span></div>'+
                             '<div class="keyboard__key"><span class="key" >'+ '◄' + '</span></div>'+
                             '<div class="keyboard__key"><span class="key" >'+ '▼' + '</span></div>'+
                             '<div class="keyboard__key"><span class="key" >'+ '►' + '</span></div>'+
                             '<div class="keyboard__keyK"><span class="key" >'+ 'Ctrl' + '</span></div>';
}
row5();


let keyboardNumRow2RuCaps = [1049, 1062, 1059, 1050, 1045, 1053, 1043, 1064, 1065, 1047,1061, 1066, 92];
let keyboardNumRow3RuCaps = [1060, 1067, 1042, 1040, 1055, 1056, 1054, 1051, 1044, 1046, 1069];
let keyboardNumRow4RuCaps = [1071, 1063, 1057, 1052, 1048, 1058, 1068, 1041, 1070, 46];

//-----------------------Большие русские буквы
function initRow2Caps () {
    let outRow2Caps = '';
    for (let i = 0; i < keyboardNumRow2RuCaps.length; i++) {
        outRow2Caps += '<div class="keyboard__key"><span class="key" >'+String.fromCharCode(keyboardNumRow2RuCaps[i])+ '</span></div>';
    }
    keyboardRow2Caps.innerHTML = '<div class="keyboard__keyT Tab1"><span class="keyTab" >'+ 'Tab' + '</span></div>' + outRow2Caps + '<div class="keyboard__keyD1 Del1"><span class="keyDel" >'+ 'Del' + '</span></div>';
}
initRow2Caps ();

function initRow3Caps () {
    let outRow3Caps = '';
    for (let i = 0; i < keyboardNumRow3RuCaps.length; i++) {
        outRow3Caps += '<div class="keyboard__key"><span class="key" >'+String.fromCharCode(keyboardNumRow3RuCaps[i])+ '</span></div>';
    }
    keyboardRow3Caps.innerHTML = '<div class="keyboard__keyC Capslock1"><span class="keyCaps" >'+ 'CapsLock' + '</span></div>' + outRow3Caps + '<div class="keyboard__keyE Enter1"><span class="keyEnter" >'+ 'Enter' + '</span></div>';
}
initRow3Caps ();

function initRow4Caps () {
    let outRow4Caps = '';   
    for (let i = 0; i < keyboardNumRow4RuCaps.length; i++) {
        outRow4Caps += '<div class="keyboard__key"><span class="key">'+String.fromCharCode(keyboardNumRow4RuCaps[i])+ '</span></div>';
    }
    keyboardRow4Caps.innerHTML = '<div class="keyboard__keyS Shift1"><span class="keyShift" >'+ 'Shift' + '</span></div>' + outRow4Caps + '<div class="keyboard__key"><span class="keyUp" >'+ '▲' + '</span></div>' +'<div class="keyboard__keyS Shift3"><span class="keyShift" >'+ 'Shift' + '</span></div>';
}
initRow4Caps ();



let shiftRow1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '='];

function initRow1Shift () {
    let outRow1 = '';
    for (let i = 0; i < shiftRow1.length; i++) {
        outRow1 += '<div class="keyboard__key"><span class="key" >'+ shiftRow1[i] + '</span></div>';
    }
    keyboardRow1Shift.innerHTML = outRow1 + '<div class="keyboard__keyB Backspace"><span class="key" >'+'Backspace'+ '</span></div>';
}
initRow1Shift ();


//------------------Eng keyboard

let row1Eng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
let row2Eng = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];
let row3Eng = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\''];
let row4Eng = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'];

function initRow1Eng () {
    let outRow1 = '';
    for (let i = 0; i < row1Eng.length; i++) {
        outRow1 += '<div class="keyboard__key"><span class="key" >' + row1Eng[i] + '</span></div>';
    }
    keyboardRow1Eng.innerHTML = outRow1 + '<div class="keyboard__keyB BackspaceEng"><span class="keyBack" >'+'Backspace'+ '</span></div>';
}
initRow1Eng ();

function initRow2Eng () {
    let outRow2 = '';
    for (let i = 0; i < row2Eng.length; i++) {
        outRow2 += '<div class="keyboard__key"><span class="key" >'+ row2Eng[i] + '</span></div>';
    }
    keyboardRow2Eng.innerHTML ='<div class="keyboard__keyT TabEng"><span class="keyTab" >'+ 'Tab' + '</span></div>' + outRow2 + '<div class="keyboard__keyD DelEng"><span class="keyDel" >'+ 'Del' + '</span></div>';
}
initRow2Eng();


function initRow3Eng () {
    let outRow3 = '';
    for (let i = 0; i < row3Eng.length; i++) {
        outRow3 += '<div class="keyboard__key"><span class="key" >'+ row3Eng[i] + '</span></div>';
    }
    keyboardRow3Eng.innerHTML = '<div class="keyboard__keyC CapslockEng"><span class="keyCaps">' + 'CapsLock' + '</span></div>' + outRow3 + '<div class="keyboard__keyE EnterEng"><span class="keyEnter" >'+ 'Enter' + '</span></div>';
}
initRow3Eng ();

function initRow4Eng () {
    let outRow4 = '';
    for (let i = 0; i < row4Eng.length; i++) {
        outRow4 += '<div class="keyboard__key"><span class="key" >'+ row4Eng[i]+ '</span></div>';
    }
    keyboardRow4Eng.innerHTML = '<div class="keyboard__keyS ShiftEng"><span class="keyShift" >'+ 'Shift' + '</span></div>' + outRow4 + '<div class="keyboard__key"><span class="keyUp" >'+ '▲' + '</span></div>' +'<div class="keyboard__keyS Shift2Eng"><span class="keyShift" >'+ 'Shift' + '</span></div>';
}
initRow4Eng ();

document.onkeydown = function (event) {
    console.log(event);
    //keyboardNum.push(event.charCode);
    //console.log(keyboardNum);
}





let backspaceLetter = document.querySelector('.keyboard__keyB');
let display = document.querySelector('textarea'); 

function deleteLetter () {
    backspaceLetter.onclick = function (/*event*/) {
        //console.log(event.target);
        let position = display.selectionStart - 1;
        if (position >= 1) {
            let str = display.innerHTML;
            let res = str.substring(0, position) + '' + str.substring(position + 1);
            display.innerHTML = res;
            display.focus();
        }else {
            let str = display.innerHTML;
            let res = str.substring(0, str.length - 1);
            display.innerHTML = res;
        }
    }
}
deleteLetter();


const CAPS3 = document.querySelector('.keyboard__row3Caps');

let DEL = document.querySelector('.Del');
let DEL1 = document.querySelector('.Del1');
let DELENG = document.querySelector('.DelEng');

function del () {
    //if (CAPS3.className === 'keyboard__row2Caps active') {
        DEL1.addEventListener('click', function () {
            let position = display.selectionStart;
            if (position >= 0) {
                let str = display.innerHTML;
                let res = str.substring(0, position) + '' + str.substring(position + 1);
                display.innerHTML = res;
                display.focus();
            }
        });
    //} else {
        DEL.addEventListener('click', function (/*event*/) {
            //console.log(event.target);
            let position = display.selectionStart;
            if (position >= 0) {
                let str = display.innerHTML;
                let res = str.substring(0, position) + '' + str.substring(position + 1);
                display.innerHTML = res;
                display.focus();
            }
        }); 
        DELENG.addEventListener('click', function (/*event*/) {
            //console.log(event.target);
            let position = display.selectionStart;
            if (position >= 0) {
                let str = display.innerHTML;
                let res = str.substring(0, position) + '' + str.substring(position + 1);
                display.innerHTML = res;
                display.focus();
            }
        }); 
    //}
}
del();
//DEL1.addEventListener('click', function (){console.log('1')});

const ENTER = document.querySelector('.Enter');
const ENTER1 = document.querySelector('.Enter1');
const ENTERENG = document.querySelector('.EnterEng');

function enter () {
    ENTER.addEventListener('click', function (/*event*/) {
        //console.log(event.target);
        let position = display.selectionStart;
        if (position >= 1) {
            let str = display.innerHTML;
            let res = str.substring(0, position) + '\r\n' + str.substring(position);
            display.innerHTML = res;
        }else {
            let str = display.innerHTML;
            let res = str + '\r\n';
            display.innerHTML = res;
        } 
            //display.focus();
        }
    );

    ENTER1.addEventListener('click', function (/*event*/) {
        //console.log(event.target);
        let position = display.selectionStart;
        if (position >= 1) {
            let str = display.innerHTML;
            let res = str.substring(0, position) + '\r\n' + str.substring(position);
            display.innerHTML = res;
        }else {
            let str = display.innerHTML;
            let res = str + '\r\n';
            display.innerHTML = res;
        } 
            //display.focus();
        }
    );
    ENTERENG.addEventListener('click', function () {
        let position = display.selectionStart;
        if (position >= 1) {
            let str = display.innerHTML;
            let res = str.substring(0, position) + '\r\n' + str.substring(position);
            display.innerHTML = res;
        }else {
            let str = display.innerHTML;
            let res = str + '\r\n';
            display.innerHTML = res;
        } 
            //display.focus();
        }
    );
}
enter();


const TAB = document.querySelector('.Tab');
const TAB1 = document.querySelector('.Tab1');
const TABENG = document.querySelector('.TabEng');

function tab () {
    if (CAPS3.className === 'keyboard__row3Caps active') {
        TAB1.addEventListener('click', function () {
            let res = display.innerHTML;
            let position = display.selectionStart - 1;
            if (position >= 0) {
                let res1 = res.substring(0, position + 1) + ' '+ ' ' + ' '+ ' ' + res.substring(position + 1);
                return display.innerHTML = res1;
            } else {
                display.innerHTML = res + ' ' + ' ' + ' ' + ' ';
            }
        })
    } else {
        TAB.addEventListener('click', function () {
            let res = display.innerHTML;
            let position = display.selectionStart - 1;
            if (position >= 0) {
                let res1 = res.substring(0, position + 1) + ' '+ ' ' + ' '+ ' ' + res.substring(position + 1);
                return display.innerHTML = res1;
            } else {
                display.innerHTML = res + ' ' + ' ' + ' ' + ' ';
            }
        })
    }
    TABENG.addEventListener('click', function () {
        let res = display.innerHTML;
        let position = display.selectionStart - 1;
        if (position >= 0) {
            let res1 = res.substring(0, position + 1) + ' '+ ' ' + ' '+ ' ' + res.substring(position + 1);
            return display.innerHTML = res1;
        } else {
            display.innerHTML = res + ' ' + ' ' + ' ' + ' ';
        }
    })
}
tab();



const CAPS = document.querySelector('.Capslock');
const CAPS1 = document.querySelector('.Capslock1');
const CAPS2 = document.querySelector('.keyboard__row2Caps');
const row2 = document.querySelector('.keyboard__row2');
//const CAPS3 = document.querySelector('.keyboard__row3Caps');
const row3 = document.querySelector('.keyboard__row3');
const CAPS4 = document.querySelector('.keyboard__row4Caps');
const row4 = document.querySelector('.keyboard__row4');

//function caps () {
    CAPS.addEventListener('click', function () {
        if (CAPS2.className === 'keyboard__row2Caps' || row2.className === 'keyboard__row2') {
            CAPS2.classList.add('active');
            row2.classList.add('active');
            CAPS3.classList.add('active');
            row3.classList.add('active');
            CAPS4.classList.add('active');
            row4.classList.add('active');
        }
    });
//}
//caps();
CAPS1.addEventListener('click', function () {
    if (CAPS3.className === 'keyboard__row3Caps active' || row3.className === 'keyboard__row3 active') {
        CAPS2.classList.remove('active');
        row2.classList.remove('active');
        CAPS3.classList.remove('active');
        row3.classList.remove('active');
        CAPS4.classList.remove('active');
        row4.classList.remove('active');
    } 
});


const SHIFT = document.querySelector('.Shift');
const SHIFT1 = document.querySelector('.Shift1');
const SHIFT2 = document.querySelector('.Shift2');
const SHIFT3 = document.querySelector('.Shift3');
const CAPSROW1 = document.querySelector('.keyboard__row1Shift');
const row1 = document.querySelector('.keyboard__row1');

function shiftDigit () {
SHIFT.addEventListener('mousedown', function () {
    CAPSROW1.classList.add('active');
    row1.classList.add('active');
    CAPS2.classList.add('active');
    row2.classList.add('active');
    CAPS3.classList.add('active');
    row3.classList.add('active');
    CAPS4.classList.add('active');
    row4.classList.add('active');
    })
SHIFT1.addEventListener('mouseup', function () {
    CAPSROW1.classList.remove('active');
    row1.classList.remove('active');
    CAPS2.classList.remove('active');
    row2.classList.remove('active');
    CAPS3.classList.remove('active');
    row3.classList.remove('active');
    CAPS4.classList.remove('active');
    row4.classList.remove('active');
    })

SHIFT2.addEventListener('mousedown', function () {
    CAPSROW1.classList.add('active');
    row1.classList.add('active');
    CAPS2.classList.add('active');
    row2.classList.add('active');
    CAPS3.classList.add('active');
    row3.classList.add('active');
    CAPS4.classList.add('active');
    row4.classList.add('active');
    })
SHIFT3.addEventListener('mouseup', function () {
    CAPSROW1.classList.remove('active');
    row1.classList.remove('active');
    CAPS2.classList.remove('active');
    row2.classList.remove('active');
    CAPS3.classList.remove('active');
    row3.classList.remove('active');
    CAPS4.classList.remove('active');
    row4.classList.remove('active');
    })
}
shiftDigit();






const row2lang = document.querySelector('.keyboard__row2Eng');
const row3lang = document.querySelector('.keyboard__row3Eng');
const row4lang = document.querySelector('.keyboard__row4Eng');
let key = document.querySelectorAll('.keyboard__key');


if (localStorage.getItem('bg-theme') === 'light') {
    row2lang.classList.add('active');
    row2.classList.add('active');
    row3lang.classList.add('active');
    row3.classList.add('active');
    row4lang.classList.add('active');
    row4.classList.add('active');
}

document.onkeydown = function (event) {
    //keyboardNum.push(event.charCode);
    //console.log(keyboardNum);
    if (event.key === 'Backspace') {
        let position = display.selectionStart - 1;
        if (position >= 1) {
            let str = display.innerHTML;
            let res = str.substring(0, position) + '' + str.substring(position + 1);
            display.innerHTML = res;
            display.focus();
        }else {
            let str = display.innerHTML;
            let res = str.substring(0, str.length - 1);
            display.innerHTML = res;
        }
    } else if (event.key === 'CapsLock') {
        if (CAPS2.className === 'keyboard__row2Caps' || row2.className === 'keyboard__row2') {
            CAPS2.classList.add('active');
            row2.classList.add('active');
            CAPS3.classList.add('active');
            row3.classList.add('active');
            CAPS4.classList.add('active');
            row4.classList.add('active');
        } else if (CAPS3.className === 'keyboard__row3Caps active' || row3.className === 'keyboard__row3 active') {
            CAPS2.classList.remove('active');
            row2.classList.remove('active');
            CAPS3.classList.remove('active');
            row3.classList.remove('active');
            CAPS4.classList.remove('active');
            row4.classList.remove('active');
        }
    } else if (event.key === 'Delete') {
        let position = display.selectionStart;
            if (position >= 0) {
                let str = display.innerHTML;
                let res = str.substring(0, position) + '' + str.substring(position + 1);
                display.innerHTML = res;
                display.focus();
            }
    } else if (event.key === 'Tab') {
        let res = display.innerHTML;
            let position = display.selectionStart - 1;
            if (position >= 0) {
                let res1 = res.substring(0, position + 1) + ' '+ ' ' + ' '+ ' ' + res.substring(position + 1);
                return display.innerHTML = res1;
            } else {
                display.innerHTML = res + ' ' + ' ' + ' ' + ' ';
            }
    }
    else if (event.key === 'Enter') {
        let position = display.selectionStart;
        if (position >= 1) {
            let str = display.innerHTML;
            let res = str.substring(0, position) + '\r\n' + str.substring(position);
            display.innerHTML = res;
        }else {
            let str = display.innerHTML;
            let res = str + '\r\n';
            display.innerHTML = res;
        } 
    }
    else if (event.key === 'Shift') {
        CAPSROW1.classList.add('active');
        row1.classList.add('active');
        CAPS2.classList.add('active');
        row2.classList.add('active');
        CAPS3.classList.add('active');
        row3.classList.add('active');
        CAPS4.classList.add('active');
        row4.classList.add('active');
    }
    else if (event.key === 'Control') {
        if (row2lang.className === 'keyboard__row2Eng') {
            row2lang.classList.add('active');
            row2.classList.add('active');
            row3lang.classList.add('active');
            row3.classList.add('active');
            row4lang.classList.add('active');
            row4.classList.add('active');
            localStorage.setItem('bg-theme', "light");
            
        }else {
            row2lang.classList.remove('active');
            row2.classList.remove('active');
            row3lang.classList.remove('active');
            row3.classList.remove('active');
            row4lang.classList.remove('active');
            row4.classList.remove('active');
            localStorage.removeItem("bg-theme");
        }
    }
    else if (event.key === 'Alt') {

    }
    else if (event.key === 'Win') {
        
    }/*
    else {
        textArea.textContent += event.key;
    }*/
    else if (event.key) {
        for (let k of key) {
            if (event.key === k.textContent) {
                textArea.textContent += event.key;
                k.classList.add('active');
                document.onkeyup = function (event) {
                    if (event.key) {
                        for (let k of key) {
                                k.classList.remove('active');
                        }
                    }
                }
            }
        }
    }
}

document.onkeyup = function (event) {
    if (event.key === 'Shift') {
        CAPSROW1.classList.remove('active');
        row1.classList.remove('active');
        CAPS2.classList.remove('active');
        row2.classList.remove('active');
        CAPS3.classList.remove('active');
        row3.classList.remove('active');
        CAPS4.classList.remove('active');
        row4.classList.remove('active');
    }
};
/*
const row2lang = document.querySelector('.keyboard__row2Eng');
const row3lang = document.querySelector('.keyboard__row3Eng');
const row4lang = document.querySelector('.keyboard__row4Eng');
function changeLang () {
    document.onkeydown = function (event) {
        if (event.key === 'Control') {
            if (row2lang.className === 'keyboard__row2Eng') {
                row2lang.classList.add('active');
                row2.classList.add('active');
                row3lang.classList.add('active');
                row3.classList.add('active');
                row4lang.classList.add('active');
                row4.classList.add('active');
            }else {
                row2lang.classList.remove('active');
                row2.classList.remove('active');
                row3lang.classList.remove('active');
                row3.classList.remove('active');
                row4lang.classList.remove('active');
                row4.classList.remove('active');
            }
        }
    };
}
changeLang();
*/

function enterWord () {
    for(let k of key){
        if (k != TAB) {
            k.onclick = function(){
                display.textContent += k.textContent;
            }
        }
        k.addEventListener('mousedown', function () {
            k.classList.add('active');
        })
        k.addEventListener('mouseup', function () {
            k.classList.remove('active');
        })
    } 
}
enterWord();


let c = document.querySelectorAll('.keyboard__keyC');
let s = document.querySelectorAll('.keyboard__keyS');
let b = document.querySelectorAll('.keyboard__keyB');
let d = document.querySelectorAll('.keyboard__keyD');
let e = document.querySelectorAll('.keyboard__keyE');
let kc = document.querySelectorAll('.keyboard__keyK');
let a = document.querySelectorAll('.keyboard__keyA');
let w = document.querySelectorAll('.keyboard__keyW');
function hover () {
    for(let k of c){
        k.addEventListener('mousedown', function () {
            k.classList.add('active');
        })
        k.addEventListener('mouseup', function () {
            k.classList.remove('active');
        })
    }
    for(let ks of s){
        ks.addEventListener('mousedown', function () {
            ks.classList.add('active');
        })
        ks.addEventListener('mouseup', function () {
            ks.classList.remove('active');
        })
    }
    for(let ks of b){
        ks.addEventListener('mousedown', function () {
            ks.classList.add('active');
        })
        ks.addEventListener('mouseup', function () {
            ks.classList.remove('active');
        })
    } 
    for(let ks of d){
        ks.addEventListener('mousedown', function () {
            ks.classList.add('active');
        })
        ks.addEventListener('mouseup', function () {
            ks.classList.remove('active');
        })
    } 
    for(let ks of e){
        ks.addEventListener('mousedown', function () {
            ks.classList.add('active');
        })
        ks.addEventListener('mouseup', function () {
            ks.classList.remove('active');
        })
    }
    for(let ks of kc){
        ks.addEventListener('mousedown', function () {
            ks.classList.add('active');
        })
        ks.addEventListener('mouseup', function () {
            ks.classList.remove('active');
        })
    }
    for(let ks of a){
        ks.addEventListener('mousedown', function () {
            ks.classList.add('active');
        })
        ks.addEventListener('mouseup', function () {
            ks.classList.remove('active');
        })
    }
    for(let ks of w){
        ks.addEventListener('mousedown', function () {
            ks.classList.add('active');
        })
        ks.addEventListener('mouseup', function () {
            ks.classList.remove('active');
        })
    }  
} 
hover();





