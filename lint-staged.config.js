module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,css,json,md}': ['prettier --write'],
  '*.{ts,tsx}': [() => 'tsc --noEmit --pretty'],
}
