import React from 'react';
import '../../App.css';
import './Onama.css';

import {OnamaItems}  from "../OnamaItems";
function Onama() {
    return (
        <div>
            <div className="hero-container">
        <div className="container">
            <div class="row">

                {OnamaItems.map((item, index) => {
                    return (
                        <div class="content col-sm-4 text-center" key={index}>
                          <img class="img-responsive" src={item.url} alt="" width="100%"/>
                           <div>{item.opis}</div>
                        </div>
                    )
                })}
            </div>
        </div>

      
        
        
       <video src='/videos/video-3.mp4' autoPlay loop muted/>
            
        <div>
        <div className="container">
       <center> <h2>Saznaj više o nama...</h2></center>
        <br></br><br></br><br></br>
       <h2>DVD Klub "Filmoteka" je počela sa radom u septembru 2020. godine.
          Svojom pojavom na beogradskom filmskom nebu napravili smo veliku pometnju.
         Za kratko vreme smo od početnika postali najudarniji DVD klub u gradu, a i šire. </h2>
        <div><h2>
            
        <i><br></br>Prvi smo uveli praksu iznajmljivanja filmova na više dana,
         to jest, po principu koliko filmova toliko dana zadržavanja.
          Količina filmova se uvećavala velikom brzinom, tako da i dan danas imamo čast
           da Vas obavestimo da smo <b>jedini DVD klub u Beogradu koji u svojoj ponudi ima
            filmove svih distributera u Srbiji izdate legalnim putem.</b>jedini DVD klub u Beogradu koji u svojoj ponudi ima
            filmove svih distributera u Srbiji izdate legalnim putem.</i></h2></div>  
       
        <div><h3> <br></br>DVD klub BEST je zadržao tradiciju iznajmljivanja isključivo
        originalnih izdanja na DVD.Budite sigurni da su svi filmovi koje iznajmljujete
        isključivo originali, i da će tako ostati i u budućnosti. DVD klub Filmoteka
        je veliki protivnik piraterije i uz vašu pomoć i podršku idemo dalje u toj
        bespoštednoj i nefer borbi.Zadovoljstvo nam je da Vam saopštimo, ukoliko već
        niste postali član najvećeg novosadskog DVD kluba, DVD kluba BEST,
        da smo prvi i za sad jedini klub koji u svojoj ponudi iznajmljuje preko 2800
        filmova na 10 (deset) dana bez obzira na količinu.
          <br></br>
      <center> <b><i> Svi legalni filmovi i noviteti prvo stižu u DVD klub Filmoteka!
        Dođite i uverite se zašto nam je ime baš takvo.</i></b></center>
            </h3></div>
       
        <div>
        
       </div>
  </div></div>
  </div>
    </div>

    );
}

export default Onama;