function showLightbox(photo) {
    var lightbox = document.querySelector('.lightbox');
    var img = lightbox.querySelector('img');
    img.src = photo.src;
    lightbox.style.display = 'block';
}
function closeLightbox() {
    var lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        var lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'none';
    }
};

function hidetext() {
    var x = document.getElementById("bildtext");
    x.style.display = "none";

}


document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
    var x = document.getElementById("bildtext");

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    });
});




function makesmall() {
    var elements = document.querySelectorAll("photo, .photo");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.maxWidth = "13%";
    }
}


function makebig() {
    var elements = document.querySelectorAll("photo, .photo");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.maxWidth = "100%";
    }
}



function makemedium() {
    var elements = document.querySelectorAll("photo, .photo");

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.maxWidth = "40%";
    }
}


