import gerador from './modulo/gerador';
import './assets/css/style.css';

(function(){
  const gera = new gerador();
  const cpfGerado = document.querySelector('.resuntado')
  cpfGerado.innerHTML = gera.geraNovoCpf()
}) ()