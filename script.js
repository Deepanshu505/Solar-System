// script.js

function switchTab(index) {
  const buttons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  buttons.forEach((btn, i) => {
    if (i === index) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  panels.forEach((panel, i) => {
    if (i === index) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
}

// Optional: Add smooth page transitions
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade-in');
});
