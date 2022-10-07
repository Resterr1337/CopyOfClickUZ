import {drawCards} from "../scripts/main.js"
import {drawCardInPropertiesSection} from "../scripts/cheatingSettings.js"
import {navBarUpdateFunc} from "../scripts/navigation.js"
import {drawReports} from "../scripts/reports.js"

if (JSON.parse(localStorage.getItem("cardsArray")) == null) {
    localStorage.setItem("cardsArray" , "[]")
}
let cardsArray = JSON.parse(localStorage.getItem("cardsArray"))

let reportsArr = JSON.parse(localStorage.getItem("reportsArr"));



export let addCardsFunc = () => {
    let addCardElements = document.querySelectorAll(".card_add_trigger")
    for (let el of addCardElements) {
        el.onclick = () => {
            let addCardBackgroundElem = document.createElement("div")
            addCardBackgroundElem.classList.toggle("backdrop_el")
            addCardBackgroundElem.classList.toggle("add_card_menu")

            addCardBackgroundElem.innerHTML = `
                <div class="close_menu_div"></div>
                <div class="add_card_menu_wrapper">
                    <div class="close_menu">
                        <svg class="close_menu_svg" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg>
                    </div>

                    <div class="menu_text_wrapper">
                        <span class="name_of_card">Добавление карты</span>
                    </div>

                    <div class="input_wrapper">
                        <div class="card_name_wrapper">
                            <span>Введите название карты</span>
                            <input placeholder="Введите название карты" class="card_name_input">
                        </div>
                        <div class="card_number_wrapper">
                            <span>Введите номер и дату карты</span>
                            <div class="card_number_and_card_date">
                                <input placeholder="Введите номер карты" class="card_number_input">
                                <div class="card_date">
                                    <span>Срок действия карты </span>
                                    <input placeholder="мм/гг" class="card_date_input">
                                </div>
                            </div>
                        </div>
                        <div class="card_color_wrapper">
                            <span>Веберите цвет заднего фона карты</span>
                            <input value="#232430" type="color" class="card_background_color">
                        </div>
                    </div>

                    <div class="create_card_wrapp">
                        <button class="confirm_button">Продолжить</button>
                    </div>
                </div>
            `

            document.querySelector("body").append(addCardBackgroundElem)

            document.querySelector(".close_menu_div").onclick = () => {
                addCardBackgroundElem.classList.toggle("backdrop_el")
                addCardBackgroundElem.remove()
            }

            document.querySelector(".close_menu_svg").onclick = () => {
                addCardBackgroundElem.classList.toggle("backdrop_el")
                addCardBackgroundElem.remove()
            }

            let cardCodeArr = []
            document.querySelector(".card_number_input").oninput = () => {
                cardCodeArr = []

                for (let i of event.target.value) {
                    if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9" || i == " " || i == "+" ) {
                        cardCodeArr.push(i);
                        event.target.value = cardCodeArr.join("");
                    }else {
                        event.target.value = cardCodeArr.join("");
                    };
                };

                if (cardCodeArr.length == 4) {
                    cardCodeArr.push(" ")
                    event.target.value = cardCodeArr.join("");
                } else if (cardCodeArr.length == 9) {
                    cardCodeArr.push(" ")
                    event.target.value = cardCodeArr.join("");
                } else if (cardCodeArr.length == 14) {
                    cardCodeArr.push(" ")
                    event.target.value = cardCodeArr.join("");
                } else if (cardCodeArr.length >= 20) {
                    cardCodeArr.pop()
                    event.target.value = cardCodeArr.join("");
                }
            }

            document.querySelector(".card_number_input").addEventListener("keydown" , (e) => {
                if (e.key == "Backspace" && cardCodeArr[cardCodeArr.length - 1] == " ") {
                    cardCodeArr.pop()
                    event.target.value = cardCodeArr.join("");
                }
            })

            let cardDateArr = []
            document.querySelector(".card_date_input").oninput = () => {
                cardDateArr = []

                for (let i of event.target.value) {
                    if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9" || i == " " || i == "/" ) {
                        cardDateArr.push(i);
                        event.target.value = cardDateArr.join("");
                    }else {
                        event.target.value = cardDateArr.join("");
                    };
                };

                if (cardDateArr.length == 2 && cardDateArr[0] != "/" && cardDateArr[1] != "/"  && cardDateArr[3] != "/" && cardDateArr[4] != "/") {
                    cardDateArr.push("/")
                    event.target.value = cardDateArr.join("");
                } else if (cardDateArr.length >= 6) {
                    cardDateArr.pop()
                    event.target.value = cardDateArr.join("");
                }
            }

            document.querySelector(".card_date_input").addEventListener("keydown" , (e) => {
                if (e.key == "Backspace" && cardDateArr[cardDateArr.length - 1] == "/") {
                    cardDateArr.pop()
                    document.querySelector(".card_date_input").value = cardDateArr.join("");
                }
            })

            document.querySelector(".confirm_button").onclick = () => {
                if (document.querySelector(".card_name_input").value.length !== 0 && document.querySelector(".card_number_input").value.length == 19 && document.querySelector(".card_date_input").value.length == 5){
                    let date = new Date()
                    reportsArr = JSON.parse(localStorage.getItem("reportsArr"))
                    cardsArray = JSON.parse(localStorage.getItem("cardsArray"))


                    cardsArray.push(
                        {
                            cardId : Math.random().toString().substr(2, 6),
                            name : document.querySelector(".card_name_input").value,
                            number : document.querySelector(".card_number_input").value.toString(),
                            balance : 0, 
                            color: document.querySelector(".card_background_color").value,
                            balanceVisibility : true ,
                            date : document.querySelector(".card_date_input").value,
                        },
                    )

                    localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))

                    reportsArr.push({
                        cardNumber: cardsArray[cardsArray.length - 1].number,
                        date : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` ,
                        content : `Счёт с номером карты "${cardsArray[cardsArray.length - 1].number}" был успешно открыт!`,
                    })

                    localStorage.setItem("reportsArr" , JSON.stringify(reportsArr))
                    drawReports()

                    addCardBackgroundElem.classList.toggle("backdrop_el")
                    addCardBackgroundElem.classList.toggle("add_card_menu")
                    addCardBackgroundElem.remove()
                    drawCardInCardSection()
                    drawCards()
                    drawCardInPropertiesSection()
                    ShowCardMenu()
                    addCardsFunc()

                } else {
                    console.log("-");
                }
            }
        }
    }
}

export let ShowCardMenu = () => {
    cardsArray = JSON.parse(localStorage.getItem("cardsArray"))
    reportsArr = JSON.parse(localStorage.getItem("reportsArr"));
    let cards = document.querySelectorAll(".card_menu_trigger")
    for (let el of cards) {
        el.onclick = () => {
            let cardData = cardsArray.filter((i) => i.cardId == el.parentNode.getAttribute("data-cardId"))[0]

            function indexOfObj(){
                let i = 0; 
                for(let k of cardsArray){
                    if (k.cardId == cardData.cardId) {
                        return i;
                    } i++;
                }
                return false
            }

            let index = indexOfObj()

            let changeNameToggler = false
            let changeColorToggler = false

            let backdropEl = document.createElement("div")        
            backdropEl.classList.add("backdrop_el")
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
                        <div class="item">
                            <div class="img">
                                <svg width="33.338" height="19.098" viewBox="0 0 33.338 19.098"><g transform="translate(0 -0.321)"><g transform="translate(0 0.321)"><g><path d="M148.754,271.731a17.19,17.19,0,0,0-24.283,0L120,276.2l4.584,4.584a17.19,17.19,0,0,0,24.283,0l4.471-4.471Zm-.685,8.258a16.063,16.063,0,0,1-22.691,0l-3.786-3.787,3.676-3.674a16.065,16.065,0,0,1,22.691,0l3.786,3.787Zm0,0" transform="translate(-120 -266.71)" fill="#09BEEB"></path></g></g><path d="M141.2,273.851a3.947,3.947,0,0,0-3.943,3.943.563.563,0,0,0,1.127,0,2.818,2.818,0,0,1,2.816-2.816.564.564,0,0,0,0-1.128Zm0,0" transform="translate(-125.109 -268.503)" fill="#09BEEB"></path><path d="M140.578,269.851a7.321,7.321,0,1,0,7.323,7.32,7.328,7.328,0,0,0-7.323-7.32Zm0,13.515a6.194,6.194,0,1,1,6.2-6.195,6.2,6.2,0,0,1-6.2,6.195Zm0,0" transform="translate(-123.925 -267.319)" fill="#09BEEB"></path><ellipse cx="3" cy="2.5" rx="3" ry="2.5" transform="translate(14 7.779)" fill="#09BEEB"></ellipse></g></svg>
                            </div>
                            <span class="title_of_item">${cardData.number} <span style="margin-left: 20px">${cardData.date}</span></span>
                        </div>
                        <div class="change_name_div">
                            <div class="img">
                                <svg width="25.391" height="25.263" viewBox="0 0 25.391 25.263"><g transform="translate(17 43.189)"><g transform="translate(-17 -43.189)"><path d="M6.435,9.063A.632.632,0,0,0,5.8,9.7V15.31a1.9,1.9,0,0,1-1.9,1.9H-13.838a1.9,1.9,0,0,1-1.9-1.9V-1.169a1.9,1.9,0,0,1,1.9-1.9h5.615A.632.632,0,0,0-7.591-3.7a.632.632,0,0,0-.632-.632h-5.615A3.166,3.166,0,0,0-17-1.169V15.31a3.165,3.165,0,0,0,3.162,3.162H3.905A3.165,3.165,0,0,0,7.067,15.31V9.7a.632.632,0,0,0-.632-.632Zm0,0" transform="translate(17 6.791)" fill="#09BEEB"></path><path d="M108.024-42.356a2.845,2.845,0,0,0-4.024,0L92.718-31.074a.634.634,0,0,0-.162.278l-1.484,5.356a.632.632,0,0,0,.162.616.633.633,0,0,0,.616.162l5.356-1.484a.633.633,0,0,0,.279-.162l11.282-11.282a2.849,2.849,0,0,0,0-4.024ZM94.1-30.663l9.233-9.234,2.978,2.978-9.234,9.234ZM93.5-29.469,95.88-27.09l-3.291.912Zm14.371-9.014-.67.671-2.978-2.978.671-.671a1.581,1.581,0,0,1,2.235,0l.742.742a1.583,1.583,0,0,1,0,2.236Zm0,0" transform="translate(-84.207 43.189)" fill="#09BEEB"></path></g></g></svg>
                            </div>
                            <div class="change_name_wrap">                
                                <span class="title_of_item change_name_span">Редактирование названия</span>
                                <div class="name_input_wrapper">
                                    <input class="change_name_input" value="${cardData.name}">
                                    <button class="accept_button"><svg viewBox="0 0 512 512"><path fill="none" stroke="#09beeb" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"/></svg></button>
                                    <button class="cancel_button"><svg viewBox="0 0 512 512"><path fill="none" stroke="#fa686b" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg></button>
                                </div>
                            </div>
                        </div>
                        <div class="change_color_div">
                            <div class="img">
                                <svg width="25.391" height="25.263" viewBox="0 0 25.391 25.263"><g transform="translate(17 43.189)"><g transform="translate(-17 -43.189)"><path d="M6.435,9.063A.632.632,0,0,0,5.8,9.7V15.31a1.9,1.9,0,0,1-1.9,1.9H-13.838a1.9,1.9,0,0,1-1.9-1.9V-1.169a1.9,1.9,0,0,1,1.9-1.9h5.615A.632.632,0,0,0-7.591-3.7a.632.632,0,0,0-.632-.632h-5.615A3.166,3.166,0,0,0-17-1.169V15.31a3.165,3.165,0,0,0,3.162,3.162H3.905A3.165,3.165,0,0,0,7.067,15.31V9.7a.632.632,0,0,0-.632-.632Zm0,0" transform="translate(17 6.791)" fill="#09BEEB"></path><path d="M108.024-42.356a2.845,2.845,0,0,0-4.024,0L92.718-31.074a.634.634,0,0,0-.162.278l-1.484,5.356a.632.632,0,0,0,.162.616.633.633,0,0,0,.616.162l5.356-1.484a.633.633,0,0,0,.279-.162l11.282-11.282a2.849,2.849,0,0,0,0-4.024ZM94.1-30.663l9.233-9.234,2.978,2.978-9.234,9.234ZM93.5-29.469,95.88-27.09l-3.291.912Zm14.371-9.014-.67.671-2.978-2.978.671-.671a1.581,1.581,0,0,1,2.235,0l.742.742a1.583,1.583,0,0,1,0,2.236Zm0,0" transform="translate(-84.207 43.189)" fill="#09BEEB"></path></g></g></svg>
                            </div>
                            <div class="change_color_wrap">                
                                <span class="title_of_item change_color_span">Редактирование цвета карты</span>
                                <div class="color_input_wrapper">
                                    <input type="color" class="change_color_input" value="${cardData.color}">
                                    <button class="color_accept_button"><svg viewBox="0 0 512 512"><path fill="none" stroke="#09beeb" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M416 128L192 384l-96-96"/></svg></button>
                                    <button class="color_cancel_button"><svg viewBox="0 0 512 512"><path fill="none" stroke="#fa686b" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368"/></svg></button>
                                </div>
                            </div>
                        </div>
                        <div class="reports_item">
                            <div class="img">
                                <svg width="28px" height="28px" viewBox="0 0 512 512" class="card-report"><path d="M505.418,34.829c-1.288,-1.529 -3.131,-2.484 -5.123,-2.654l-111.428,-9.517L386.847,6.6c-0.52,-4.131 -4.299,-7.059 -8.42,-6.54L275.06,13.056c-0.407,-0.106 -0.824,-0.186 -1.258,-0.223L131.726,0.697c-4.091,-0.36 -7.805,2.786 -8.153,6.869l-2.118,24.8L11.406,46.202c-4.072,0.512 -7.051,4.345 -6.54,8.42L61.04,501.43c0.255,2.038 -0.182,3.996 0.651,5.967c1.168,2.761 3.948,4.604 6.947,4.604h369.909c4.165,0 7.539,-3.374 7.539,-7.539v-9.819l14.601,1.247c4.091,0.355 7.805,-2.784 8.153,-6.869L507.163,40.33C507.334,38.337 506.707,36.359 505.418,34.829zM61.099,381.023L20.768,60.221l40.331,-5.07V381.023zM137.955,16.362l65.98,5.635l-67.182,8.447L137.955,16.362zM372.828,15.961l3.852,30.637H129.129L372.828,15.961zM454.459,480.225l-8.373,-0.715V259.195c0,-4.164 -3.374,-7.539 -7.539,-7.539s-7.539,3.374 -7.539,7.539v237.727H76.177V61.676h354.832v162.338c0,4.165 3.374,7.539 7.539,7.539s7.539,-3.374 7.539,-7.539V54.137c0,-4.164 -3.374,-7.539 -7.539,-7.539h-46.671l-1.087,-8.643l100.709,8.602L454.459,480.225z"></path><path d="M398.34,86.806h-40.208c-2.521,0 -4.875,1.259 -6.272,3.357l-17.064,25.596c-18.367,-13.157 -40.854,-20.912 -65.12,-20.912c-4.164,0 -7.539,3.374 -7.539,7.539v104.54c0,4.164 3.374,7.539 7.539,7.539h104.54c4.165,0 7.539,-3.374 7.539,-7.539c0,-32.097 -13.566,-61.081 -35.26,-81.533l15.673,-23.509h36.173c4.164,0 7.539,-3.374 7.539,-7.539S402.504,86.806 398.34,86.806zM366.387,199.387h-89.172v-89.172c18.283,1.412 35.15,7.932 49.206,18.107l-6.727,10.091c-2.101,3.15 -1.485,7.513 1.417,9.95c3.398,2.854 8.669,2.101 11.128,-1.586l5.757,-8.636C354.025,154.063 364.543,175.527 366.387,199.387z"></path><path d="M398.34,336.092h-68.195l-12.016,-19.225c19.465,-20.17 31.459,-47.598 31.459,-77.775c0,-4.165 -3.374,-7.539 -7.539,-7.539h-97.001v-97.001c0,-4.164 -3.375,-7.539 -7.539,-7.539c-61.8,0 -112.079,50.279 -112.079,112.079c0,61.8 50.279,112.079 112.079,112.079c26.123,0 50.185,-8.984 69.264,-24.023l12.8,20.48c1.378,2.204 3.794,3.543 6.393,3.543h72.374c4.164,0 7.539,-3.374 7.539,-7.539S402.504,336.092 398.34,336.092zM292.153,275.304c-2.206,-3.533 -6.859,-4.605 -10.389,-2.398c-3.531,2.206 -4.605,6.858 -2.398,10.389l19.364,30.982c-16.709,13.631 -38.026,21.817 -61.22,21.817c-53.486,0 -97.001,-43.515 -97.001,-97.001c0,-50.95 39.485,-92.851 89.462,-96.711v96.711c0,4.164 3.375,7.539 7.539,7.539h96.711c-1.684,21.801 -10.608,41.604 -24.362,57.004L292.153,275.304z"></path><path d="M173.177,376.3h-64.332c-4.163,0 -7.539,3.374 -7.539,7.539s3.375,7.539 7.539,7.539h64.332c4.164,0 7.539,-3.374 7.539,-7.539S177.341,376.3 173.177,376.3z"></path><path d="M269.676,376.3h-64.332c-4.164,0 -7.539,3.374 -7.539,7.539s3.375,7.539 7.539,7.539h64.332c4.164,0 7.539,-3.374 7.539,-7.539S273.84,376.3 269.676,376.3z"></path><path d="M213.385,416.508h-104.54c-4.163,0 -7.539,3.374 -7.539,7.539c0,4.165 3.375,7.539 7.539,7.539h104.54c4.164,0 7.539,-3.374 7.539,-7.539C220.924,419.882 217.548,416.508 213.385,416.508z"></path><path d="M269.676,416.508h-24.125c-4.163,0 -7.539,3.374 -7.539,7.539c0,4.165 3.375,7.539 7.539,7.539h24.125c4.164,0 7.539,-3.374 7.539,-7.539C277.214,419.882 273.84,416.508 269.676,416.508z"></path><path d="M141.011,456.715h-32.166c-4.163,0 -7.539,3.374 -7.539,7.539s3.375,7.539 7.539,7.539h32.166c4.164,0 7.539,-3.374 7.539,-7.539S145.175,456.715 141.011,456.715z"></path><path d="M269.676,456.715h-96.498c-4.163,0 -7.539,3.374 -7.539,7.539s3.375,7.539 7.539,7.539h96.498c4.164,0 7.539,-3.374 7.539,-7.539S273.84,456.715 269.676,456.715z"></path></svg>
                            </div>
                            <span class="report_trans">Отчёт по карте</span>
                        </div>
                        <div class="services_item">
                            <div class="img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="25px" version="1.1" viewBox="0 0 2200 1700"><path fill="#09BEEB" d="M2066 1684l-1904 0c-59,0 -106,-47 -106,-105l0 -1191c0,-58 47,-105 106,-105l505 0c94,-147 259,-245 447,-245 188,0 353,98 447,245l505 0c59,0 106,47 106,105l0 1191c0,58 -47,105 -106,105zm-1940 -946l490 0c-20,-55 -31,-113 -31,-175 0,-12 1,-23 1,-35l-460 0 0 210zm36 -385c-20,0 -36,16 -36,35l0 70 470 0c7,-36 18,-72 33,-105l-467 0zm952 -245c-253,0 -459,204 -459,455 0,251 206,455 459,455 253,0 459,-204 459,-455 0,-251 -206,-455 -459,-455zm988 280c0,-19 -16,-35 -36,-35l-467 0c15,33 26,69 33,105l470 0 0 -70zm0 140l-460 0c0,12 1,23 1,35 0,62 -11,120 -31,175l490 0 0 -210zm0 281l-521 0c-88,166 -264,279 -467,279 -203,0 -379,-113 -467,-279l-521 0 0 770c0,19 16,35 36,35l1904 0c20,0 36,-16 36,-35l0 -770zm-282 700c-47,0 -92,-18 -124,-50 -33,32 -77,50 -123,50 -98,0 -177,-79 -177,-175 0,-97 79,-176 177,-176 46,0 90,19 123,51 32,-32 77,-51 124,-51 97,0 176,79 176,176 0,96 -79,175 -176,175zm0 -280c-38,0 -73,20 -92,52 -7,12 -19,19 -32,18 -13,0 -25,-7 -31,-18 -20,-32 -55,-52 -92,-52 -58,0 -106,47 -106,105 0,58 48,105 106,105 37,0 72,-20 92,-53 6,-11 17,-17 29,-17 0,0 1,0 1,0 12,0 27,6 33,17 19,33 54,53 92,53 58,0 106,-47 106,-105 0,-58 -48,-105 -106,-105zm-600 210l-353 0c-20,0 -35,-16 -35,-35l0 -140c0,-20 15,-35 35,-35l353 0c19,0 35,15 35,35l0 140c0,19 -16,35 -35,35zm-35 -140l-282 0 0 70 282 0 0 -70zm-530 140l-353 0c-19,0 -35,-16 -35,-35l0 -140c0,-20 16,-35 35,-35l353 0c20,0 36,15 36,35l0 140c0,19 -16,35 -36,35zm-35 -140l-282 0 0 70 282 0 0 -70zm836 -851l-423 420c-7,7 -16,11 -25,11 -9,0 -18,-4 -25,-11l-211 -210c-14,-14 -14,-36 0,-50l105 -105c14,-13 37,-13 50,0l81 80 293 -290c13,-13 36,-13 50,0l105 105c14,14 14,36 0,50zm-131 -81l-292 291c-14,14 -36,14 -50,0l-80 -80 -57 55 162 161 374 -371 -57 -56z"></path></svg>
                            </div>
                            <span class="title_of_item">Оплата услуг</span>
                        </div>
                        <div class="translation_item">
                            <div class="img">
                                <svg style="transform: scale(1.35)" width="28px" height="37px" viewBox="0 0 45 40"> <g transform="translate(0)"><g><g transform="translate(0 22.378)"> <g transform="translate(3.128 0.001)"> <g> <g> <g> <path d="M569.247,1720.927a.633.633,0,0,1-.085-.005,17.3,17.3,0,0,1-15.017-17.294.706.706,0,1,1,1.411,0,15.865,15.865,0,0,0,13.774,15.864.721.721,0,0,1-.083,1.435Z" transform="translate(-554.145 -1702.908)" fill="#09BEEB "></path> </g> </g> </g> </g> <g> <g> <g> <g> <path d="M537.92,1708.725a.694.694,0,0,1-.415-.138.73.73,0,0,1-.155-1.006l3.125-4.379a.706.706,0,0,1,.461-.288.69.69,0,0,1,.525.129l4.291,3.191a.731.731,0,0,1,.155,1.007.7.7,0,0,1-.986.158l-3.721-2.767-2.709,3.8A.7.7,0,0,1,537.92,1708.725Z" transform="translate(-537.215 -1702.904)" fill="#09BEEB "></path> </g> </g> </g> </g> </g> <g transform="translate(27.642)"> <g> <g> <g> <g> <path d="M671.4,1629.79a.713.713,0,0,1-.705-.72,15.872,15.872,0,0,0-13.774-15.866.72.72,0,0,1,.168-1.43,17.3,17.3,0,0,1,15.017,17.3A.713.713,0,0,1,671.4,1629.79Z" transform="translate(-656.302 -1611.769)" fill="#09BEEB "></path> </g> </g> </g> </g> <g transform="translate(10.108 12.203)"> <g> <g> <g> <path d="M716.013,1682.3a.694.694,0,0,1-.415-.138l-4.29-3.191a.73.73,0,0,1-.155-1.006.7.7,0,0,1,.986-.158l3.72,2.768,2.711-3.8a.7.7,0,0,1,.985-.158.729.729,0,0,1,.154,1.006L716.584,1682A.7.7,0,0,1,716.013,1682.3Z" transform="translate(-711.019 -1676.483)" fill="#09BEEB "></path> </g> </g> </g> </g> </g> <g transform="translate(27.377 4.489)"> <g> <g> <g> <path d="M663.221,1642.085a.7.7,0,0,1-.579-.308,11.361,11.361,0,0,0-5.2-4.188,10.919,10.919,0,0,0-2-.587.719.719,0,0,1-.562-.841.709.709,0,0,1,.824-.574,12.3,12.3,0,0,1,2.248.661,12.774,12.774,0,0,1,5.844,4.706.729.729,0,0,1-.176,1A.691.691,0,0,1,663.221,1642.085Z" transform="translate(-654.87 -1635.575)" fill="#09BEEB "></path> </g> </g> </g> </g> <g transform="translate(9.879 29.121)"> <g transform="translate(0 0)"> <g> <g> <path d="M599.042,1745.174a.716.716,0,0,1-.133-.013,12.653,12.653,0,0,1-2.244-.658,12.812,12.812,0,0,1-5.847-4.708.729.729,0,0,1,.176-1,.7.7,0,0,1,.982.179,11.394,11.394,0,0,0,5.2,4.189,11.146,11.146,0,0,0,1.995.585.72.72,0,0,1,.561.843A.71.71,0,0,1,599.042,1745.174Z" transform="translate(-590.691 -1738.664)" fill="#09BEEB "></path> </g> </g> </g> </g> </g> </g> <g transform="translate(12.136 12.707)"> <g> <g> <g> <g> <path d="M548.825,619.332H530.268a2.554,2.554,0,0,1-2.525-2.577V605.5a2.555,2.555,0,0,1,2.525-2.578h18.557a2.555,2.555,0,0,1,2.525,2.578v11.256A2.554,2.554,0,0,1,548.825,619.332ZM530.268,603.9a1.587,1.587,0,0,0-1.568,1.6v11.256a1.586,1.586,0,0,0,1.568,1.6h18.557a1.585,1.585,0,0,0,1.567-1.6V605.5a1.586,1.586,0,0,0-1.567-1.6Z" transform="translate(-527.743 -602.921)" fill="#09BEEB "></path> </g> </g> </g> </g> <g transform="translate(15.33 9.326)"> <g transform="translate(0 0)"> <g> <g> <path d="M654.636,680.059h-3.784a.87.87,0,0,1-.86-.878v-2.529a.87.87,0,0,1,.86-.879h3.784a.87.87,0,0,1,.859.879v2.529A.87.87,0,0,1,654.636,680.059Zm-3.687-.978h3.589v-2.331H650.95Z" transform="translate(-649.992 -675.773)" fill="#09BEEB "></path> </g> </g> </g> </g> <g transform="translate(2.627 8.569)"> <g> <g> <g> <path d="M558.336,670.837h-9.164a.489.489,0,0,1,0-.978h9.164a.489.489,0,0,1,0,.978Z" transform="translate(-548.693 -669.859)" fill="#09BEEB "></path> </g> </g> </g> </g> <g transform="translate(2.627 10.757)"> <g> <g> <g> <path d="M556.35,687.932h-7.178a.489.489,0,0,1,0-.978h7.178a.489.489,0,0,1,0,.978Z" transform="translate(-548.693 -686.954)" fill="#09BEEB "></path> </g> </g> </g> </g> <g transform="translate(0 3.15)"> <g transform="translate(0 0)"> <g> <g> <path d="M550.871,631.4H528.222a.484.484,0,0,1-.479-.489v-2.9a.484.484,0,0,1,.479-.489h22.649a.484.484,0,0,1,.479.489v2.9A.484.484,0,0,1,550.871,631.4Zm-22.17-.978h21.692V628.5H528.7Z" transform="translate(-527.743 -627.526)" fill="#09BEEB"></path> </g> </g> </g> </g> </g></svg>
                            </div>
                            <span class="title_of_item">Переводы</span>
                        </div>
                    </div>
                    <div class="close_card">
                        <div class="wrap">                    
                            <div class="img"><svg width="39" height="36" viewBox="0 0 39 36"><defs><clipPath><rect width="39" height="36" transform="translate(0.144 0)" fill="#fa686b"></rect></clipPath></defs><g transform="translate(70.462 78.189)"><g transform="translate(-70.437 -78.189)"><g transform="translate(-0.168)" clip-path="url(#clip-path)"><path d="M-37.778-78.189h-29.68A4.548,4.548,0,0,0-72-73.646v18.928a4.548,4.548,0,0,0,4.543,4.543h10.32l.757.757-2.829,2.829a.757.757,0,0,0,0,1.071l2.692,2.692a.757.757,0,0,0,1.071,0l2.829-2.829,2.829,2.829a.755.755,0,0,0,.536.222.755.755,0,0,0,.535-.222l2.692-2.692a.757.757,0,0,0,0-1.071l-2.829-2.829.757-.757h10.32a4.548,4.548,0,0,0,4.543-4.543V-73.646a4.548,4.548,0,0,0-4.543-4.543ZM-70.486-56.232v-3.029h35.737v3.029Zm19.405,1.514-1.537,1.537-1.537-1.537ZM-70.486-73.646a3.032,3.032,0,0,1,3.029-3.029h29.68a3.032,3.032,0,0,1,3.029,3.029v12.871H-70.486Zm3.029,21.957a3.032,3.032,0,0,1-3.029-3.029H-57.81l-1.4,1.4a.757.757,0,0,0,0,1.071l.558.558Zm17,2.807,2.83,2.83-1.621,1.621-2.83-2.829a.755.755,0,0,0-.535-.222.755.755,0,0,0-.535.222l-2.83,2.829L-57.6-46.053l2.83-2.83a.757.757,0,0,0,0-1.071l-2.83-2.83,1.621-1.621,2.83,2.83a.757.757,0,0,0,1.071,0l2.83-2.83,1.621,1.621-2.83,2.83a.757.757,0,0,0,0,1.071Zm12.683-2.807h-8.806l.558-.558a.757.757,0,0,0,0-1.071l-1.4-1.4h12.675a3.032,3.032,0,0,1-3.029,3.029Zm0,0" transform="translate(72.189 78.189)" fill="#fa686b"></path></g></g><path d="M298,21.811" transform="translate(-338.759 -91.489)" fill="#fa686b"></path><path d="M358,11.811" transform="translate(-393.653 -82.34)" fill="#fa686b"></path><path d="M358,61.811" transform="translate(-393.653 -128.085)" fill="#fa686b"></path></g></svg></div>
                            <span>Закрыть кошелёк</span>
                        </div>
                    </div>
                </div>
            `

            document.querySelector(".close_menu_div").onclick = () => {
                backdropEl.classList.toggle("backdrop_el")
                backdropEl.remove()
                drawCardInCardSection()
                drawCardInPropertiesSection()
                drawCards()
                addCardsFunc()
                ShowCardMenu()
            }

            document.querySelector(".close_menu_svg").onclick = () => {
                backdropEl.classList.toggle("backdrop_el")
                backdropEl.remove()
                drawCardInCardSection()
                drawCards()
                drawCardInPropertiesSection()
                addCardsFunc()
            }

            document.querySelector(".change_name_div").onclick = () => {
                if (changeNameToggler == false && document.querySelector(".name_input_wrapper").getAttribute("class") == "name_input_wrapper") {
                    document.querySelector(".name_input_wrapper").classList.add("active")
                    document.querySelector(".change_name_div").classList.add("active")
                    changeNameToggler = false
                } else {
                    changeNameToggler = false
                }
            }

            document.querySelector(".cancel_button").onclick = () => {
                document.querySelector(".name_input_wrapper").classList.remove("active")
                document.querySelector(".change_name_div").classList.remove("active")
                changeNameToggler = true
            }

            document.querySelector(".accept_button").onclick = () => {
                let previosName = cardsArray[index].name

                cardsArray[index].name = document.querySelector(".change_name_input").value

                let date = new Date()

                reportsArr.push({
                    cardNumber: cardsArray[index].number,
                    date : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` ,
                    content : `На счету с номером карты "${cardsArray[index].number}" было измененено название с "${previosName}" на "${cardsArray[index].name}"`,
                })

                localStorage.setItem("reportsArr" , JSON.stringify(reportsArr))
                reportsArr = JSON.parse(localStorage.getItem("reportsArr"));
                drawReports()

                localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))
                document.querySelector(".name_of_card").innerHTML = document.querySelector(".change_name_input").value
                drawCardInCardSection()
                drawCards()
                drawCardInPropertiesSection()
                addCardsFunc()
                ShowCardMenu()
            }

            document.querySelector(".change_color_div").onclick = () => {
                if (changeColorToggler == false && document.querySelector(".color_input_wrapper").getAttribute("class") == "color_input_wrapper") {
                    document.querySelector(".color_input_wrapper").classList.add("active")
                    document.querySelector(".change_color_div").classList.add("active")
                    changeColorToggler = false
                } else {
                    changeColorToggler = false
                }
            }

            document.querySelector(".color_cancel_button").onclick = () => {
                document.querySelector(".color_input_wrapper").classList.remove("active")
                document.querySelector(".change_color_div").classList.remove("active")
                changeColorToggler = true
            }
    
            document.querySelector(".color_accept_button").onclick = () => {
                let previosColor = cardsArray[index].color
                let date = new Date()
                cardsArray[index].color = document.querySelector(".change_color_input").value

                reportsArr.push({
                    cardNumber: cardsArray[index].number,
                    date : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` ,
                    content : `На счету с номером карты "${cardsArray[index].number}" был изменён цвет с "${previosColor}" на "${cardsArray[index].color}"`,
                })

                localStorage.setItem("reportsArr" , JSON.stringify(reportsArr))
                reportsArr = JSON.parse(localStorage.getItem("reportsArr"));
                drawReports()

                localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))
                drawCards()
                drawCardInCardSection()
                drawCardInPropertiesSection()
                ShowCardMenu()
                addCardsFunc()
            }

            document.querySelector(".close_card").onclick = () => {
                backdropEl.classList.toggle("backdrop_el")
                backdropEl.remove()
                cardsArray.splice(index , 1)
                localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))
                drawCards()
                drawCardInCardSection()
                drawCardInPropertiesSection()
                addCardsFunc()
                ShowCardMenu()
            }

            let navBarElements = document.querySelectorAll(".nav_elem")
            let navElem;
            let sectionClass;

            document.querySelector(".services_item").onclick = () => {
                backdropEl.classList.toggle("backdrop_el")
                backdropEl.remove()

                let currentSectionClass = () => {
                    for (let i of document.querySelectorAll(".nav_elem")) {
                        if (i.getAttribute("isActive") == "true" && i.classList.length <=2) {
                            return (i.getAttribute("sectionClass"));
                        }
                    }
                }

                sectionClass = currentSectionClass()

                let currentNavElem = () => {
                    for (let i of document.querySelectorAll(".nav_elem")) {
                        if (i.getAttribute("isActive") == "true" && i.classList.length <=2) {
                            return (i);
                        }
                    }
                }

                navElem = currentNavElem();

                document.querySelector(".services").setAttribute("class" , "services");
                document.querySelector(`.${sectionClass}`).setAttribute("class" , `${sectionClass} disabled`);

                navElem.setAttribute("isActive" , "false");
                navElem.setAttribute("class" , "nav_elem");
                navBarElements[1].setAttribute("isActive" , "true");
                navBarElements[1].setAttribute("class" , "nav_elem active");

                document.title = "Оплата услуг";
                localStorage.setItem("latestTitle" , JSON.stringify("Оплата услуг"))
                navBarUpdateFunc()

                drawCardInCardSection()
                drawCards()
                drawCardInPropertiesSection()
                addCardsFunc()
                ShowCardMenu()
            }

            document.querySelector(".translation_item").onclick = () => {
                backdropEl.classList.toggle("backdrop_el")
                backdropEl.remove()

                let currentSectionClass = () => {
                    for (let i of document.querySelectorAll(".nav_elem")) {
                        if (i.getAttribute("isActive") == "true" && i.classList.length <=2) {
                            return (i.getAttribute("sectionClass"));
                        }
                    }
                }

                sectionClass = currentSectionClass()

                let currentNavElem = () => {
                    for (let i of document.querySelectorAll(".nav_elem")) {
                        if (i.getAttribute("isActive") == "true" && i.classList.length <=2) {
                            return (i);
                        }
                    }
                }

                navElem = currentNavElem();

                document.querySelector(".translations").setAttribute("class" , "translations");
                document.querySelector(`.${sectionClass}`).setAttribute("class" , `${sectionClass} disabled`);

                navElem.setAttribute("isActive" , "false");
                navElem.setAttribute("class" , "nav_elem");
                navBarElements[2].setAttribute("isActive" , "true");
                navBarElements[2].setAttribute("class" , "nav_elem active");

                document.title = "Переводы";
                localStorage.setItem("latestTitle" , JSON.stringify("Переводы"))
                navBarUpdateFunc()

                drawCardInCardSection()
                drawCards()
                drawCardInPropertiesSection()
                addCardsFunc()
                ShowCardMenu()
            }
            document.querySelector(".reports_item").onclick = () => {
                backdropEl.classList.toggle("backdrop_el")
                backdropEl.remove()

                let currentSectionClass = () => {
                    for (let i of document.querySelectorAll(".nav_elem")) {
                        if (i.getAttribute("isActive") == "true" && i.classList.length <=2) {
                            return (i.getAttribute("sectionClass"));
                        }
                    }
                }

                sectionClass = currentSectionClass()

                let currentNavElem = () => {
                    for (let i of document.querySelectorAll(".nav_elem")) {
                        if (i.getAttribute("isActive") == "true" && i.classList.length <=2) {
                            return (i);
                        }
                    }
                }

                navElem = currentNavElem();

                document.querySelector(".reports").setAttribute("class" , "reports");
                document.querySelector(`.${sectionClass}`).setAttribute("class" , `${sectionClass} disabled`);

                navElem.setAttribute("isActive" , "false");
                navElem.setAttribute("class" , "nav_elem");
                navBarElements[4].setAttribute("isActive" , "true");
                navBarElements[4].setAttribute("class" , "nav_elem active");

                document.title = "Отчёты";
                localStorage.setItem("latestTitle" , JSON.stringify("Отчёты"))
                navBarUpdateFunc()

                drawCardInCardSection()
                drawCards()
                drawCardInPropertiesSection()
                addCardsFunc()
                ShowCardMenu()
            }
        }
    }
} 


