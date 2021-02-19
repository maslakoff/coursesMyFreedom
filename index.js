
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

function row(content) {
    return `<section class="row">${content}</section>`;
}

function col(content) {
    return `<div class="col-sm">${content}</div>`;
}

function title(section) {
    return row(col(`<h2>${section.value}</h2>`));
}

function text(section) {
    return row(col(`<p>${section.value}</p>`));
}

function columns(section) {
    const html = section.value.map(
        item => {
            return col(`<p>${item}</p>`)
        }
    );

    return row(html.join(''));
}