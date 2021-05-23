import React from 'react';
import { Container } from "@material-ui/core";
import Button from '@material-ui/core/Button';

export default function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <img src="/largest-vaccine-banner.jpeg" alt="banner" style={{width: 800,marginTop: 5}} />
        <img src="/banner2.png" alt="banner2" style={{width: 800,marginTop: 5}} />
        <Button variant="contained" color="primary" href="https://prod-cdn.preprod.co-vin.in/assets/pdf/User_Guide_Citizen%20registration_18+.pdf" target="_blank">
          Know how to book your appointment
        </Button>
        <Button variant="contained" color="secondary" href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf" target="_blank">
          Dos and Don'ts
        </Button>
        <img src="/banner3.png" alt="banner3" style={{width: 800,marginTop: 5}} />
      </Container>
    </div>
  );
}
  