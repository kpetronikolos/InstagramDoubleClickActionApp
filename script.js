const elements = [
  {
    id: 1,
    counter: 0
  },
  {
    id: 2,
    counter: 0
  },
  {
    id: 3,
    counter: 0
  },
  {
    id: 4,
    counter: 0
  },
  {
    id: 5,
    counter: 0
  },
  {
    id: 6,
    counter: 0
  },
  {
    id: 7,
    counter: 0
  },
  {
    id: 8,
    counter: 0
  },
  {
    id: 9,
    counter: 0
  }
];

const pElements = document.querySelectorAll('.image-like');

for (let pElement of pElements) {
  pElement.innerText = '0 ❤';
}

const doubleClickFunction = (element) => {
  elements[element - 1].counter++;
  document.getElementById('like' + element).innerText = elements[element - 1].counter + ' ❤';

  document.getElementById('heart-icon' + element).classList.add('animate-like');
  setTimeout(() => {
    document.getElementById('heart-icon' + element).classList.remove('animate-like');
  }, 800);
}