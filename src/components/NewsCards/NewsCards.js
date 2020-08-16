import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import './style.css'
import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';
import { Card } from 'semantic-ui-react'
const infoCards = [
  { color: '#ff9800', title: 'Categories', info: 'Example - Business, Entertainment, General, Health, Science, Sports, Technology.', text: 'Say give me the latest Business news!' },
  { color: '#4caf50', title: 'Topics', info: 'Example - Bitcoin, PlayStation 5, Smartphones, Narendara Modi..', text: 'Say what\'s up with Smartphones?' },
  { color: '#f44336', title: 'News Sources', info: 'Example - CNN, Wired, Time, IGN, Buzzfeed..', text: 'Say give me the news from CNN!' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <div>
         <Typography variant="body2" color="textSecondary" style={{fontFamily:'PT Sans',fontSize:26,textAlign:'center',marginBottom:20,padding:10,marginTop:20}} component="h2">
           Welcome to GoodNews.
         </Typography>
         <Typography variant="body2" color="textSecondary" style={{fontFamily:'PT Sans',fontSize:20,textAlign:'center',marginBottom:20,padding:10}} component="h2">
          Press the mic button and say <span style={{color:'#ff5722'}}><b><i>Give me the latest news!</i></b></span>
         </Typography>

      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3} style={{marginBottom:20}}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={12} md={4} lg={4} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Card.Content header={infoCard.title} style={{fontSize:22,fontFamily:'Roboto Slab'}} />
               
                {infoCard.info ? <Typography variant="h6" style={{fontSize:18,fontFamily:'Roboto Slab'}} component="h6"><strong>{infoCard.title.split(' ')[2]}</strong> <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6" style={{fontSize:18,marginTop:20,fontFamily:'PT Sans'}}><i>{infoCard.text}</i></Typography>
              </div>

            </Grid>
          ))}
        
        </Grid>
        
      </Grow>
      </div>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
            <NewsCard activeArticle={activeArticle} i={i} article={article} />
            
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
