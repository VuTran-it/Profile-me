/* Typing animation */
var typed = new Typed(".typing", {
    strings: ["", "Font-end Developer", "Photographer"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})



/* NAV */
const nav = document.querySelector('.nav'),
    navList = document.querySelectorAll('.nav li'),
    totalNavList = navList.length,
    allSection = document.querySelectorAll('.section'),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    navList[i].addEventListener("click", function () {
        removeBackSection()
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].classList.remove("active");
        }
        this.classList.add("active")
        showSection(navList[i].querySelector('a'));
    })
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section")
    }
}

function addBackSection(num) {
    allSection[num].classList.add('back-section')
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active")
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add('active');
}

function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].classList.remove("active")
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split('#')[1]) {
            navList[i].classList.add("active")
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");

    showSection(this)
    updateNav(this)
    removeBackSection()
    addBackSection(sectionIndex)
})
/* MENU */
const menuList = document.querySelectorAll('#menu li');
menuList.forEach((item,index) => {
    item.addEventListener("click", function () {
        removeBackSection()
        for (let j = 0; j < totalNavList; j++) {
            if (navList[j].classList.contains("active")) {
                addBackSection(j);
            }
            navList[j].classList.remove("active");
        }
        setTimeout(()=>{navList[index].classList.add("active")},10)
        showSection(navList[index].querySelector('a'));
    })
})


/* PORTFOLIO */
const portfolioItemInner = document.querySelectorAll(".portfolio-item-inner")
const portfolioContent = document.querySelectorAll('.portfolio-content')

for (let i = 0; i < portfolioItemInner.length; i++) {
    portfolioItemInner[i].addEventListener('click', function () {
        portfolioContent[i].classList.toggle("active")
    })
}

/* email js */
function sendEmail(params) {
    var tempParams = {
        name: document.getElementById("name").value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }

    emailjs.send('service_6koznlq', 'template_hcm6nlk', tempParams)
        .then(function (res) {
            console.log("success", res.status);
        })

    deleteValue()
}

function deleteValue() {
    document.getElementById("name").value = ""
    document.getElementById('email').value = ""
    document.getElementById('subject').value = ""
    document.getElementById('message').value = ""
}

/* MENU */
let menu = document.getElementById('menu');
document.addEventListener('contextmenu',(event)=> {
    event.preventDefault();
    menu.style.display ='block';
    menu.style.top = event.y +'px';
    menu.style.left = event.x +'px';
})

document.addEventListener('click', ()=>{
    menu.style.display ='none';
})