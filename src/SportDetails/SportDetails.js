import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';
import male from "../Photo/Rectangle 28.png"
import female from "../Photo/female.png"
import FacebookIcon from "../Icon/Facebook.png"
import TwitterIcon from "../Icon/Twitter.png"
import YouTubeIcon from "../Icon/YouTube.png"
import { faCalendarCheck, faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SportDetails.css'
const SportDetails = () => {
    const {idTeam} = useParams();
    const [sportDetails,setSportDetails] = useState({});
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setSportDetails(data.teams[0]) )
    },[idTeam,setSportDetails])
    const {  strStadiumThumb, strTeamBadge,   strAlternate,   intFormedYear,  strCountry, strGender, 
             strStadiumDescription, strDescriptionEN, strFacebook, strTwitter, strYoutube}
    = sportDetails;

    return (
        <>
          <Navbar></Navbar>
            <div style={{backgroundColor:"rgba(22, 29, 51, 0.998)"}}>
                <Card style={{border:"none"}}>
                    <Card.Img src={strStadiumThumb} alt="Card image" className="banner"/>
                    <Card.ImgOverlay className="d-flex align-items-center justify-content-center ">
                        <Card.Img src={strTeamBadge} alt="Logo" className="bannerLogo" />
                    </Card.ImgOverlay>
                </Card>
            
            <Container>
                 <Card className="m-4" style={{backgroundColor:"rgb(22, 41, 216)",borderRadius:"10px"}}>
                 <div className="row align-items-center m-3">
                    <div className="col-md-7 text-white">
                       <h2> {strAlternate}</h2><br />
                       <h6 className="mb-3"> <FontAwesomeIcon className="mr-3"  icon={faCalendarCheck} /> Founded : {intFormedYear} </h6>
                       <h6 className="mb-3"> <FontAwesomeIcon className="mr-3" icon={faFlag}/> Country : {strCountry}</h6>
                       <h6 className="mb-3"> <FontAwesomeIcon className="mr-3" icon={faFutbol}/> Sport Type : Football</h6>
                       <h6 className="mb-3"> <FontAwesomeIcon className="mr-3" icon={faVenusMars}/> Gender : {strGender}</h6>
                     </div>
                      <div className="col-md-5">
                      {
                                strGender === 'Female' ? <img style={{width:"100%"}} src={female} alt="..." />
                                                     : <img style={{width:"100%"}} src={male} alt="..." />
                      } 
                     
                      </div>
                  </div>
                 </Card>
            </Container>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col style={{ maxWidth: "900px",color:"#cec6c6ce" }}>
                        <p>{strStadiumDescription}</p>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center mt-3">
                    <Col style={{ maxWidth: "900px" ,color:"#cec6c6ce"}}>
                        <p>{strDescriptionEN}</p>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <img style={{ maxWidth: "50px" }} src={TwitterIcon} alt="" />
                    </a>
                    <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <img style={{ maxWidth: "50px", margin: "0 10px" }} src={FacebookIcon} alt="" />
                    </a>
                    <a href={`https://${strYoutube}`} target="_blank" rel="noopener noreferrer">
                        <img style={{ maxWidth: "50px" }} src={YouTubeIcon} alt="" />
                    </a>
                </Row>
            </Container>
           
            </div>
       </>
              
    
    );
};

export default SportDetails;
