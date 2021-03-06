import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Django from './Logos/django-logo-positive.svg';
import MongoDB from './Logos/mongodb.svg';
import CSS from './Logos/css3-brands.svg';
import HTML from './Logos/code-solid1.svg';
import JS from './Logos/js-square-brands1.svg';
import NodeJS from './Logos/node-brands1.svg';
import Postgres from './Logos/postgresql.png';
import ReactImg from './Logos/react-brands1.svg';
import TS from './Logos/TypeScript.svg';
import Angular from './Logos/angular.svg';
import CSharp from './Logos/C_Sharp_logo.png'
import JQuery from './Logos/JQuery_logo.png'
import noSQL from './Logos/nosql_logo.png'
import Redux from './Logos/Redux_logo.png'
import SASS from './Logos/Sass_logo.png'
import SQL from './Logos/SQL_logo.jpg'
import Vue from './Logos/Vue_logo.png'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles(theme => ({
    projectMain: {
      marginBottom: theme.spacing(8)
    },
    gridList: {
        flexWrap: 'wrap',
        transform: 'translateZ(0)',
        width: 'cover',
        height: '250',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
        padding: theme.spacing(0,8,0,8),
    },
    titleBar: {
        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    title: {
        color: theme.palette.primary,
    },
    
}));

export default function Skills() {
    const classes = useStyles();

    return(
        <div className={classes.projectMain}>
          <div className="compFadeIn">
            <Typography align='center' variant='h3' id="skills">Skills</Typography>
            <div>
              <Grid 
                container 
                alignItems='center' 
                alignContent='center' 
                justify='center'>
                <Grid
                  container
                  justify="center"
                  alignItems="center">
                  <GridList className={classes.gridList} cols={2}>
                    <GridListTile key={'React'} className="hoverZoom">
                      <img id='react' className='imgFix' src={ReactImg} alt={'ReactImg'} />
                      <GridListTileBar
                        title={'React'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={Angular} className="hoverZoom">
                      <img id='angular' src={Angular} alt={'Angular'} className='imgFix' />
                      <GridListTileBar
                        title={'Angular'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={JS} className="hoverZoom">
                      <img id='javascript' className='imgFix' src={JS} alt={'JS'} />
                      <GridListTileBar
                        title={'JS'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={CSharp} className="hoverZoom">
                      <img id='C#' className='imgFix' src={CSharp} alt={'C#'} />
                      <GridListTileBar
                        title={'C#'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={JQuery} className="hoverZoom">
                      <img id='JQuery' className='imgFix' src={JQuery} alt={'JQuery'} />
                      <GridListTileBar
                        title={'JQuery'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={noSQL} className="hoverZoom">
                      <img id='noSQL' className='imgFix' src={noSQL} alt={'noSQL'} />
                      <GridListTileBar
                        title={'noSQL'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={Redux} className="hoverZoom">
                      <img src={Redux} alt={'Redux'} className='imgFix' />
                      <GridListTileBar
                        title={'Redux'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={SASS} className="hoverZoom">
                      <img src={SASS} alt={'SASS'} className='imgFix' />
                      <GridListTileBar
                        title={'SASS'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={SQL} className="hoverZoom">
                      <img src={SQL} alt={'SQL'} className='imgFix' />
                      <GridListTileBar
                        title={'SQL'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={Vue} className="hoverZoom">
                      <img src={Vue} alt={'Vue'} className='imgFix' />
                      <GridListTileBar
                        title={'Vue'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={MongoDB} className="hoverZoom">
                      <img src={MongoDB} alt={'MongoDB'} className='imgFix' />
                      <GridListTileBar
                        title={'MongoDB'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={Django} className="hoverZoom">
                      <img src={Django} alt={'Django'} className='imgFix' />
                      <GridListTileBar
                        title={'Django'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={TS} className="hoverZoom">
                      <img id='ts' src={TS} alt={'TS'} className='imgFix' />
                      <GridListTileBar
                        title={'TS'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={CSS} className="hoverZoom">
                      <img id='css' className='imgFix' src={CSS} alt={'CSS'} />
                      <GridListTileBar
                        title={'CSS'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={Postgres} className="hoverZoom">
                      <img className='imgFix' src={Postgres} alt={'Postgres'} />
                      <GridListTileBar
                        title={'Postgres'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={NodeJS} className="hoverZoom">
                      <img id='node' src={NodeJS} alt={'NodeJS'} className='imgFix' />
                      <GridListTileBar
                        title={'NodeJS'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                    <GridListTile key={HTML} className="hoverZoom">
                      <img className='imgFix' src={HTML} alt={'HTML'} />
                      <GridListTileBar
                        title={'HTML'}
                        classes={{
                          root: classes.titleBar,
                          title: classes.title,
                        }}
                      />
                    </GridListTile>
                  </GridList>
                </Grid>
              </Grid>
            </div>
          </div>
      </div>
    )
}