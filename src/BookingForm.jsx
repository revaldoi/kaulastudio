import React from 'react';
import NavBar from './components/NavBar'
import SectionOne from './components/SectionOne';

const styles = {
    paperContainer: {
        height: 720,
        backgroundImage: `url(${`https://www.diktatphotography.com/wp-content/uploads/2020/08/1-Tamblingan-a.jpg`})`
    }
  };

export default function BookingForm() {
    return(
        <div style={styles.paperContainer}>
            <h1>Booking Form</h1>
        </div>
    )
}

