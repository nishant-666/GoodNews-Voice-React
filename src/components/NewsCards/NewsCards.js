import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';
import './style.css'
import NewsCard from './NewsCard/NewsCard';
import useStyles from './styles.js';
import { Card } from 'semantic-ui-react'

const infoCards = [
  { color: '#ff9800', title: 'Explore Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology.', text: 'Say give me the latest Technology news!' },
  { color: '#4caf50', title: 'Expore Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'Say what\'s up with PlayStation 5?' },
  { color: '#f44336', title: 'Explore Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Say give me the news from CNN!' },
];

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {infoCards.map((infoCard) => (
            <Grid item xs={12} sm={12} md={4} lg={4} className={classes.infoCard}>
              <div className={classes.card} style={{ backgroundColor: infoCard.color }}>
                <Card.Content header={infoCard.title} style={{fontSize:29,fontFamily:'Roboto Slab'}} />
               
                {infoCard.info ? <Typography variant="h6" style={{fontSize:20,fontFamily:'Roboto Slab'}} component="h6"><strong>{infoCard.title.split(' ')[2]}</strong> <br />{infoCard.info}</Typography> : null}
                <Typography variant="h6" component="h6" style={{fontSize:20,marginTop:20,fontFamily:'PT Sans'}}><i>{infoCard.text}</i></Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
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
