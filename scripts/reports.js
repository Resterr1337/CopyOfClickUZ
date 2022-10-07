let reportsArr;

if (JSON.parse(localStorage.getItem("reportsArr")) == null) {
    localStorage.setItem("reportsArr" , "[]")
    reportsArr = JSON.parse(localStorage.getItem("reportsArr"));
} else {
    reportsArr = JSON.parse(localStorage.getItem("reportsArr"));
}

let drawOptionsToReportsSelect = () => {
    document.querySelector(".report_select_card").innerHTML = `
        <option value="false">Все логи</option>
    `
    if (JSON.parse(localStorage.getItem("cardsArray")) != null){
        for (let i of JSON.parse(localStorage.getItem("cardsArray"))) {
            let reportOption = document.createElement("option")
            reportOption.setAttribute("value" , `${i.number}`)
    
            reportOption.innerHTML = `${i.name}`
            document.querySelector(".report_select_card").append(reportOption)
    
            document.querySelector(".report_select_card").onchange = () => {
                drawReports()
                
            }
        }
    } else {
    }
}

drawOptionsToReportsSelect()
export let drawReports = () => {
    document.querySelector(".reports_wrapper").innerHTML = ``
    document.querySelector(".last_payments_text_wrapper").innerHTML = `
    <span class="history_trans">Последние действия</span>
    <div class="reports_wrapper_main"></div>
`
    if (JSON.parse(localStorage.getItem("reportsArr")).length != 0) {
        if (document.querySelector(".report_select_card").value == "false") {
        for (let i of JSON.parse(localStorage.getItem("reportsArr"))) {
                let report = document.createElement("div")
                report.classList.add("report")
                report.setAttribute("cardNumber" , i.cardNumber)

                report.innerHTML = `
                    <span class="report-content">${i.content}</span>
                    <span class="report-date">${i.date}</span>
                `

                let mainreport = document.createElement("div")
                mainreport.classList.add("report")
                mainreport.setAttribute("cardNumber" , i.cardNumber)

                mainreport.innerHTML = `
                    <span class="report-content">${i.content}</span>
                    <span class="report-date">${i.date}</span>
                `

                document.querySelector(".reports_wrapper").append(report)
                document.querySelector(".reports_wrapper_main").append(mainreport)
            }
        } else {
            for (let i of JSON.parse(localStorage.getItem("reportsArr"))) {
                if (i.cardNumber == document.querySelector(".report_select_card").value) {
                    let report = document.createElement("div")
                    report.classList.add("report")
                    report.setAttribute("cardNumber" , i.cardNumber)
    
                    report.innerHTML = `
                        <span class="report-content">${i.content}</span>
                        <span class="report-date">${i.date}</span>
                    `
    
                    document.querySelector(".reports_wrapper").append(report)
                }
            }
        }
    } else {
    }
}

drawReports()

document.querySelector(".clear_reports_button").onclick = () => {
    localStorage.setItem("reportsArr" , "[]")
    drawReports()
}
