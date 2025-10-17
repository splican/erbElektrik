// Haupt-JavaScript-Datei
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#actionBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const output = document.querySelector('#output');
      output.textContent = `Button clicked at ${new Date().toLocaleTimeString()}`;
    });
  }
});
