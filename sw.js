self.addEventListener('fetch', () => null); // returning anything other than `undefined` triggers the bug
