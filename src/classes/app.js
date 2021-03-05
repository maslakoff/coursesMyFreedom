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

       const backToTop = document.createElement('i');
       backToTop.className = "back-to-top d-flex align-items-center justify-content-center bi bi-arrow-up-short";

       const showScroll = () => {
            if (window.scrollY > 100) {
                backToTop.classList.add("active");
            } else {
                backToTop.classList.remove("active");
            }
        };
       
       document.addEventListener('scroll', showScroll);
       

       const scrollToTop = () => {
           window.scrollTo({
               top: 0,
               behavior: 'smooth'
           })
       };

        backToTop.addEventListener("click", scrollToTop);

        this.$content.append(backToTop);
    }
}

