// Funzione per aprire/chiudere il menu a cascata
function toggleAccordion(button) {
  const item = button.parentElement;
  const content = item.querySelector('.accordion-content');
  
  item.classList.toggle('active');
  content.classList.toggle('show');
}

// Funzione per mostrare/nascondere il riquadro appunti su Mobile e Tablet
function toggleMobileNotes() {
  const notesSidebar = document.getElementById('notesSidebar');
  if (notesSidebar) {
    notesSidebar.classList.toggle('active-mobile');
  }
}

// Salvataggio Appunti nel Browser (LocalStorage)
function salvaAppunti(chiaveLezione) {
  const notesArea = document.getElementById('studentNotes');
  const saveStatus = document.getElementById('saveStatus');
  
  if (notesArea) {
    localStorage.setItem(chiaveLezione, notesArea.value);
    saveStatus.innerText = 'Appunti salvati!';
    setTimeout(() => { saveStatus.innerText = ''; }, 3000);
  }
}

// Carica gli appunti salvati all'apertura della pagina
document.addEventListener('DOMContentLoaded', () => {
  const notesArea = document.getElementById('studentNotes');
  if (notesArea) {
    const pageName = window.location.pathname.split('/').pop().replace('.html', '');
    const savedText = localStorage.getItem(pageName);
    if (savedText) {
      notesArea.value = savedText;
    }
  }
});