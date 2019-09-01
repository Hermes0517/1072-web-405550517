function f1(param) {
    for (var i = 1; i <= 5; i++) {
        var id = document.getElementById("d" + i);
        id.style.display = "none";
        if (i = param) {
            id.style.display = "block";
        }
    }
}