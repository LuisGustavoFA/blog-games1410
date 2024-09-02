import './(OLD) ListPage.css';
import { findList } from "../../database/DataApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { calctime } from '../../functions/calctime';
import TagsCase from '../../components/TagsCase/TagsCase';
import MoreArticles from '../../components/MoreArticles/MoreArticles';
import AdCase from '../../components/AdCase/AdCase';

function ListPage() {
  window.scrollTo(0, 0);
  const { title } = useParams();
  const [list, setList] = useState([]);
  document.title = list.title;

  useEffect(() => {
    findList(title.replace(/-/g, " ")).then((resp) => {
      setList(resp);
    })
  }, [])

  return (
    <>
      <main className="list-main">
        <section className="list-content">
          <TagsCase tags={list.tags}/>
          <div className="list-content-header">
            <h1>{list.title}</h1>
            <h5>{list.subtitle}</h5>
          </div>
          <AdCase text/>
          <div className="list-content-main">
            {list?.itens?.map((item, key) => {
              return (
                <div className='list-item'>
                  <div className="list-item-image" style={{ backgroundImage: `url(${item.img})` }} alt="item img">
                    <h2>{list?.itens?.length - key}. {item.title}</h2>
                  </div>
                  <p>{item.text}</p>
                  {((key - 2) % 3 === 0) && <AdCase text/>}
                </div>
              )
            })}
          </div>
          <h5>Por {list?.info?.author}, {calctime(list.info?.time)}.</h5>
        </section>
        <section className='list-subcontent'>
          <AdCase/>
          <AdCase/>
          <AdCase/>
        </section>
      </main>
      <MoreArticles/>
    </>
  )
}

export default ListPage;