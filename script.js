let movingImagesDatabase = [
  {
    "title" : "이미 지난 모든 봄",
    "year" : "2022–2023",
    "id" : "spring",
    "imgCount" : "1",
    "description" : "An experimentation on memory, dream, ephemerality. In development.",
    "first" : "true"
  },
  {
    "title" : "비둘기 (Pigeons)",
    "year" : "2022",
    "id" : "pigeon",
    "imgCount" : "10",
    "description" : "A musing on pigeons.",
  },
  {
    "title" : "Ball",
    "year" : "2022",
    "id" : "ball",
    "imgCount" : "6",
    "description" : "A man and a ball plagued by absurdity! A Švankmajer-inspired short."
  },
  {
    "title" : "Three Chapters",
    "year" : "2022",
    "id" : "three",
    "imgCount" : "9",
    "description" : "A weaving of archival footage, a reflection on the thin border between living and dying."
  },

  {
    "title" : "Miscellaneous",
    "year" : "2021–Present",
    "id" : "misc",
    "imgCount" : "15",
    "description" : "Various projects as director or principal crew member.",
    "last" : "true"
  }
];

let analogStillsDatabase = [
  {
    "title" : "Kigali",
    "year" : "2019",
    "id" : "kigali",
    "imgCount" : "20",
    "description" : "Architecture and humans of Kigali.",
    "first" : "true"
  },
  {
    "title" : "MoMA'22",
    "year" : "2022",
    "id" : "moma",
    "imgCount" : "10",
    "description" : ""
  },
  {
    "title" : "Summer Nostalgia",
    "year" : "2019",
    "id" : "summer",
    "imgCount" : "14",
    "description" : ""
  },
  {
    "title" : "Miscellaneous",
    "year" : "2018 - Present",
    "id" : "misc",
    "imgCount" : "60",
    "description" : "Life in its ever-changing forms."
  }
];

let designDatabase = [
  {
    "year" : "2022",
    "thumbnail-orientation" : "landscape",
    "unique-thumbnail" : "false",
    "type" : "UX & UI Design, Deck Design, Software Engineering, Program Management",
    "id" : "msft",
    "imgCount" : "7",
    "description" : "Design for internal application to consolidate access review operations under Microsoft's Controls & Compliance team."
  },
  {
    "year" : "2022",
    "video" : "true",
    "thumbnail-orientation" : "landscape",
    "type" : "Motion Design",
    "id" : "creclogo",
    "imgCount" : "0",
    "description" : "Logo animation for NYU's official Campus Recreation media."
  },
  {
    "year" : "2022",
    "thumbnail-orientation" : "landscape",
    "unique-thumbnail" : "false",
    "type" : "Graphic Design",
    "id" : "nbc",
    "imgCount" : "1",
    "description" : "Metric analysis summary for official culture newsletter distributed at NBCUniversal."
  },
  {
    "year" : "2022",
    "thumbnail-orientation" : "portrait",
    "unique-thumbnail" : "false",
    "type" : "Graphic Design",
    "id" : "murakami",
    "imgCount" : "2",
    "description" : "Cover designs for stories from Murakami's collection The Elephant Vanishes."
  },
  {
    "year" : "2022",
    "thumbnail-orientation" : "landscape",
    "type" : "Web Design, Deck Design",
    "id" : "solo",
    "imgCount" : "15",
    "description" : "Experimental site on degradation of cinematic experience in modern world."
  },
  {
    "year" : "2021",
    "thumbnail-orientation" : "portrait",
    "unique-thumbnail" : "false",
    "type" : "Graphic Design",
    "id" : "mamihlapinatapai",
    "imgCount" : "6",
    "description" : "Book cover variations for fictional publication."
  },
  {
    "year" : "2021",
    "thumbnail-orientation" : "landscape",
    "unique-thumbnail" : "false",
    "type" : "Graphic Design, Brand Design",
    "id" : "vagary",
    "imgCount" : "13",
    "description" : "Branding design for travel agency."
  },
  {
    "year" : "2022",
    "video" : "true",
    "audio" : "true",
    "thumbnail-orientation" : "landscape",
    "type" : "Motion Design",
    "id" : "hahaheehee",
    "description" : "Motion graphic for opening of Ha Ha, Hee Hee by Sly and the Family Stone."
  },
  {
    "year" : "2022",
    "thumbnail-orientation" : "landscape",
    "unique-thumbnail" : "false",
    "type" : "Web Design",
    "id" : "zert",
    "imgCount" : "1",
    "description" : "Interactive web manifestation of Milan Kundera's novel The Joke."
  }
];

let movingImages = document.getElementById("moving-images");

