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

function shareRecipe2(e){

    const food = e.currentTarget.parentElement.parentElement.parentElement.parentElement.id;
    window.alert(`the page at localhost: ${food} says:\n\n\n I am ${food}`);
    
};


// mit document. kann man sich ein Element aus dem Dokument rausssuchen. In diesem fall habe ich nach der
// classe share gesucht. Also alle elemente welche diese Klasse besitzen. 

let shareButton =  document.getElementsByClassName("share");

// Dies ist eine besonderheit. Bei id reicht es ohne loop.
// da ich aber nach klassen gesicht habe (Welche mehrmals vorkommen)
// spuck mir Javascript ein Array mit allen elementen dieser klasse aus.
// deswegen musste ich durch die klassen loopen um das richtige element dem zuzuweisen. 

for(let i = 0; i < shareButton.length; i++){    
shareButton[i].addEventListener('click', shareRecipe2, false);
};



  


  

  
