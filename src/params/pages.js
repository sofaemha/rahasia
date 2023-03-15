export function match(/** @type {any} */ value) {
	return /^(?!0((?!\d)|\d))\d+$/.test(value);
}