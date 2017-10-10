/*

///////////////////////////
// 
// Note: This is an attempt to make a graphic spin. 
// Currently, it spins once (way too fast), and does not work properly.
// It's a start and maybe can be fixed.
//
///////////////////////////

*/


degrees = 0;

function rotateAnimation(elementId, speed){
    var myImage = document.getElementById(elementId);
    console.log('^^^^^^');
    document.getElementById(elementId).style.WebkitTransform = 'rotate('+degrees+'deg)';
    console.log('rotated!')
    var looper = setTimeout(myHelpers.rotateAnimation(elementId, degrees), speed);
    degrees++;
    if (degrees > 359){
      degrees = 1;
    };
  
  }, //end rotateAnimation



/*

///////////////////////////
//
// Place this in your HTML to test:
//
///////////////////////////
  
  <img src='static/images/loading.png' alt='loading deck...' id='loading' >
  <script>myHelpers.rotateAnimation('loading', 2000);</script>



*/


