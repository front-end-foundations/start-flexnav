var tabs = document.querySelectorAll('nav a')
var contentPara = document.querySelector('.content')

tabs.forEach((tab) => tab.addEventListener('click', makeActive))

function makeActive(event) {
  makeInactive()
  event.target.classList.add('active')

  if (event.target.href.includes('cuisines')) {
    contentPara.innerHTML = cuisines
  } else if (event.target.href.includes('chefs')) {
    contentPara.innerHTML = chefs
  } else if (event.target.href.includes('reviews')) {
    contentPara.innerHTML = reviews
  } else if (event.target.href.includes('delivery')) {
    contentPara.innerHTML = delivery
  }

  event.preventDefault()
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'))
}

contentPara.innerHTML = cuisines
