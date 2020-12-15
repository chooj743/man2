window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var width  = window.innerWidth;
    var height = window.innerHeight;
    canvas.height = height;
    canvas.width = width;
    canvas.addEventListener('mousedown', function(e) {
      this.down = true;  
      this.X = e.pageX ;
      this.Y = e.pageY ;
      this.color = rgb();
    }, 0);
    canvas.addEventListener('mouseup', function() {
      this.down = false;      
    }, 0);
    canvas.addEventListener('mousemove', function(e) {
      this.style.cursor = 'crosshair';
      if(this.down) {
          ctx.beginPath();
          ctx.moveTo(this.X, this.Y);
          ctx.lineCap = 'round';
           ctx.lineWidth = 3;
          ctx.lineTo(e.pageX , e.pageY );
          ctx.strokeStyle = this.color;
          ctx.stroke();
         
         this.X = e.pageX ;
         this.Y = e.pageY ;
      }
    }, 0);
    

  // ORIGINAL 
    function rgb() {
      color = 'rgb(';
      for(var i = 0; i< 3; i++) {
        color += Math.floor(Math.random() * 255)+',';
      }
      return color.replace(/\,$/,')');
    }    
  };


//I TRYING OUT
    // var red = color('rgb(255,0,0)');
    // var blue = color('rgb(0,0,255)');
    // var green = color('rgb(0,128,0)');
    // var black = color('rgb(255,255,255)');

    // var cd = ["red", "blue", "green", "black"];
    

    // function rgb(){
    //   for (var i = 0; i < cd.length; i++) {
    //     color += '';
    //     }
    //     return color.replace(/\,$/,')');
    //   };



// String.prototype.toColor = function rgb() {
//   var color = ["#ff0000", "#008000", "#0000ff", "#000000"];
  
//     var hash = 0;
//   if (this.length === 0) return hash;
//     for (var i = 0; i < this.length; i++) {
//         hash = this.charCodeAt(i) + ((hash << 5) - hash);
//         hash = hash & hash;
//     }
//     hash = ((hash % color.length) + color.length) % color.length;
//     return color[hash];
// }

// "string".toColor() // #e91e63


