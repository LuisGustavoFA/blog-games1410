import './ListPage.css';
import { findList } from "../../database/DataApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ListPage() {
  window.scrollTo(0, 0);

  const {title} = useParams();
  const [list, setList] = useState([]);

  document.title = list.title;

  useEffect(() => {
    findList(title.replace(/-/g, " ")).then((resp) =>{
      setList(resp);
    })
  }, [])

  return (
    <>
    <div className="list-banner-case">
      <div className="list-banner-background" style={{backgroundImage: `url(${list.item5?.img})`}} alt="banner"></div>
      <div className="list-banner" style={{backgroundImage: `url(${list.item5?.img})`}} alt="banner"></div>
    </div>

    <main className="list-main">
      <section className="list-content">
        <div className="list-content-header">
          <h1>{list.title}</h1>
        </div>
        <div className="list-horizontal-ad"></div>
        <div className="list-content-main">
          <div className='list-item'>
            <h2>{list.item5?.title}</h2>
            <div style={{backgroundImage: `url(${list.item5?.img})`}} alt="item5 img"></div>
            <p>{list.item5?.text}</p>
          </div>

          <div className='list-item'>
            <h2>{list.item4?.title}</h2>
            <div style={{backgroundImage: `url(${list.item4?.img})`}} alt="item4 img"></div>
            <p>{list.item4?.text}</p>
          </div>

          <div className='list-item'>
            <h2>{list.item3?.title}</h2>
            <div style={{backgroundImage: `url(${list.item3?.img})`}} alt="item3 img"></div>
            <p>{list.item3?.text}</p>
          </div>

          <div className='list-item'>
            <h2>{list.item2?.title}</h2>
            <div style={{backgroundImage: `url(${list.item2?.img})`}} alt="item2 img"></div>
            <p>{list.item2?.text}</p>
          </div>

          <div className='list-item'>
            <h2>{list.item1?.title}</h2>
            <div style={{backgroundImage: `url(${list.item1?.img})`}} alt="item1 img"></div>
            <p>{list.item1?.text}</p>
          </div>
          
          <h5>Por {list?.info?.autor}, {list?.info?.data}.</h5>
        </div>
      </section>
    </main>
    </>
  )
}

export default ListPage;