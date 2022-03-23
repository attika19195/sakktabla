window.addEventListener("load", init)
function ID(item) {
    return document.getElementById(item)
}
function $(item) {
    return document.querySelectorAll(item)
}
function Class(item) {
    return document.getElementsByClassName(item)
}

function init() {
    sakktabla();
    sakkTablaSzinezes();
    for (let index = 0; index < 64; index++) {
        $("article div")[index].addEventListener("click", babu);

    }

}


function babu() {
    event.target.innerHTML = "S";
    event.target.removeEventListener = ("click", babu);

}

function sakktabla() {
    var txt = "";
    for (let index = 0; index < 64; index++) {
        txt += "<div></div>";


        $("article")[0].innerHTML = txt;
    }

}

function sakkTablaSzinezes() {
    var sakkElemTomb = $("article div")
    for (let index = 0; index < 64; index++) {
        var sor = Math.floor(index / 8);
        console.log(sor);
        if (sor % 2 === 0) {
            if (index % 2 === 0) {
                sakkElemTomb[index].style.backgroundColor = "lightgray";
            }
        }else {
            if (index % 2 === 1) {
                sakkElemTomb[index].style.backgroundColor = "lightgray";
            }
        }

    }
}