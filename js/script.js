// Contador de visitas
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visitCounter').innerText = visitCount;

// Función para mostrar/ocultar contenido
function toggleContent(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// Función para cambiar el tema
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// Función para resaltar el enlace seleccionado
function highlightLink(link) {
    const links = document.querySelectorAll('nav a');
    links.forEach(l => l.classList.remove('highlight'));
    link.classList.add('highlight');
}
