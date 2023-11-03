import './ListCard.css';

function ListCard() {
  return (
    <div className="list-card">
      <span className="list-card-title">LISTAS</span>
      <a className="list-card-link" href='#'>MELHORES JOGOS MOBILE DE OUTUBRO</a>
      <a className="list-card-link" href='#'>MELHORES JOGOS MULTIPLAYER DO ANO</a>
      <a className="list-card-link" href='#'>MELHORES JOGOS EXCLUSIVOS DE PS5 EM 2023</a>
      <a className="list-card-link" href='#'>JOGOS CONFIRMADOS PARA ESSE MÊS</a>
      <a className="list-card-link" href='#'>TUDO QUE VAZOU NESSA ÚLTIMA SEMANA</a>
    </div>
  )
}

export default ListCard