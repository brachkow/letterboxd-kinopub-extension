const generateButton = () => {
  const movie = window.location.href
    .match(/film\/([A-z-0-9]*)\//)
    .at(-1)
    .split('-')
    .join('+');
  const url = `https://kino.pub/item/search?query=${movie}`;

  const button = document.createElement('a');
  button.classList.add('label');
  button.href = url;
  button.setAttribute('target', '_blank');
  button.classList.add('kinopub-button');

  const icon = document.createElement('span');
  icon.classList.add('kinopub-icon');
  icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
      <circle cx="24" cy="24" r="24" fill="rgba(255,255,255,0.2)"></circle>
      <circle cx="24" cy="24" r="22" fill="#1c202b" class="brand-color"></circle>
      <circle cx="24" cy="24" r="10" fill="#ffffff"></circle>
      <circle cx="13" cy="13" r="2" fill="#ffffff" class="brand-animate"></circle>
      <path d="M 14 24 L 24 24 L 14 44 Z" fill="#FFFFFF"></path>
      <circle cx="24" cy="24" r="3" fill="#000000"></circle>
    </svg>`;

  const label = document.createElement('span');
  label.textContent = 'Watch on KinoPub';

  button.appendChild(icon);
  button.appendChild(label);

  document.head.insertAdjacentHTML(
    'beforeend',
    `<style data-name="kinopub-letterboxd">
     .body {
        display: none;
      }

      .kinopub-button {
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 16px 0;
        padding: 10px 4px 10px 40px;
        border: 1px solid #303840;
        border-radius: 3px;
        position: relative;
      }

      .kinopub-icon {
        position: absolute;
        left: 10px;
        transform: translateY(1px);
      }
    </style>`,
  );

  return button;
};

const main = () => {
  if (window.location.href.match(/film\/[A-z-0-9]*\//gm)) {
    const panel = document.querySelector('#content .poster-list');
    const button = generateButton();

    panel.after(button);
  }
};

(() => {
  if (document.readyState !== 'loading') {
    main();
  } else {
    document.addEventListener('DOMContentLoaded', main);
  }
})();
