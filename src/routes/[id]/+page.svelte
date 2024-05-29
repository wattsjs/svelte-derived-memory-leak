<script>
	import SomeComponent from '$lib/SomeComponent.svelte';

	let { data } = $props();
	let { state } = data;
</script>

{#if data.id > 1}
	<a href={`/${data.id - 1}`}>Prev</a>
{/if}
{#if data.id < 10}
	<a href={`/${data.id + 1}`}>Next</a>
{/if}

<div style="display: flex; justify-content: center;">
	{#key data.id}
		{#if data.id === state.post?.id}
			<SomeComponent {state} />
		{:else}
			<div>Loading...</div>
		{/if}
	{/key}
</div>