if (movingImages != null) {
  for (let i = 0; i < movingImagesDatabase.length; i++) {
    createMovingImages(movingImagesDatabase[i]);
    let slideIndex = 0;
    advanceImages();

    function advanceImages() {
      let slides = document.getElementsByClassName(movingImagesDatabase[i]['id'] + "-carousel");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.visibility = "hidden";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.visibility = "visible";
      setTimeout(advanceImages, 2000);
    }
  }
}

function createMovingImages(incomingJSON) {
  let newSlide = document.createElement("DIV");
  newSlide.classList.add("slide");
  let newCarousel = document.createElement("DIV");
  newCarousel.classList.add("carousel");

  let newSpan = document.createElement("SPAN");
  newSpan.classList.add("work-title");
  newSpan.appendChild(document.createTextNode(incomingJSON['title'] + " / " + incomingJSON['year']));
  let newDescription = document.createElement("DIV");
  newDescription.classList.add("description");
  newDescription.appendChild(newSpan);
  newDescription.appendChild(document.createElement("BR"));
  newDescription.appendChild(document.createTextNode(incomingJSON['description']));
  let newButton = document.createElement("DIV");
  let prevButton = document.createElement("DIV");
  let nextButton = document.createElement("DIV");
  newButton.classList.add("buttons");
  prevButton.classList.add("prev");
  nextButton.classList.add("next");
  prevButton.appendChild(document.createTextNode("PREV"));
  nextButton.appendChild(document.createTextNode("NEXT"));

  if (incomingJSON['first'] != "true") {
    newButton.appendChild(prevButton);
  }
  if (incomingJSON['last'] != "true") {
    newButton.appendChild(nextButton);
  }

  for (let i = 1; i <= incomingJSON['imgCount']; i++) {
    let newImage = document.createElement("IMG");
    newImage.src="IMGS/moving-images/" + incomingJSON['id'] + "/" + i + ".jpg";
    newImage.classList.add(incomingJSON['id'] + "-carousel");
    newCarousel.appendChild(newImage);
  }

  newSlide.appendChild(newCarousel);
  newSlide.appendChild(newDescription);
  newSlide.appendChild(newButton);
  movingImages.appendChild(newSlide);
}

prevButtons = document.getElementsByClassName("prev");
nextButtons = document.getElementsByClassName("next");
var movingImagesSlider = 0;
for (let i = 0; i < prevButtons.length; i++) {
  prevButtons[i].addEventListener("click", prevFilm);
}
for (let i = 0; i < nextButtons.length; i++) {
  nextButtons[i].addEventListener("click", nextFilm);
}
function prevFilm() {
  movingImagesSlider += 100;
  movingImages.style.marginTop = movingImagesSlider + "vh";
}
function nextFilm() {
  movingImagesSlider -= 100;
  movingImages.style.marginTop = movingImagesSlider + "vh";
}

let stillsContainer = document.getElementById("stills-container");
let analogNav = document.getElementById("analog-stills-nav");

if (analogNav != null) {
  for (let i = 0; i < analogStillsDatabase.length; i++) {
    createAnalogStills(analogStillsDatabase[i]);
  }
}

function createAnalogStills(incomingJSON) {

  let newListItem = document.createElement("DIV");
  newListItem.classList.add("nav-item");
  if (incomingJSON['first'] == "true") {
    newListItem.classList.add("active");
  }
  newListItem.appendChild(document.createTextNode(incomingJSON['title']));
  newListItem.id = incomingJSON['id'] + "-nav";
  analogNav.appendChild(newListItem);

  let stills = document.createElement("div");
  stills.classList.add("stills");

  for (let i = 1; i <= incomingJSON['imgCount']; i++) {
    let newImage = document.createElement("IMG");
    newImage.src="IMGS/analog-stills/" + incomingJSON['id'] + "/" + i + ".jpg";
    stills.appendChild(newImage);
    if (i == 1) {
      let newDescription = document.createElement("DIV");
      newDescription.classList.add("collection-description");
      newDescription.appendChild(document.createTextNode(incomingJSON['description']));
      let newYr = document.createElement("DIV");
      newYr.classList.add("self-credit");
      newYr.appendChild(document.createTextNode(incomingJSON['year'] + ". Shot on 35mm, Developed & Scanned By Me."));
      stills.appendChild(newDescription);
      stills.appendChild(newYr);
    }
  }

  var idName = incomingJSON['id'] + "-stills";
  stills.id = idName;

  if (incomingJSON['first'] != "true") {
    stills.classList.add("hide");
  }

  stillsContainer.appendChild(stills);
}

if (analogNav != null && analogNav.childElementCount == analogStillsDatabase.length) {
  for (let i = 0; i < analogStillsDatabase.length; i++) {
    document.getElementById(analogStillsDatabase[i]['id'] + "-nav").addEventListener("click", function() {
      goToCollection(analogStillsDatabase[i]['id']);
    });
  }
}

