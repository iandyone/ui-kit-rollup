export function createButton(message = '') {
  const element = document.createElement('button');
  element.innerHTML = message;
  element.setAttribute('role', 'button');

  return element;
}


