'use strict';


scrollSpy('nav', {
    sectionSelector: '[data-scroll-block]',
    targetSelector: '.nav_scrollspy a',
    offset: 400,
    activeClass: 'active',
});

scrollSpy('.modal_menu__list', {
    sectionSelector: '[data-scroll-block]',
    targetSelector: '.nav_scrollspy a',
    offset: 400,
    activeClass: 'active',
});

// const section = document.querySelectorAll('[data-scroll-block]');

// const sections = {};
// let i = 0;

// Array.prototype.forEach.call(section, (e) => {
// 	sections[e.id] = e.offsetTop;
// });

// window.addEventListener('scroll', () => {
// 	let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

// 	for (i in sections) {
// 		if(sections[i] <= scrollPosition) {
// 			console.log(sections)
// 			sections[i].querySelector('.active').setAttribute('class', '');

// 			document.querySelector(`a[href*=${i}`).setAttribute('class', 'active');


// 		}
// 	}
// });


const anim_sect = document.querySelectorAll('.animate-sect');

ScrollReveal().reveal(anim_sect, {
	easing: 'ease-in',
	duration: 500,
	reset: true,
	mobile: false,
    // useDelay: 'once'
	// distance: 0
	// scale: 0.85
});

 const onScrollHeader = () => {

 	const header = document.querySelector('.header');

 	let currentScroll;

 	window.addEventListener('scroll', () => {

 		currentScroll = window.pageYOffset;

 		if (currentScroll > 160) {
 			header.classList.add('header-fixed');
 		}
 		if (currentScroll < 160) {
 			header.classList.remove('header-fixed');
 		}

 	});

 }

onScrollHeader();

// const header_nav_item = document.querySelectorAll('.header__top_nav a');

// header_nav_item.forEach(e => {
// 	e.addEventListener('click', function(event) {
// 		event.preventDefault();

// 		const li = e.parentNode;

// 		for (let item of li.parentNode.children) {
// 			item.classList.remove('active');
// 		}

// 		li.classList.add('active');
// 	});
// });

 document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);
		const header_top_height = document.querySelector('.header__top').clientHeight;
        let topOffset = 0;
        const elementPosition = scrollTarget.getBoundingClientRect().top;

		// if(window.matchMedia('(max-width: 1200px)').matches === true) {
			topOffset = header_top_height;
		// }
        const offsetPosition = elementPosition - topOffset;

		// if(modal_menu.classList.contains('active')) {
		// 	modal_menu.classList.remove('active');
		// 	button_header_burger.classList.remove('active');
		// }

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

const tab_section = document.querySelector('.tab_info');
const tab_nav_item = document.querySelectorAll('.tab_info__right a');
const tab_item = document.querySelectorAll('.tab_info__item');

tab_nav_item.forEach((e, i) => {

	if(window.matchMedia('(min-width: 1050px)').matches === true) {
		e.addEventListener('mouseover', function(event) {
			event.preventDefault();

			const image = e.getAttribute('data-image');
			const li = e.parentNode;

			tab_section.setAttribute('style', `background-image: url(${image})`);

			for (let item of li.parentNode.children) {
				item.querySelector('a').classList.remove('active');
			}

			e.classList.add('active');


			for (let item of tab_item[i].parentNode.children) {
				item.classList.remove('active');
			}

			tab_item[i].classList.add('active');

		})
	} else {
		e.addEventListener('click', function(event) {
			event.preventDefault();

			const image = e.getAttribute('data-image');
			const li = e.parentNode;

			tab_section.setAttribute('style', `background-image: url(${image})`);

			for (let item of li.parentNode.children) {
				item.querySelector('a').classList.remove('active');
			}

			e.classList.add('active');


			for (let item of tab_item[i].parentNode.children) {
				item.classList.remove('active');
			}

			tab_item[i].classList.add('active');

		})
	}

	
})

const layouts_tab_btn = document.querySelectorAll('#sect-tab-layouts .item');
const layouts_tab_wrap = document.querySelectorAll('.layouts_tab_wrap');

if(layouts_tab_btn) {
	layouts_tab_btn.forEach((e, i) => {
		e.addEventListener('click', function(event) {
			event.preventDefault();
		
			for (let item of e.parentNode.children) {
				item.classList.remove('active');
			}

			e.classList.add('active');

			for (let item of layouts_tab_wrap[i].parentNode.children) {
				item.classList.remove('active');
			}

			layouts_tab_wrap[i].classList.add('active');
		});
	});
}

const gallery_tab_btn = document.querySelectorAll('#sect-tab-gallery .item');
const gallery_tab_wrap = document.querySelectorAll('.gallery_tab_wrap');

