
    let string = "";
    let buttons = document.querySelectorAll('.button');
    Array.from(buttons).forEach((button) =>{
        button.addEventListener('click', (e) =>{
            if(e.target.innerHTML=='='){
                string = eval(string);
                document.querySelector('Input').value = string;
            }
            else if(e.target.innerHTML=='AC'){
                string = ""
                document.querySelector('Input').value = string;
            }
        
            else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('Input').value = string;
         }
        });
    });

