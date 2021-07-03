import React from 'react';
import KontaktForma from '../../components/KontaktForma';

function Kontakt(){
    const kontakt={
        telefon: "064/0453574"
    }
    return(
        <div className="hero-container">
        <video src='/videos/video-2.mp4' autoPlay loop muted/>
        <div className="container" style={{marginTop: 2 + 'em'}}>
            <h2>U koliko ne možete da pronađete svoj omiljeni film ili seriju, pišite nam ili nas pozovite na broj</h2>
            <KontaktForma/>
            <p>Takođe, možete nas pozvati na broj {kontakt.telefon} </p>
            <br></br>
        </div>
        </div>
    )
}

export default Kontakt;