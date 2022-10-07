import {drawCards} from "../scripts/main.js"
import {drawCardInCardSection} from "../scripts/cards.js"
import {ShowCardMenu} from "../scripts/cards.js"
import {drawReports} from "../scripts/reports.js"

let cardsArray = JSON.parse(localStorage.getItem("cardsArray"))
let reportsArr = JSON.parse(localStorage.getItem("reportsArr"));

export let showCardCheatingMenu = () => {
    cardsArray = JSON.parse(localStorage.getItem("cardsArray"))
    let cards = document.querySelectorAll(".cheatingMenuTrigger")
    for (let el of cards) {
        el.onclick = () => {
            let cardData = cardsArray.filter((i) => i.cardId == el.parentNode.getAttribute("data-cardId"))[0]

            let backdropEl = document.createElement("div")        
            backdropEl.classList.add("backdrop_el")
            backdropEl.classList.add("cheating_menu")
            document.querySelector("body").append(backdropEl)

            backdropEl.innerHTML = `
            <div class="close_menu_div"></div>
                <div class="wrapper">
                    <div class="close_menu">
                        <svg class="close_menu_svg" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg>
                    </div>
                    <div class="menu_text_wrapper">
                        <span class="name_of_card">${cardData.name}</span>
                    </div>
                    <div class="func_menu_wrapper">
                        <div class="add_money_div">
                            <div class="img">
                                <svg width="25.391" height="25.263" viewBox="0 0 25.391 25.263"><g transform="translate(17 43.189)"><g transform="translate(-17 -43.189)"><path d="M6.435,9.063A.632.632,0,0,0,5.8,9.7V15.31a1.9,1.9,0,0,1-1.9,1.9H-13.838a1.9,1.9,0,0,1-1.9-1.9V-1.169a1.9,1.9,0,0,1,1.9-1.9h5.615A.632.632,0,0,0-7.591-3.7a.632.632,0,0,0-.632-.632h-5.615A3.166,3.166,0,0,0-17-1.169V15.31a3.165,3.165,0,0,0,3.162,3.162H3.905A3.165,3.165,0,0,0,7.067,15.31V9.7a.632.632,0,0,0-.632-.632Zm0,0" transform="translate(17 6.791)" fill="#09BEEB"></path><path d="M108.024-42.356a2.845,2.845,0,0,0-4.024,0L92.718-31.074a.634.634,0,0,0-.162.278l-1.484,5.356a.632.632,0,0,0,.162.616.633.633,0,0,0,.616.162l5.356-1.484a.633.633,0,0,0,.279-.162l11.282-11.282a2.849,2.849,0,0,0,0-4.024ZM94.1-30.663l9.233-9.234,2.978,2.978-9.234,9.234ZM93.5-29.469,95.88-27.09l-3.291.912Zm14.371-9.014-.67.671-2.978-2.978.671-.671a1.581,1.581,0,0,1,2.235,0l.742.742a1.583,1.583,0,0,1,0,2.236Zm0,0" transform="translate(-84.207 43.189)" fill="#09BEEB"></path></g></g></svg>
                            </div>
                            <div class="add_money_div_wrap">                
                                <span class="title_of_item add_money_div_span">Накрутка денег!</span>
                                <div class="add_money_input_wrapper">
                                    <input class="add_money_div_input" placeholder="Сколько денег хочешь?" value="">
                                    <button class="accept_button"><svg viewBox="0 0 512 512"><path fill="none" stroke="#09beeb" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"/></svg></button>
                                    <button class="cancel_button"><svg viewBox="0 0 512 512"><path fill="none" stroke="#fa686b" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg></button>
                                </div>
                            </div>
                        </div>
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

            let addMoneyToggler = false

            document.querySelector(".add_money_div").onclick = () => {
                if (addMoneyToggler == false && document.querySelector(".add_money_input_wrapper").getAttribute("class") == "add_money_input_wrapper") {
                    document.querySelector(".add_money_input_wrapper").classList.add("active")
                    document.querySelector(".add_money_div").classList.add("active")
                    addMoneyToggler = false
                } else {
                    addMoneyToggler = false
                }
            }

            document.querySelector(".cancel_button").onclick = () => {
                document.querySelector(".add_money_input_wrapper").classList.remove("active")
                document.querySelector(".add_money_div").classList.remove("active")
                addMoneyToggler = true
            }

            let cheatingMoneyAmountArr = [];
            document.querySelector(".add_money_div_input").oninput = () => {
                cheatingMoneyAmountArr = [];
                for (let i of event.target.value) {
                    if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9") {
                        cheatingMoneyAmountArr.push(i);
                        document.querySelector(".add_money_div_input").value = cheatingMoneyAmountArr.join("");
                    } else {
                        document.querySelector(".add_money_div_input").value = cheatingMoneyAmountArr.join("");
                    }
                };
            };

            document.querySelector(".accept_button").onclick = () => {

                for (let el of cardsArray) {
                    if (el.cardId == cardData.cardId) {
                        el.balance = el.balance + parseInt(document.querySelector(".add_money_div_input").value)
                    }
                }

                let date = new Date()

                reportsArr.push({
                    cardNumber: cardData.number,
                    date : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` ,
                    content : `На счет с номером карты "${cardData.number}" было магическое пополнение в размере ${document.querySelector(".add_money_div_input").value} сум`,
                })

                localStorage.setItem("reportsArr" , JSON.stringify(reportsArr))
                reportsArr = JSON.parse(localStorage.getItem("reportsArr"));

                drawReports()

                localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))
                drawCardInCardSection()
                drawCards()
                drawCardInPropertiesSection()
                ShowCardMenu()
                backdropEl.classList.toggle("backdrop_el")
                backdropEl.remove()
            }
        }
    }
} 

