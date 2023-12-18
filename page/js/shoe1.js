const imgContainer = document.querySelector(".showcase>div");
const img = document.querySelector(".showcase img");
const shadow =  document.querySelector(".shadow");

const thumb = document.querySelectorAll(".thumbs img");
const titleOverlay = document.querySelector(".titleOverlay");
const title =  document.querySelector(".titleText");
const desc = document.querySelector(".description");

const sizes = document.querySelectorAll(".sizes > li");
const colorBtn = document.querySelectorAll(".color");

let id=1;
let colorType=1;

const names = [
    [
        "Red Nike Jordan Max Aura 3",
        "Black Nike Jordan Max Aura 3",
        "Blue Nike Jordan Max Aura 3",
        "Gray Nike Jordan Max Aura 3"
    ],
];

const ratings=[4,5,3];

function getImage( imgType, shoe, colorType, id, extension){
    return "img/" + imgType + "/shoe" + shoe + "-" + colorType + "/img" + id + "." +extension;
}

function resetActive(element, elementClass, i){
    for(let i=0; i<element.length; i++){
        element[i].classList.remove(elementClass + "-active");
    }
    element[i].classList.add(elementClass + "-active");
}

function animate(element, time, anim){
    element.style.animation = anim;
    setTimeout(() => {
        element.style.animation= "none";
    }, time);
}
function resetStar(shoe){
    for (let i=0; i<star.length; i++){
        star[i].innerText = "star_outline";
    }
    for(let i=0; i<ratings[shoe]; i++){
        star[i].innerText = "star";
    }
}

for(let i=0; i<sizes.length; i++){
    sizes[i].addEventListener("click", (e) =>{
        resetActive(sizes, "size", i);
    });
}

for (let i = 0; i < thumb.length; i++) {
    thumb[i].addEventListener("click", (e) => {

        id=i+1;

        img.src = getImage(
            "showcase", shoe, colorType, id, "png"
        );
        
        resetActive(thumb, "thumb", i);

        animate(imgContainer, 550, "fade 500ms ease-in-out")
    });
}

for(let i=0; i<colorBtn.length; i++){

    colorBtn[i].addEventListener("click", () => {
        colorType = i+1;
        setTimeout(()=>{
            img.src=getImage(
                "showcase", shoe, colorType, id, "png"
            );
        }, 450);

        for(let i=0; i<thumb.length; i++){
            thumb[i].src = getImage(
                "thumbs", shoe, colorType, i+1, ex
            );
        }

        resetActive(colorBtn, "color", i);
        title.innerHTML = names[0][i];

        animate(img, 550, "jump 500ms ease-in-out");
        animate(shadow, 550, "shadow 500ms ease-in-out");
        animate(titleOverlay, 850, "title 800ms ease");
    });
}
