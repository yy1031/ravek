

jQuery('.drawer-icon').on('click', function(e){
   e.preventDefault();

   jQuery('.drawer-icon').toggleClass('is-open');
   jQuery('.drawer-nav').toggleClass('is-open');

   return false;
 });