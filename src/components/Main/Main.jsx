// Components
import React, {Component, Fragment} from 'react';
import Card from '../UI/Card';
// assets
import imgCard1 from '../../assets/img/img-1.jpg';
import imgCard2 from '../../assets/img/img-2.jpg';
import imgCard3 from '../../assets/img/img-3.jpg';
import imgCard4 from '../../assets/img/img-4.jpg';
import imgCard5 from '../../assets/img/img-5.jpg';
import imgCard6 from '../../assets/img/img-6.jpg';
// styles
import classes from './Main.module.scss';

const images = [
    {
      img: imgCard1,
      name: 'TILED GALLERY',
    },
    {
      img: imgCard2,
      name: 'EXTERNAL AUDIO POST',
    },
    {
      img: imgCard3,
      name: 'VIMEO VIDEO POST',
    },
    {
      img: imgCard4,
      name: 'SQUARE GALLERY',
    },
    {
      img: imgCard5,
      name: 'CIRCULAR GALLERY',
    },
    {
      img: imgCard6,
      name: 'POST WITH PAGINATION',
    },
]

export default class Main extends Component {

  renderCard = () => { 
      return images.map(({ img, name }, index) => {
        return (
          <Fragment key={index}>
            <Card img={img} name={name}/>
          </Fragment>
        )
      })
    }
  render() {
    return (
      <main className={classes.Main}> 
        <Fragment>
          {this.renderCard()}
        </Fragment>
      </main>
    )
  }
}