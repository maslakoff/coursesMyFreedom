const links = [
    { href: '#hero', icon: 'bi-house-door', value: 'Home' },
    { href: '#about', icon: 'bi-person', value: 'About' },
    { href: '#resume', icon: 'bi-book', value: 'Resume' },
    { href: '#contacts', icon: 'bi-envelope-open', value: 'Contacts' },
];

const $navbar = document.querySelector('#navbar');
const $navbarUl = document.createElement('ul');
$navbar.append($navbarUl);

links.forEach(link => {
    let html = navigation(link);
    $navbarUl.insertAdjacentHTML('beforeend', html)
});

function navigation(link) {
    return `<li><a href="${link.href}" class="nav-link scrollto"><i class="bi ${link.icon}"></i> <span>${link.value}</span></a></li>`;
}