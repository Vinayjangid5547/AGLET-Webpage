function toggle() {
    var pop = document.getElementById('pop');
    pop.classList.toggle('pop-active');

    var cont = document.getElementById('cont');
    cont.classList.toggle('cont-active');
}

window.addEventListener("scroll", function () {
    const head = document.getElementById("head");
    if (window.scrollY > 150) {
        head.classList.add("sticky");
    }
    if (window.scrollY < 150) {
        head.classList.remove('sticky');
    }

})

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});