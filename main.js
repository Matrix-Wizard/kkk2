var filesAddedOnShowMore = 6;


// "Show more" для _portrait
var filesShown_portrait = 6;
var filesCount_portrait = 36;

function getThubmnailUrl_portrait(id) {
  return `img/gallery/portraits/thumbnails/${id}.jpg`;
}
function getOriginalUrl_portrait(id) {
  return `img/gallery/portraits/original/${id}.jpg`;
}

function createElement_portrait(id) {
  var thumbnail = getThubmnailUrl_portrait(id);
  var original = getOriginalUrl_portrait(id);

  var colEl = document.createElement('div');
  colEl.classList.add('col');
  var aEl = document.createElement('a');
  aEl.setAttribute('data-fancybox', 'gallery_portrait');
  aEl.href = original;

  var imgEl = document.createElement('img');
  imgEl.src = thumbnail;

  aEl.appendChild(imgEl);
  colEl.appendChild(aEl);

  return colEl;
}

function DOMContentLoaded_portrait() {
  var gallery = document.querySelector('.gallery_portrait');

  document.querySelector('.show-more_portrait')
  .addEventListener('click', event => {
    var targetFilesCount = filesShown_portrait + filesAddedOnShowMore;
    for (var i = filesShown_portrait + 1; i <= targetFilesCount && i <= filesCount_portrait; i++) {
      var galleryEl = createElement_portrait(i);
      gallery.appendChild(galleryEl);
      filesShown_portrait++;
    }

    if (filesShown_portrait >= filesCount_portrait) {
      document.querySelector('.show-more_portrait').remove();
    }
  });
}

// document.addEventListener("DOMContentLoaded", DOMContentLoaded_portrait);



// "Show more" для _pop-art
var filesShown_popart = 6;
var filesCount_popart = 8;

function getThubmnailUrl_popart(id) {
  return `img/gallery/pop-art_portraits/thumbnails/${id}.jpg`;
}
function getOriginalUrl_popart(id) {
  return `img/gallery/pop-art_portraits/original/${id}.jpg`;
}

function createElement_popart(id) {
  var thumbnail = getThubmnailUrl_popart(id);
  var original = getOriginalUrl_popart(id);

  var colEl = document.createElement('div');
  colEl.classList.add('col');
  var aEl = document.createElement('a');
  aEl.setAttribute('data-fancybox', 'gallery_pop-art');
  aEl.href = original;

  var imgEl = document.createElement('img');
  imgEl.src = thumbnail;

  aEl.appendChild(imgEl);
  colEl.appendChild(aEl);

  return colEl;
}

function DOMContentLoaded_popart() {
  var gallery = document.querySelector('.gallery_pop-art');

  document.querySelector('.show-more_pop-art')
  .addEventListener('click', event => {
    var targetFilesCount = filesShown_popart + filesAddedOnShowMore;
    for (var i = filesShown_popart + 1; i <= targetFilesCount && i <= filesCount_popart; i++) {
      var galleryEl = createElement_popart(i);
      gallery.appendChild(galleryEl);
      filesShown_popart++;
    }

    if (filesShown_popart >= filesCount_popart) {
      document.querySelector('.show-more_pop-art').remove();
    }
  });
}

// document.addEventListener("DOMContentLoaded", DOMContentLoaded_popart);


// "Show more" для _landscape
var filesShown_landscape = 6;
var filesCount_landscape = 26;

function getThubmnailUrl_landscape(id) {
  return `img/gallery/landscapes/thumbnails/${id}.jpg`;
}
function getOriginalUrl_landscape(id) {
  return `img/gallery/landscapes/original/${id}.jpg`;
}

function createElement_landscape(id) {
  var thumbnail = getThubmnailUrl_landscape(id);
  var original = getOriginalUrl_landscape(id);

  var colEl = document.createElement('div');
  colEl.classList.add('col');
  var aEl = document.createElement('a');
  aEl.setAttribute('data-fancybox', 'landscapesGallery');
  aEl.href = original;

  var imgEl = document.createElement('img');
  imgEl.src = thumbnail;

  aEl.appendChild(imgEl);
  colEl.appendChild(aEl);

  return colEl;
}

