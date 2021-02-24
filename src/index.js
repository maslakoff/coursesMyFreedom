import { sections } from "./model";
import './styles/main.css';

const $content = document.querySelector('#cv');

/**
 * Шаг 4
 * Расскоментировать новую реализацию рендера секций
 * Код выше можно удалить
 */
sections.forEach(section => {
    $content.insertAdjacentHTML('beforeend', section.toHTML())
})