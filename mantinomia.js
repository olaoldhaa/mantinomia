backgroundDiv = document.getElementById("background-div");

window.onload = function createMagic() {
  var artworkCount = 0;

  for (var i = 1; i < 100; i++) {
    var widthTxt = Math.floor(Math.random() * 99) + 1;
    var heightTxt = Math.floor(Math.random() * 99) + 1;
    var backgroundColorTxt = Math.floor(Math.random() * 4) + 1;
    var leftTxt = Math.floor(Math.random() * 99) + 1;
    var topTxt = Math.floor(Math.random() * 99) + 1;
    var borderRadiusTxt1 = Math.floor(Math.random() * 100) + 1;
    var borderRadiusTxt2 = Math.floor(Math.random() * 100) + 1;
    var borderRadiusTxt3 = Math.floor(Math.random() * 100) + 1;
    var borderRadiusTxt4 = Math.floor(Math.random() * 100) + 1;
    var maxVal = 0xffffff;
    var randomNumber = Math.random() * maxVal;
    var randomNumber = Math.floor(randomNumber);
    var randomNumber = randomNumber.toString(16);
    var randColor = randomNumber.padStart(6, 0);
    var outputColor = `#${randColor.toUpperCase()}`;

    artworkCount = i;
    var artworkNr = "artwork" + artworkCount;
    backgroundDiv.innerHTML += `<div id = "${artworkNr}"></div>`;

    document.getElementById(artworkNr).style.backgroundColor = `${outputColor}`;
    document.getElementById(artworkNr).style.position = "absolute";
    document.getElementById(artworkNr).style.height = `${heightTxt}%`;
    document.getElementById(artworkNr).style.width = `${widthTxt}%`;
    document.getElementById(artworkNr).style.backgroundColor = `${backgroundColorTxt}`;
    document.getElementById(artworkNr).style.top = `${topTxt}%`;
    document.getElementById(artworkNr).style.left = `${leftTxt}%`;
    document.getElementById(artworkNr).style.transform ="translate(-50%, -50%)";
    document.getElementById(artworkNr).style.borderRadius = `${borderRadiusTxt1}% ${borderRadiusTxt2}% ${borderRadiusTxt3}% ${borderRadiusTxt4}%`;
    document.getElementById(artworkNr).style.filter = "brightness(75%)";
  }
};
