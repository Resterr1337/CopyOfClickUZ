import {drawCards} from "../scripts/main.js";
import {drawCardInCardSection} from "../scripts/cards.js";
import {drawReports} from "../scripts/reports.js"
let reportsArr = JSON.parse(localStorage.getItem("reportsArr"));
const itemsArray = document.querySelectorAll(".service");
const mobileOperatorsArray = document.querySelectorAll(".mobile_operator");
const internetPacketsArray = document.querySelectorAll(".internet_packet");
const creditsBanksArray = document.querySelectorAll(".credit_close_bank");
const hostingsItemArray = document.querySelectorAll(".hosting_item");

let favouritesArr;
if (JSON.parse(localStorage.getItem("favourites")) == null) {
    localStorage.setItem("favourites" , "[]")
    favouritesArr = JSON.parse(localStorage.getItem("favourites"));
} else {
    favouritesArr = JSON.parse(localStorage.getItem("favourites"));
}

let drawOptionsFunc = () => {
    let options = ``;
    for (let i of JSON.parse(localStorage.getItem("cardsArray"))) {
        options += `<option cardId="${i.cardId}">${i.name} <span>${i.cardId}</span></option>`;
    };
    return options;
};

for (let i of itemsArray) {
    i.onclick = () => {
        if (i.getAttribute("sectionModify") == "favourites") {
            document.querySelector(".service_title").innerHTML = `Избранное <span class="close_section">Закрыть<svg class="close_menu_svg" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg></span>`;
            document.querySelector(".close_section").onclick = () => {
                document.querySelector(".services").setAttribute("class" , `services`);
                document.querySelector(".service_title").innerHTML = "Оплата";
            };
        } else if (i.getAttribute("sectionModify") == "mobile_operators") {
            document.querySelector(".service_title").innerHTML = `Мобильные операторы <span class="close_section">Закрыть<svg class="close_menu_svg" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg></span>`;
            document.querySelector(".close_section").onclick = () => {
                document.querySelector(".services").setAttribute("class" , `services`);
                document.querySelector(".service_title").innerHTML = "Оплата";
            };

            for (let mobileOperator of mobileOperatorsArray) {
                mobileOperator.onclick = () => {
                    let backdropEl = document.createElement("div");
                    backdropEl.classList.add("backdrop_el");
                    backdropEl.classList.add("mobile_operators_menu");
                    document.querySelector("body").append(backdropEl);

                    backdropEl.innerHTML = `
                    <div class="close_menu_div">
                    </div>
                        <div class="wrapper">
                            <div class="close_menu">
                                <svg class="close_menu_img" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg>
                            </div>
                            <div class="menu_img_wrapper">
                                <img src="${mobileOperator.childNodes[1].childNodes[1].getAttribute("src")}">
                            </div>
                            <div class="menu_text_wrapper">
                                <span class="name_of_service">${mobileOperator.getAttribute("title")}</span>
                            </div>
                            <div class="menu_input_wrapper">
                                <div class="number_wrapper">                                
                                    <span>Номер телефона</span>
                                    <input class="number_input" value="+998">
                                </div>
                                <div class="payment_amount_wrapper">
                                    <span>Сумма</span>
                                    <input class="payment_amount" placeholder="Введите сумму оплаты">
                                </div>
                                <div class="card_selection_wrapper">
                                    <span>Выберите счёт</span>
                                    <select class="card_selection">
                                        <option hidden selected disabled>Выберите карту</option>
                                        ${drawOptionsFunc()}
                                    </select>
                                </div>
                            </div>
                            <div class="menu_button_wrapper">
                                <button class="confirm_button">Продолжить</button>
                            </div>
                        </div>
                    `;

                    document.querySelector(".close_menu_div").onclick = () => {
                        backdropEl.classList.toggle("backdrop_el");
                        backdropEl.remove();
                    };

                    document.querySelector(".add_to_favourite").onclick = () => {
                        favouritesArr = JSON.parse(localStorage.getItem("favourites"))
                        favouritesArr.push({
                            title : mobileOperator.getAttribute("title"),
                            img : mobileOperator.childNodes[1].childNodes[1].getAttribute("src"),
                            class : "mobile_operator"
                        })
                        localStorage.setItem("favourites" , JSON.stringify(favouritesArr))
                    }


                    document.querySelector(".close_menu_img").onclick = () => {
                        backdropEl.classList.toggle("backdrop_el");
                        backdropEl.remove();
                    };

                    let numberArr = [];
                    document.querySelector(".number_input").oninput = () =>{
                        if (numberArr.length >= 13 ){
                            document.querySelector(".number_input").value = numberArr.join("");
                        } else if (event.target.value[0] != "+") {
                            event.target.value = "+";
                        }

                        numberArr = [];

                        for (let i of event.target.value) {
                            if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9" || i == " " || i == "+" ) {
                                numberArr.push(i);
                                document.querySelector(".number_input").value = numberArr.join("");
                            }else {
                                document.querySelector(".number_input").value = numberArr.join("");
                            };
                        };

                        if (numberArr[numberArr.length - 1] == "+" && numberArr[0] == "+") {
                            numberArr.pop()
                            document.querySelector(".number_input").value = numberArr.join("");
                        };
                    };

                    document.querySelector(".number_input").addEventListener("keydown" , (e) => {
                        if (e.key == "Backspace" && numberArr.length >= 13) {
                            numberArr.pop()
                        }else if (e.key == "+") {
                            if (numberArr.length == 0) {
                                numberArr.push("+");
                                document.querySelector(".number_input").value = numberArr.join("");
                            }
                        };
                    })

                    let paymentAmountArr = [];
                    document.querySelector(".payment_amount").oninput = () => {
                        paymentAmountArr = [];
                        for (let i of event.target.value) {
                            if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9") {
                                paymentAmountArr.push(i);
                                document.querySelector(".payment_amount").value = paymentAmountArr.join("");
                            } else {
                                document.querySelector(".payment_amount").value = paymentAmountArr.join("");
                            }
                        };
                    };

                    document.querySelector(".card_selection").onchange = () => {
                        console.log(document.querySelector(".card_selection").value.split(" ")[document.querySelector(".card_selection").value.split(" ").length - 1]);
                    }

                    document.querySelector(".confirm_button").onclick = () => {
                        if (document.querySelector(".payment_amount").value != "0" && document.querySelector(".number_input").value.length >= 13 && document.querySelector(".payment_amount").length != 0 && document.querySelector(".card_selection").value != "Выберите карту") {
                            let cardsArray = JSON.parse(localStorage.getItem("cardsArray"))
                            for (let el of cardsArray) {
                                if (el.cardId == (document.querySelector(".card_selection").value.split(" ")[document.querySelector(".card_selection").value.split(" ").length - 1])) {
                                    if (el.balance >= document.querySelector(".payment_amount").value) {
                                        el.balance -= document.querySelector(".payment_amount").value;
                                        reportsArr = JSON.parse(localStorage.getItem("reportsArr"))
                                        localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))

                                        let date = new Date()
                                        reportsArr.push({
                                            cardNumber: el.number,
                                            date : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` ,
                                            content : `На счету с номером карты "${el.number}" было списано ${document.querySelector(".payment_amount").value} сум на оплату услуги "${mobileOperator.getAttribute("title")}"`
                                        })

                                        localStorage.setItem("reportsArr" , JSON.stringify(reportsArr))
                                        reportsArr = JSON.parse(localStorage.getItem("reportsArr"));

                                        drawReports()

                                        drawCards()
                                        drawCardInCardSection()
                                        backdropEl.classList.toggle("backdrop_el");
                                        backdropEl.remove();
                                    } else {
                                        alert(`На ${el.name} недостаточно ${document.querySelector(".payment_amount").value - el.balance} сум`);
                                    };
                                };
                            };
                        } else {
                            alert("Вы не заполнили одно из полей!");
                        };
                    };
                };
            };
        } else if (i.getAttribute("sectionModify") == "internet_packets") {
            document.querySelector(".service_title").innerHTML = `Интернет пакеты<span class="close_section">Закрыть<svg class="close_menu_svg" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg></span>`
            document.querySelector(".close_section").onclick = () => {
                document.querySelector(".services").setAttribute("class" , `services`);
                document.querySelector(".service_title").innerHTML = "Оплата";
            };

            for (let internetPacket of internetPacketsArray) {
                internetPacket.onclick = () => {
                    let backdropEl = document.createElement("div");
                    backdropEl.classList.add("backdrop_el");
                    backdropEl.classList.add("mobile_operators_menu");
                    document.querySelector("body").append(backdropEl);

                    backdropEl.innerHTML = `
                    <div class="close_menu_div">
                    </div>
                        <div class="wrapper">
                            <div class="close_menu">
                                <svg class="close_menu_img" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg>
                            </div>
                            <div class="menu_img_wrapper">
                                <img src="${internetPacket.childNodes[1].childNodes[1].getAttribute("src")}">
                            </div>
                            <div class="menu_text_wrapper">
                                <span class="name_of_service">${internetPacket.getAttribute("title")}</span>
                            </div>
                            <div class="menu_input_wrapper">
                                <div class="number_wrapper">                                
                                    <span>Номер телефона</span>
                                    <input class="number_input" value="+998">
                                </div>
                                <div class="payment_amount_wrapper">
                                    <span>Сумма</span>
                                    <input class="payment_amount" placeholder="Введите сумму оплаты">
                                </div>
                                <div class="card_selection_wrapper">
                                    <span>Выберите счёт</span>
                                    <select class="card_selection">
                                        <option hidden selected disabled>Выберите карту</option>
                                        ${drawOptionsFunc()}
                                    </select>
                                </div>
                            </div>
                            <div class="menu_button_wrapper">
                                <button class="confirm_button">Продолжить</button>
                            </div>
                        </div>
                    `;

                    document.querySelector(".close_menu_div").onclick = () => {
                        backdropEl.classList.toggle("backdrop_el");
                        backdropEl.remove();
                    };

                    document.querySelector(".close_menu_img").onclick = () => {
                        backdropEl.classList.toggle("backdrop_el");
                        backdropEl.remove();
                    };

                    let numberArr = [];
                    document.querySelector(".number_input").oninput = () =>{
                        if (numberArr.length >= 13 ){
                            document.querySelector(".number_input").value = numberArr.join("");
                        } else if (event.target.value[0] != "+") {
                            event.target.value = "+";
                        }

                        numberArr = [];

                        for (let i of event.target.value) {
                            if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9" || i == " " || i == "+" ) {
                                numberArr.push(i);
                                document.querySelector(".number_input").value = numberArr.join("");
                            }else {
                                document.querySelector(".number_input").value = numberArr.join("");
                            };
                        };

                        if (numberArr[numberArr.length - 1] == "+" && numberArr[0] == "+") {
                            numberArr.pop()
                            document.querySelector(".number_input").value = numberArr.join("");
                        };
                    };

                    document.querySelector(".number_input").addEventListener("keydown" , (e) => {
                        if (e.key == "Backspace" && numberArr.length >= 13) {
                            numberArr.pop()
                        }else if (e.key == "+") {
                            if (numberArr.length == 0) {
                                numberArr.push("+");
                                document.querySelector(".number_input").value = numberArr.join("");
                            }
                        };
                    })

                    let paymentAmountArr = [];
                    document.querySelector(".payment_amount").oninput = () => {
                        paymentAmountArr = [];
                        for (let i of event.target.value) {
                            if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9") {
                                paymentAmountArr.push(i);
                                document.querySelector(".payment_amount").value = paymentAmountArr.join("");
                            } else {
                                document.querySelector(".payment_amount").value = paymentAmountArr.join("");
                            }
                        };
                    };

                    document.querySelector(".card_selection").onchange = () => {
                        console.log(document.querySelector(".card_selection").value.split(" ")[document.querySelector(".card_selection").value.split(" ").length - 1]);
                    }

                    document.querySelector(".confirm_button").onclick = () => {
                        if (document.querySelector(".payment_amount").value != "0" && document.querySelector(".number_input").value.length >= 13 && document.querySelector(".payment_amount").length != 0 && document.querySelector(".card_selection").value != "Выберите карту") {
                            let cardsArray = JSON.parse(localStorage.getItem("cardsArray"))
                            for (let el of cardsArray) {
                                if (el.cardId == (document.querySelector(".card_selection").value.split(" ")[document.querySelector(".card_selection").value.split(" ").length - 1])) {
                                    if (el.balance >= document.querySelector(".payment_amount").value) {
                                        el.balance -= document.querySelector(".payment_amount").value;
                                        reportsArr = JSON.parse(localStorage.getItem("reportsArr"))
                                        localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))

                                        let date = new Date()
                                        reportsArr.push({
                                            cardNumber: el.number,
                                            date : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` ,
                                            content : `На счету с номером карты "${el.number}" было списано ${document.querySelector(".payment_amount").value} сум на оплату услуги "${internetPacket.getAttribute("title")}"`
                                        })

                                        localStorage.setItem("reportsArr" , JSON.stringify(reportsArr))
                                        reportsArr = JSON.parse(localStorage.getItem("reportsArr"));

                                        drawReports()

                                        drawCards()
                                        drawCardInCardSection()
                                        backdropEl.classList.toggle("backdrop_el");
                                        backdropEl.remove();
                                    } else {
                                        alert(`На ${el.name} недостаточно ${document.querySelector(".payment_amount").value - el.balance} сум`);
                                    };
                                };
                            };
                        } else {
                            alert("Вы не заполнили одно из полей!");
                        };
                    };
                };
            };
        } else if (i.getAttribute("sectionModify") == "credit_close"){
            document.querySelector(".service_title").innerHTML = `Погашение кредитов<span class="close_section">Закрыть<svg class="close_menu_svg" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg></span>`
            document.querySelector(".close_section").onclick = () => {
                document.querySelector(".services").setAttribute("class" , `services`);
                document.querySelector(".service_title").innerHTML = "Оплата";
            };

            for (let creditsBank of creditsBanksArray) {
                console.log(creditsBank);
                creditsBank.onclick = () => {
                    let backdropEl = document.createElement("div");
                    backdropEl.classList.add("backdrop_el");
                    backdropEl.classList.add("mobile_operators_menu");
                    document.querySelector("body").append(backdropEl);

                    backdropEl.innerHTML = `
                    <div class="close_menu_div">
                    </div>
                        <div class="wrapper">
                            <div class="close_menu">
                                <svg class="close_menu_img" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg>
                            </div>
                            <div class="menu_img_wrapper">
                                <img src="${creditsBank.childNodes[1].childNodes[1].getAttribute("src")}">
                            </div>
                            <div class="menu_text_wrapper">
                                <span class="name_of_service">${creditsBank.getAttribute("title")}</span>
                            </div>
                            <div class="menu_input_wrapper">
                                <div class="number_wrapper">                                
                                    <span>Номер лицевого счёта</span>
                                    <input class="number_input">
                                </div>
                                <div class="payment_amount_wrapper">
                                    <span>Сумма</span>
                                    <input class="payment_amount" placeholder="Введите сумму оплаты">
                                </div>
                                <div class="card_selection_wrapper">
                                    <span>Выберите счёт</span>
                                    <select class="card_selection">
                                        <option hidden selected disabled>Выберите карту</option>
                                        ${drawOptionsFunc()}
                                    </select>
                                </div>
                            </div>
                            <div class="menu_button_wrapper">
                                <button class="confirm_button">Продолжить</button>
                            </div>
                        </div>
                    `;

                    document.querySelector(".close_menu_div").onclick = () => {
                        backdropEl.classList.toggle("backdrop_el");
                        backdropEl.remove();
                    };

                    document.querySelector(".close_menu_img").onclick = () => {
                        backdropEl.classList.toggle("backdrop_el");
                        backdropEl.remove();
                    };

                    let numberArr = [];
                    document.querySelector(".number_input").oninput = () =>{
                        numberArr = [];
                        for (let i of event.target.value) {
                            if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9" || i == " " || i == "+" ) {
                                numberArr.push(i);
                                document.querySelector(".number_input").value = numberArr.join("");
                            }else {
                                document.querySelector(".number_input").value = numberArr.join("");
                            };
                        };
                    };

                    let paymentAmountArr = [];
                    document.querySelector(".payment_amount").oninput = () => {
                        paymentAmountArr = [];
                        for (let i of event.target.value) {
                            if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9") {
                                paymentAmountArr.push(i);
                                document.querySelector(".payment_amount").value = paymentAmountArr.join("");
                            } else {
                                document.querySelector(".payment_amount").value = paymentAmountArr.join("");
                            }
                        };
                    };

                    document.querySelector(".card_selection").onchange = () => {
                        console.log(document.querySelector(".card_selection").value.split(" ")[document.querySelector(".card_selection").value.split(" ").length - 1]);
                    }

                    document.querySelector(".confirm_button").onclick = () => {
                        if (document.querySelector(".payment_amount").value != "0" && document.querySelector(".payment_amount").length != 0 && document.querySelector(".card_selection").value != "Выберите карту") {
                            let cardsArray = JSON.parse(localStorage.getItem("cardsArray"))
                            for (let el of cardsArray) {
                                if (el.cardId == (document.querySelector(".card_selection").value.split(" ")[document.querySelector(".card_selection").value.split(" ").length - 1])) {
                                    if (el.balance >= document.querySelector(".payment_amount").value) {
                                        el.balance -= document.querySelector(".payment_amount").value;
                                        reportsArr = JSON.parse(localStorage.getItem("reportsArr"))
                                        localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))

                                        let date = new Date()
                                        reportsArr.push({
                                            cardNumber: el.number,
                                            date : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` ,
                                            content : `На счету с номером карты "${el.number}" было списано ${document.querySelector(".payment_amount").value} сум на оплату услуги "${creditsBank.getAttribute("title")}"`
                                        })

                                        localStorage.setItem("reportsArr" , JSON.stringify(reportsArr))
                                        reportsArr = JSON.parse(localStorage.getItem("reportsArr"));

                                        drawReports()

                                        drawCards()
                                        drawCardInCardSection()
                                        backdropEl.classList.toggle("backdrop_el");
                                        backdropEl.remove();
                                    } else {
                                        alert(`На ${el.name} недостаточно ${document.querySelector(".payment_amount").value - el.balance} сум`);
                                    };
                                };
                            };
                        } else {
                            alert("Вы не заполнили одно из полей!");
                        };
                    };
                };
            };
        } else if (i.getAttribute("sectionModify") == "сommunal_payments") {
            document.querySelector(".service_title").innerHTML = `Оплата коммунальны услуг<span class="close_section">Закрыть<svg class="close_menu_svg" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg></span>`
            document.querySelector(".close_section").onclick = () => {
                document.querySelector(".services").setAttribute("class" , `services`);
                document.querySelector(".service_title").innerHTML = "Оплата";
            }

            
        } else if (i.getAttribute("sectionModify") == "hostings") {
            document.querySelector(".service_title").innerHTML = `Оплата хостинга или домена<span class="close_section">Закрыть<svg class="close_menu_svg" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg></span>`
            document.querySelector(".close_section").onclick = () => {
                document.querySelector(".services").setAttribute("class" , `services`);
                document.querySelector(".service_title").innerHTML = "Оплата";
            }

            for (let hostingItem of hostingsItemArray) {
                hostingItem.onclick = () => {
                    let backdropEl = document.createElement("div");
                    backdropEl.classList.add("backdrop_el");
                    backdropEl.classList.add("mobile_operators_menu");
                    document.querySelector("body").append(backdropEl);

                    backdropEl.innerHTML = `
                    <div class="close_menu_div">
                    </div>
                        <div class="wrapper">
                            <div class="close_menu">
                                <svg class="close_menu_img" width="13.438" height="13.438" viewBox="0 0 13.438 13.438"><path d="M12.983,2.649,8.912,6.721l4.072,4.072a1.55,1.55,0,1,1-2.192,2.193L6.719,8.913,2.647,12.985A1.55,1.55,0,0,1,.454,10.792L4.526,6.72.454,2.649A1.55,1.55,0,0,1,2.646.456L6.719,4.528,10.791.456a1.551,1.551,0,0,1,2.193,2.193Z" transform="translate(0 -0.002)" fill="#fff"></path></svg>
                            </div>
                            <div class="menu_img_wrapper">
                                <img src="${hostingItem.childNodes[1].childNodes[1].getAttribute("src")}">
                            </div>
                            <div class="menu_text_wrapper">
                                <span class="name_of_service">${hostingItem.getAttribute("title")}</span>
                            </div>
                            <div class="menu_input_wrapper">
                                <div class="number_wrapper">                                
                                    <span>Номер ID аккаунта</span>
                                    <input placeholder="Введите ID аккаунта" class="number_input">
                                </div>
                                <div class="payment_amount_wrapper">
                                    <span>Сумма</span>
                                    <input class="payment_amount" placeholder="Введите сумму оплаты">
                                </div>
                                <div class="card_selection_wrapper">
                                    <span>Выберите счёт</span>
                                    <select class="card_selection">
                                        <option hidden selected disabled>Выберите карту</option>
                                        ${drawOptionsFunc()}
                                    </select>
                                </div>
                            </div>
                            <div class="menu_button_wrapper">
                                <button class="confirm_button">Продолжить</button>
                            </div>
                        </div>
                    `;

                    document.querySelector(".close_menu_div").onclick = () => {
                        backdropEl.classList.toggle("backdrop_el");
                        backdropEl.remove();
                    };


                    document.querySelector(".close_menu_img").onclick = () => {
                        backdropEl.classList.toggle("backdrop_el");
                        backdropEl.remove();
                    };

                    let numberArr = [];
                    document.querySelector(".number_input").oninput = () =>{
                        numberArr = [];
                        for (let i of event.target.value) {
                            if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9" || i == " " || i == "+" ) {
                                numberArr.push(i);
                                document.querySelector(".number_input").value = numberArr.join("");
                            }else {
                                document.querySelector(".number_input").value = numberArr.join("");
                            };
                        };
                    };

                    let paymentAmountArr = [];
                    document.querySelector(".payment_amount").oninput = () => {
                        paymentAmountArr = [];
                        for (let i of event.target.value) {
                            if (i == "0" || i == "1" || i == "2" || i == "3" || i == "4" || i == "5" || i == "6" || i == "7" || i == "8" || i == "9") {
                                paymentAmountArr.push(i);
                                document.querySelector(".payment_amount").value = paymentAmountArr.join("");
                            } else {
                                document.querySelector(".payment_amount").value = paymentAmountArr.join("");
                            }
                        };
                    };

                    document.querySelector(".card_selection").onchange = () => {
                        console.log(document.querySelector(".card_selection").value.split(" ")[document.querySelector(".card_selection").value.split(" ").length - 1]);
                    }

                    document.querySelector(".confirm_button").onclick = () => {
                        if (document.querySelector(".payment_amount").value != "0" && document.querySelector(".payment_amount").length != 0 && document.querySelector(".card_selection").value != "Выберите карту") {
                            let cardsArray = JSON.parse(localStorage.getItem("cardsArray"))
                            for (let el of cardsArray) {
                                if (el.cardId == (document.querySelector(".card_selection").value.split(" ")[document.querySelector(".card_selection").value.split(" ").length - 1])) {
                                    if (el.balance >= document.querySelector(".payment_amount").value) {
                                        el.balance -= document.querySelector(".payment_amount").value;
                                        reportsArr = JSON.parse(localStorage.getItem("reportsArr"))
                                        localStorage.setItem("cardsArray" , JSON.stringify(cardsArray))

                                        let date = new Date()
                                        reportsArr.push({
                                            cardNumber: el.number,
                                            date : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` ,
                                            content : `На счету с номером карты "${el.number}" было списано ${document.querySelector(".payment_amount").value} сум на оплату услуги "${hostingItem.getAttribute("title")}"`
                                        })

                                        localStorage.setItem("reportsArr" , JSON.stringify(reportsArr))
                                        reportsArr = JSON.parse(localStorage.getItem("reportsArr"));

                                        drawReports()

                                        drawCards()
                                        drawCardInCardSection()
                                        backdropEl.classList.toggle("backdrop_el");
                                        backdropEl.remove();
                                    } else {
                                        alert(`На ${el.name} недостаточно ${document.querySelector(".payment_amount").value - el.balance} сум`);
                                    };
                                };
                            };
                        } else {
                            alert("Вы не заполнили одно из полей!");
                        };
                    };
                };
            };
        }
        document.querySelector(".services").setAttribute("class" , `services ${i.getAttribute("sectionModify")}`);
    };
};
