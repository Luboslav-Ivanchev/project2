function registerFunc(event) {

    event.preventDefault();

    let allInput=document.querySelectorAll('input');
    let inputs=Array.from(allInput);
    let emailInput=inputs[0];
    let passwordInput=inputs[1];
    let repeatPasswordInput=inputs[2];


        if(emailInput.value.includes('@') && emailInput.value!=='' && passwordInput.value!=='' && repeatPasswordInput.value!=='' && passwordInput.value===repeatPasswordInput.value){


            async function ifItTrue() {
                let accounts=await fetch(`https://creating-accounts-for-library-default-rtdb.firebaseio.com/Accounts.json`);
                 let promise=await accounts.json()

                let keys=Object.keys(promise);

                 keys.map(x=>{
                     if(emailInput.value===promise[x].emailInput && passwordInput.value===promise[x].passwordInput && repeatPasswordInput.value===promise[x].repeatPasswordInput){
                         let field1=document.getElementsByClassName('field')[4];

                         field1.innerHTML=`
                         
                         <span>If you already have profile click <a href="/login">here</a> <p>These values are in the database</p></span>
                         `;

                         emailInput.style.border='3px solid red';
                         passwordInput.style.border='3px solid red';
                         repeatPasswordInput.style.border='3px solid red';



                     }

                     });
            }
            ifItTrue();


             async function ifItOk(){


                 let promise = await fetch(`https://creating-accounts-for-library-default-rtdb.firebaseio.com/Accounts.json`);
                 let response = await promise.json();

                 if(emailInput.value!==response.emailInput && passwordInput.value!==response.passwordInput && repeatPasswordInput.value!==response.repeatPasswordInput){

                     let object = {
                         method: 'POST',
                         headers: {'Content-type': 'application/json'},
                         body: JSON.stringify({
                             emailInput: emailInput.value,
                             passwordInput: passwordInput.value,
                             repeatPasswordInput: repeatPasswordInput.value
                         }),
                     }
                     let returnFetch=fetch(`https://creating-accounts-for-library-default-rtdb.firebaseio.com/Accounts.json`,object);


                     let field = document.getElementsByClassName('field')[4];

                     field.innerHTML=`
                   
                      <span>If you already have profile click <a href="/login">here</a> <p>You are registered</p></span>
                   `;

                     emailInput.style.border = '3px solid green';
                     passwordInput.style.border = '3px solid green';
                     repeatPasswordInput.style.border = '3px solid green';

                 }
                 emailInput.value='';
                 passwordInput.value='';
                 repeatPasswordInput.value='';


             }

             ifItOk();

        }else{
            emailInput.style.border='3px solid red';
            passwordInput.style.border='3px solid red';
            repeatPasswordInput.style.border='3px solid red';
            let field=document.getElementsByClassName('field')[4];
            let span=document.createElement('span');
            span.textContent='You are missing something!';
            span.style.color='white';
            span.style.fontSize='15px';
            field.append(span)


        }


}


