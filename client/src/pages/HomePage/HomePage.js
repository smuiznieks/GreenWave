import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { withUser } from '../../services/withUser';
import './HomePage.css';

class HomePage extends Component {

  render() {

    const divStyle = {
      backgroundImage: "url('./assets/images/TreeGrowingOnAGreenHillWithSunshine.jpg')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      zIndex: -1,
      color: "white",
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.75
    };
     const divStyle1 = {
      backgroundImage: "url('./assets/images/lightGreen.jpg')",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      zIndex: -1,
      color: "white",
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.50
    };
    return (
      <div className="Container">
        <div className="Heading">
        <div style={divStyle1}/>

          

          <h1>Welcome to GreenWave</h1></div>



        
        <div className="main-container" style={{position: 'relative', width: '100%', height:'100%'}}>
        <div style={divStyle}/>

        
        <h2><br/><br/>          GreenWave is a community of environmentally<br/>
        conscious individuals looking to promote<br/>
        more sustainable living in their local communities<br/><br/><br/><br/><br/><br/></h2>

        <h2>Join the GreenWave Community!</h2>

        </div>


        </div>
        );
  };
}

export default withUser(HomePage);
