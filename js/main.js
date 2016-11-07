
$(function () {
$("#iama").wordsrotator({
    words: ['a biker','an UX researcher','an Interaction Designer','a writer','a programmer','a web designer'], // Array of words, it may contain HTML values
    randomize: false, //show random entries from the words array
    stopOnHover: false, //stop animation on hover
    changeOnClick: false, //force animation run on click
    animationIn: "flipInY", //css class for entrace animation
    animationOut: "flipOutY", //css class for exit animation
    speed: 2000 // delay in milliseconds between two words
  });
});
