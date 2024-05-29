export const ssr = false;

import { AppState } from '$lib/state.svelte';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (event) => {
	const state = new AppState({ fetch: event.fetch });
	return { state };
};
