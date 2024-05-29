import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
	let { state } = await parent();

	return {
		posts: state.getPosts(params.id),
		id: parseInt(params.id)
	};
};