function goToCollection(collectionName) {
  var nav = document.getElementById(collectionName + "-nav");
  var navItems = analogNav.children;
  for (let i = 0; i < navItems.length; i++) {
    if (navItems[i].classList.contains("active")) {
      navItems[i].classList.remove("active");
    }
  }
  nav.classList.add("active");
  var stills = stillsContainer.children;
  for (let i = 0; i < stills.length; i++) {
    stills[i].classList.add("hide");
  }
  var collection = document.getElementById(collectionName + "-stills");
  collection.classList.remove("hide");
  stillsContainer.scrollTop = 0;
}

let designAll = document.getElementById("design-all");
let designSingle = document.getElementById("design-single");

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let urlID = urlParams.get('id');

if (urlID == "" || urlID == null && designSingle !=null && designAll != null) {
  designSingle.style.display="none";
  for (let i = 0; i < designDatabase.length; i++) {
    createDesigns(designDatabase[i]);
  }
}
else if (designAll != null) {
  designAll.style.display="none";
  document.body.style.backgroundColor="#D3DFF2";
  for (let i = 0; i < designDatabase.length; i++) {
    if (designDatabase[i]['id'] == urlID) {
      createSingleDesign(designDatabase[i]);
    }
  }
}

function createDesigns(incomingJSON) {
  let newLink = document.createElement("A");
  newLink.href = "design.html?id=" + incomingJSON['id'];
  let newThumbnail = document.createElement("IMG");
  newThumbnail.src="IMGS/design/" + incomingJSON['id'] + "/0.jpg";
  if (incomingJSON['thumbnail-orientation'] == "portrait") {
    newThumbnail.classList.add("portrait");
  }
  else { newThumbnail.classList.add("landscape"); }
  newLink.appendChild(newThumbnail);
  designAll.appendChild(newLink);
}

function createSingleDesign(incomingJSON) {
  if (incomingJSON['video'] == "true") {
    let newVideoContainer = document.createElement("DIV");
    newVideoContainer.classList.add("single-container");
    let newVideo = document.createElement("VIDEO");
    newVideo.loop = true;
    newVideo.playsinline = true;
    if (incomingJSON['audio'] == "true") {
      newVideo.controls = true;
    }
    else {
      newVideo.controls = false;
      newVideo.autoplay = true;
      newVideo.muted = true;
    }
    newVideo.src = "IMGS/design/" + incomingJSON['id'] + "/1.mp4";
    newVideo.type="video/mp4";
    newVideoContainer.appendChild(newVideo);
    designSingle.appendChild(newVideoContainer);
  }
  else {
    let newImgsContainer = document.createElement("DIV");
    let newImages = document.createElement("DIV");
    newImages.classList.add("design-images");

    if (incomingJSON['imgCount'] == 1) {
      newImgsContainer.classList.add("single-container");
    }
    else {
      newImgsContainer.classList.add("design-imgs-container");
    }

    for (let i = 0; i < incomingJSON['imgCount']; i++) {
      if (incomingJSON['unique-thumbnail'] != "false" && i == 0) { continue; }
      let newImg = document.createElement("IMG");
      newImg.src="IMGS/design/" + incomingJSON['id'] + "/" + i + ".jpg";
      if (incomingJSON['thumbnail-orientation'] == "portrait") {
        newImg.classList.add("portrait");
      }
      else { newImg.classList.add("landscape"); }
      if (incomingJSON['imgCount'] == 1) {
        newImgsContainer.appendChild(newImg);
      }
      else {
      newImages.appendChild(newImg);
      }
    }

    if (incomingJSON['imgCount'] > 1) {
      newImgsContainer.appendChild(newImages);
    }
    designSingle.appendChild(newImgsContainer);
  }
  let newDescriptionContainer = document.createElement("DIV");
  newDescriptionContainer.classList.add("design-description-container");
  let newDescription = document.createElement("DIV");
  newDescription.classList.add("design-description");
  let newDesignType = document.createElement("SPAN");
  newDesignType.classList.add("design-type");
  newDesignType.appendChild(document.createTextNode(incomingJSON['year'] + " / " + incomingJSON['type']));
  newDescription.appendChild(newDesignType);
  newDescription.appendChild(document.createTextNode(incomingJSON['description']));
  newDescriptionContainer.appendChild(newDescription);
  designSingle.appendChild(newDescriptionContainer);

  let newReturnButton = document.createElement("DIV");
  newReturnButton.classList.add("design-return");
  let newReturnLink = document.createElement("A");
  newReturnLink.href="design.html"
  newReturnLink.appendChild(document.createTextNode("SEE all designs"));
  newReturnButton.appendChild(newReturnLink);
  designSingle.appendChild(newReturnButton);
}
