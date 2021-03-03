export class Application {
    constructor(selector) {
        this.$content = document.querySelector(selector);
    }

    render(sections) {

        this.initializeMobileNavigation();
        this.renderSections(sections);
        
        this.initializeScrollToTop()
    }

    initializeMobileNavigation() {
        let mobileNavigation = document.createElement('i');
        mobileNavigation.className  = "bi bi-list mobile-nav-toggle";

        const onMobileNavigationClick = () => {
            document.body.classList.toggle('mobile-nav-active');
            mobileNavigation.classList.toggle('bi-list');
            mobileNavigation.classList.toggle('bi-x');
        }


        mobileNavigation.addEventListener('click', onMobileNavigationClick);
        this.$content.prepend(mobileNavigation);

    }

    renderSections(sections) {
        sections.forEach(section => {
            this.$content.insertAdjacentHTML('beforeend', section.toHTML())
        })
    }

    initializeScrollToTop() {

        // const srollToTop = () => {
        //     window.scrollTo({
        //         top: 0,
        //         behavior: 'smooth'
        //     })
        // }

        // querySelector
       //  scrollY > 100
       // toogle active
       // i click -> scrollToTop

        window.addEventListener('load', () => {
            console.log('loaded')
        })

        document.addEventListener('scroll', () => {
            console.log(`scroll: ${window.scrollY}`)
        })
    }
}

