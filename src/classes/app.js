export class Application {
    constructor(selector) {
        this.$content = document.querySelector(selector);
    }

    render(sections) {
        sections.forEach(section => {
            this.$content.insertAdjacentHTML('beforeend', section.toHTML())
        })
    }
}