export let drawCardInPropertiesSection = () => {

    document.querySelector(".properties_items_wrapper").innerHTML = ``

    if (JSON.parse(localStorage.getItem("cardsArray")).length != 0 || JSON.parse(localStorage.getItem("cardsArray")) != null) {
        for (let el of JSON.parse(localStorage.getItem("cardsArray"))) {
            let card = document.createElement("div")
            card.classList.add("card_large_propeties")
            card.classList.add("card_elem")
            card.style.backgroundColor = el.color
            card.setAttribute("data-cardId" , el.cardId)


            let showbalance = (balanceVisibilty) => {
                let cardBalance;
                if (el.balance == null) {
                    cardBalance = 0;
                }else {
                    cardBalance = el.balance
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
                if (balanceVisibilty) {
                    return `<span class="balance">${cardBalance} сум</span>`
                } else {
                    return `<span>*******</span>`
                }
            }

            let cardCompanyFunc = () => {
            if (el.number[0] == "8") {
                return "https://cdn.click.uz/app/evo/card/wallet/light-logo_v4.png"
            } else if (el.number[0] == "2") {
                return "https://cloudpayments.ru/images/service/info-logo/mir.png"
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

            let showCardDate = () => {
                for(let i in el) {
                    if (i == "date") {
                        return `<span style="margin-left: 20px;">${el.date}</span>`;
                    }
                }

                return ``
            }

            card.innerHTML = `
                <img src="${cardCompanyFunc()}">
                <span class="card_large_name">${el.name}</span>
                <div cardid="${el.cardId}" style="z-index: 3; width : 60%;" class="balance card_large_balance">
                    <svg style="z-index: 3;" class="show_card_large_balance" width="18px" viewBox="0 0 34 20">
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
                    ${showbalance(el.balanceVisibility)}
                </div>
                <div class="card_large_number">
                    <span>${el.number}</span>
                    <svg class="copy_svg" width="16px" height="16px" viewBox="0 0 512 512">
                        <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="#09beeb" stroke-linejoin="round" stroke-width="32"/>
                        <path d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24" fill="none" stroke="#09beeb" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/>
                    </svg>
                    ${showCardDate()}
                </div>
                `

            document.querySelector(".properties_items_wrapper").append(card)

            cardsArray = JSON.parse(localStorage.getItem("cardsArray"))

            card.childNodes[5].onclick = () => {
                for (let l of cardsArray ) {
                    if (card.childNodes[5].getAttribute("cardId") == l.cardId) {
                        l.balanceVisibility = !l.balanceVisibility
                        localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))
                        drawCardInPropertiesSection()
                        drawCardInCardSection()
                        drawCards()
                    }
                }
            }

            let cardMenuTrigger = document.createElement("div");
            cardMenuTrigger.classList.add("cheatingMenuTrigger")
            cardMenuTrigger.style.cssText = `
                position : absolute;
                transform : translateY(-16px) translateX(-15px);
                width : ${(document.querySelector(".card_large_propeties").offsetWidth)}px;
                height : ${(document.querySelector(".card_large_propeties").offsetHeight)}px;
                z-index : 2;
            `
            card.append(cardMenuTrigger)
        }
    } else {
        document.querySelector(".properties_items_wrapper").innerHTML = ``
    }
    showCardCheatingMenu()
}

drawCardInPropertiesSection()