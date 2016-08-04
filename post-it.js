var Board = function( selector ) {
  // Aqui denerá ir el código que tenga que ver con tu tablero 
  
  // Utiliza esta sintaxis para referirte al selector que representa al tablero.
  // De esta manera no dependerás tanto de tu HTML.  
  var $elem = $( selector );

  
  function initialize() {
    // Que debe de pasar cuando se crea un nuevo tablero?
    $elem.dblclick(function(event) {
      var positionX = event.pageX
      var positionY = event.pageY
      console.log(positionX);
      console.log(positionY);
      counter_post = counter_post + 1
      post_it = new PostIt(positionX, positionY);
      post_it.num_post = counter_post
      console.log(post_it);

      $elem.append(post_it.new_post_it);
      $(".post-it").draggable({
         handle: ".header"
      });
        //En teoria esto es para que habilite el contenteditable
        // $(".content").draggable({ disabled: true });
        // }).dblclick(function() {
        // $(".content").draggable({ disabled: false });

      // $("#board").droppable();

      $(".close").click(function(){
        $( this ).parent().parent().remove()
      });

      // $(".header").click(function(){

      //   $(".content").css("height","10px")

      // })
      

      // $( post_it_id ).click(function(){

      //   $( post_it_id ).remove()

      // });
      
    });
  };
  initialize();
};

var counter_post = 0

var PostIt = function(positionX, positionY, selector) {
  // Aquí va el código relacionado con un post-it
  this.new_post_it = "<div id=\"master" + counter_post + "\" style=\" top:" + positionY + "; left:" + positionX + "; \" class=\"post-it\"><div class=\"header\"><div class=\"close\">X</div></div><div class=\"content\" contenteditable=\"true\">...</div></div>"

  this.num_post = 0

  var $elem_post = $( selector );

};

$(function() {
  // Esta es la fucnión que correrá cuando este listo el DOM 
  new Board('#board');
});
