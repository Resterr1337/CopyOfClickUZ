import {navBarUpdateFunc} from "../scripts/navigation.js"
import {saveLatetestTitle} from "../scripts/navigation.js"
import {drawCardInCardSection} from "../scripts/cards.js"
import {addCardsFunc} from "../scripts/cards.js"
import {ShowCardMenu} from "../scripts/cards.js"
import {drawCardInPropertiesSection} from "../scripts/cheatingSettings.js"
import {drawReports} from "../scripts/reports.js"

// Реализование функции для редактирование карты
addCardsFunc()


// Переходы по секшонам , по нажатию на какие то элементы



let balanceVisibility = true; 

let cardsArray = JSON.parse(localStorage.getItem("cardsArray"))
window.onload = () => {
    latestSectionClass = JSON.parse(localStorage.getItem("latestSection"))
    latestTitle = JSON.parse(localStorage.getItem("latestTitle"))
    for (let el of navBarElements) {
        if (el.getAttribute("sectionClass") == latestSectionClass) {
            el.setAttribute("class" , "nav_elem active");
            el.setAttribute("isActive" , "true")
            navBarUpdateFunc()
        } else {
            navBarUpdateFunc()
        }
    }

    for (let l of sections) {
        l.classList.remove("disabled")
        if (l.getAttribute("class") !== latestSectionClass) {
            l.classList.add("disabled")
        } else {
            l.setAttribute("class" , latestSectionClass)
        }
    }

    document.title = latestTitle

    ShowCardMenu()
    addCardsFunc()
    drawReports()
}

let navBarElements = document.querySelectorAll(".nav_elem")
let mainSection = document.querySelector(".main")
let latestSectionClass = JSON.parse(localStorage.getItem("latestSection"))
let latestTitle = JSON.parse(localStorage.getItem("latestTitle"))
let sections = document.querySelectorAll("section")

export function changeSectionFunc (classOfElement, indexOfElInNavBar , classOfSection , isArray , nameOfDocTitle) {
    if (isArray) {
        for (let i of document.querySelector(`.${classOfElement}`).childNodes) {
            i.onclick = () => {
                mainSection.setAttribute("class" , "main disabled");
                document.querySelector("." + classOfSection).setAttribute("class" , classOfSection);

                navBarElements[0].setAttribute("isActive" , "false");
                navBarElements[0].setAttribute("class" , "nav_elem");
                navBarElements[indexOfElInNavBar].setAttribute("isActive" , "true");
                navBarElements[indexOfElInNavBar].setAttribute("class" , "nav_elem active");

                document.title = nameOfDocTitle;
                saveLatetestTitle(nameOfDocTitle)
                navBarUpdateFunc()
            }
        }
    } else {
        document.querySelector(`.${classOfElement}`).onclick = () => {
            mainSection.setAttribute("class" , "main disabled");
            document.querySelector("." + classOfSection).setAttribute("class" , classOfSection);

            navBarElements[0].setAttribute("isActive" , "false");
            navBarElements[0].setAttribute("class" , "nav_elem");
            navBarElements[indexOfElInNavBar].setAttribute("isActive" , "true");
            navBarElements[indexOfElInNavBar].setAttribute("class" , "nav_elem active");

            document.title = nameOfDocTitle;
            saveLatetestTitle(nameOfDocTitle)
            navBarUpdateFunc()
        }
    }
}

changeSectionFunc("card_text_wrapper" , 3 , "cards" , true , "Мои карты")
changeSectionFunc("debts_button" , 2 , "translations" , false , "Переводы")
changeSectionFunc("history_trans" , 4 , "reports" , false , "Отчёты")


// Отрисовка карт
document.querySelector(".hide_balance_button").onclick = () => {
    balanceVisibility = !balanceVisibility

    cardsArray = JSON.parse(localStorage.getItem("cardsArray"))

    for (let i of cardsArray) {
        i.balanceVisibility = balanceVisibility;
    }

    localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))

    drawCards()
    drawCardInCardSection()
    drawCardInPropertiesSection()
}



