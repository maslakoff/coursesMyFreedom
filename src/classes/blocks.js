import { row, col } from "../templates.js"

export class Block {
    constructor(type, value, options) {
        this.type = type;
        this.value = value;
        this.options = options;
    }

    /**
     * Шаг 2
     * Раскомментировать метод toHTML у класса Block.
     * По умолчанию, этот метод будет возвращать ошибку.
     * Вам нужно переопределить этот метод в каждом классе потомке.
     */
    toHTML() {
        throw new Error('toHTML method was not implemented');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options);
    }

    /**
     * Шаг 3
     * Это пример переопределения toHTML
     * Перенесите сюда код из соответствующий ф-ции в template.js (ф-цию в templates.js можно убрать)
     * доступ к полю value можно получить с помощью this.value
     */
    toHTML() {
        return row(col(`<h2>${this.value}</h2>`));
    }

}

export class TextBlock extends Block {
    constructor(value, options) {
        super('text', value, options);
    }
    toHTML() {
        return row(col(`<p>${this.value}</p>`));
    }
}

/*
    @TODO шаг 1 - создать классы ColumnsBlock и ImageBlock
    добавить их в model.js
*/

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('columns', value, options);
    }
    toHTML() {
        const html = this.value.map(
            item => {
                return col(`<p>${item}</p>`)
            }
        );

        return row(html.join(''));
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super('image', value, options);
    }
    toHTML() {
        return row(col(`<img src="${this.value}" />`));
    }
}