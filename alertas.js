async function alertasClima() {
  const response = await fetch('https://updatetempweather.onrender.com/inmet-alertas');
  const data = await response.json();
  console.log("🔍 Dados recebidos do INMET:", data);

  const alertasContainer = document.getElementById("alertasClimaticos");
  const alertas = [...data.hoje, ...data.futuro];

  if (alertas.length) {
    const alertasHtml = alertas.map(alerta => `
      <div class="alerta-inmet">
        <h4 id='h4'>${alerta.descricao}</h4>
        <p id='estadosalertas'>Estados: ${alerta.estados}</p>
        <p id='severidadealerta'><strong>Severidade:</strong> ${alerta.severidade}</p>
        <p id='descriscos'>${alerta.riscos}</p>
        <h2 class='h2prev'>Prevenções</h2>
        <div id='prevencoesdiv' style="display: block;">ola mundo</div>
      </div>
    `).join("");

    alertasContainer.innerHTML = alertasHtml;
    alertasContainer.style.display = "";

    // Ajustar cor de cada alerta individualmente
    document.querySelectorAll('.alerta-inmet').forEach(alertaEl => {
      const tituloalerta = alertaEl.querySelector('#severidadealerta');
      const h4 = alertaEl.querySelector('#h4');

      if (tituloalerta && tituloalerta.textContent.includes('Grande Perigo')) {
        h4.style.color = 'red';
      } else if (tituloalerta && tituloalerta.textContent.includes('Perigo Potencial')) {
        h4.style.color = 'yellow';
      } else if (tituloalerta && tituloalerta.textContent.includes('Perigo')) {
        h4.style.color = 'orange';
      }
    });
  } else {
    alertasContainer.style.display = 'none';
  }
}

window.onload = alertasClima;

  const descriscos = document.getElementById('descriscos')
const prevdiv = document.getElementById('prevencoesdiv');

  document.querySelectorAll('.h2prev').forEach((h2) => {
    
    h2.addEventListener('mouseenter', () => {
      prevdiv.style.display = 'block';
    });
    h2.addEventListener('mouseleave', () => {
      prevdiv.style.display = 'none';
    });
  });


  

