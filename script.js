// Abhishek Gupta   gitHub - AKCoder-100  phone- +917054916134

const infoItem = {
    'Crystal World': "crystal-world.html",
    'Cleansing and charging crystals': "cleansing-and-charging-crystals.html",
    'Programming Crystals': "programming-crystals.html",
    'Chakras': "chakras.html",
    'Sound healing': "sound-healing.html",
    'Colour therapy': "colour-therapy.html",
    'Aroma therapy': "aroma-therapy.html",
    'FAQ': "faq.html",
    'Videos': "videos.html",
}
const InfoBut = document.getElementById('info-but')
const AboutBut = document.getElementById('about-but')
const ProductsBut = document.getElementById('products-but')
const InfoDrop = document.getElementById('info-drop')
const hamBugger = document.getElementById('ham-bugger')



Object.keys(infoItem).forEach(element => {
    const el = document.createElement('li');
    const el2 = document.createElement('a');
    el2.setAttribute('class', 'link');
    el2.setAttribute('href', `${infoItem[element]}`);
    el2.innerHTML = `${element}`;
    el.appendChild(el2);
    InfoDrop.appendChild(el);
});

// Abhishek Gupta   gitHub - AKCoder-100  phone- +917054916134

InfoBut.addEventListener('click', () => {
    const drop = InfoBut.querySelector('.dropdown')
    drop.classList.toggle('show');
    document.addEventListener('mouseup', function(e) {
        if (!InfoBut.contains(e.target)) {
            drop.classList.remove('show');
        }
    });
})
ProductsBut.addEventListener('click', () => {
    const drop = ProductsBut.querySelector('.dropdown')
    drop.classList.toggle('show');
    document.addEventListener('mouseup', function(e) {
        if (!ProductsBut.contains(e.target)) {
            drop.classList.remove('show');
        }
    });
})
AboutBut.addEventListener('click', () => {
        const drop = AboutBut.querySelector('.dropdown')
        drop.classList.toggle('show');
        document.addEventListener('mouseup', function(e) {
            if (!AboutBut.contains(e.target)) {
                drop.classList.remove('show');
            }
        });
    })
    // Abhishek Gupta   gitHub - AKCoder-100  phone- +917054916134

hamBugger.addEventListener('click', () => {
        document.getElementById('nav-bar').classList.toggle('show')
    })
    // Abhishek Gupta   gitHub - AKCoder-100  phone- +917054916134