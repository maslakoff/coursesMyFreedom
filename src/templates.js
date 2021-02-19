
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

export const templates = {
   title: title,
   text: text,
   columns: columns,
   image: image,
};