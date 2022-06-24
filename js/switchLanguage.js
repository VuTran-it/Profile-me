import database, { navValue, homeValue } from "./database.js"

const languageBtn = document.querySelector('.language')
const defaultLanguage = "EN"
const spanLanguage = document.querySelector('.language span')

spanLanguage.innerHTML = "EN";

/* Xử lí nút */
languageBtn.addEventListener("click", () => {
    if (spanLanguage.innerHTML === "EN") {
        spanLanguage.innerHTML = "VN";
        /* nav */
        listNavSpan[0].innerHTML = navValue.vn.spanHome
        listNavSpan[1].innerHTML = navValue.vn.spanAbout
        listNavSpan[2].innerHTML = navValue.vn.spanService
        listNavSpan[3].innerHTML = navValue.vn.spanPortfolio
        listNavSpan[4].innerHTML = navValue.vn.spanContact
        /* home */
        textHello.innerHTML = homeValue.vn.hello
        textMyProfession.innerHTML = homeValue.vn.myprofession
        text_p.innerHTML = homeValue.vn.pText
        text_a.innerHTML = homeValue.vn.aText
    } else {
        spanLanguage.innerHTML = "EN";
        /* nav */
        listNavSpan[0].innerHTML = navValue.en.spanHome
        listNavSpan[1].innerHTML = navValue.en.spanAbout
        listNavSpan[2].innerHTML = navValue.en.spanService
        listNavSpan[3].innerHTML = navValue.en.spanPortfolio
        listNavSpan[4].innerHTML = navValue.en.spanContact
        /* home */
        textHello.innerHTML = homeValue.en.hello
        textMyProfession.innerHTML = homeValue.en.myprofession
        text_p.innerHTML = homeValue.en.pText
        text_a.innerHTML = homeValue.en.aText
    }

})

/* nav */
let listNavSpan = document.querySelectorAll(".list span")

/* home */
const textHello = document.querySelector('.home .home-info .hello span')
const textMyProfession = document.querySelector('.home .home-info .my-profession span')
const text_p = document.querySelector('.home .home-info p')
const text_a = document.querySelector('.home .home-info a')

