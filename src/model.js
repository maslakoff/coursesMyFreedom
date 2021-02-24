import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks';
import image from './assets/profile.jpg';

const loremText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia excepturi commodi impedit, possimus nulla vitae et ex. Quam nisi minima cum natus rem esse voluptatum laborum eveniet sequi. Quo, quibusdam.';

export const sections = [
    new TitleBlock('Hello world!'),
    new TextBlock(loremText),
    new ColumnsBlock([loremText, loremText, loremText]),
    new ImageBlock(image),
];