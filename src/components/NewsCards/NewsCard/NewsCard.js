import React, { useState, useEffect, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import classNames from 'classnames';
import './style.css'
import useStyles from './styles';
import { Button } from 'semantic-ui-react'
const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, activeArticle, i }) => {
  const classes = useStyles();
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
  }, []);

  useEffect(() => {
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

  return (
    <Card  ref={elRefs[i]} className={classNames(classes.card, activeArticle === i ? classes.activeCard : null)}>
      <CardActionArea href={url} target="_blank">
        <CardMedia className={classes.media} image={urlToImage || 'https://bitsofco.de/content/images/2018/12/broken-1.png'} title={title} />
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" style={{fontFamily:'PT Sans',fontSize:16}} component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
          <Typography variant="body2" color="textSecondary" style={{fontFamily:'PT Sans',fontSize:16}} component="h2">{source.name}</Typography>
        </div>
        <Typography className={classes.title} style={{fontFamily:'PT Sans',fontSize:20}} gutterBottom variant="h5" component="h2">{title}</Typography>
        <CardContent>
          <Typography variant="body2" style={{fontFamily:'PT Sans',fontSize:16}} color="textSecondary" component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size='large' color='orange' style={{fontFamily:'PT Sans'}} href={url}>Explore</Button>
        <Typography style={{fontFamily:'PT Sans'}} variant="h5" color="textSecondary" component="h2">{i + 1}</Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
