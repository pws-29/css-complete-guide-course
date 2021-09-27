// PLANS MODAL OPEN AND CLOSE

const modal = document.querySelector('.modal')
const backdrop = document.querySelector('.backdrop')
const selectPlanButtons = Array.from(document.querySelectorAll('.plan button'));
const negativeButton = document.querySelector('.modal__action--negative')

function modalOpen() {
  if (modal) {
    modal.style.display = 'block' // only runs if we got a modal
  }
  backdrop.style.display = 'block'
}

function modalClose() {
  if (modal) {
    modal.style.display = 'none' // only runs if we got a modal
  }
  backdrop.style.display = 'none'
}

selectPlanButtons.map(button => {
  button.addEventListener('click', modalOpen)
})

backdrop.addEventListener('click', modalClose)
if (negativeButton) { // we just have this button on main page
  negativeButton.addEventListener('click', modalClose)
}

// PLANS MODAL OPEN AND CLOSE

// SIDE NAV BAR OPEN / CLOSE

const button = document.querySelector('.toggle-button')
const sideNav = document.querySelector('.mobile-nav')

function sideBarClose() {
  sideNav.classList.remove("open")
  backdrop.style.display = 'none' // two options for changing style
}

function sideBarOpen() {
  sideNav.classList.add("open")
  backdrop.style.display = 'block' // two options for changing style
}

button.addEventListener('click', sideBarOpen)
backdrop.addEventListener('click', sideBarClose)

// SIDE NAV BAR OPEN / CLOSE