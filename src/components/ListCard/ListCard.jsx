import './ListCard.css';

function ListCard() {
  return (
    <div className="list-card">
      <span className="list-card-title">LISTAS</span>
      <a className="list-card-link" href='#'>Melhores jogos para celular</a>
      <a className="list-card-link" href='#'>Melhores jogos multiplayer</a>
      <a className="list-card-link" href='#'>Melhores jogos soulslike</a>
      <a className="list-card-link" href='#'>Melhores lançamentos do mês de setembro</a>
      <a className="list-card-link" href='#'>Melhores lançamentos da Nintendo em 2023</a>
    </div>
  )
}

export default ListCard