import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getData } from '../../database/DataApi';
import Card from '../Card/Card';

import './SearchPage.css';

function SearchPage() {
  window.scrollTo(0, 0);
  const { search } = useParams();
  const [found, setFound] = useState(0);
  const [noticias, setNoticias] = useState([]);
  
  useEffect(() => {
    getData().then((resp) => {
      setNoticias(resp);
    })
  }, []);

  useEffect(() => {
    document.title = "Busca: " + search;
    const count = noticias.reduce((acc, noticia) => (SearchNews(noticia) ? acc + 1 : acc), 0);
    setFound(count);
  }, [noticias, search]);

  const checkTag = (noticia) => {
    return noticia?.tags.some((tag) => {
      const normalizedTag = tag.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return normalizedTag.includes(search);
    });
  }

  const SearchNews = (noticia) => {
    return noticia?.title.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search)
      || noticia?.subtitle.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search)
      || noticia?.text.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search)
      || noticia?.info.autor.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search)
      || noticia?.info.data.replace(/ /g, "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(search)
      || checkTag(noticia);
  }

  return (
    <main className='search-main'>
      <div className='search-main-header'>{`Mostrando ${found} resultados para "${search}"`}</div>
      {noticias.map((noticia, id) => {
        return (
          <React.Fragment key={id}>
            {SearchNews(noticia) && <Card data={noticia} key={id}/>}
          </React.Fragment>
        )
      })}
    </main>
  )
}

export default SearchPage;