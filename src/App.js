import React, { useState, useEffect } from 'react';
import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';
import './style.css'
import logo from './images/GOODNews.png';
import { NewsCards, Modal } from './components';
import useStyles from './styles';
import { Grid, Grow, Typography } from '@material-ui/core';
const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: '83c75b4ec11f036ad385ee5c9f9cbf5c2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
      
        <img src={logo} className={classes.alanLogo} alt="logo" />
        
      </div>
      {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <Typography variant="h5" component="h2" style={{fontFamily:'Roboto Slab',marginTop:20,marginBottom:20}}>Say open article 4th to open 4th article!</Typography>
          
          </div>
        ) : null}
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      
    </div>
  );
};

export default App;
