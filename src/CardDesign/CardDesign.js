import React from 'react';
import { Link } from 'react-router-dom';

const CardDesign = (props) => {
    const {strTeamBadge,strAlternate,idTeam} = props.card
    return (
        <div className="container">
            <div className="card mb-4">
                <img style={{width:"50%",height:"150px",paddingTop:'30px',margin:"0 auto"}} src={strTeamBadge} alt="" />
             <div className="card-body text-center">
                     <h5>{strAlternate} </h5>
                     <p>Sport Type :  Football</p>
                    <Link style={{textDecoration:"none"}} to={`/sportDetails/${idTeam}`}>
                        <button className="btn btn-primary">Explore ---</button>
                     </Link>
               </div>
          </div>
       </div>
    );
};

export default CardDesign;