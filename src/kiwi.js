import './index.scss';
import Heading from './components/heading/heading';
import KiwiImage from './components/kiwi-image/kiwi-image';

const heading = new Heading();
heading.render('kiwi');

const kiwiImage = new KiwiImage();
kiwiImage.render();