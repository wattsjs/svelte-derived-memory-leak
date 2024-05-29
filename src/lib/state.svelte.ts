export class AppState {
	post = $state() as {
		id: number;
		userId: number;
		title: string;
		body: string;
	};
	fetch: typeof fetch;

	newData = $derived.by(() => {
		let largeObject = {} as {
			[key: string]: {
				userId: number;
				id: number;
				title: string;
				body: string;
			};
		};
		for (let i = 0; i < 10000; i++) {
			largeObject[`obj${i}`] = this.post;
		}
		return largeObject;
	});

	constructor(opts: { fetch: typeof fetch }) {
		this.fetch = opts.fetch;
	}

	async getPosts(id: number | string) {
		const response = await this.fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
		const data = await response.json();
		this.post = data;
	}
}