if(gallery_tab_btn) {
	gallery_tab_btn.forEach((e, i) => {
		e.addEventListener('click', function(event) {
			event.preventDefault();
		
			for (let item of e.parentNode.children) {
				item.classList.remove('active');
			}

			e.classList.add('active');

			for (let item of gallery_tab_wrap[i].parentNode.children) {
				item.classList.remove('active');
			}

			gallery_tab_wrap[i].classList.add('active');
		});
	});
}

// map items

const map_header_item = document.querySelectorAll('.map__top .item');
const map_wrap_item = document.querySelectorAll('.map__bottom_wrap .item');

if(map_header_item) {
	map_header_item.forEach((e, i) => {
		e.addEventListener('mouseover', function(event) {
			event.preventDefault();

			for (let item of map_wrap_item[i].parentNode.children) {
				item.classList.remove('active');
			}
			
			map_wrap_item[i].classList.add('active');
		})
	});
}

if(map_wrap_item) {
	map_wrap_item.forEach((e, i) => {
		e.addEventListener('mouseover', function(event) {
			event.preventDefault();

			for (let item of map_wrap_item[i].parentNode.children) {
				item.classList.remove('active');
			}
			
			map_wrap_item[i].classList.add('active');
		})
	});
}

const header_play = document.querySelectorAll('.header_play');
const gallery_play = document.querySelector('#gallery_play');

const modal = new tingle.modal({
	footer: false,
	stickyFooter: false,
	closeMethods: ['overlay', 'button', 'escape'],
	closeLabel: "Close",
	cssClass: ['custom-class-1', 'custom-class-2'],
	onOpen: function() {
		console.log('modal open');
	},
	onClose: function() {
		const yt_video = document.querySelector('.yt_video');
		yt_video.setAttribute('src', '');
	},
	beforeClose: function() {
		return true;
		return false;
	}
});

const modal_video_init = (id, element) => {
	element.setContent(`<iframe class="yt_video" width="100%" height="380" src="https://www.youtube.com/embed/${id}?autoplay=1&controls=0&showinfo=0&rel=0&vq=hd720?version=3&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay="1"></iframe>`);
	element.open();
}
if(header_play) {
	header_play.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault();

			const id = this.getAttribute('data-video');

			modal_video_init(id, modal);
		});
	});
}


gallery_play.addEventListener('click', function(event) {
	event.preventDefault();

	const id = this.getAttribute('data-video');

	modal_video_init(id, modal);
});

// popup

const modal_message = document.getElementById('modal_message');
const modal_success = document.getElementById('modal_success');
const modal_close = document.querySelectorAll('.modal_wrap__close');
const button_modal_message = document.querySelectorAll('.js_modal_message');

button_modal_message.forEach(e => {
	e.addEventListener('click', function(event) {
		event.preventDefault();

		modal_message.classList.add('active');
	});
});

if(modal_close) {
	modal_close.forEach(e => {
		e.addEventListener('click', function(event) {
			event.preventDefault();

			e.parentNode.parentNode.classList.remove('active');
		})
	})
}

// mobile elements

const quality_item = document.querySelectorAll('.quality__bottom_wrap .item');
const quality_item_mobile = document.querySelector('.quality__bottom_mobile');

quality_item.forEach(e => {
	e.addEventListener('click', function() {
		const title = this.querySelector('.item__title').innerHTML;
		const text = this.querySelector('.item__descr').innerHTML;

		const href = this.getAttribute('data-href');

		const scrollTarget = document.getElementById(href);
		const header_top_height = document.querySelector('.header__top').clientHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;

        const offsetPosition = elementPosition - header_top_height;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });

		for (let item of e.parentNode.children) {
			item.classList.remove('active');
		}

		e.classList.add('active');

		quality_item_mobile.querySelector('.title').innerHTML = title;
		quality_item_mobile.querySelector('.sect-text').innerHTML = text;
	});
});

const button_header_burger = document.querySelector('.header__top .burger');
const menu_mobile = document.getElementById('modal_menu');
const menu_mobile_close = document.querySelector('.modal_menu__close');
const menu_mobile_item = document.querySelectorAll('.modal_menu__list a');

button_header_burger.addEventListener('click', function() {
	menu_mobile.classList.add('active');
});

menu_mobile_close.addEventListener('click', function() {
	menu_mobile.classList.remove('active');
});

menu_mobile_item.forEach(e => {
	e.addEventListener('click', function() {
		menu_mobile.classList.remove('active');
	})
});

const mobile_wrap_layouts = document.querySelectorAll('.layouts_tab_wrap');
const mobile_sect_tab_button = document.querySelectorAll('.sect-tab-button .item');

mobile_wrap_layouts.forEach(e => {
	e.addEventListener('touchstart', handleTouchStart, false);
	e.addEventListener('touchmove', handleTouchMove, false);
});



let xDown = null;
let yDown = null;
	
function getTouches(evt) {
	return evt.touches || evt.originalEvent.touches;
}
	
