const menuicon = document.getElementById('menu-icon'); //
const menulist = document.getElementById('menu-list');

menuicon.addEventListener('click', () => {
    menulist.classList.toggle('hidden');
    console.log(menuicon.classList)
});

const text = document.querySelector(".sec-text")

        const textload = () => {
            setTimeout(() => { //
                text.textContent = "Frontend Developer"
            }, 0)
            setTimeout(() => {
                text.textContent = "UI/UX Designer"
            }, 4000)
        }

        textload();
        setInterval(textload, 5000)
