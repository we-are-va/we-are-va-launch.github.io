console.log("Hello, welcome to VA Relaunch!");


var svg_el = document.getElementsByClassName("artwork");
var current_svg  = 0; // Current SVG in rotation
var max_svgs     = svg_el.length; // Amount of SVGS
var i = 0, svgs = [];
var pathType = "sync";
var duration = 2000;
var background = "";
for (i = 0; i < svg_el.length; i++) {
  //console.log(svg_el[i].getAttribute("id"));
  svgs[i] = svg_el[i];
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// Go to next SVG
function next( ){

  svg_el[current_svg].style.opacity = 0;

  // stop for sometime if needed
  setTimeout(function() {
   // svg_el[current_svg].style.opacity = 0;
    current_svg++;
    console.log(current_svg);
    if(current_svg == max_svgs) {
      current_svg = 0;
    } 
    animate_svg();
  }, 5000);
} 
  
function animate_svg(){
  console.log("Do vivus! --> Artwork #" + current_svg);
  svg_el[current_svg].style.opacity = 1;
  
  pathType = svg_el[current_svg].getAttribute("data-path-type");
  if(!pathType) { pathType = "sync"; }

  duration = svg_el[current_svg].getAttribute("data-duration");
  if(!duration) { duration = 2000; } 

  background = svg_el[current_svg].getAttribute("data-background");
  if(background) { document.getElementsByTagName("BODY")[0].style.backgroundColor = "#" + background; }
  else { document.getElementsByTagName("BODY")[0].style.backgroundColor = "#fff"; }


  new Vivus(svg_el[current_svg].getAttribute("id"), { 
    duration: duration,
    start: 'autostart',
    pathTimingFunction: Vivus.EASE,
    type: pathType, //'sync', 'oneByOne',
    file: '/images/artwork' + current_svg + '.svg',
    // onReady: function (myVivus) {
    //     // `el` property is the SVG element
    //     document.getElementById('artwork' + current_svg).style.opacity = 1;//('opacity', '1');
    //   }
    },
    next
  );
} 

// **************** 
// Run the Vivus SVG code
animate_svg(); 
