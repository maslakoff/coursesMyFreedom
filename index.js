
const loremText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia excepturi commodi impedit, possimus nulla vitae et ex. Quam nisi minima cum natus rem esse voluptatum laborum eveniet sequi. Quo, quibusdam.';
const sections = [
    { type: 'title', value: 'Hello world!' },
   { type: 'text', value: loremText },
   { type: 'columns', value: [ loremText, loremText, loremText ] }
];

const $content = document.querySelector('#cv');

sections.forEach(section => {
    let html = '';

    if (section.type === 'title') {
        html = `
            <section class="row">
                <div class="col-sm">
                    <h2>${section.value}</h2>
                </div>
            </section>
        `;
    } else if (section.type === 'text') {
        html = `
        <section class="row">
            <div class="col-sm">
                <p>${section.value}</p>
            </div>
        </section>
        `;
    } else if (section.type === 'columns') {

    }

    $content.insertAdjacentHTML('beforeend', html)
})