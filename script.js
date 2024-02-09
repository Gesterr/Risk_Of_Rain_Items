//Данный код,отвечает за то, чтобы при нажатии появлялась инфомарция о предмете

function check(id){
   var element = document.getElementById('info' + id.slice(4));
   var info = '#info' + id.slice(4);
   if(element.style.display === 'none'){
    $(info).show(100);
   }else{
    $(info).hide(100);
   }
};