function DOMContentLoaded_landscape() {
  var gallery = document.querySelector('.gallery_landscape');

  document.querySelector('.show-more_landscape')
  .addEventListener('click', event => {
    var targetFilesCount = filesShown_landscape + filesAddedOnShowMore;
    for (var i = filesShown_landscape + 1; i <= targetFilesCount && i <= filesCount_landscape; i++) {
      var galleryEl = createElement_landscape(i);
      gallery.appendChild(galleryEl);
      filesShown_landscape++;
    }

    if (filesShown_landscape >= filesCount_landscape) {
      document.querySelector('.show-more_landscape').remove();
    }
  });
}

// document.addEventListener("DOMContentLoaded", DOMContentLoaded_landscape);


// "Show more" для _still-life
var filesShown_stilllife = 6;
var filesCount_stilllife = 12;

function getThubmnailUrl_stilllife(id) {
  return `img/gallery/still_lifes/thumbnails/${id}.jpg`;
}
function getOriginalUrl_stilllife(id) {
  return `img/gallery/still_lifes/original/${id}.jpg`;
}

function createElement_stilllife(id) {
  var thumbnail = getThubmnailUrl_stilllife(id);
  var original = getOriginalUrl_stilllife(id);

  var colEl = document.createElement('div');
  colEl.classList.add('col');
  var aEl = document.createElement('a');
  aEl.setAttribute('data-fancybox', 'gallery_still-life');
  aEl.href = original;

  var imgEl = document.createElement('img');
  imgEl.src = thumbnail;

  aEl.appendChild(imgEl);
  colEl.appendChild(aEl);

  return colEl;
}

function DOMContentLoaded_stilllife() {
  var gallery = document.querySelector('.gallery_still-life');

  document.querySelector('.show-more_still-life')
  .addEventListener('click', event => {
    var targetFilesCount = filesShown_stilllife + filesAddedOnShowMore;
    for (var i = filesShown_stilllife + 1; i <= targetFilesCount && i <= filesCount_stilllife; i++) {
      var galleryEl = createElement_stilllife(i);
      gallery.appendChild(galleryEl);
      filesShown_stilllife++;
    }

    if (filesShown_stilllife >= filesCount_stilllife) {
      document.querySelector('.show-more_still-life').remove();
    }
  });
}

// document.addEventListener("DOMContentLoaded", DOMContentLoaded_stilllife);



// "Show more" для _church
var filesShown_church = 6;
var filesCount_church = 24;

function getThubmnailUrl_church(id) {
  return `img/gallery/church_painting/thumbnails/${id}.jpg`;
}
function getOriginalUrl_church(id) {
  return `img/gallery/church_painting/original/${id}.jpg`;
}

function createElement_church(id) {
  var thumbnail = getThubmnailUrl_church(id);
  var original = getOriginalUrl_church(id);

  var colEl = document.createElement('div');
  colEl.classList.add('col');
  var aEl = document.createElement('a');
  aEl.setAttribute('data-fancybox', 'gallery_church');
  aEl.href = original;

  var imgEl = document.createElement('img');
  imgEl.src = thumbnail;

  aEl.appendChild(imgEl);
  colEl.appendChild(aEl);

  return colEl;
}

function DOMContentLoaded_church() {
  var gallery = document.querySelector('.gallery_church');

  document.querySelector('.show-more_church')
  .addEventListener('click', event => {
    var targetFilesCount = filesShown_church + filesAddedOnShowMore;
    for (var i = filesShown_church + 1; i <= targetFilesCount && i <= filesCount_church; i++) {
      var galleryEl = createElement_church(i);
      gallery.appendChild(galleryEl);
      filesShown_church++;
    }

    if (filesShown_church >= filesCount_church) {
      document.querySelector('.show-more_church').remove();
    }
  });
}

// document.addEventListener("DOMContentLoaded", DOMContentLoaded_church);



// "Show more" для _wall
var filesShown_wall = 6;
var filesCount_wall = 21;

function getThubmnailUrl_wall(id) {
  return `img/gallery/wall_painting/thumbnails/${id}.jpg`;
}
function getOriginalUrl_wall(id) {
  return `img/gallery/wall_painting/original/${id}.jpg`;
}

function createElement_wall(id) {
  var thumbnail = getThubmnailUrl_wall(id);
  var original = getOriginalUrl_wall(id);

  var colEl = document.createElement('div');
  colEl.classList.add('col');
  var aEl = document.createElement('a');
  aEl.setAttribute('data-fancybox', 'gallery_wall');
  aEl.href = original;

  var imgEl = document.createElement('img');
  imgEl.src = thumbnail;

  aEl.appendChild(imgEl);
  colEl.appendChild(aEl);

  return colEl;
}

