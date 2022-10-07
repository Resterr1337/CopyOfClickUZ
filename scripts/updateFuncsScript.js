import {ShowCardMenu} from "../scripts/cards.js"
import {drawCardInCardSection} from "../scripts/cards.js"
import {addCardsFunc} from "../scripts/cards.js"
import {drawReports} from "../scripts/reports.js"
import {drawCards} from "../scripts/main.js"
import {drawOptionsToInput} from "../scripts/translations.js"
import {drawCardInPropertiesSection} from "../scripts/cheatingSettings.js"
import {showCardCheatingMenu} from "../scripts/cheatingSettings.js"

document.querySelector("nav").onclick = () => {
    drawCards()
    drawCardInCardSection()
    addCardsFunc()
    ShowCardMenu()
    drawOptionsToInput()
    drawCardInPropertiesSection()
    showCardCheatingMenu()
    drawReports()

    for (let i of document.querySelectorAll(".card_menu_trigger")) {
        i.onclick = () => {
            showCardCheatingMenu()
            drawCards()
            drawCardInCardSection()
            addCardsFunc()
            ShowCardMenu()
            drawOptionsToInput()
            drawCardInPropertiesSection()
            drawReports()
        }
    }

    for (let i of document.querySelectorAll(".cheatingMenuTrigger")) {
        i.onclick = () => {
            showCardCheatingMenu()
            drawReports()
        }
    }
}