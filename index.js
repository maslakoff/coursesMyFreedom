
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
        html = title(section);
    } else if (section.type === 'text') {
        html = text(section);
    } else if (section.type === 'columns') {
        html = columns(section);
    }

    $content.insertAdjacentHTML('beforeend', html)
})

function title(section) {
    return  `
    <section class="row">
        <div class="col-sm">
            <h2>${section.value}</h2>
        </div>
    </section>
`;
}

function text(section) {
    return `
    <section class="row">
        <div class="col-sm">
            <p>${section.value}</p>
        </div>
    </section>
    `;
}

function columns(section) {
    const html = section.value.map(
        item => {
            return `<div class="col-sm"><p>${item}</p></div>`
        }
    );

    return `
    <section class="row">
        ${html.join('')}
    </section>
    `;
}