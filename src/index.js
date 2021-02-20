import { sections } from "./model";
import { templates } from './templates'
import './styles/main.css';

const $content = document.querySelector('#cv');


sections.forEach(section => {
    const template = templates[section.type];
    const html = template(section);
    $content.insertAdjacentHTML('beforeend', html)
})

/**
 * Шаг 4
 * Расскоментировать новую реализацию рендера секций
 * Код выше можно удалить
 */
// sections.forEach(section => {
//     $content.insertAdjacentHTML('beforeend', section.toHTML())
// })