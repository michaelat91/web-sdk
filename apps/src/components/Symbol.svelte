<script lang="ts">
	import SymbolSprite from './SymbolSprite.svelte';
	import { getSymbolInfo } from '../game/utils';
	import type { SymbolState, RawSymbol } from '../game/types';
	import { Text } from 'pixi-svelte';

	type Props = {
		x?: number;
		y?: number;
		state: SymbolState;
		rawSymbol: RawSymbol;
		oncomplete?: () => void;
		loop?: boolean;
	};

	const props: Props = $props();
	const symbolInfo = $derived(getSymbolInfo({ rawSymbol: props.rawSymbol, state: props.state }));
</script>

<SymbolSprite {symbolInfo} x={props.x} y={props.y} oncomplete={props.oncomplete} />

{#if props.rawSymbol.multiplier}
	<Text
		anchor={0.5}
		x={props.x}
		y={props.y}
		text={`${props.rawSymbol.multiplier}X`}
		style={{
			fill: 0xffffff,
			fontFamily: 'proxima-nova',
			fontSize: 50,
			fontWeight: '600',
		}}
	/>
{/if}
