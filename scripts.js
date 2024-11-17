function setActive(element) {
    document.querySelectorAll('.text-hover1').forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  }

document.addEventListener('DOMContentLoaded', (event) => {
    const initialElement = document.getElementById("starterA");
    if (initialElement) {
        initialElement.classList.add('active')
    }
});

function setActive2(element) {

    document.querySelectorAll('.text-hover2').forEach(el => el.classList.remove('active'));
    element.classList.add('active');

}
