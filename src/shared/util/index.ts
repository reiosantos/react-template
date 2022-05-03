export function titleCase(str?: string) {
  if (!str) {
    return str;
  }
  return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}

export function camelToSnakeCase(str: string) {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

export function randomColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return `#${color}`;
}
