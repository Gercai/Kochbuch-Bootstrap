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

//    console.log(e.currentTarget.parentElement.parentElement.parentElement.parentElement.id)
    const food = e.currentTarget.parentElement.parentElement.parentElement.parentElement.id;
    window.alert(`the page at localhost: ${food} says:\n\n\n I am ${food}`);
    
};

let shareButton =  document.getElementsByClassName("share");

for(let i = 0; i < shareButton.length; i++){    
shareButton[i].addEventListener('click', shareRecipe2, false);
};



  


  

  
