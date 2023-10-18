const API_URL = 'https://raw.githubusercontent.com/LuisGustavoFA/api-blog-games1410/main/api.json';

export const getData = async () => {
  try {
    const dataJSON = await fetch(API_URL).then(resp => resp.json());
    const data = [...dataJSON];
    return data;
  } catch (error) {
    console.log('ERROR: ', error);
    return [];
  }
}

export const findArticle = async (title) => {
  try{
    const data = await getData();
    const article = data.find((item) => item["title"].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(title));
    return article;
  } catch (error) {
    console.log('ARTICLE NOT FOUND, ERROR: ' + error)
    return [];
  }
}