import { useState } from 'react';// fazem a tela atualizar automaticamente.
import './App.css'; //Importa os estilos CSS


// Componente do Botão de Defeito
function BotaoDefeito({ nome, quantidade, onClick }) {
  return (
    <button onClick={onClick} style={{ margin: '5px', padding: '10px 15px' }}>
      {nome}: {quantidade} defeitos
    </button>
  );
}

export default function App() {
  const [rachaduras, setRachaduras] = useState(0);// valor inicial de cada contador.
  const [pinturas, setPinturas] = useState(0);
  const [peca, setPeca] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Controle de Qualidade</h1>
      {/* Imagem de Indústria via Link (Garantido que funciona) */}
      
      <BotaoDefeito 
        nome="Rachaduras" 
        quantidade={rachaduras} 
        onClick={() => setRachaduras(rachaduras + 1)} 
      />

      <BotaoDefeito 
        nome="Pintura Descascada" 
        quantidade={pinturas} 
        onClick={() => setPinturas(pinturas + 1)} 
      />
      <BotaoDefeito 
        nome="Peça trincada" 
        quantidade={peca} 
        onClick={() => setPeca(peca + 1)} 
      />
      <hr />
      <h3>Total de Defeitos: {rachaduras + pinturas + peca}</h3>
    </div>
    //atualiza o total na tela imediatamente.
  );
}