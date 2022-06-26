import database, {
    navValue,
    homeValue,
    aboutValue,
    serviceValue
} from "./database.js"

const languageBtn = document.querySelector('.language')
const defaultLanguage = "EN"
const spanLanguage = document.querySelector('.language span')

spanLanguage.innerHTML = "EN";

/* Xử lí nút */
languageBtn.addEventListener("click", () => {
    if (spanLanguage.innerHTML === "EN") {
        spanLanguage.innerHTML = "VN";
        handleVietnamese();

    } else {
        spanLanguage.innerHTML = "EN";
        handleEnglish();
    }

})

/* nav */
let listNavSpan = document.querySelectorAll(".list span")

/* home */
const textHello = document.querySelector('.home .home-info .hello span')
const textMyProfession = document.querySelector('.home .home-info .my-profession span')
const text_p = document.querySelector('.home .home-info p')
const text_a = document.querySelector('.home .home-info a')

/* About */
const aboutTitle1 = document.querySelector('.about-content .about-text .aboutTitle1')
const aboutText1 = document.querySelector('.about-content .about-text .aboutText1')
const infoItem = document.querySelectorAll('.personal-info .info-item p')
const hireMe = document.querySelector('.buttons .hire-me')
const aboutTitle2 = document.querySelector('.about-content .about-text .aboutTitle2')
/* education */
const education = document.querySelector('.education .title-glow')
const EducationTimelineDate = document.querySelectorAll('.education .timeline-item .timeline-date')
const EducationTimelineTitle = document.querySelectorAll('.education .timeline-item .timeline-title')
const EducationTimelineItem = document.querySelectorAll('.education .timeline-item .timeline-text')

/* experience */
const experience = document.querySelector('.experience .title-glow')
const ExperienceTimelineDate = document.querySelectorAll('.experience .timeline-item .timeline-date')
const ExperienceTimelineTitle = document.querySelectorAll('.experience .timeline-item .timeline-title')
const ExperienceTimelineItem = document.querySelectorAll('.experience .timeline-item .timeline-text')


/* service */
const serviceItemInnerH4 = document.querySelectorAll('.service .service-item h4')
const serviceItemInnerP = document.querySelectorAll('.service .service-item p')


function handleVietnamese() {
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
    /* about */
    aboutTitle1.innerHTML = aboutValue.vn.aboutTitle1
    aboutText1.innerHTML = aboutValue.vn.aboutText1
    infoItem[0].innerHTML = aboutValue.vn.infoItemName
    infoItem[1].innerHTML = aboutValue.vn.infoItemBirday
    infoItem[2].innerHTML = aboutValue.vn.infoItemAge
    infoItem[3].innerHTML = aboutValue.vn.infoItemEmail
    infoItem[4].innerHTML = aboutValue.vn.infoItemDegree
    infoItem[5].innerHTML = aboutValue.vn.infoItemPhone
    infoItem[6].innerHTML = aboutValue.vn.infoItemCity
    infoItem[7].innerHTML = aboutValue.vn.infoItemSocialMedia
    hireMe.innerHTML = aboutValue.vn.hireMe
    aboutTitle2.innerHTML = aboutValue.vn.aboutTitle2
    /* education */
    education.innerHTML = aboutValue.vn.Education
    EducationTimelineDate[0].innerHTML = aboutValue.vn.EducationTimelineDate1
    EducationTimelineTitle[0].innerHTML = aboutValue.vn.EducationTimelineTitle1
    EducationTimelineItem[0].innerHTML = aboutValue.vn.EducationTimelineItem1
    EducationTimelineDate[1].innerHTML = aboutValue.vn.EducationTimelineDate2
    EducationTimelineTitle[1].innerHTML = aboutValue.vn.EducationTimelineTitle2
    EducationTimelineItem[1].innerHTML = aboutValue.vn.EducationTimelineItem2
    EducationTimelineDate[2].innerHTML = aboutValue.vn.EducationTimelineDate3
    EducationTimelineTitle[2].innerHTML = aboutValue.vn.EducationTimelineTitle3
    /* experience */
    experience.innerHTML = aboutValue.vn.Experience
    ExperienceTimelineDate[0].innerHTML = aboutValue.vn.ExperienceTimelineDate1
    ExperienceTimelineTitle[0].innerHTML = aboutValue.vn.ExperienceTimelineTitle1
    ExperienceTimelineItem[0].innerHTML = aboutValue.vn.ExperienceTimelineItem1
    /* service */
    serviceItemInnerH4[0].innerHTML = serviceValue.vn.serviceItemInnerTitle1
    serviceItemInnerP[0].innerHTML = serviceValue.vn.serviceItemInnerText1
    serviceItemInnerH4[1].innerHTML = serviceValue.vn.serviceItemInnerTitle2
    serviceItemInnerP[1].innerHTML = serviceValue.vn.serviceItemInnerText2
    serviceItemInnerH4[2].innerHTML = serviceValue.vn.serviceItemInnerTitle3
    serviceItemInnerP[2].innerHTML = serviceValue.vn.serviceItemInnerText3
    serviceItemInnerH4[3].innerHTML = serviceValue.vn.serviceItemInnerTitle4
    serviceItemInnerP[3].innerHTML = serviceValue.vn.serviceItemInnerText4
    serviceItemInnerH4[4].innerHTML = serviceValue.vn.serviceItemInnerTitle5
    serviceItemInnerP[4].innerHTML = serviceValue.vn.serviceItemInnerText5
    serviceItemInnerH4[5].innerHTML = serviceValue.vn.serviceItemInnerTitle6
    serviceItemInnerP[5].innerHTML = serviceValue.vn.serviceItemInnerText6

}

