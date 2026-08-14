// Helper to expand compact reel strips into the full format
const r = (names: string[]) => names.map((name) => ({ name }));

// Basegame reel strips (5 reels, ~50 symbols each for good distribution)
const baseReel1 = r([
	'L1','H3','L2','L4','H5','L3','L1','L4','H4','L2','L3','L1','S','L4','L2',
	'H1','L3','L1','L4','L2','H3','L1','L3','L4','H5','L2','L1','L3','L4','L2',
	'H2','L1','L3','L2','L4','H4','L1','L3','L2','L4','H1','L1','W','L3','L2',
	'L4','H3','L1','L2','L3',
]);
const baseReel2 = r([
	'L2','H4','L1','L3','H1','L4','L2','L1','H5','L3','L4','L2','H3','L1','L3',
	'L4','L2','S','L1','L3','H2','L4','L2','L1','L3','H4','L4','L2','L1','L3',
	'H5','L4','L1','L2','L3','H1','L4','L2','L1','L3','W','L4','L2','H3','L1',
	'L3','L4','L2','L1','L3',
]);
const baseReel3 = r([
	'L3','H5','L1','L2','H3','L4','L3','L1','H2','L2','L4','L3','S','L1','L2',
	'H4','L3','L4','L1','L2','H1','L3','L4','L1','L2','H5','L3','L4','L1','L2',
	'H3','L3','L4','L1','L2','H4','L3','L4','L1','L2','W','L3','L4','L1','L2',
	'H2','L3','L4','L1','L2',
]);
const baseReel4 = r([
	'L4','H1','L2','L3','H4','L1','L4','L2','H3','L3','L1','L4','H5','L2','L3',
	'L1','L4','S','L2','L3','H2','L1','L4','L2','L3','H1','L1','L4','L2','L3',
	'H4','L1','L4','L2','L3','H5','L1','L4','L2','L3','W','L1','L4','H3','L2',
	'L3','L1','L4','L2','L3',
]);
const baseReel5 = r([
	'L1','H2','L3','L4','H5','L2','L1','L3','H4','L4','L2','L1','H3','L3','L4',
	'L2','L1','S','L3','L4','H1','L2','L1','L3','L4','H2','L2','L1','L3','L4',
	'H5','L2','L1','L3','L4','H4','L2','L1','L3','L4','W','L2','L1','H3','L3',
	'L4','L2','L1','L3','L4',
]);

// Freegame reel strips (wilds with multipliers, scatters on reels 2-4 only)
const freeReel1 = r([
	'L1','H1','L2','L4','H3','L3','L1','H5','L4','L2','H4','L3','L1','L4','L2',
	'H2','L3','L1','L4','L2','H1','L3','L1','L4','L2','H3','L3','L1','L4','L2',
	'H5','L3','L1','L4','L2','H4','L3','L1','W','L2','L4','H2','L3','L1','L2',
]);
const freeReel2 = r([
	'L2','H3','L1','L3','H5','L4','L2','H1','L1','L3','H4','L4','L2','S','L1',
	'H2','L3','L4','L2','L1','H3','L3','L4','L2','L1','H5','L3','L4','W','L1',
	'H1','L3','L4','L2','L1','H4','L3','L4','L2','W','L1','H2','L3','L4','L2',
]);
const freeReel3 = r([
	'L3','H2','L1','L2','H4','L4','L3','H5','L1','L2','H1','L4','L3','S','L1',
	'H3','L2','L4','L3','L1','H2','L2','L4','L3','L1','H4','L2','L4','W','L1',
	'H5','L2','L4','L3','L1','H1','L2','L4','W','L1','H3','L2','L4','L3','L2',
]);
const freeReel4 = r([
	'L4','H4','L2','L3','H1','L1','L4','H3','L2','L3','H5','L1','L4','S','L2',
	'H2','L3','L1','L4','L2','H4','L3','L1','L4','L2','H1','L3','L1','W','L2',
	'H3','L3','L1','L4','L2','H5','L3','L1','W','L2','H2','L3','L1','L4','L2',
]);
const freeReel5 = r([
	'L1','H5','L3','L4','H2','L2','L1','H1','L3','L4','H3','L2','L1','L3','L4',
	'H4','L2','L1','L3','L4','H5','L2','L1','L3','L4','H2','L2','L1','W','L3',
	'H1','L4','L2','L1','L3','H3','L4','L2','W','L1','H4','L3','L4','L2','L1',
]);

export default {
	providerName: 'spirit_board_provider',
	gameName: 'spirit_board',
	gameID: '0_0_ouija_board',
	rtp: 0.95,
	numReels: 5,
	numRows: [3, 3, 3, 3, 3],
	betModes: {
		base: {
			cost: 1.0,
			feature: true,
			buyBonus: false,
			rtp: 0.95,
			max_win: 5000.0,
		},
		bonus: {
			cost: 100.0,
			feature: false,
			buyBonus: true,
			rtp: 0.95,
			max_win: 5000.0,
		},
	},

	symbols: {
		L1: {
			paytable: [{ '5': 2 }, { '4': 0.8 }, { '3': 0.4 }],
		},
		L2: {
			paytable: [{ '5': 1.5 }, { '4': 0.5 }, { '3': 0.2 }],
		},
		L3: {
			paytable: [{ '5': 1.5 }, { '4': 0.5 }, { '3': 0.2 }],
		},
		L4: {
			paytable: [{ '5': 1 }, { '4': 0.3 }, { '3': 0.1 }],
		},
		H1: {
			paytable: [{ '5': 10 }, { '4': 5 }, { '3': 3 }],
		},
		H2: {
			paytable: [{ '5': 8 }, { '4': 4 }, { '3': 2 }],
		},
		H3: {
			paytable: [{ '5': 5 }, { '4': 2 }, { '3': 1 }],
		},
		H4: {
			paytable: [{ '5': 3 }, { '4': 1 }, { '3': 0.5 }],
		},
		H5: {
			paytable: [{ '5': 2 }, { '4': 0.8 }, { '3': 0.4 }],
		},
		W: {
			paytable: [{ '5': 20 }, { '4': 10 }, { '3': 5 }],
			special_properties: ['wild', 'multiplier'],
		},
		S: {
			special_properties: ['scatter'],
		},
	},
	paddingReels: {
		basegame: [baseReel1, baseReel2, baseReel3, baseReel4, baseReel5],
		freegame: [freeReel1, freeReel2, freeReel3, freeReel4, freeReel5],
	},
} as const;
