let images = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg'
  , 'img10.jpg', 'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg'];


function start() {
  for (let i = 0; i < images.length; i++) {
    document.getElementById('container').innerHTML += `
    <div class="imageBox" onclick="openImage(${i})">
    <img src="${images[i]}">
    </div>`;
  }
}

function openImage(i) {
  let content = document.getElementById('container');
  content.innerHTML = '';
  content.innerHTML += `
  <div id="popup-container">
    <div id="popup">
      <button id="back-btn" onclick="goBack(${i})">Go Back</button>
      <button  onclick="previosImg(${i})">Previous picture</button>
      <img src="${images[i]}">
      <button  onclick="nextImg(${i})">Next picture</button>
      <button class="diashow"  onclick="diaShow(${i})">Diashow</button>
    </div> 
  </div>
   `;
  start();
}


function nextImg(i) {
  i++;
  if (i >= images.length) {
    i = 0;
  }
  let image = document.getElementById('container').querySelector('img');
  image.setAttribute('src', images[i]);
  openImage(i);
}


function previosImg(i) {
  i--;
  if (i < 0) {
    i = images.length - 1;
  }
  let image = document.getElementById('container').querySelector('img');
  image.setAttribute('src', images[i]);
  openImage(i);
}

let isDiashowActive = false;

function goBack() {
  let popup = document.getElementById('popup');
  popup.style.display = 'none';
  
  if (isDiashowActive) {
    clearTimeout(diashowTimer);
    isDiashowActive = false;
  }
}

function diaShow(i) {
  isDiashowActive = true;
  i++;
  if (i >= images.length) {
    i = 0;
  }
  let image = document.getElementById('container').querySelector('img');
  image.setAttribute('src', images[i]);
  diashowTimer = setTimeout(function(){diaShow(i)}, 3000);
}