function handleEnglish() {
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
    /* about */
    aboutTitle1.innerHTML = aboutValue.en.aboutTitle1
    aboutText1.innerHTML = aboutValue.en.aboutText1
    infoItem[0].innerHTML = aboutValue.en.infoItemName
    infoItem[1].innerHTML = aboutValue.en.infoItemBirday
    infoItem[2].innerHTML = aboutValue.en.infoItemAge
    infoItem[3].innerHTML = aboutValue.en.infoItemEmail
    infoItem[4].innerHTML = aboutValue.en.infoItemDegree
    infoItem[5].innerHTML = aboutValue.en.infoItemPhone
    infoItem[6].innerHTML = aboutValue.en.infoItemCity
    infoItem[7].innerHTML = aboutValue.en.infoItemSocialMedia
    hireMe.innerHTML = aboutValue.en.hireMe
    aboutTitle2.innerHTML = aboutValue.en.aboutTitle2
    /* education */
    education.innerHTML = aboutValue.en.Education
    EducationTimelineDate[0].innerHTML = aboutValue.en.EducationTimelineDate1
    EducationTimelineTitle[0].innerHTML = aboutValue.en.EducationTimelineTitle1
    EducationTimelineItem[0].innerHTML = aboutValue.en.EducationTimelineItem1
    EducationTimelineDate[1].innerHTML = aboutValue.en.EducationTimelineDate2
    EducationTimelineTitle[1].innerHTML = aboutValue.en.EducationTimelineTitle2
    EducationTimelineItem[1].innerHTML = aboutValue.en.EducationTimelineItem2
    EducationTimelineDate[2].innerHTML = aboutValue.en.EducationTimelineDate3
    EducationTimelineTitle[2].innerHTML = aboutValue.en.EducationTimelineTitle3
    /* experience */
    experience.innerHTML = aboutValue.en.Experience
    ExperienceTimelineDate[0].innerHTML = aboutValue.en.ExperienceTimelineDate1
    ExperienceTimelineTitle[0].innerHTML = aboutValue.en.ExperienceTimelineTitle1
    ExperienceTimelineItem[0].innerHTML = aboutValue.en.ExperienceTimelineItem1
    /* service */
    serviceItemInnerH4[0].innerHTML = serviceValue.en.serviceItemInnerTitle1
    serviceItemInnerP[0].innerHTML = serviceValue.en.serviceItemInnerText1
    serviceItemInnerH4[1].innerHTML = serviceValue.en.serviceItemInnerTitle2
    serviceItemInnerP[1].innerHTML = serviceValue.en.serviceItemInnerText2
    serviceItemInnerH4[2].innerHTML = serviceValue.en.serviceItemInnerTitle3
    serviceItemInnerP[2].innerHTML = serviceValue.en.serviceItemInnerText3
    serviceItemInnerH4[3].innerHTML = serviceValue.en.serviceItemInnerTitle4
    serviceItemInnerP[3].innerHTML = serviceValue.en.serviceItemInnerText4
    serviceItemInnerH4[4].innerHTML = serviceValue.en.serviceItemInnerTitle5
    serviceItemInnerP[4].innerHTML = serviceValue.en.serviceItemInnerText5
    serviceItemInnerH4[5].innerHTML = serviceValue.en.serviceItemInnerTitle6
    serviceItemInnerP[5].innerHTML = serviceValue.en.serviceItemInnerText6
}