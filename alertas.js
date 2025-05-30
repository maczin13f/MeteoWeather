async function alertasClima() {
  const response = await fetch('https://updatetempweather.onrender.com/inmet-alertas');
  const data = await response.json();
  console.log("🔍 Dados recebidos do INMET:", data);

  const alertasContainer = document.getElementById("alertasClimaticos");
  const alertas = [...data.hoje, ...data.futuro];

  if (alertas.length) {
    const alertasHtml = alertas.map(alerta => `
      <div class="alerta-inmet">
        <h4 class='h4'>${alerta.descricao}</h4>
        <p class='estadosalertas'>Estados: ${alerta.estados}</p>
        <p class='severidadealerta'><strong>Severidade:</strong> ${alerta.severidade}</p>
        <p class='descriscos'>${alerta.riscos}</p>
        <h2 class='h2prev'>Prevenções</h2>
        <ul id='ulprev' style='display: none';>
        </ul>
      </div>
    `).join("");

    alertasContainer.innerHTML = alertasHtml;
    alertasContainer.style.display = "";

    // Ajustar cor de cada alerta individualmente
    document.querySelectorAll('.alerta-inmet').forEach(alertaEl => {
      const tituloalerta = alertaEl.querySelector('.severidadealerta');
      const h4 = alertaEl.querySelector('.h4');

      if (tituloalerta && tituloalerta.textContent.includes('Grande Perigo')) {
        h4.style.color = 'red';
      } else if (tituloalerta && tituloalerta.textContent.includes('Perigo Potencial')) {
        h4.style.color = 'yellow';
      } else if (tituloalerta && tituloalerta.textContent.includes('Perigo')) {
        h4.style.color = 'orange';
      }
    });

    const ulprev = document.getElementById('ulprev');
    const criarLiDoPrev = document.createElement('li');
    const licriada = ulprev.appendChild(criarLiDoPrev);

    // Evento de hover no h2prev para mostrar a prevencoesdiv correspondente
    document.querySelectorAll('.h2prev').forEach(function(h2) {
      const prevdiv = h2.nextElementSibling; // pega a div logo após o h2
      const descriscos = h2.previousElementSibling; // pega a <p class='descriscos'>

      h2.addEventListener('mouseenter', () => {
        if (prevdiv.style.display === 'none') {
          prevdiv.style.display = 'block';
          if (descriscos && descriscos.classList.contains('descriscos')) {
            descriscos.style.display = 'none';
          }
        }
      });

      h2.addEventListener('mouseleave', () => {
        if (prevdiv.style.display = 'block') {
          prevdiv.style.display = 'none';
          if (descriscos && descriscos.classList.contains('descriscos')) {
            descriscos.style.display = '';
          }
        }
      });

      const descriscostxt = descriscos.textContent;

      if (descriscostxt.includes('alagamentos')) {
        
        licriada
      }
      else if (descriscostxt.includes('ventos')) {
        licriada
          
      }
    });
    


  } else {
    alertasContainer.style.display = 'none';
  }
}

window.onload = alertasClima;

  

window.onload = alertasClima;


  

