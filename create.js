
function createFunc(event) {
    event.preventDefault();


    let inputs = document.querySelectorAll('input');
    let inputAll = Array.from(inputs);
    let title = inputAll[0];
    let category = inputAll[1];
    let textArea1 = document.querySelectorAll('textarea');
    let text = Array.from(textArea1);
    let textArea = text[0];
    let textDetails = text[1];



    localStorage.setItem('titleValue',title.value);
    localStorage.setItem('categoryValue',category.value);
    localStorage.setItem('textArea',textArea.value);
    localStorage.setItem('textDetails',textDetails.value);



 let promise=fetch(`https://creating-libraries-default-rtdb.firebaseio.com/CreateLibrary.json`,{
     method:'POST',
     headers:{'Content-type':'application/json'},
     body:JSON.stringify({title:title.value,category:category.value,textArea:textArea.value,textDetails:textDetails.value}),
 })
    promise.then(res=>res.json())




}