function DOMContentLoaded_wall() {
  var gallery = document.querySelector('.gallery_wall');

  document.querySelector('.show-more_wall')
  .addEventListener('click', event => {
    var targetFilesCount = filesShown_wall + filesAddedOnShowMore;
    for (var i = filesShown_wall + 1; i <= targetFilesCount && i <= filesCount_wall; i++) {
      var galleryEl = createElement_wall(i);
      gallery.appendChild(galleryEl);
      filesShown_wall++;
    }

    if (filesShown_wall >= filesCount_wall) {
      document.querySelector('.show-more_wall').remove();
    }
  });
}

// document.addEventListener("DOMContentLoaded", DOMContentLoaded_wall);



// "Show more" для _mk
var filesShown_mk = 6;
var filesCount_mk = 8;

function getThubmnailUrl_mk(id) {
  return `img/gallery/mk/thumbnails/${id}.jpg`;
}
function getOriginalUrl_mk(id) {
  return `img/gallery/mk/original/${id}.jpg`;
}

function createElement_mk(id) {
  var thumbnail = getThubmnailUrl_mk(id);
  var original = getOriginalUrl_mk(id);

  var colEl = document.createElement('div');
  colEl.classList.add('col');
  var aEl = document.createElement('a');
  aEl.setAttribute('data-fancybox', 'gallery_mk');
  aEl.href = original;

  var imgEl = document.createElement('img');
  imgEl.src = thumbnail;

  aEl.appendChild(imgEl);
  colEl.appendChild(aEl);

  return colEl;
}

function DOMContentLoaded_mk() {
  var gallery = document.querySelector('.gallery_mk');

  document.querySelector('.show-more_mk')
  .addEventListener('click', event => {
    var targetFilesCount = filesShown_mk + filesAddedOnShowMore;
    for (var i = filesShown_mk + 1; i <= targetFilesCount && i <= filesCount_mk; i++) {
      var galleryEl = createElement_mk(i);
      gallery.appendChild(galleryEl);
      filesShown_mk++;
    }

    if (filesShown_mk >= filesCount_mk) {
      document.querySelector('.show-more_mk').remove();
    }
  });
}

// document.addEventListener("DOMContentLoaded", DOMContentLoaded_mk);




// "Show more" для _available
var filesShown_available = 6;
var filesCount_available = 17;

function getThubmnailUrl_available(id) {
  return `img/gallery/available/thumbnails/${id}.jpg`;
}
function getOriginalUrl_available(id) {
  return `img/gallery/available/original/${id}.jpg`;
}

function createElement_available(id) {
  var thumbnail = getThubmnailUrl_available(id);
  var original = getOriginalUrl_available(id);

  var colEl = document.createElement('div');
  colEl.classList.add('col');
  var aEl = document.createElement('a');
  aEl.setAttribute('data-fancybox', 'gallery_available');
  aEl.href = original;

  var imgEl = document.createElement('img');
  imgEl.src = thumbnail;

  aEl.appendChild(imgEl);
  colEl.appendChild(aEl);

  return colEl;
}

function DOMContentLoaded_available() {
  var gallery = document.querySelector('.gallery_available');

  document.querySelector('.show-more_available')
  .addEventListener('click', event => {
    var targetFilesCount = filesShown_available + filesAddedOnShowMore;
    for (var i = filesShown_available + 1; i <= targetFilesCount && i <= filesCount_available; i++) {
      var galleryEl = createElement_available(i);
      gallery.appendChild(galleryEl);
      filesShown_available++;
    }

    if (filesShown_available >= filesCount_available) {
      document.querySelector('.show-more_available').remove();
    }
  });
}

// document.addEventListener("DOMContentLoaded", DOMContentLoaded_available);


// document.addEventListener("DOMContentLoaded", function() {
//   DOMContentLoaded_portrait();
//   DOMContentLoaded_popart();
//   DOMContentLoaded_landscape()
//   DOMContentLoaded_stilllife()
//   DOMContentLoaded_church()
//   DOMContentLoaded_wall()
//   DOMContentLoaded_mk()
//   DOMContentLoaded_available()
// });

DOMContentLoaded_portrait();
DOMContentLoaded_popart();
DOMContentLoaded_landscape()
DOMContentLoaded_stilllife()
DOMContentLoaded_church()
DOMContentLoaded_wall()
DOMContentLoaded_mk()
DOMContentLoaded_available()