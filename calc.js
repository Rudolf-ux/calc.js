let btnTextList = ["C", "+/-", "%", "/", 
                    "7", "8", "9", "*",
                    "4", "5", "6", "-",
                    "1", "2", "3", "+",
                    "<", "0", ".", "="];
let main = document.querySelector("main");
let previousNumber = 0;
let operation ="";

function createUI(){
    let textField = document.createElement("div");
    textField.className = "line";
    textField.className = "textField";
    textField.textContent = "0";
    main.appendChild(textField);

    for (let i=0; i<5; i++){
        let line = document.createElement("div");
        line.className = "line";
        for (let j=i*4, k=0; k<4; k++, j++){
            let btn = document.createElement("div");
            btn.className = "btn";
            btn.textContent = btnTextList[j];
            if (i==0){
                btn.style.backgroundColor = "#a3a3a3";
            }
            if (k==3){
                btn.style.backgroundColor = "orange";
            }
            btn.addEventListener('click', (event)=>{clkBtn(btnTextList[j])})
            line.appendChild(btn);
        }
        main.appendChild(line);
    }
}

function clkBtn(txt){
    console.log(event.type);
    let textField = document.querySelector(".textField");
    if (txt=="C"){   
        textField.textContent = "0";
    }
    else if (Number(txt)==txt || txt=="."){
        if (textField.textContent=="0" && txt!="."){
            textField.textContent="";
        }
        textField.textContent += txt;
    }
    else if (txt=="+" || txt=="-" || txt=="*" || txt=="/"){
        previousNumber = textField.textContent;
        textField.textContent="0";
        operation = txt;
    }
    else if (txt=="="){
        let currentNumber = textField.textContent;
        if (operation=="+"){
            textField.textContent = Number(previousNumber) + Number(currentNumber);
        }
        else if (operation=="-"){
            textField.textContent = Number(previousNumber) - Number(currentNumber);
        }
        else if (operation=="*"){
            textField.textContent = Number(previousNumber) * Number(currentNumber);
        }
        else if (operation=="/"){
            textField.textContent = Number(previousNumber) / Number(currentNumber);
        }
    }
    else if (txt=="<"){
        textField.textContent = textField.textContent.slice(0,-1);
        if (textField.textContent==""){
            textField.textContent = "0";
        }
    }
    else if (txt=="+/-"){
        textField.textContent = Number(textField.textContent)*-1;
    }
    else if (txt=="%"){
         textField.textContent = Number(textField.textContent)/100;
    }
    
}

function add(){
    let blocks = document.querySelector(".blocks");
    let block = document.createElement("div");
    block.className = "block";
    let elements = blocks.querySelectorAll(".block");
    console.log(elements);
    if (elements.length>0){
        console.log(elements[elements.length-1])
        let lastNumber = Number(elements[elements.length-1].textContent);
        block.textContent = lastNumber + 1;
    }
    else{
        block.textContent = 0;
    }
    block.addEventListener('click', ()=>{
        blocks.removeChild(block);
        let elements = blocks.querySelectorAll(".block");
        for (let i=0; i<elements.length; i++){
            elements[i].textContent = i;
        }
    })
    blocks.appendChild(block);

}

createUI();
