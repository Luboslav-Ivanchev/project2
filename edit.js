
let title=document.getElementById('title');
let category=document.getElementById('category');
let textArea=document.getElementById('content');
let text=document.getElementsByClassName('field content')[1];
let t=text.children;
let te=Array.from(t);
let textDetails=te[0];
let button=document.querySelectorAll('button')[0];



function detailsFunc(event) {
    event.preventDefault();

  let  id1=event.currentTarget.getAttribute('data-key');
    button.setAttribute('data-key',id1);
    fetch(`https://creating-libraries-default-rtdb.firebaseio.com/CreateLibrary/${id1}.json`)

        .then(res=>res.json())
        .then(data=>{

         let keys=Object.keys(data);


          title.value=data.title;
          category.value=data.category;
          textArea.value=data.textArea;
          textDetails.value=data.textDetails;

            localStorage.setItem('id',id1);

        });


}


    function editFunc(event) {
        event.preventDefault();
        let button=document.querySelector('button');




        async function edited() {
            let  id=button.getAttribute('data-key');
            let promise=await fetch(`https://creating-libraries-default-rtdb.firebaseio.com/CreateLibrary/${id}.json`,{
                method:'PATCH',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({title:title.value,category:category.value,textArea:textArea.value,textDetails:textDetails.value}),

            });



            let response=await promise.json();

            title.value=response.title;
            category.value=response.category;
            textArea.value=response.textArea;
            textDetails.value=response.textDetails;

            let divAll=document.querySelectorAll('div');
            let divs=Array.from(divAll);

            divs.forEach(div=>{

                if(div.hasAttribute('data-key')){

                    if(div.getAttribute('data-key')===id){


                        div.innerHTML=`
                     <section class="js">
            <h2>${category.value}</h2>
            <div class="articles">
                <article>
                    <h3>${title.value}</h3>
                    <p>${textArea.value}</p>
                    <a href="#" class="btn details-btn">Details</a>
                </article>
                <article>
                    <h3>Object</h3>
                    <p>${textDetails.value}</p>
                    <a href="#" class="btn details-btn" data-key="${id}">Details</a>
                </article>
            </div>
        </section>     `;

                    }
                }
            })



            detailsFunc();
            detailFunc()
        }
        edited()





    }






