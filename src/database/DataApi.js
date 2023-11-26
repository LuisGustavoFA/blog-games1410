const API_URL = 'https://raw.githubusercontent.com/LuisGustavoFA/api-blog-games1410/main/api.json';

export const getData = async (type) => {
  try {
    const dataJSON = await fetch(API_URL).then(resp => resp.json());
    const data = type === 'news' ? [...dataJSON.news] : 
                 type === 'lists' ? [...dataJSON.lists] : 
                 type === 'reviews' ? [...dataJSON.reviews] : [...dataJSON];
    return data.sort((a, b) => {
      const dateA = new Date(a.info.time).getTime();
      const dateB = new Date(b.info.time).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.log('FETCH ERROR: ', error);
    return [];
  }
}

export const findArticle = async (title) => {
  try{
    const data = await getData('news');
    const article = data.find((item) => item["title"].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(title));
    return article;
  } catch (error) {
    console.log('ARTICLE NOT FOUND, ERROR: ' + error)
    return [];
  }
}

export const findList = async (title) => {
  try{
    const data = await getData('');
    const list = data.find((item) => item["title"].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(title));
    return list;
  } catch (error) {
    console.log('LIST NOT FOUND, ERROR: ' + error)
    return [];
  }
}