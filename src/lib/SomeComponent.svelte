<script lang="ts">
	import type { AppState } from './state.svelte';

	let { state }: { state: AppState } = $props();

	let newData = $derived.by(() => {
		let largeObject = {} as {
			[key: string]: {
				userId: number;
				id: number;
				title: string;
				body: string;
			};
		};
		for (let i = 0; i < 10000; i++) {
			largeObject[`obj${i}`] = state.post;
		}
		return largeObject;
	});
</script>

<div>
	<h3>PostId: {state.post.id}</h3>
	<h1>{state.post.title}</h1>
	<div>{state.post.body}</div>
</div>

<div>Size of newData: {Object.keys(newData).length}</div>
<div>{newData['obj0'].title}</div>
