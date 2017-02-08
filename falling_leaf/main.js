var leaf = $('.first_leaf'); 
var leaves = $('#leaf');
var allClassLeaves = $('.leaf');
var randomNumber = 1
var tl = new TimelineMax({repeat: 0});
tl.set(leaf, { rotation: 5 });
var leaf_array = [$('#first_leaf'), $('#second_leaf'), $('#third_leaf'), $('#fourth_leaf'), $('#fifth_leaf'), $('#sixth_leaf'), $('#seventh_leaf'), $('#eighth_leaf'), $('#ninth_leaf'), $('#tenth_leaf'), $('#eleventh_leaf'), $('#twelfth_leaf')];



swingLeaf();



//this will cause the leaf to 'float' down and disapear then reapear back in orriginal spot.
function swingLeaf() {
  randomNumber = Math.floor((Math.random() * 12) + 1);
    console.log(randomNumber);

    
    leaf = leaf_array[randomNumber - 1]
  tl.add([
    TweenMax.fromTo(leaf,1,{

    scale:0.8,
  },{
    scale:1,
  })
  ]).add([
    TweenMax.to(leaf, 1.5, {
      left: 150,
      rotation: -5,
      ease: Power1.easeInOut
    }),
    TweenMax.to(leaf, 1.5, {
      top: "+=50",
      ease: Power1.easeOut
    })
  ]).add([
    TweenMax.to(leaf, 1.5, {
      left: 0,
      rotation: 5,
      ease: Power1.easeInOut
    }),
    TweenMax.to(leaf, 1.5, {
      top: "+=50",
      ease: Power1.easeOut,
    })

  ]).add([
    TweenMax.fromTo(leaf,1,{
    scale:1,
  },{
    scale:0,
    ease:Back.easeOut,
  })
  ]).add([
    TweenMax.to(leaf,0.3, {
      
      top:"-=100",
      
    })
  ]).add([ 
  TweenMax.fromTo(leaf,3,{
    ease:Back.easeOut,
    scale:0,
  },{
    scale:1,
    onComplete:swingLeaf,
  })
    
  ])
}













