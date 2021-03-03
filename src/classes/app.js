export class Application {
    constructor(selector) {
        this.$content = document.querySelector(selector);
    }

    render(sections) {

        let mobileNavigation = document.createElement('i');
        mobileNavigation.className  = "bi bi-list mobile-nav-toggle";

        const onMobileNavigationClick = () => {
            document.body.classList.toggle('mobile-nav-active');
            mobileNavigation.classList.toggle('bi-list');
            mobileNavigation.classList.toggle('bi-x');
        }

        mobileNavigation.addEventListener('click', onMobileNavigationClick);
        this.$content.prepend(mobileNavigation);

        sections.forEach(section => {
            this.$content.insertAdjacentHTML('beforeend', section.toHTML())
        })
    }
}

