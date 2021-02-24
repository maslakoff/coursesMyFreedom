import { sections } from "./model";
import './styles/main.scss';
import { Application } from './classes/app'

const app = new Application('#cv');
app.render(sections);