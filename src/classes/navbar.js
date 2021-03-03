export class Navbar {
    constructor(selector) {
        this.$navbar= document.querySelector(selector);     
    }

    //
    render(links) {
        const $navbarUl = document.createElement('ul');
        this.$navbar.append($navbarUl);
        links.forEach(link => {
            $navbarUl.insertAdjacentHTML('beforeend', link.toHtml())
        });
    }
}



// links.forEach(link => {
//     let html = navigation(link);
//     $navbarUl.insertAdjacentHTML('beforeend', html)
// });

// function navigation(link) {
//     return `<li><a href="${link.href}" class="nav-link scrollto"><i class="bi ${link.icon}"></i> <span>${link.value}</span></a></li>`;
// }