// Для портретов
var filesShown = 6;
  var filesAddedOnShowMore = 6;
  var filesCount = 36;
  var endOfFilesIndex = 99;
  var endFileShown = false;
  function getThubmnailUrl(id) {
    return `img/gallery/portraits/thumbnails/${id}.jpg`;
  }
  function getOriginalUrl(id) {
    return `img/gallery/portraits/original/${id}.jpg`;
  }

  function createPortraitElement(id) {
    var thumbnail = getThubmnailUrl(id);
    var original = getOriginalUrl(id);

    var colEl = document.createElement('div');
    colEl.classList.add('col');
    var aEl = document.createElement('a');
    aEl.setAttribute('data-fancybox', 'gallery');
    aEl.href = original;

    var imgEl = document.createElement('img');
    imgEl.src = thumbnail;

    aEl.appendChild(imgEl);
    colEl.appendChild(aEl);

    return colEl;
  }

  function DOMContentLoaded() {
    var portraitGallery = document.querySelector('.portrait-gallery');

    document.querySelector('.show-more')
    .addEventListener('click', event => {
      var targetFilesCount = filesShown + filesAddedOnShowMore;
      for (var i = filesShown + 1; i <= targetFilesCount && i <= filesCount; i++) {
        var portraitEl = createPortraitElement(i);
        portraitGallery.appendChild(portraitEl);
        filesShown++;
      }
      // if (filesShown >= filesCount && !endFileShown) {
      //   var endEl = document.querySelector('.end')
      //   var portraitEl = createPortraitElement(endOfFilesIndex);
      //   portraitGallery.appendChild(portraitEl);
      //   endFileShown = true;
      // }
      if (filesShown >= filesCount) {
        document.querySelector('.show-more').remove();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", DOMContentLoaded);


 