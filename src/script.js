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

// mit document. kann man sich ein Element aus dem Dokument rausssuchen. In diesem fall habe ich nach der
// classe share gesucht. Also alle elemente welche diese Klasse besitzen. 



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
[...categories].map((item) => item.addEventListener('click',toggle,false));


// Database for cards

let foods = [ 
    pho = {
        id: "pho",
        name: "Pho",
        cuisine: "asian",
        img: "https://images.unsplash.com/photo-1631709497146-a239ef373cf1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    massamanCurry = {
        id: "massamanCurry",
        name: "Massaman Curry",
        cuisine: "asian",
        img: "https://images.unsplash.com/photo-1672933036331-e27ffae157bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8TWFzc2FtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    bunNem = {
        id: "bunNem",
        name: "Bunnem",
        cuisine: "asian",
        img: "https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    chopSuey = {
        id: "chopSuey",
        name: "ChopSuey",
        cuisine: "asian",
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    matterPanir = {
        id: "matterPanir",
        name: "Matter Panir",
        cuisine: "indian",
        img: "https://images.unsplash.com/photo-1618449840665-9ed506d73a34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    palakPanir = {
        id: "palakPanir",
        name: "Palak Panir",
        cuisine: "indian",
        img: "https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  
    },
    papadam = {
        id: "papadam",
        name: "Papadam",
        cuisine: "indian",
        img: "https://images.unsplash.com/photo-1586524068358-77d2196875e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  
    },
    butterChicken = {
        id: "butterChicken",
        name: "Butter Chicken",
        cuisine: "indian",
        img: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  
    },
    murgKorma = {
        id: "murgKorma",
        name: "Murg Korma",
        cuisine: "indian",
        img: "https://images.unsplash.com/photo-1545247181-516773cae754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    proteinBowl = {
        id: "proteinBowl",
        name: "Protein Bowl",
        cuisine: "bowl",
        img: "https://images.unsplash.com/photo-1556040220-4096d522378d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGJvd2x8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    seafoodBowl = {
        id: "seafoodBowl",
        name: "Seafood Bowl",
        cuisine: "bowl",
        img: "https://images.unsplash.com/photo-1602881917760-7379db593981?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGJvd2x8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    avocadoBowl = {
        id: "avocadoBowl",
        name: "AvocadoBowl",
        cuisine: "bowl",
        img: "https://images.unsplash.com/photo-1594998893017-36147cbcae05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1186&q=80",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
    bestVeganBowl = {
        id: "bestVeganBowl",
        name: "bestVeganBowl",
        cuisine: "bowl",
        img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGJvd2x8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    },
]

foods.map((food) => {
    let cardBox = document.querySelector("#cardBox");
    let html_to_insert = `
    <div class="col mb-4 collapse" id="${food.id}">
    <div class="card">
        <button type="button" class="btn-close p-3"  data-bs-toggle="collapse" data-bs-target="#${food.id}" aria-expanded="true"
        aria-controls="${food.id}"></button>
        <div class="card-body">


            <h5 class="card-title">${food.name}</h5>
            <p class="card-text">${food.description}</p>
            <img src="${food.img}"  data-bs-toggle="tooltip" data-bs-title="${food.name}"
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


//Share muss nach dem rendern passieren. Schauen ob das nicht besser geht. Wahrscheinlich promise.

let shareButton =  document.getElementsByClassName("share");

[...shareButton].map((item) => item.addEventListener('click',shareRecipe2,false)
);

function shareRecipe2(element){

    const food = element.currentTarget.parentElement.parentElement.parentElement.parentElement.id;
     const url = window.location.href
    window.alert(`the page at localhost: ${food} says:\n\n\n I am ${food} and I have taken ${url} as my Prisoner`);
    
};

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))







  


  

  