export let drawCardInCardSection = () => {
    addCardsFunc()
    ShowCardMenu()
    document.querySelector(".card_wrap").innerHTML = `
    <div class="add_card_large card_add_trigger">
        <span>+ Добавить карту</span>
    </div>
    `

    if (JSON.parse(localStorage.getItem("cardsArray")).length != 0 || JSON.parse(localStorage.getItem("cardsArray")) != null) {
        for (let el of JSON.parse(localStorage.getItem("cardsArray"))) {
            let card = document.createElement("div")
            card.classList.add("card_large")
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

            document.querySelector(".card_wrap").append(card)
            document.querySelector(".add_card_large").style.order = cardsArray.length + 1;

            cardsArray = JSON.parse(localStorage.getItem("cardsArray"))

            card.childNodes[5].onclick = () => {
                for (let l of cardsArray ) {
                    if (card.childNodes[5].getAttribute("cardId") == l.cardId) {
                        l.balanceVisibility = !l.balanceVisibility
                        localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))
                        drawCardInCardSection()
                        drawCardInPropertiesSection()
                        drawCards()
                    }
                }
            }

            let cardMenuTrigger = document.createElement("div");
            cardMenuTrigger.classList.add("large_trigger")
            cardMenuTrigger.classList.add("card_menu_trigger")
            cardMenuTrigger.style.cssText = `
                position : absolute;
                transform : translateY(-16px) translateX(-15px);
                width : ${(document.querySelector(".card_large").offsetWidth)}px;
                height : ${(document.querySelector(".card_large").offsetHeight)}px;
                z-index : 2;
            `
            card.append(cardMenuTrigger)
        }
    } else {
        document.querySelector(".card_wrap").innerHTML = `
        <div class="add_card_large card_add_trigger">
            <span>+ Добавить карту</span>
        </div>
        `
    }
} 




drawCardInCardSection()
window.addEventListener('resize', () => {
    drawCardInCardSection() 
})

