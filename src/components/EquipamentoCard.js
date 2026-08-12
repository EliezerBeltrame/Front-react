function EquipamentoCard({ equipamento }) {
  return (
    <div className="card">
      <img
        className="imagem-equip"
        src={equipamento.imagem}
        alt={equipamento.nome}
      />

      <h2 className="nome-equip">{equipamento.nome}</h2>

      <p className={`status ${equipamento.status.toLowerCase()}`}>
        {equipamento.status}
      </p>

      <p className="funcao">{equipamento.funcao}</p>
    </div>
  );
}

export default EquipamentoCard;