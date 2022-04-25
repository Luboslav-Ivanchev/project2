let routes={
    '/home':'home',
    '/create':'create',
    '/logout':'logout',
}

const router=(path)=>{

    let div=document.getElementById('app');
    let template=Handlebars.compile(document.getElementById(routes[path]).innerHTML)

    div.innerHTML=template({});

};

router(location.pathname);
