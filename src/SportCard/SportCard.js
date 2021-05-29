import React, { useEffect, useState } from 'react';
import CardDesign from '../CardDesign/CardDesign';
import './SportCard.css'

const SportCard = () => {
    const [card,setCard] = useState([])
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => {
              setCard(data.teams.slice(0,16))
            })
            .catch(error => console.log(error))
    },[])
    return (
        <div id="card-header" className="pt-5" style={{backgroundColor:"black"}}>
            
            {
                card.map(cd => <CardDesign card={cd} key={cd.idTeam}></CardDesign>)
            }
         
        </div>
    );
};

export default SportCard;