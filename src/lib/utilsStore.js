import { writable } from 'svelte/store';

export const searchValue = writable('');

const defaultFilter = (email, inputValue) => {
	return (
		email.mittente.toLowerCase().includes(inputValue.toLowerCase()) ||
		email.oggetto.toLowerCase().includes(inputValue.toLowerCase()) ||
		email.corpo.toLowerCase().includes(inputValue.toLowerCase())
	);
};

export const filterStore = writable((email, inputValue) => defaultFilter(email, inputValue));

export function setDefaultFilter() {
	filterStore.set((email, inputValue) => defaultFilter(email, inputValue));
}

export function setImportantFilter() {
	filterStore.set((email) => email.importante);
}

export function setSpecialFilter() {
	filterStore.set((email) => email.speciale);
}
