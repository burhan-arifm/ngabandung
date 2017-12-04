var x = document.getElementById("start");
function getLocation() {
    if (navigator.geolocation) {
        posisi = navigator.geolocation.getCurrentPosition(showPosition);
        x.value = posisi;
    } else {
        alert("Peramban ini tidak mendukung fitur GeoLocation. Silakan masukan posisi asal anda secara manual.");
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "Pengguna menolak permintaan lokasi."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Informasi lokasi gagal didapat."
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "Galat tidak diketahui."
            break;
    }
}