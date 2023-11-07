import './ListPage.css';
import { findList } from "../../database/DataApi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ListPage() {
  window.scrollTo(0, 0);

  const { title } = useParams();
  const [list, setList] = useState([]);
  const [bannerImage, setBannerImage] = useState('');

  document.title = list.title;

  useEffect(() => {
    findList(title.replace(/-/g, " ")).then((resp) => {
      setList(resp);
      setBannerImage(resp.itens[0].img);
    })
  }, [])

  return (
    <>
      <div className="list-banner-case">
        <div className="list-banner-background" style={{ backgroundImage: `url(${bannerImage})` }} alt="banner"></div>
        <div className="list-banner" style={{ backgroundImage: `url(${bannerImage})` }} alt="banner"></div>
      </div>

      <main className="list-main">
        <section className="list-content">
          <div className="list-content-header">
            <h1>{list.title}</h1>
          </div>
          <div className="list-horizontal-ad"></div>
          <div className="list-content-main">
            {list?.itens?.map((item, key) => {
              return (
                <div className='list-item'>
                  <h2>{list?.itens?.length - key}. {item.title}</h2>
                  <div style={{ backgroundImage: `url(${item.img})` }} alt="item img"></div>
                  <p>{item.text}</p>
                </div>
              )
            })}
          </div>
          <h5>Por {list?.info?.autor}, {list?.info?.data}.</h5>
        </section>
      </main>
    </>
  )
}

export default ListPage;