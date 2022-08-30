export function readFile(file: File) {
	return new Promise<string | ArrayBuffer | null>((resolve) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => resolve(reader.result), false);
		reader.readAsDataURL(file);
	});
}
