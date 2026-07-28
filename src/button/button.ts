export function createButton(message: string = ''): HTMLButtonElement {
  const element = document.createElement('button');
  element.innerHTML = message;
  element.setAttribute('role', 'button');

  return element;
}
