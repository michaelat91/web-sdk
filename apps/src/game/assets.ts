export default {
	bgBase: {
		type: 'sprite',
		src: new URL('../../assets/sprites/background/bg_base.png', import.meta.url).href,
		preload: true,
	},
	bgFreespin: {
		type: 'sprite',
		src: new URL('../../assets/sprites/background/bg_freespin.png', import.meta.url).href,
		preload: true,
	},
	'h1.png': {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/h1.png', import.meta.url).href,
	},
	'h2.png': {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/h2.png', import.meta.url).href,
	},
	'h3.png': {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/h3.png', import.meta.url).href,
	},
	'h4.png': {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/h4.png', import.meta.url).href,
	},
	'h5.png': {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/h5.png', import.meta.url).href,
	},
	'l1.png': {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/l1.png', import.meta.url).href,
	},
	'l2.png': {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/l2.png', import.meta.url).href,
	},
	'l3.png': {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/l3.png', import.meta.url).href,
	},
	'l4.png': {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/l4.png', import.meta.url).href,
	},
	'w.png': {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/w.png', import.meta.url).href,
	},
	's.png': {
		type: 'sprite',
		src: new URL('../../assets/sprites/symbolsStatic/s.png', import.meta.url).href,
	},
	sound: {
		type: 'audio',
		src: new URL('../../assets/audio/sounds.json', import.meta.url).href,
		preload: true,
	},
} as const;
