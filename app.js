function bgClrChange() {
    var section = document.getElementById("section1");
    var userClr = prompt("Enter Color For Background Color");
    section.style.backgroundColor = userClr;
}

function txtClr() {
    var heading = document.getElementsByTagName("h1")
    var userClr = prompt("Enter Color For Text Color");
    for (var i = 0; i < heading.length; i++) {
        heading[i].style.color = userClr
    }
}

// For Image//


function showImg() {
    var myImg = document.getElementById("myImg");
    myImg.style.display = "block";
    myImg.style.margin = "auto";


}

function bigImg() {
    var myImg = document.getElementById("myImg");
    myImg.className = "bigImg";


}

function smallImg() {
    var myImg = document.getElementById("myImg");
    myImg.className = " smallImg";

}

function hideImg() {
    var myImg = document.getElementById("myImg");
    myImg.style.display = "none"
    console.log(myImg);
}

//  bulb section

function bulbOn(e) {
    e.src = "./images/bulb-on.jpg"
}

function bulbOf(e) {
    e.src = "./images/bulb-off.jpg"
}

// Section Text Color Change

function textClr() {
    var myDiv = document.getElementById("section4")
    var para = myDiv.getElementsByTagName("p")
    for (var i = 0; i < para.length; i++) {
        var userClr = prompt("Enter Color Name For Para" + " " + (i+1))
        para[i].style.color = userClr;
    }
}


// first and last para change color

function chngClr(){
    var paraDiv = document.getElementById("section5")
    var para = paraDiv.getElementsByTagName("p")
    var userClr = prompt("Enter Color Name For Para 1")
    para[0].style.color= userClr;
    
    var userClr = prompt("Enter Color Name For Para 4")
    para[3].style.color= userClr;
    // console.log(para);

}
