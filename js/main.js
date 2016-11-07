
$(function () {
$("#iama").wordsrotator({
    words: ['a biker','an UX researcher','an Interaction Designer','a writer','a programmer','a web designer'], // Array of words, it may contain HTML values
    randomize: false,
    stopOnHover: false,
    changeOnClick: false,
    animationIn: "flipInY",
    animationOut: "flipOutY",
    speed: 2000 
  });
});
