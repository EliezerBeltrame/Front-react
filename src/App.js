import EquipamentoCard from './components/EquipamentoCard';
import equipamentos from './data/equipamentos';
import './styles/visual.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="titulo">
        Visualizador de Equipamentos de Manufatura Inteligente
      </h1>

      <div className="lista-equipamentos">
        {equipamentos.map((equipamento) => (
          <EquipamentoCard
            key={equipamento.id}
            equipamento={equipamento}
          />
        ))}
      </div>
    </div>
  );
}

export default App;