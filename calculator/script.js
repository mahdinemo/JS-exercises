    let display = document.getElementById('display');

    // Make the display editable so users can type into it
    display.contentEditable = true; // This makes it act like a text box
    display.focus(); // Keeps the cursor in the display (the input part will be focused the time that program is loaded)


    let buttons = Array.from(document.getElementsByClassName('button'));

    //display.innerText       this line of code contains everything in the screen
    buttons.forEach( button => {
        button.addEventListener('click' , (e) => {
        switch(e.target.innerText){ //e.target is the exact element that has been clecked 
            case 'Temperature':
                document.getElementById('tempOptions').style.display = 'block';
                document.getElementById('tempButton').style.display = 'none';
                //display.innerText = '';
                display.focus;
                break;
            
            case 'C':
                display.innerText = '';
                break;

            case '←':
                if(display.innerText){
                    display.innerText= display.innerText.slice(0, -1); //slice is a js function to remove sth (I used it to remocve last element in the screen)
                }
                break;

            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch{
                    display.innerText = 'Error!';
                }
                break; // try and catch : it means if the code inside the try part couldn't be run then program will catch the mistake and show Error!
            
            case '√':
                try{
                    let value = eval(display.innerText);
                    if (!isNaN(value) && value>=0){
                        display.innerText = Math.sqrt(value);
                    }else{
                        display.innerText = 'Error!';
                    }
                }catch{
                    display.innerText = 'Error!';
                }
                break;

            default:
                display.innerText += e.target.innerText;
        }
        });
    });

    /*
    element.addEventlistener('eventType' , (e) => {
        codes to run when the event happens   
        keydown , mouseover and click are available  
        });
    */

    // Handle keyboard input
    display.addEventListener('keydown', (e) => {
        let currentText = display.innerText;

        // Handle specific keys
        if (e.key === 'Enter') { // Press Enter to calculate
            e.preventDefault(); // Stops Enter from adding a new line
            try {
                display.innerText = eval(currentText);
            } catch {
                display.innerText = 'Error!';
            }
        } else if (e.key === 'Backspace') { // Backspace to delete last character
            if (currentText) {
                display.innerText = currentText.slice(0, -1);
            }
        } else if (e.key === 'c' || e.key === 'C') { // 'C' or 'c' to clear
            display.innerText = '';
        } else if (/^[0-9+\-*/.]$/.test(e.key)) { // Allow numbers, operators, and decimal
            e.preventDefault();//preventing the browser from adding a new kwy it self
            display.innerText += e.key;
        }else if(e.key === 'r' || e.key === 'R'){
            e.preventDefault();
            try{
                let value = eval(display.innerText);
                if (!isNaN(value) && value>=0){
                    display.innerText = Math.sqrt(value);
                }else{
                    display.innerText = 'Error!';
                }
            }catch{
                display.innerText = 'Error!';
            }
        }
        // Optional: Prevent unwanted keys (like letters) from doing anything
        if (!/^[0-9+\-*/.]$/.test(e.key) && e.key !== 'Enter' && e.key !== 'Backspace' && e.key !== 'c' && e.key !== 'C') {
            e.preventDefault();
        }
    });

 

    //تابع تبدیل فارنهایت به سلسیوس
function convertFtoC() {
    let Fahrnheit = Number(display.innerText);
    if(!isNaN(Fahrnheit)){
        let celsius = (Fahrnheit - 32) * 5 / 9;
        display.innerText = celsius;
    }else {
        display.innerText = 'Error!';
    }
}

//تابع تبدیل سلسیوس به فارنهایت
function convertCtoF(){
  let celsius = Number(display.innerText);
  if (!isNaN(celsius)){
    let Fahrnheit = (celsius * 9 / 5 ) + 32;
    display.innerText = Fahrnheit;
  }else{
    display.innerText = 'Error!';
  }
}
