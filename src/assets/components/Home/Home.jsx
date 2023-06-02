import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import './Home.css'
import About from '../About/About';
import { Link } from 'react-router-dom';

export default function Home() {
  const [showBasic, setShowBasic] = useState(false);
  return (
    <div id='home'>
      <header>
        <div
          className='p-5 text-center bg-image' id='hero'
          style={{ backgroundImage: "url('https://cdn.squaremeal.co.uk/restaurants/22378/images/zoku-japanese-bar_08122021052323.jpg?w=928&h=522&fit=crop&auto=format%2Ccompress')", height: '700px' }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3' id='title'>Mexicana <i class="fa fa-cutlery" aria-hidden="true"></i></h1>
                <h4 className='mb-3' id='text'>Feels like home, tastes like paradise</h4>
                <MDBBtn tag="a" id='buto'>
                <Link to='/dish' id='textxx'>
                  View Dishes
                  </Link>
                </MDBBtn>
              </div>
            </div>
          </div>
        </div>
      </header>
      <About />
    </div>
  );
}