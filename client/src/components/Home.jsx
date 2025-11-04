import React, { useState } from 'react';
import './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardsData from './CardData';

const Home = () => {
  
  const [cardData, useCardData] = useState(CardsData);
  
  return (
    <>
      <section className='iteam_section mt-4 container'>
        <h2 className='px-4' style={{fontWeight:400}}>Restaurants in Guwahati Open Now!</h2>
        <div className='row mt-2 d-flex justify-content-around align-items-center'>
          <Card style={{width:'22rem',border:'none'}} className='hove mb-4'>
            <Card.Img src='/vite.svg' />
            <div className='card_body'>
              <div className='upper_data d-flex justify-content-between align-items-center'>
                <h4 className='mt-2'>Punjabi</h4>
                <span>3.8&nbsp;★</span>
              </div>

              <div className='lower_data d-flex justify-content-between'>
                <h5>North Indian, Biryani, Mughlai</h5>
                <span>300</span>
              </div>
              <div className="extra"></div>

              <div className='last_data d-flex justify-content-between align-items-center'>
                <img src='/vite.svg' className='limg' alt=''/>
                <Button style={{width:'150px', background:'#ff3054db', border:'none'}} variant='outline-light'
                  className='mt-2 mb-2'
                >Add To Cart</Button>
                <img src='/vite.svg' className='laimg' alt=''/>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </>
  )
}

export default Home