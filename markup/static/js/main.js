'use strict';

import Swiper, { Navigation, EffectFade, Parallax, Thumbs} from 'swiper';

Swiper.use([Navigation, EffectFade, Parallax, Thumbs]);

import { sliders, hamburger } from '../../components/header/header';

document.addEventListener('DOMContentLoaded', () => {
    sliders(Swiper);
    hamburger();
});
