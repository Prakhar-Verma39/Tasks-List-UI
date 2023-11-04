/* ------navbar function ------ */
// add or remove active class on click from panel-left-options

const navOption = document.getElementsByClassName("nav-option")
const navOptionArray = Object.values(navOption)
// console.log(navOptionArray);
navOptionArray.map((option) => {
    option.addEventListener("click", (e) => {
    // console.log(e.target)
        e.target.classList.add("active")

        // first filter the click element and then remove the active class from other elements
        navOptionArray.filter((inactive) => (inactive !== e.target && inactive.classList.remove("active")));
})});


/* ----- toggle view ------ */

const views = document.getElementsByClassName("view")
const viewsArray = Object.values(views)
viewsArray.map((view) => {
    view.addEventListener("click", (e) => {
        // console.log(e.target)
        e.target.classList.add("active")

        // first filter the click element and then remove the active class from other elements
        viewsArray.filter((inactive) => (inactive !== e.target && inactive.classList.remove("active")));
    })
});


/* ---- toggle select table entry ---- */ 

function toggleSelect(e) {

    const cs = e.parentNode.classList;
    if (cs.contains("selected"))
    {cs.remove("selected")}
    else { cs.add("selected") }
};

/* ---- to pre-select boxes ---- */

window.onload = function () {
    const rows = document.getElementsByClassName("row")
    const rowsArray = Object.values(rows);
    rowsArray.forEach((e, i) => {
        if (i % 2 === 0)
        e.classList.add("selected")
    })
};