export let drawCards = () => {
    addCardsFunc()
    ShowCardMenu()
    let balance = 0
    let balanceArr
    document.querySelector(".card_wrapper").innerHTML = `
    <div class="add_card card_add_trigger">
        <span>+ Добавить карту</span>
    </div>
    `

    if (JSON.parse(localStorage.getItem("cardsArray")).length != 0 || JSON.parse(localStorage.getItem("cardsArray")) != null) {
        for (let i of JSON.parse(localStorage.getItem("cardsArray"))) {
            if (balanceVisibility) {
                for (let el of cardsArray) {
                    el.balanceVisibility = balanceVisibility;
                }

                balance = balance + i.balance
                balanceArr = balance.toString().split("");
                if (balanceArr.length == 4) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                } else if (balanceArr.length == 5) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                } else if (balanceArr.length == 6) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                } else if (balanceArr.length == 7) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 7 , 0 , " ")
                } else if (balanceArr.length == 8) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 7 , 0 , " ")
                } else if (balanceArr.length == 9) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 7 , 0 , " ")
                } else if (balanceArr.length == 9) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 9 , 0 , " ")
                } else if (balanceArr.length == 10) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 7 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 11 , 0 , " ")
                } else if (balanceArr.length == 11) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 7 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 11 , 0 , " ")
                } else if (balanceArr.length == 12) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 7 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 11 , 0 , " ")
                } else if (balanceArr.length == 13) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 7 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 11 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 15 , 0 , " ")
                } else if (balanceArr.length == 14) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 7 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 11 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 15 , 0 , " ")
                } else if (balanceArr.length == 15) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 7 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 11 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 15 , 0 , " ")
                } else if (balanceArr.length == 16) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 7 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 11 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 15 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 23 , 0 , " ")
                } else if (balanceArr.length == 17) {
                    balanceArr.splice(balanceArr.length - 3 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 7 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 11 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 15 , 0 , " ")
                    balanceArr.splice(balanceArr.length - 23 , 0 , " ")
                }
                document.querySelector(".count").innerHTML = `${balanceArr.join("")}<span class="vallet">сум</span>`
                document.querySelector(".reflesh_balance_button").style.display = "block";
            } else {
                document.querySelector(".count").innerHTML = `******* <span class="vallet">сум</span>`
                document.querySelector(".reflesh_balance_button").style.display = "none";
            }

            let showbalance = (balanceVisibility) => {
                let cardBalance;
                if (i.balance == null) {
                    cardBalance = 0;
                }else {
                    cardBalance = i.balance
                }
                let cardBalanceArr = cardBalance.toString().split("")
                if (cardBalanceArr.length == 4) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                } else if (cardBalanceArr.length == 5) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                } else if (cardBalanceArr.length == 6) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                } else if (cardBalanceArr.length == 7) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 7 , 0 , " ")
                } else if (cardBalanceArr.length == 8) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 7 , 0 , " ")
                } else if (cardBalanceArr.length == 9) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 7 , 0 , " ")
                } else if (cardBalanceArr.length == 9) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 9 , 0 , " ")
                } else if (cardBalanceArr.length == 10) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 7 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 11 , 0 , " ")
                } else if (cardBalanceArr.length == 11) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 7 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 11 , 0 , " ")
                } else if (cardBalanceArr.length == 12) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 7 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 11 , 0 , " ")
                } else if (cardBalanceArr.length == 13) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 7 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 11 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 15 , 0 , " ")
                } else if (cardBalanceArr.length == 14) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 7 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 11 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 15 , 0 , " ")
                } else if (cardBalanceArr.length == 15) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 7 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 11 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 15 , 0 , " ")
                } else if (cardBalanceArr.length == 16) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 7 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 11 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 15 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 23 , 0 , " ")
                } else if (cardBalanceArr.length == 17) {
                    cardBalanceArr.splice(cardBalanceArr.length - 3 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 7 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 11 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 15 , 0 , " ")
                    cardBalanceArr.splice(cardBalanceArr.length - 23 , 0 , " ")
                }
                cardBalance = cardBalanceArr.join("")
                if (balanceVisibility) {
                    return `<span class="balance">${cardBalance} сум</span>`
                } else {
                    return `<span>${i.name}</span>`
                }
            }

            let cardCompanyFunc = () => {
                if (i.number[0] == "8") {
                    return "https://cdn.click.uz/app/evo/card/wallet/light-logo_v4.png"
                } else if (i.number[0] == "2") {
                    return "../assets/images/cardCompanies/mir.png"
                } else if (i.number[0] == "3") {
                    return "../assets/images/cardCompanies/American-Express-Logo-Download-Free-PNG.png"
                } else if (i.number[0] == "4") {
                    return "../assets/images/cardCompanies/Visa_2021.svg.png"
                } else if (i.number[0] == "6") {
                    return "../assets/images/cardCompanies/Maestro.png"
                } else if (i.number[0] == "5") {
                    return "../assets/images/cardCompanies/MasterCard.png"
                } else {
                    return "https://cdn.click.uz/app/evo/card/wallet/light-logo_v4.png"
                }
            }

            let showCardDate = () => {
                for(let el in i) {
                    if (el == "date") {
                        return `<span style="margin-left: 10px;">${i.date}</span>`;
                    }
                }

                return ``
            }

            let cardWrapper = document.createElement("div");
            let cardMenuTrigger = document.createElement("div");
            cardWrapper.setAttribute("data-cardId" , i.cardId)
            cardWrapper.classList.add("card")
            cardWrapper.classList.add("card_elem")
            cardWrapper.style.background = i.color;
            cardWrapper.innerHTML = `
            <img src="${cardCompanyFunc()}">
            <div cardId="${i.cardId}" style="z-index: 3; width : 65%;" class="balance card_balance">
                <svg style="z-index: 3;" class="show_card_balance" width="18px" viewBox="0 0 34 20">
                    <g transform="translate(0 -0.321)">
                        <g transform="translate(0 0.321)">
                            <g>
                                <path d="M148.754,271.731a17.19,17.19,0,0,0-24.283,0L120,276.2l4.584,4.584a17.19,17.19,0,0,0,24.283,0l4.471-4.471Zm-.685,8.258a16.063,16.063,0,0,1-22.691,0l-3.786-3.787,3.676-3.674a16.065,16.065,0,0,1,22.691,0l3.786,3.787Zm0,0" transform="translate(-120 -266.71)" fill="#fff">
                            </path>
                        </g>
                    </g>
                        <path d="M141.2,273.851a3.947,3.947,0,0,0-3.943,3.943.563.563,0,0,0,1.127,0,2.818,2.818,0,0,1,2.816-2.816.564.564,0,0,0,0-1.128Zm0,0" transform="translate(-125.109 -268.503)" fill="#fff">
                    </path>
                        <path d="M140.578,269.851a7.321,7.321,0,1,0,7.323,7.32,7.328,7.328,0,0,0-7.323-7.32Zm0,13.515a6.194,6.194,0,1,1,6.2-6.195,6.2,6.2,0,0,1-6.2,6.195Zm0,0" transform="translate(-123.925 -267.319)" fill="#fff">
                    </path>
                        <ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(14 7.779)" fill="#fff">
                    </ellipse>
                    </g>
                </svg>
                ${showbalance(i.balanceVisibility)}
            </div>
            <div class="card_number">
                <span>${i.number}</span>
                <svg class="copy_svg" width="16px" height="16px" viewBox="0 0 512 512">
                    <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="#09beeb" stroke-linejoin="round" stroke-width="32"/>
                    <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="#09beeb" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
                </svg>
                ${showCardDate()}
            </div>
            `

            cardWrapper.append(cardMenuTrigger)
            document.querySelector(".card_wrapper").append(cardWrapper)
            document.querySelector(".add_card").style.order = JSON.parse(localStorage.getItem("cardsArray")).length + 1

            document.querySelector(".reflesh_balance_button").onclick = () => {
                drawCards()
                drawCardInCardSection()
                drawCardInPropertiesSection()

                for (let i of document.querySelectorAll(".balance")){
                    i.classList.toggle("blur_animation")
                }
                setTimeout(() => {
                    for (let i of document.querySelectorAll(".balance")){
                        i.classList.toggle("blur_animation")
                    }
                } , 1000)
            }

            cardWrapper.childNodes[3].onclick = () => {
                cardsArray = JSON.parse(localStorage.getItem("cardsArray"))
                for (let l of cardsArray ) {
                    if (cardWrapper.childNodes[3].getAttribute("cardId") == l.cardId) {
                        l.balanceVisibility = !l.balanceVisibility
                    }
                }
                localStorage.setItem("cardsArray" , JSON.stringify(cardsArray));
                drawCards()
            }

            cardMenuTrigger.classList.add("trigger")
            cardMenuTrigger.classList.add("card_menu_trigger")
            cardMenuTrigger.style.cssText = `
                position : absolute;
                transform : translateY(-16px) translateX(-15px);
                width : ${(document.querySelector(".card").offsetWidth)}px;
                height : ${(document.querySelector(".card").offsetHeight)}px;
                z-index : 2;
            `
        }
    } else {
        document.querySelector(".card_wrapper").innerHTML = `
        <div class="add_card card_add_trigger">
            <span>+ Добавить карту</span>
        </div>
        `
    }
    ShowCardMenu()
    addCardsFunc()
}
drawCards()
window.addEventListener('resize', () => {
    drawCards() 
    drawCardInPropertiesSection()
})


let documentBackgrond = document.createElement("div")
documentBackgrond.style.cssText = `
    background-color: #373845;
    width : ${window.screen.width}px;
    height : ${window.screen.height}px;
    position : fixed;
    top : 0 ;
    z-index : -1;
`
document.querySelector("body").append(documentBackgrond)
window.addEventListener("resize" , () => {
    documentBackgrond.style.cssText = `
    width : ${window.screen.width}px;
    height : ${window.screen.height}px;
    position : fixed;
    top : 0 ;
    z-index : -1;
    background-color: #373845;
`
})