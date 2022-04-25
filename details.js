
let allButtons=document.querySelectorAll('button')[0];

let div=document.getElementsByClassName('details-content ')[0];
let allElements=Array.from(div.children);
let h2=allElements[0];
let strongCategory=allElements[1];
let contentP=allElements[2];
let contentDetails=allElements[3];
let title1=document.getElementById('title');
let category1=document.getElementById('category');
let textArea1=document.getElementById('content');
let text1=document.getElementsByClassName('field content')[1];
let t1=text1.children;
let te1=Array.from(t1);
let textDetails1=te1[0];

allButtons.addEventListener('click',function (e) {
    e.preventDefault();

    h2.textContent=`Title ${title1.value}`;
    strongCategory.textContent=`Category:${category1.value}`;
    contentP.textContent=`Content:${textArea1.value}`;
    contentDetails.textContent=`Content Details:${textDetails1.value}`;

})
let btn=document.getElementsByClassName('btn delete')[0];
console.log(btn);

btn.addEventListener('click',function (e) {

    history.pushState('btn-delete','btn-delete');

    e.preventDefault();

    let id=localStorage.getItem('id');
    console.log(id);


    fetch(`https://creating-libraries-default-rtdb.firebaseio.com/CreateLibrary/${id}.json`,{
        method:'DELETE',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({})
    }).then();

     let section=document.getElementsByClassName('js')[0];
     let div=Array.from(section.children);
     div.forEach(d=>{

         let articles=d.children[1];
         let a=articles.children[0];
         console.log(a.children[2].getAttribute('data-key'));
         if(id===a.children[2].getAttribute('data-key')){

             d.remove();

         }
     })


    h2.textContent='Title:';
    strongCategory.textContent='Category:';
    contentP.textContent='Content:';
    contentDetails.textContent='Content Details:';
    title1.value='';
    category1.value='';
    textArea1.value='';
    textDetails1.value='';






})

