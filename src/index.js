import { sections, links } from "./model";
import './styles/main.scss';
import { Application } from './classes/app';
import { Navbar } from './classes/navbar';

const app = new Application('#cv');
app.render(sections);

const navbar = new Navbar('#navbar');
navbar.render(links);
