import React from 'react';
import './ArticleText.css';
import YouTube from 'react-youtube';
//import { Tweet } from 'react-tweet';
import { useEffect, useState } from 'react';

function ArticleText({article}) {
  const [articleText, setArticleText] = useState('');
  //const [postIncluded, setPostIncluded] = useState(false);
  const [videoIncluded, setVideoIncluded] = useState(false);

  useEffect(() => {
    //const post = article.social?.post;
    const video = article.social?.video;
    //if (post && article.text.includes('[socialPost]')) setPostIncluded(true);
    if (video && article.text.includes('[socialVideo]')) setVideoIncluded(true);
    setArticleText(article.text);
  }, [article]);

  const renderText = () => {
    if (videoIncluded) {
      return = articleText.split('[socialVideo]').map((part, index, array) => (
        <React.Fragment key={index}>
          {part}
          {index !== array.length - 1 && <YouTube videoId={article.social?.video} style={{paddingTop: "16px" , aspectRatio: 16/9}} opts={{width: "100%", height: "100%"}}/>}
        </React.Fragment>
      ));
    } eles {
      return articleText;
    }
  }
  /*const renderText = () => {
    if (!postIncluded && !videoIncluded) {
      return articleText;

    } else if (postIncluded && videoIncluded) {
      let test = articleText.split('[socialPost]').map((part, index, array) => (
        <React.Fragment key={index}>
          {part}
          {index !== array.length - 1 && <Tweet id={article.social?.post}/>}
        </React.Fragment>
      ));

      let test2 = test[1]?.props.children[0].split('[socialVideo]').map((part, index, array) => (
        <React.Fragment key={index}>
          {part}
          {index !== array.length - 1 && <YouTube videoId={article.social?.video} style={{paddingTop: "16px" , aspectRatio: 16/9}} opts={{width: "100%", height: "100%"}}/>}
        </React.Fragment>
      ));

      let test3 = test.splice(0,1).concat(test2);

      return test3;

    } else if (postIncluded) {
      let test = articleText.split('[socialPost]').map((part, index, array) => (
        <React.Fragment key={index}>
          {part}
          {index !== array.length - 1 && <Tweet id={article.social?.post} />}
        </React.Fragment>
      ));

      return test;

    } else if (videoIncluded) {
      let test = articleText.split('[socialVideo]').map((part, index, array) => (
        <React.Fragment key={index}>
          {part}
          {index !== array.length - 1 && <YouTube videoId={article.social?.video} style={{paddingTop: "16px" , aspectRatio: 16/9}} opts={{width: "100%", height: "100%"}}/>}
        </React.Fragment>
      ));

      return test;
    }
  };*/

  return (
    <span className='article-text'>
      {renderText()}
    </span>
  )
}

export default ArticleText;