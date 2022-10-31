import Router from './router.js'

const router = new Router()
const home = document.querySelector('nav a:nth-child(2)')
const universe = document.querySelector('nav a:nth-child(3)')
const exploration = document.querySelector('nav a:nth-child(4)')

router.add("/", "./pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")
router.add("/error", "/pages/error.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

home.classList.add('pageActive')

home.addEventListener('click', function(){
    home.classList.add('pageActive')
    universe.classList.remove('pageActive')
    exploration.classList.remove('pageActive')
})

universe.addEventListener('click', function(){
    universe.classList.add('pageActive')
    home.classList.remove('pageActive')
    exploration.classList.remove('pageActive')
})

exploration.addEventListener('click', function(){
    exploration.classList.add('pageActive')
    universe.classList.remove('pageActive')
    home.classList.remove('pageActive')
})