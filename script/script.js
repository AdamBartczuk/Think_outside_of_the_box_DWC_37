document.addEventListener ('DOMContentLoaded', function(){
  var header = document.getElementById('header')

  console.log(header);

  function scrollFromTop () {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600 ){
        header.className = 'header-bg';
    } else {
        header.className = '';
    };
  };

window.onscroll = function() {scrollFromTop ()};


});
