import HelloWorldButton from './components/hello-world-button/hello-world-button';
import addImage from './add-image';
import Heading from './components/heading/heading';

const helloWorldButton = new HelloWorldButton();
const heading = new Heading();
helloWorldButton.render();
heading.render();

// addImage();

if (process.env.NODE_ENV === 'production') {
    console.log('production');
} else if (process.env.NODE_ENV) {
    console.log('development');
}
