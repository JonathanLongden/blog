export default function sketchgipy (p) {
  var searchgiph = "";
  var imgArray;
  var giphyInfo;
  var imgsReveal = [];
  var allImagesRandomized = false;
  var previousImgIndex = -1;
  var alertMessage = "";
  var alertMessageComing = false;
  var hideMismatchIndexes = [];
  const IMAGE_WIDTH = 50;
  const IMAGE_HEIGHT = 50;
  const ROWS = 5;
  const NUM_OF_IMGS = 10;


  p.mouseClicked = function() {
    var imgIndex = p.translateToImgIndex(p.mouseX, p.mouseY);
    if (imgIndex > -1 && imgIndex !== previousImgIndex) {
      console.log(imgIndex)
      console.log(previousImgIndex)
        imgsReveal[imgIndex] = true;
        if (previousImgIndex > -1) {
            if (p.doTheImagesMatch(imgIndex, previousImgIndex)) {
                if (p.allMatched(imgsReveal)) {
                    alertMessage = "You win! Play again?";
                } else {
                    alertMessage = "They Match!";
                }
            } else {
                alertMessage = "They Don't Match!!";
                hideMismatchIndexes = [previousImgIndex, imgIndex];
            }
            imgIndex = -1;
        }

        console.log(imgIndex, previousImgIndex);
        previousImgIndex = imgIndex;
    }
    // prevent default
    return false;
}

p.allMatched = function(imgsReveal) {
    for (var i = 0; i < imgsReveal.length; i++) {
        if (!imgsReveal[i]) {
            return false;
        }
    }
    return true;
}

p.doTheImagesMatch = function(imgIndex, previousImgIndex) {
  console.log(1)
    return imgArray[imgIndex] === imgArray[previousImgIndex];
}

p.translateToImgIndex = function(x, y) {
  if(imgArray){
     for (var i = 0; i < imgArray.length; i++) {
        var imgx = (i % ROWS) * IMAGE_WIDTH;
        var imgy = Math.floor(i / ROWS) * IMAGE_HEIGHT;
        if (p.insideSquare(imgx, imgy, x, y)) {
            return i;
        }
    }
    return -1;
  }
}

p.insideSquare= function(imgx, imgy, mouseX, mouseY) {
    var inX = mouseX > imgx && mouseX < imgx + IMAGE_WIDTH;
    var inY = mouseY > imgy && mouseY < imgy + IMAGE_HEIGHT;
    return inX && inY;
}
  p.preload = function () {
    var url = "http://api.giphy.com/v1/gifs/search?q=safety&api_key=h6HZ8I2DlH4s3cfzEhfo7yYojnbPRMfZ&limit=" + NUM_OF_IMGS;
    giphyInfo = p.loadJSON(url);
  }

  p.setup = function () {
    p.createCanvas(1000, 1200);//p.WEBGL
  };

  p.draw = function () {
    if(!searchgiph)
    {

    }

    if (!giphyInfo) {
      return;
    }

    if (!allImagesRandomized) {
        p.textSize(16);
        p.text("Loading Memory Game!", 10, 30);
    }
    if (!imgArray) {
        imgArray = [];
        var arrayURLS = p.extractMedImgURLS(giphyInfo);
        p.loadGiphyImg(arrayURLS);
        return;
    }

    if (allImagesRandomized) {
        p.drawGrid();
    }

    if (!allImagesRandomized && p.areAllImagesLoaded(imgArray)) {
        imgArray = p.randomizeImages(imgArray);
        allImagesRandomized = true;
    }
    p.processAlerts();

  };//end of draw function

  p.processAlerts = function () {
    if (alertMessage !== "" && !alertMessageComing) {
        alertMessageComing = true;
    } else if (alertMessage !== "" && alertMessageComing) {
        if (alertMessage.indexOf("win") === -1) {
          alert(alertMessage);
        } else {
            //Confirm is not native to React? Must install an NPM Package such as
            //https://www.npmjs.com/package/react-confirm
            var confirm;
            if(confirm(alertMessage)){
                imgArray = p.randomizeImages(imgArray);
                p.setAllToFalse(imgsReveal);
            } else {
                alert("Thanks for playing!");
            }
        }

        alertMessage = "";
        alertMessageComing = false;
        if (hideMismatchIndexes.length > 0) {
            imgsReveal[hideMismatchIndexes[0]] = false;
            imgsReveal[hideMismatchIndexes[1]] = false;
            hideMismatchIndexes = [];
        }
    }
  }

  p.setAllToFalse = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = false;
    }
  }

  p.drawGrid = function () {
    for (var i = 0; i < imgArray.length; i++) {
        if (imgsReveal[i]) {
            p.image(
                imgArray[i],
                (i % ROWS) * IMAGE_WIDTH,
                Math.floor(i / ROWS) * IMAGE_HEIGHT,
                IMAGE_WIDTH,
                IMAGE_HEIGHT
            );
        } else {
            //make grey rectangle to hide images
            p.fill("grey");
            p.rect(
                (i % ROWS) * IMAGE_WIDTH,
                Math.floor(i / ROWS) * IMAGE_HEIGHT,
                IMAGE_WIDTH,
                IMAGE_HEIGHT
            );
        }
    }
  }

  p.extractMedImgURLS = function(giphyInfo) {
    var arrayURLS = [];
    for (var i = 0; i < giphyInfo.data.length; i++) {
        arrayURLS.push(giphyInfo.data[i].images.downsized_medium.url);
    }
    return arrayURLS;
  }

  p.loadGiphyImg = function (arrayURLS) {
    if(arrayURLS){
      for (var i = 0; i < arrayURLS.length; i++) {
          p.loadImage(arrayURLS[i], function(gif) {
              console.log("Image loaded");
              imgArray.push(gif);
              imgArray.push(gif);
          });
      }
    }
  }

  p.areAllImagesLoaded = function(imgArray) {
    return imgArray.length === NUM_OF_IMGS * 2;
  }

  p.randomizeImages = function(imgArray) {
    var newImgArr = [];
    imgsReveal = [];
    while (imgArray.length > 0) {
        var num = Math.floor((Math.random() * imgArray.length));
        newImgArr.push(imgArray[num]);
        imgsReveal.push(false);
        imgArray.splice(num, 1);
    }
    return newImgArr;
  }

}; //end of function

