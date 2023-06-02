import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardImage
} from 'mdb-react-ui-kit';
import './About.css'
export default function About() {
  return (
    <div id='about'>
    <MDBRow>
      <MDBCol sm='4' id='cards'>
        <MDBCard id='abt-card'>
          <MDBCardBody>
            <MDBCardTitle id='vo'>Welcome</MDBCardTitle>
            <MDBCardText id='italia'>Visit our Website</MDBCardText>
            <MDBCardText id='text'>
            - High quality images
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol sm='4'>
        <MDBCard id='abt-card'>
        <MDBCardImage position='top' alt='...' src='https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' height='600px' />
          {/* <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional content.
            </MDBCardText>
            <MDBBtn href='#'>Go somewhere</MDBBtn>
          </MDBCardBody> */}
        </MDBCard>
      </MDBCol>
      <MDBCol sm='4'>
        <MDBCard id='abt-card'>
          <MDBCardBody>
            <MDBCardTitle id='vo'>Our dishes</MDBCardTitle>
            <MDBCardText id='italia'>The best dishes</MDBCardText>
            <MDBCardText id='text'>
              100+ Dishes
              
            </MDBCardText>
            {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    </div>
  );
}