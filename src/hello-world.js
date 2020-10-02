import './index.scss';
import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
helloWorldButton.render();
heading.render('hello world');

// addImage();

if (process.env.NODE_ENV === 'production') {
    console.log('production');
} else if (process.env.NODE_ENV) {
    console.log('development');
}
