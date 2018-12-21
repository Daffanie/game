var game = (function(){

 var canvas = document.getElementById('canvas');
 var ctx = canvas.getContext('2d');
 var rect = canvas.getBoundingClientRect();
 var dir = 'right';

 return {

    changeDir: function(){
      if(dir == 'right'){
        dir = 'left';
      }else if (dir == 'left'){
        dir = 'right';
      }
    },

    evil: function(){
      var x = 0;
      var evil = setInterval(function(){

        ctx.fillStyle = 'yellow';
        ctx.clearRect(100, x-4, 10, 10);
        ctx.fillRect(100, x++, 10, 10);
        if(x == canvas.height+4){
          clearInterval(evil);
       }
      }, 4);

      },

    player: function(){

    var i = 0;

    var player = setInterval(function(){
      ctx.fillStyle = '#ffffff';

      if(i==canvas.width-50){
        dir = 'left';

      }

       if(i==0){
        dir = 'right';
       }

        if(dir=='right'){
          ctx.clearRect(i-4, 450, 50, 50);
          ctx.fillRect(i++, 450, 50, 50);
        }else{
          ctx.clearRect(i+4, 450, 50, 50);
          ctx.fillRect(i--, 450, 50, 50);
        }

  },10);


},

   init: function(){
     canvas.height = '600';
     canvas.width = '800';
     this.player();
     this.evil();
   }
 }


})();



game.init();

window.addEventListener('keyup', function(){
  game.changeDir();
});
