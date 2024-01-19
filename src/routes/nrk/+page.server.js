import { error } from '@sveltejs/kit';
import { JSDOM } from 'jsdom';

const MINUTE = 60_000;

let cacheAge = -Infinity;

/** @type {{text:string,href:string}[]} */
let tinyCache = [];

/** @type {import('./$types').PageServerLoad} */
export async function load({ setHeaders }) {
	setHeaders({
		'cache-control': '300'
	});

	const isOld = Date.now() - cacheAge > 5 * MINUTE;

	if (!isOld) {
		return { headings: tinyCache };
	}

	const res = await fetch('https://www.nrk.no/');
	if (!res.ok) error(res.status, res.statusText);

	const html = await res.text();
	const {
		window: { document }
	} = new JSDOM(html);

	/** @type {HTMLAnchorElement[]} */
	const all_headings = Array.from(document.querySelectorAll('main a:has(h2.kur-room__title)'));

	const headings_last_n = all_headings
		.slice(0, 10)
		.map((node) => ({ text: node.textContent ?? '', href: node.href }))
		.filter((n) => n.text.length);

	cacheAge = Date.now();
	tinyCache = headings_last_n;

	return { headings: headings_last_n };
}
