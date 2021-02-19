
const loremText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia excepturi commodi impedit, possimus nulla vitae et ex. Quam nisi minima cum natus rem esse voluptatum laborum eveniet sequi. Quo, quibusdam.';
const sections = [
    { type: 'title', value: 'Hello world!' },
    { type: 'text', value: loremText },
    { type: 'columns', value: [ loremText, loremText, loremText ] },
    { type: 'image', value: './assets/profile.jpg'}
];

const $content = document.querySelector('#cv');

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

function image(section) {
    return row(col(`<img src="${section.value}" />`));
} 

const templates = {
   title: title,
   text: text,
   columns: columns,
   image: image,
};

sections.forEach(section => {
    const template = templates[section.type];
    const html = template(section);
    $content.insertAdjacentHTML('beforeend', html)
})