var tabs = document.querySelectorAll('nav a')
var contentPara = document.querySelector('.content')

// tabs.forEach((tab) => tab.addEventListener('click', makeActive))
document.addEventListener('click', makeActive)

function makeActive(event) {
  if (!event.target.matches('a')) return // NEW
  console.log(event.target)
  makeInactive()
  event.target.classList.add('active')

  if (event.target.href.includes('cuisines')) {
    contentPara.innerHTML = data.cuisines
  } else if (event.target.href.includes('chefs')) {
    contentPara.innerHTML = data.chefs
  } else if (event.target.href.includes('reviews')) {
    contentPara.innerHTML = data.reviews
  } else if (event.target.href.includes('delivery')) {
    contentPara.innerHTML = data.delivery
  }
  event.preventDefault()
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove('active'))
}

contentPara.innerHTML = data.cuisines
