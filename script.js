let mainBody = document.getElementById("main");

let textinput = document.getElementById("textinput");

let textinputcontent = document.getElementById("inp");

let select = document.getElementById("selected");

let stopTime = document.getElementById("stoptime");

let artistName = document.getElementById("artist");

const playlist = [
  { title: "Sweet", artist: "Eurythmics", duration: "4:54", genre: "Hip-pop" },
  { title: "Sweet s", artist: "Eurythmics", duration: "4:54", genre: "Pop" },
  { title: "Sweet Dre", artist: "Eurythmics", duration: "4:54", genre: "Pop" },
  { title: "Dreams", artist: "Eurythmics", duration: "4:54", genre: "Rock" },
  { title: "et Dreams", artist: "Eurythmics", duration: "4:54", genre: "Pop" },
];

function allApparatus(currentPlaylist) {
  mainBody.innerHTML = ''; 

  currentPlaylist.forEach((value, index) => {
    let container = document.createElement("div"); 
    container.classList.add("mainconc");

    let imageContainer = document.createElement("div"); 
    imageContainer.classList.add("imgdiv");

    let imgs = document.createElement("img");
    imgs.classList.add("img");
    imgs.src = "img/favour.jpg";

    let sectionOne = document.createElement("div"); 
    sectionOne.classList.add("firstdiv");

    const titles = document.createElement("h6");
    titles.textContent = `Title: ${value.title}`;

    const genres = document.createElement("p");
    genres.textContent = `Genre: ${value.genre}`;

    const artists = document.createElement("p");
    artists.classList.add("art");
    artists.textContent = `Artist name: ${value.artist}`;

    let range = document.createElement("input");
    range.type = "range";
    range.classList.add("range");
    range.min = 0;
    range.max = parseInt(value.duration);
    range.value = 0;

    let timer = document.createElement("div");
    timer.classList.add("timer");

    let end = document.createElement("p");
    end.textContent = value.duration;

    let start = document.createElement("p");
    start.textContent = range.value;

    range.addEventListener("input", function () {
      start.textContent = range.value;
    });

    imageContainer.appendChild(imgs);
    sectionOne.appendChild(titles);
    sectionOne.appendChild(genres);
    timer.appendChild(start);
    timer.appendChild(end);
    timer.appendChild(range);
    container.appendChild(imageContainer);
    container.appendChild(sectionOne);
    container.appendChild(artists);
    container.appendChild(range);
    container.appendChild(timer);

    mainBody.appendChild(container);
  });
}

function addToArray(song) {
  mainBody.innerHTML = "";
  playlist.push(song);
  allApparatus(playlist);
}

function addToPlay() {
  let category = select.value;

  let selectCategory =
    category === "Pop" || category === "Hip-pop" || category === "Rock";

  console.log(category);

  if (parseInt(stopTime.value) > 10) {
    alert("pls limit it below 10");
    return;
  }

  if (parseInt(stopTime.value) < 3) {
    alert("pls increase it above 3");
    return;
  }

  if (
    textinput.value !== "" &&
    artistName.value !== "" &&
    stopTime.value !== "" &&
    selectCategory
  ) {
    const newtitle = textinput.value;
    const newDuration = stopTime.value;
    const newArtist = artistName.value;
    const selected = category;

    console.log(newtitle, 77, newDuration, 66);

    if (newtitle && newDuration && newArtist) {
      addToArray({
        title: newtitle,
        artist: newArtist,
        duration: newDuration,
        genre: selected,
      });

      document.getElementById("main2").style.display = "none";
      document.getElementById("main").style.opacity = "1.0";
    } else {
      alert("pls recheck and fill the empty field");
    }
  } else {
    alert("invalid details");
  }
}
allApparatus(playlist); 

document.getElementById("navbtn").addEventListener("click", function () {
  document.getElementById("main2").style.display = "block";
  document.getElementById("main2").style.position = "absolute";
  document.getElementById("main2").style.top = "100px";
  document.getElementById("main").style.opacity = "0.3";
});

function filterPop() {
  const pops = playlist.filter((song) => song.genre === "Pop");
  allApparatus(pops); 
}

function filterHippop() {
  const hiphops = playlist.filter((song) => song.genre === "Hip-pop");
  allApparatus(hiphops); 
}

function filterRock() {
  const rocks = playlist.filter((song) => song.genre === "Rock");
  allApparatus(rocks); 
}


function sortAZ(){
    sortedPlaylist = playlist.sort((a, b) => a.title.localeCompare (b.title))

    allApparatus(playlist);
    return
}
sortAZ()
console.log(sortAZ());

