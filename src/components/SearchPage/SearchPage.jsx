import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getData } from '../../database/DataApi';
import Card from '../Card/Card';

import './SearchPage.css';

function SearchPage() {
  const { search } = useParams();

  useEffect(() => {
    document.title = "Busca: " + search;
  }, [search])

  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    getData().then((resp) => {
      setNoticias(resp);
    })
  }, [])

  const SearchNews = (noticia) => {
    return noticia?.title.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search)
      || noticia?.subtitle.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search)
      || noticia?.text.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search)
      || noticia?.info.autor.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search)
      || noticia?.info.data.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search);
  }

  return (
    <main className='search-main'>
      <div className='search-main-header'>{`Mostrando resultados para "${search}"`}</div>
      {noticias.map((noticia, id) => {
        return (
          <React.Fragment key={id}>
            {SearchNews(noticia) && <Card data={noticia} key={id} />}
          </React.Fragment>
        )
      })}
    </main>
  )
}

export default SearchPage;