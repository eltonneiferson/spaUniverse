export default class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event){
        event = event || window.event
        event.preventDefault()
    
        window.history.pushState({}, "", event.target.href)
    
        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes['/error']
    
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#container').innerHTML = html
        })
    }
}