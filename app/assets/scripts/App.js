
import MobiMenu from './modules/MobiMenu';
import RevealOnScroll from './modules/RevealonScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';


var mobileMenu        = new MobiMenu();
new RevealOnScroll($(".service"), "75%");
new RevealOnScroll($(".reveal-item--wow"), "85%");
new RevealOnScroll($(".p-item"), "70%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
