let navBarElements = document.querySelectorAll(".nav_elem")
let sections = document.getElementsByTagName("section");
let currentSectionClass;
let activatedEl

// Сохранение последнего класса секшона
export let saveLatetestClass = (lastClass) => {
    localStorage.setItem("latestSection" , JSON.stringify(lastClass))
}

export let saveLatetestTitle = (latestTitle) => {
    localStorage.setItem("latestTitle" , JSON.stringify(latestTitle))
}

// Обновление классов навбара
export function navBarUpdateFunc() {
    for (let i of navBarElements) {
        i.onclick = () => {
            for (let el of navBarElements) {
                el.setAttribute("isActive" , "false")
                el.setAttribute("class" , "nav_elem")
            }

            if (i.getAttribute("isActive") == "false") {
                i.setAttribute("isActive" , "true")
                i.classList.toggle("active")
                currentSectionClass = (i.getAttribute("sectionClass").split(" ")[0])
                saveLatetestClass(i.getAttribute("sectionClass"))
                activatedEl = i;

                if (activatedEl.childNodes[3].textContent == "Главная") {
                    document.title = "CLICK"
                    saveLatetestTitle("CLICK")
                } else {
                    document.title = activatedEl.childNodes[3].textContent
                    saveLatetestTitle(activatedEl.childNodes[3].textContent)
                }

                for (let l of sections) {
                    l.classList.remove("disabled")
                    if (l.getAttribute("class").split(" ")[0] !== currentSectionClass) {
                        l.classList.add("disabled")
                    } else {
                        l.setAttribute("class" , l.getAttribute("class").split(" ")[0])
                    }
                }
            }
        }
    }
}

navBarUpdateFunc()


