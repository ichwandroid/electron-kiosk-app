
window.electronAPI.onShowExitPopup(() => {
  const popup = document.getElementById('exit-popup');
  popup.style.display = 'flex';
});

function closeApp() {
  window.close();
}
