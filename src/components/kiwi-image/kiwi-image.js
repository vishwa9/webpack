import Kiwi from './Kiwi.jpg';
import './Kiwi-image.scss';

class KiwiImage {
    render() {
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'Kiwi';
        img.classList.add('Kiwi-image');
        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default KiwiImage;