    import React, { useState, useEffect } from 'react';
    import {
      MDBCard,
      MDBCardBody,
      MDBCardTitle,
      MDBCardText,
      MDBRow,
      MDBCol,
      MDBBtn
    } from 'mdb-react-ui-kit';
    
    import './Dishes.css'

    export default function Dishes() {
      const url = 'https://the-mexican-food-db.p.rapidapi.com/';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fb91113485msh81f594f71ee52b7p16cf11jsn4407847589fd',
          'X-RapidAPI-Host': 'the-mexican-food-db.p.rapidapi.com'
        }
      };
    
      const [data, setData] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url, options);
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error(error);
          }
        };
        console.log(data);
        fetchData();
      }, []);
    
      return (
        <MDBRow>
          {data.map((item) => (
            <MDBCol key={item.id} sm='2'>
              <MDBCard id='dish-card'>
                <MDBCardBody>
                <MDBCardText>
                    <img src={item.image} alt={item.title} style={{ width: '100%' }} />
                  </MDBCardText>
                  <MDBCardTitle>Dish Title: {item.title}</MDBCardTitle>
                  <MDBCardText>Cooking difficulty: {item.difficulty}</MDBCardText>
                  
                  {/* <MDBBtn href='#'>Go somewhere</MDBBtn> */}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      );
    };
    
    // export default DataComponent;
    