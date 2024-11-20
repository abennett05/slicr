const imgInput = document.getElementById('imgSelector');
const imgPreview = document.getElementById('imgPreview');

window.onload = function() {
    imgInput.addEventListener('change', function() {
    const file = imgInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        imgPreview.src = e.target.result;
    };

    reader.readAsDataURL(file);
    });
};