
document.getElementById('Boton').onclick = function () {
    console.log("Capturamos el evento click")
    document.getElementById("celular").innerHTML = "334 7 972023"
}

document.getElementById('mail').onclick = function redirect () {
    var email = "adalbertofierrazo@lapapotasrl.com"
    var mailto_link = 'mailto:' + email
    window = window.open(mailto_link, 'emailWindow')
}