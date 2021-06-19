let body = document.body

//===========HEADER==========
let header = document.createElement('header')

let divLogo = document.createElement('div')
divLogo.classList.add('logo')

let imgLogo = document.createElement('img')
imgLogo.src='./images/logo.png'


let h1 = document.createElement('h1')
h1.innerHTML = 'SLOGAN SLOGAN SLOGAN'
// ИЛИ
// h1.textContent('SLOGAN SLOGAN SLOGAN')

//================nav========
let ulNav = document.createElement('ul')
ulNav.classList.add('nav')

let arrMenu = ['Главная', 'О приложении', 'Скачать','Контакт']

for(let i = 0; i < arrMenu.length; i++) {
    let aNav = document.createElement('a')
    let liNav = document.createElement('li')
    ulNav.append(aNav)

      aNav.append(liNav)
      liNav.textContent = arrMenu[i]

}

let aNav = document.createElement('a')
let liNav = document.createElement('li')
liNav.textContent = 'Главная'


header.append(divLogo)
divLogo.append(imgLogo)
divLogo.append(h1)

header.append(ulNav)

//============Section === Cards============
let sectionCard = document.createElement('section')
sectionCard.classList.add('cards')

for(let i = 0; i < 3; i++) {
    let divCard = document.createElement('div')
    divCard.classList.add('card')

    let cardImg = document.createElement('img')
    cardImg.src = './images/work.png'
    divCard.append(cardImg)

    let cardP = document.createElement('p')
    cardP.textContent='Часто ли Вы опаздываете на работу (учёбу)?'
    divCard.append(cardP)

    sectionCard.append(divCard)
}

//======Section == App=====================

let sectionApp = document.createElement('section')
sectionApp.classList.add('app')
let h2 = document.createElement('h2')
h2.innerHTML = 'О приложении'

sectionApp.append(h2)
let baner = document.createElement('div')
baner.classList.add('baner')

let video = document.createElement('img')
video.classList.add('video')
video.src = './images/banner.jpg'

let play = document.createElement('img')
play.classList.add('play')
play.src = './images/play-button.png'


let fiveCards =document.createElement('div')
fiveCards.classList.add('fiveCards')


for(let i = 0; i < 5; i++) {
    let imgFive = document.createElement('img')
imgFive.classList.add('imgFive')
imgFive.src = './images/card.png'

fiveCards.append(imgFive)

}
//===========================//===========//========//
body.append(header)
body.append(sectionCard)
body.append(sectionApp)
sectionApp.append(baner)
baner.append(video)
baner.append(play)
body.append(fiveCards)

//===================//==============//==============
let sectionProject =document.createElement('section')
sectionProject.classList.add('project')

let pj = document.createElement('h2')
pj.innerHTML = 'О проекте'
let p = document.createElement('p')
p.innerHTML = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытныебизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса:от разработки идеи до ее реализации.'


body.append(sectionProject)
sectionProject.append(pj)
sectionProject.append(p)

//=========================================
let sectionDown = document.createElement('section')
sectionDown.classList.add('download')

let h3 = document.createElement('h2')
h3.innerHTML = 'Скачать'

let icons = document.createElement('div')
icons.classList.add('icons')

let android = document.createElement('img')
android.classList.add('android')
android.src = './images/android.png'

let qr = document.createElement('img')
qr.classList.add('qr')
qr.src = './images/qr.png'

let dawn_p = document.createElement('p')
dawn_p.innerHTML = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены,инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработкиидеи до ее реализации.'




body.append(sectionDown)
sectionDown.append(h3)
sectionDown.append(icons)
icons.append(android)
icons.append(qr)
sectionDown.append(dawn_p)

//=============footer=========

let footer = document.createElement('footer')

let some = document.createElement('h3')
some.innerHTML = 'SOME'

body.append(footer)
footer.append(some)

let social = document.createElement('social')
social.classList.add('social')

let vk = document.createElement('img')
vk.src = './images/vk.png'

let instagram = document.createElement('img')
instagram.src = "./images/instagram (1).png"

let facebook = document.createElement('img')
facebook.src = './images/facebook.png'

let descr = document.createElement('div')
descr.classList.add('descr')

let contacts = document.createElement('div')
contacts.classList.add('contacts')

let cont = document.createElement('p')
cont.innerHTML = 'Контакты'

let tel = document.createElement('p')
tel.innerHTML = 'Tel.: +996 (312) 915000 <br> + Еxt <br> Fax: +996 (312) 915 028'

let adress = document.createElement('div')
adress.classList.add('adress')

let adr = document.createElement('p')
adr.innerHTML = 'Адреса'

let auca = document.createElement('p')
auca.innerHTML = 'American University of Central Asia <br> 7/6 Aaly Tokombaev Street<br> Bishkek, Kyrgyz Republic 720060'


let help = document.createElement('div')
help.classList.add('help')

let phelp = document.createElement('p')
phelp.innerHTML = 'Помощь'

let pHelp = document.createElement('p')
pHelp.innerHTML = 'Помощь <br> Помощь<br> Помощь'

body.append(footer)
footer.append(social)
social.append(vk)
social.append(instagram)
social.append(facebook)
footer.append(descr)
descr.append(contacts)
contacts.append(cont)
contacts.append(tel)
//======
descr.append(adress)
adress.append(adr)
adress.append(auca)
//====
descr.append(help)
help.append(phelp)
help.append(pHelp)


