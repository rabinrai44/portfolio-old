
import MobiMenu from './modules/MobiMenu';
import RevealOnScroll from './modules/RevealonScroll';
import $ from 'jquery';


var mobileMenu        = new MobiMenu();
new RevealOnScroll($(".service"), "75%");
new RevealOnScroll($(".reveal-item--wow"), "85%");
new RevealOnScroll($(".p-item"), "70%");
