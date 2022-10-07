import {drawCardInCardSection} from "../scripts/cards.js"
import {drawCardInPropertiesSection} from "../scripts/cheatingSettings.js"
import {drawCards} from "../scripts/main.js"
import {drawReports} from "../scripts/reports.js"
let reportsArr = JSON.parse(localStorage.getItem("reportsArr"))

export let drawOptionsToInput = () => {
    document.querySelector("datalist").innerHTML = ``
    for (let i of JSON.parse(localStorage.getItem("cardsArray"))) {
        let name = document.createElement("option")
        name.setAttribute("value" , i.name)
        name.setAttribute("id" , i.cardId)
        document.querySelector("datalist").append(name)

        let number = document.createElement("option")
        number.setAttribute("value" , i.number)
        number.setAttribute("id" , i.cardId)
        document.querySelector("datalist").append(number)
    }
}

drawOptionsToInput()

let commingMoneyCardId;
let leavingMoneyCardId;

let resultArr = []
document.querySelector(".names_and_numbers_input").oninput = () => {
    document.querySelector(".items_wrapper").innerHTML = ``
    let valueOfLetter = event.target.value.length
    let cardsArray = JSON.parse(localStorage.getItem("cardsArray"))
    for (let i of cardsArray) {
        if (i.name[0 , valueOfLetter - 1] == event.target.value || i.name == event.target.value || i.number[0 , valueOfLetter - 1] == event.target.value || i.number == event.target.value) {
            resultArr.push(i)

            for(let el of resultArr) {
                let searchItem = document.createElement("div")
                searchItem.setAttribute("data-cardId" , i.cardId)
                searchItem.classList.add("item_of_search")
                searchItem.style.background = i.color

                let cardCompanyFunc = () => {
                    if (el.number[0] == "8") {
                        return "https://cdn.click.uz/app/evo/card/wallet/light-logo_v4.png"
                    } else if (el.number[0] == "2") {
                        return "../assets/images/cardCompanies/mir.png"
                    } else if (el.number[0] == "3") {
                        return "../assets/images/cardCompanies/American-Express-Logo-Download-Free-PNG.png"
                    } else if (el.number[0] == "4") {
                        return "../assets/images/cardCompanies/Visa_2021.svg.png"
                    } else if (el.number[0] == "6") {
                        return "../assets/images/cardCompanies/Maestro.png"
                    } else if (el.number[0] == "5") {
                        return "../assets/images/cardCompanies/MasterCard.png"
                    } else {
                        return "https://cdn.click.uz/app/evo/card/wallet/light-logo_v4.png"
                    }
                }

                let showbalance = (balanceVisibility) => {
                    let cardBalance = i.balance
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
                        return `<span class="card_balance">${cardBalance} сум</span>`
                    } else {
                        return `<span>${i.name}</span>`
                    }
                }

                searchItem.innerHTML = `
                <div class="span_wrapper">
                    <span class="card_name">${el.name}</span>
                    ${showbalance(el.balanceVisibility)}
                    <span class="card_number">${el.number}  <span style="margin-left: 10px;font-size: 0.825rem ;color: #60738b;">${el.date}</span></span>
                </div>

                <div class="img_wrapper">
                    <img src="${cardCompanyFunc()}" alt="" srcset="">
                </div>
                `

                document.querySelector(".items_wrapper").append(searchItem)
                resultArr = []
            }
        }
    }

    for (let l of document.querySelectorAll(".item_of_search")) {
        l.onclick = () => {
            for (let el of cardsArray) {
                if (el.cardId == l.getAttribute("data-cardId")) {
                    commingMoneyCardId =  l.getAttribute("data-cardId");

                    document.querySelector(".right_side_span_wrapper").innerHTML = `
                    <div class="card_number">
                        <svg width="19.5" height="13" viewBox="0 0 19.5 13" class=""><g transform="translate(0 -85.333)"><g transform="translate(0 85.333)"><g transform="translate(0 0)"><path d="M17.469,85.333H2.031A2.034,2.034,0,0,0,0,87.364V96.3a2.034,2.034,0,0,0,2.031,2.031H17.469A2.034,2.034,0,0,0,19.5,96.3V87.364A2.034,2.034,0,0,0,17.469,85.333ZM18.687,96.3a1.22,1.22,0,0,1-1.219,1.219H2.031A1.22,1.22,0,0,1,.812,96.3V87.364a1.22,1.22,0,0,1,1.219-1.219H17.469a1.22,1.22,0,0,1,1.219,1.219V96.3Z" transform="translate(0 -85.333)"></path></g></g><g transform="translate(0 87.771)"><g transform="translate(0 0)"><path d="M19.094,149.333H.406a.406.406,0,0,0-.406.406v2.438a.406.406,0,0,0,.406.406H19.094a.406.406,0,0,0,.406-.406v-2.437A.406.406,0,0,0,19.094,149.333Zm-.406,2.437H.812v-1.625H18.687v1.625Z" transform="translate(0 -149.333)"></path></g></g><g transform="translate(2.437 93.458)"><g transform="translate(0 0)"><path d="M69.281,298.667H64.406a.406.406,0,1,0,0,.812h4.875a.406.406,0,1,0,0-.812Z" transform="translate(-64 -298.667)"></path></g></g><g transform="translate(2.437 95.083)"><g transform="translate(0 0)"><path d="M69.281,341.333H64.406a.406.406,0,1,0,0,.813h4.875a.406.406,0,0,0,0-.813Z" transform="translate(-64 -341.333)"></path></g></g><g transform="translate(13.812 92.645)"><g transform="translate(0 0)"><path d="M364.7,277.333h-.812a1.22,1.22,0,0,0-1.219,1.219v.813a1.22,1.22,0,0,0,1.219,1.219h.812a1.22,1.22,0,0,0,1.219-1.219v-.812A1.22,1.22,0,0,0,364.7,277.333Zm.406,2.031a.406.406,0,0,1-.406.406h-.812a.406.406,0,0,1-.406-.406v-.812a.406.406,0,0,1,.406-.406h.812a.406.406,0,0,1,.406.406Z" transform="translate(-362.667 -277.333)"></path></g></g></g></svg>
                        <span>${el.number} <span style="margin-left: 15px ;">${el.date}</span></span>
                    </div>

                    <div class="clear_btn">
                        <svg width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#85879c"></path></svg>
                    </div>
                    `

                    document.querySelector(".func_wrapper").classList.add("active")

                    document.querySelector(".clear_btn").onclick = () => {
                        document.querySelector(".right_side_span_wrapper").innerHTML = ``

                        document.querySelector(".func_wrapper").classList.remove("active")
                        document.querySelector(".card_select_wrapper").innerHTML = `<span class="card_select_span">Выберите карту с которой будет оплата</span>`
                        leavingMoneyCardId = '';
                        commingMoneyCardId = '';
                    }

                    document.querySelector(".card_select_wrapper").onclick = () => {
                            let cardsArray = JSON.parse(localStorage.getItem("cardsArray"))
                        
                            let backdropEl = document.createElement("div")
                            backdropEl.classList.add("backdrop_el")
                            backdropEl.classList.add("select_card_menu")
                            document.querySelector("body").append(backdropEl)
                        
                            let drawCardsInSelectMenu = () => {
                                let returnCode = ``
                                for (let i of cardsArray) {
                                    if (i.cardId != commingMoneyCardId){
                                        let showbalance = (balanceVisibility) => {
                                            let cardBalance = i.balance
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
                                        
                                        returnCode = returnCode + `
                                            <div cardId="${i.cardId}" class="menu_item">
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
                                                    <span style="margin-left: 10px;">${i.date}</span>
                                                </div>
                                            </div>
                                        `
                                    }
                                }

                                return returnCode
                            }

                            backdropEl.innerHTML = `
                            <div class="close_menu_div"></div>
                            <div class="wrapper">
                                <div class="close_menu">
                                    <svg class="close_menu_svg" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg>
                                </div>

                                <div class="menu_text_wrapper">
                                    <span>Выберите счёт</span>
                                </div>

                                <div class="cards_wrapper">
                                    ${drawCardsInSelectMenu()}
                                </div>
                            </div>
                            `

                            document.querySelector(".close_menu_div").onclick = () => {
                                backdropEl.classList.toggle("backdrop_el")
                                backdropEl.remove()
                            }

                            document.querySelector(".close_menu_svg").onclick = () => {
                                backdropEl.classList.toggle("backdrop_el")
                                backdropEl.remove()
                            }

                            for (let el of document.querySelectorAll(".menu_item")){
                                el.onclick = () => {
                                    for (let i of cardsArray) {
                                        if (i.cardId == el.getAttribute("cardId")){
                                            leavingMoneyCardId = el.getAttribute("cardId")
                                            let showbalance = (balanceVisibility) => {
                                                let cardBalance = i.balance
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
                                            
                                            document.querySelector(".card_select_wrapper").innerHTML = `
                                                <div cardId="${i.cardId}" class="selected_card">
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
                                                        <span style="margin-left: 10px;">${i.date}</span>
                                                    </div>
                                                </div>
                                            `
                                            
                                            backdropEl.classList.toggle("backdrop_el")
                                            backdropEl.remove()
                                            
                                            document.querySelector(".card_select_wrapper").setAttribute("cardId" , el.getAttribute("cardId"))
                                        }
                                    }
                                }
                            }
                    }

                    let translationAmountArr = [];
                    document.querySelector(".count_of_translation").oninput = () => {
                        translationAmountArr = [];
                        for (let i of event.target.value) {
                            if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9") {
                                translationAmountArr.push(i);
                                document.querySelector(".count_of_translation").value = translationAmountArr.join("");
                            } else {
                                document.querySelector(".count_of_translation").value = translationAmountArr.join("");
                            }
                        };
                    };

                    document.querySelector(".translation_confirm_button").onclick = () => {
                        for(let i of document.querySelector(".card_select_wrapper").children){
                            if (i.getAttribute("class") == "selected_card" && translationAmountArr.length != 0) {
                                for (let p of cardsArray) {
                                    for(let c of cardsArray) {
                                        if (c.cardId == commingMoneyCardId) {
                                            if (p.cardId == leavingMoneyCardId) {
                                                if (p.balance >= document.querySelector(".count_of_translation").value) {
                                                    p.balance = p.balance - parseInt(document.querySelector(".count_of_translation").value)
                                                    c.balance = c.balance + parseInt(document.querySelector(".count_of_translation").value)

                                                    let date = new Date()

                                                    reportsArr.push({
                                                        cardNumber: p.number,
                                                        date : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` ,
                                                        content : `C счета с номером карты "${p.number}" было переведено ${document.querySelector(".count_of_translation").value} сум на счёт с номером карты "${c.number}"`,
                                                    })

                                                    reportsArr.push({
                                                        cardNumber: c.number,
                                                        date : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` ,
                                                        content : `На счета с номером карты "${c.number}" было пополнение в размере ${document.querySelector(".count_of_translation").value} сум с счёта с номером карты "${p.number}"`,
                                                    })

                                                    localStorage.setItem("reportsArr" , JSON.stringify(reportsArr))
                                                    reportsArr = JSON.parse(localStorage.getItem("reportsArr"));
                                                    drawReports()
                                                    localStorage.setItem("cardsArray" , JSON.stringify(cardsArray)) 

                                                    let showbalance = (balanceVisibility) => {
                                                        let cardBalance = p.balance
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
                                                        if (p.number[0] == "8") {
                                                            return "https://cdn.click.uz/app/evo/card/wallet/light-logo_v4.png"
                                                        } else if (p.number[0] == "2") {
                                                            return "../assets/images/cardCompanies/mir.png"
                                                        } else if (p.number[0] == "3") {
                                                            return "../assets/images/cardCompanies/American-Express-Logo-Download-Free-PNG.png"
                                                        } else if (p.number[0] == "4") {
                                                            return "../assets/images/cardCompanies/Visa_2021.svg.png"
                                                        } else if (p.number[0] == "6") {
                                                            return "../assets/images/cardCompanies/Maestro.png"
                                                        } else if (p.number[0] == "5") {
                                                            return "../assets/images/cardCompanies/MasterCard.png"
                                                        } else {
                                                            return "https://cdn.click.uz/app/evo/card/wallet/light-logo_v4.png"
                                                        }
                                                    }
                                                    
                                                    document.querySelector(".card_select_wrapper").innerHTML = `
                                                        <div cardId="${p.cardId}" class="selected_card">
                                                            <img src="${cardCompanyFunc()}">
                                                            <div cardId="${p.cardId}" style="z-index: 3; width : 65%;" class="balance card_balance">
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
                                                                ${showbalance(p.balanceVisibility)}
                                                            </div>
                                                            <div class="card_number">
                                                                <span>${p.number}</span>
                                                                <svg class="copy_svg" width="16px" height="16px" viewBox="0 0 512 512">
                                                                    <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="#09beeb" stroke-linejoin="round" stroke-width="32"/>
                                                                    <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="#09beeb" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
                                                                </svg>
                                                                <span style="margin-left: 10px;">${p.date}</span>
                                                            </div>
                                                        </div>
                                                    `

                                                    drawCardInPropertiesSection()
                                                    drawCardInCardSection()
                                                    drawCards()
                                                }
                                            }
                                        }
                                    }
                                }
                            } else if (i.getAttribute("class") == "card_select_span") {
                                document.querySelector(".card_select_span").classList.add("anim")
                                setTimeout(() => {
                                    document.querySelector(".card_select_span").classList.remove("anim")
                                } , 500)
                            }
                        }
                    }
                }
            }
        }
    }

    document.querySelector(".right_side_span_wrapper").innerHTML = ``

    document.querySelector(".func_wrapper").classList.remove("active")
    document.querySelector(".card_select_wrapper").innerHTML = `<span class="card_select_span">Выберите карту с которой будет оплата</span>`
    leavingMoneyCardId = '';
    commingMoneyCardId = '';
}








