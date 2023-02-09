// var $myGroup = $('#myGroup');
// $myGroup.on('show.bs.collapse','.collapse', function() {
//     $myGroup.find('.collapse.in').collapse('hide');
// });

// $('[data-toggle="collapse"]').click(function() {
//     $('.collapse.in').collapse('hide')
//   });

function shareRecipe(e){
    
    const url = window.location.href
    window.alert(`the page at localhost: ${url} says:\n\n\n my alert message`);
    
};

// Funktion hab eich kopiert und angepasst. element ist die unformation des elements welches geklickt wird
// dazu braucht man aber den event listener.

function shareRecipe2(element){

    const food = element.currentTarget.parentElement.parentElement.parentElement.parentElement.id;
    const url = window.location.href
  
    window.alert(`the page at localhost: ${food} says:\n\n\n I am ${food} and I have taken ${url} as my Prisoner`);
    
};

// mit document. kann man sich ein Element aus dem Dokument rausssuchen. In diesem fall habe ich nach der
// classe share gesucht. Also alle elemente welche diese Klasse besitzen. 

let shareButton =  document.getElementsByClassName("share");
[...shareButton].map((item) => item.addEventListener('click',shareRecipe2,false));


// Dies ist eine besonderheit. Bei id reicht es ohne loop.
// da ich aber nach klassen gesicht habe (Welche mehrmals vorkommen)
// spuck mir Javascript ein Array mit allen elementen dieser klasse aus.
// deswegen musste ich durch die klassen loopen um das richtige element dem zuzuweisen. 

// for(let i = 0; i < shareButton.length; i++){    

//     mit addEventlistener kann man bestimmte events zu einem Element hinzufügen.
//     in diesem fall ist es ein click event. Was die funktion shareRecipe2 ausfügt.
//     false ist das die nicht automatisch ausgeführt wird, das ist ihr grundzustand
// shareButton[i].addEventListener('click', shareRecipe2, false);
// };

// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Closing foodlists which are open.

function toggle(){
    const foodList = document.querySelectorAll(".foodList");
    [...foodList].map((element) => element.classList.remove("show"));
};



const categories =  document.querySelectorAll("#foodCategories>a");
console.log(categories);

[...categories].map((item) => item.addEventListener('click',toggle,false));



// Database for cards

let foods = [
    pho = {
        id: "pho",
        name: "Pho",
        cuisine: "asian",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    massamanCurry = {
        id: "massamanCurry",
        name: "Massaman Curry",
        cuisine: "asian",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    bunNem = {
        id: "bunNem",
        name: "Bunnem",
        cuisine: "asian",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    chopSuey = {
        id: "chopSuey",
        name: "ChopSuey",
        cuisine: "asian",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
   

]

foods.map((element) => {
    let cardBox = document.querySelector("#cardBox");
    let html_to_insert = `
    <div class="mb-4 collapse" id="${element.id}">
    <div class="card">
        <button type="button" class="btn-close p-3"  data-bs-toggle="collapse" data-bs-target="#${element.id}" aria-expanded="true"
        aria-controls="${element.id}"></button>
        <div class="card-body">


            <h5 class="card-title">${element.name}</h5>
            <p class="card-text">${element.description}</p>
            <img src="https://images.unsplash.com/photo-1631709497146-a239ef373cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                class="card-img-top object-fit-cover" alt="...">

            <div>
                <table class="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Ingredient</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Carrots</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Sugar</td>
                            <td>2 TS</td>
                        </tr>
                        <tr>
                            <td>Butter</td>
                            <td>50 g</td>

                    </tbody>
                </table>
                <h5>Zubereitung</h2>
                    <p>
                        Zuerst die Brühe vorbereiten. Alles kleinschneiden und reinhauen. Zum Schluss dann noch frische Käruter oben drauf.
                    </p>
                    <button class="btn btn-primary share">Share</button>
            </div>
        </div>
    </div>
</div>
    `
    cardBox.innerHTML += html_to_insert;



})






  


  

  
