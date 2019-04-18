console.log("Hello!");



// Test artwork5
// const myVivus1 = new Vivus('artwork5', { 
//   duration: 500, 
//   start: 'autostart',
//   pathTimingFunction: Vivus.LINEAR,
//   type: 'sync',
//   file: '/images/artwork1.svg'
//   },
//   //next
// );
// const myVivus2 = new Vivus('artwork5', { 
//   duration: 500, 
//   start: 'autostart',
//   pathTimingFunction: Vivus.LINEAR,
//   type: 'sync',
//   file: '/images/artwork2.svg'
//   }//,
//   //next
// );
// const myVivus3 =  new Vivus('artwork5', { 
//   duration: 500, 
//   start: 'autostart',
//   pathTimingFunction: Vivus.LINEAR,
//   type: 'sync',
//   file: '/images/artwork1.svg'
//   }//,
//   //next
// );

// myVivus1.play(function() {
//   myVivus2
// });


// Looping code
var index = 1;
var max = 6;
function run(){
  dovivus();
}
function next( ){
  document.getElementById('artwork' + index).style.opacity = 0;
  index++;
  if(index == max) {
    index = 1;
    return;  
  } else{
    dovivus();
  }
} 

function dovivus(){
  console.log("Do vivus! --> " + index);
  new Vivus('artwork' + index, { 
    duration: 700, 
    start: 'autostart',
    pathTimingFunction: Vivus.LINEAR,
    type: 'sync',
    file: '/images/artwork' + index + '.svg',
    // onReady: function (myVivus) {
    //     // `el` property is the SVG element
    //     document.getElementById('artwork' + index).style.opacity = 1;//('opacity', '1');
    //   }
    },
    next
  );
} 

run();  

// const myVivus = new Vivus('artwork');

// function callback () { console.log('all done'); }

// var i;
// for (i = 1; i < 7; i++) {
//   console.log("i is " + i);
//   new Vivus('artwork', { 
//     duration: 700, 
//     start: 'autostart',
//     pathTimingFunction: Vivus.LINEAR,
//     type: 'oneByOne',
//     file: '/images/artwork' + i + '.svg' 
//   });
// }


// const myVivus = new Vivus('my-svg-id');
// myVivus.play(1, function() {
//   // called after the animation completes
// });
