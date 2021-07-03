import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import { ImgItems } from "../ImgItems";
import './Pocetna.css';
import Sat from '../Sat';


function Pocetna() {
    return (
        <div className="hero-container">
       <video src='/videos/video-1.mp4' autoPlay loop muted/>
      
    <div>
    <div className="container">
       <br></br>
        <center> <Sat></Sat><h2>Naruči i ti svoj film i seriju i uživaj ovog vikenda!</h2></center>
        </div>
      
        <div className="container">
            <div class="row">

                {ImgItems.map((item, index) => {
                    return (
                        <div class="content col-sm-4 text-center" key={index}>
                            <img class="img-responsive" src={item.url} alt="" width="100%"/>
                            <div>{item.opis}</div>
                            <Button onClick={() => { alert('Potvrda o rezervaciji filma ili označene serije je poslata putem e-mail adrese: ' + item.opis) }} buttonStyle='btn--primary'>Rezerviši svoj omiljeni film ili seriju</Button>
                        </div>
                    )
                })}
            </div>

        </div>
    </div>
    </div>
    
    );


}

export default Pocetna;