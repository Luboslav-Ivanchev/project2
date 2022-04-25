function loginFunc(event) {

     event.preventDefault();

    let allInputs=document.querySelectorAll('input');
    let inputs=Array.from(allInputs);
    let emailInput=inputs[0];
    let passwordInput=inputs[1];


    async function logged() {

        let promise=await fetch(`https://creating-accounts-for-library-default-rtdb.firebaseio.com/Accounts.json`);
        let response=await promise.json();

         let keys=Object.keys(response);

       keys.map(x=>{


           if(emailInput.value===response[x].emailInput && passwordInput.value===response[x].passwordInput){
               console.log(response[x]);
               emailInput.style.border='solid green 3px';
               passwordInput.style.border='solid green 3px'
               let field=document.getElementsByClassName('field')[3];
               field.innerHTML=`
               <span>If you don't have profile click <a href="/register">here</a> <p style="color: whitesmoke;font-size: 15px">Logged In</p></span>
               `;


        let div=document.getElementById('app');

        div.innerHTML=`
         <!-- Header -->
    <header>
        <h1><a class="home" href="/home">SoftWiki</a></h1>
        <nav class="nav-buttons">
            <a href="/create">Create</a>
            <a href="/logout">Logout</a>
            <a href="/register">Register</a>
        </nav>
    </header>
    
     <!-- Home -->
    <div class="content">
        <section class="js">
            <h2>JavaScript</h2>
            <div class="articles">
                <article>
                    <h3>Arrays</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, excepturi magnam aliquid
                        quamest fugit ipsa quidem
                        impedit praesentium tempore placeat numquam blanditiis fuga soluta beatae perspiciatis voluptas
                        atque obcaecati?</p>
                    <a href="#" class="btn details-btn">Details</a>
                </article>
                <article>
                    <h3>Objects</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, excepturi magnam aliquid
                        quamest fugit ipsa quidem
                        impedit praesentium tempore placeat numquam blanditiis fuga soluta beatae perspiciatis voluptas
                        atque obcaecati?</p>
                    <a href="#" class="btn details-btn">Details</a>
                </article>
            </div>
        </section>
        <section class="CSharp">
            <h2>C#</h2>
            <div class="articles">
                <article>
                    <h3>Dictionary</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, excepturi magnam aliquid
                        quamest fugit ipsa quidem
                        impedit praesentium tempore placeat numquam blanditiis fuga soluta beatae perspiciatis voluptas
                        atque obcaecati?</p>
                    <a href="#" class="btn details-btn">Details</a>
                </article>
            </div>
        </section>
        <section class="Java">
            <h2>Java</h2>
            <div class="articles">
                <article>
                    <h3>JDK</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, excepturi magnam aliquid
                        quamest fugit ipsa quidem impedit praesentium tempore placeat numquam blanditiis fuga soluta
                        beatae perspiciatis voluptas atque obcaecati?</p>
                    <a href="#" class="btn details-btn">Details</a>
                </article>
            </div>
        </section>
        <section class="Pyton">
            <h2>Pyton</h2>
            <div class="articles">
                <article>
                    <h3>Gjango</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, excepturi magnam aliquid
                        quamest fugit ipsa quidem
                        impedit praesentium tempore placeat numquam blanditiis fuga soluta beatae perspiciatis voluptas
                        atque obcaecati?</p>
                    <a href="#" class="btn details-btn">Details</a>
                </article>
            </div>
        </section>
    </div>
    <!-- Edit -->
    <div class="container">

        <form action="#" method="">
            <fieldset>
                <legend>Edit article</legend>
                <p class="field title">
                    <input type="text" name="title" id="title" placeholder="Arrays">
                    <label for="title">Title:</label>
                </p>

                <p class="field category">
                    <input type="text" name="category" id="category" placeholder="JavaScript">
                    <label for="category">Category:</label>
                </p>
                <p class="field content">
                    <textarea name="content" id="content"></textarea>
                    <label for="content">Content:</label>
                </p>
                 <p class="field content">
                    <textarea name="content" id="content"></textarea>
                    <label for="content">Content Details:</label>
                </p>

                <p class="field submit">
                    <button class="btn submit" type="submit">Edit</button>
                </p>

            </fieldset>
        </form>
    </div>

    <!-- Details -->
    <div class="container details">
        <div class="details-content">
            <h2>Title</h2>
            <strong>Category</strong>
            <p>Content</p>
            <div class="buttons">
                <a href="#" class="btn delete">Delete</a>
                <a href="#" class="btn edit">Edit</a>
                <a href="#" class="btn edit">Back</a>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>My Site © Show info....</footer>
    
        `;

           }

       });
    }

    logged();


}