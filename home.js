
function addedValues(event) {

    let divContent=document.querySelector('div>.content');

    let title=localStorage.getItem('titleValue');
    let category=localStorage.getItem('categoryValue');
    let textArea=localStorage.getItem('textArea');
    let textDetails=localStorage.getItem('textDetails');
    let section=document.createElement('section');
    section.setAttribute('class','js');

    fetch(`https://creating-libraries-default-rtdb.firebaseio.com/CreateLibrary.json`)
        .then(res=>res.json())
        .then(data=>{

       let  keys=Object.keys(data);



       section.innerHTML=keys.map(x=>`
<div data-key="${x}">
       <h2>${data[x].category}</h2>
            <div class="articles">
               <article>
                 <h3>${data[x].title}</h3>
                <p>${data[x].textArea}</p>
                    <a href="#" class="btn details-btn" onclick="detailsFunc(event)" data-key="${x}">Details</a>
                </article>
                <article>
                   <h3>Objects</h3>
                    <p>${data[x].textDetails}</p>
                    <a href="#" class="btn details-btn" onclick="detailsFunc(event)" data-key="${x}">Details</a>
               </article>
            </div>
            </div>
       `).join('');


        divContent.appendChild(section);

    });




            section.innerHTML=`
         <h2>${category}</h2>
            <div class="articles">
               <article>
                 <h3>${title}</h3>
                <p>${textArea}</p>
                    <a href="#" class="btn details-btn">Details</a>
                </article>
                <article>
                   <h3>Objects</h3>
                    <p>${textDetails}</p>
                    <a href="#" class="btn details-btn">Details</a>
               </article>
            </div>
      `;
    divContent.appendChild(section);

}



addedValues()