function handleTouchStart(evt) {
	const firstTouch = getTouches(evt)[0];
	xDown = firstTouch.clientX;
	yDown = firstTouch.clientY;
}
	
function handleTouchMove(evt) {
	if ( ! xDown || ! yDown ) return;
	
	let xUp = evt.touches[0].clientX;
	let yUp = evt.touches[0].clientY;
		
	let xDiff = xDown - xUp;
	let yDiff = yDown - yUp;
		
	if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
		if ( xDiff < 0 ) {
			mobile_sect_tab_button[0].classList.add('active')
			mobile_sect_tab_button[1].classList.remove('active')

			mobile_wrap_layouts[0].classList.add('active')
			mobile_wrap_layouts[1].classList.remove('active')
		} else {
			mobile_sect_tab_button[0].classList.remove('active')
			mobile_sect_tab_button[1].classList.add('active')

			mobile_wrap_layouts[1].classList.add('active')
			mobile_wrap_layouts[0].classList.remove('active')
		}
	}

		xDown = null;
		yDown = null;
}


// form

const add_class_error = (element) => {
	element.parentNode.classList.add('error');
}

const remove_class_error = (element) => {
	element.parentNode.classList.remove('error');
}

const add_message_error = (element) => {
	let error_element = document.createElement('span');
	error_element.classList.add('error-message');
	error_element.innerHTML = 'Данные введены некорректно';

	if(element.parentNode.querySelector('.error-message') == null) {
		element.insertAdjacentElement('afterEnd', error_element);
	}
}

const remove_message_error = (element) => {
	if(element.nextSibling != null) {
		element.nextSibling.remove();
	}
}

const validateName = (element) => {
	element.addEventListener('keyup', function(event) {
		if(this.value.length < 3) {
			add_class_error(this);
			add_message_error(this);
		} else {
			remove_class_error(this);
			remove_message_error(this);
		}
	})
}

const validatePhone = (element) => {
	element.addEventListener('keyup', function(event) {
		if(this.value.indexOf('_') > -1) {
			add_class_error(this);
			add_message_error(this);
		} else {
			remove_class_error(this);
			remove_message_error(this);
		}
	});
}

const validateEmail = (element) => {
	element.addEventListener('keyup', function(event) {
		const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

		if(reg.test(this.value) == false) {
			add_class_error(this);
			add_message_error(this);
		} else {
			remove_class_error(this);
			remove_message_error(this);
		}
	});
}

const checkedName = (element) => {
	if(element.value.length < 3) {
		add_class_error(element);
		add_message_error(element);
	} else {
		remove_class_error(element);
		remove_message_error(element);
	}
}

const checkedPhone = (element) => {
	if(element.value.indexOf('_') > -1 || element.value == '') {
		add_class_error(element);
		add_message_error(element);
	} else {
		remove_class_error(element);
		remove_message_error(element);
	}
}

const checkedEmail = (element) => {
	const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	if(reg.test(element.value) == false) {
		add_class_error(element);
		add_message_error(element);
	} else {
		remove_class_error(element);
		remove_message_error(element);
	}
}



const js_form = document.querySelectorAll('.js_form');


if(js_form) {
	js_form.forEach(e => {
		const input_name = e.querySelector('.js_name');
		const input_phone = e.querySelector('.js_phone');
		const input_email = e.querySelector('.js_email');

		const button = e.querySelector('.button-accent');

		if(input_name) validateName(input_name);
		if(input_phone) validatePhone(input_phone);
		if(input_email) validateEmail(input_email);

		e.addEventListener('submit', function(event) {
			event.preventDefault();

			if(input_name) checkedName(input_name);
			if(input_phone) checkedPhone(input_phone);
			if(input_email) checkedEmail(input_email);
			

			if(e.querySelector('.error-message') == null) {

				e.querySelectorAll('input').forEach(input => input.value = "");
				modal_message.classList.remove('active');

				modal_success.classList.add('active');
			}

		});
	});
}

// mask

const mask_phone = document.querySelectorAll('.js_phone');

const im = new Inputmask("+7 (999) 999-99-99");
if(mask_phone) {
	mask_phone.forEach(e => {
		im.mask(e);
	});
}


// slider

const gallery_slider_1 = new Swiper('#gallery_slider_1', {
	// Optional parameters
	// loop: true,
	observer: true,
	observeParents: true,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '#gallery_slider_nav_1 .swiper-nav-next',
		prevEl: '#gallery_slider_nav_1 .swiper-nav-prev',
	},
});

const gallery_slider_2 = new Swiper('#gallery_slider_2', {
	// Optional parameters
	// loop: true,
	observer: true,
	observeParents: true,

	pagination: {
		el: '.swiper-pagination',
	},

	navigation: {
		nextEl: '#gallery_slider_nav_2 .swiper-nav-next',
		prevEl: '#gallery_slider_nav_2 .swiper-nav-prev',
	},
});