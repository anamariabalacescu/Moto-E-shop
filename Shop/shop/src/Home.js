import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from './img/vrod1.jpg';
import land from './img/landscape.jpg';
import high from './img/highway.jpg';
import town from './img/town.jpg';
import repair from './img/repair.jpg';
import Feature from './HomeFeature';
import './styles/Home.css';
import HomeFeature from './HomeFeature';
import tools from './img/tools.jpg';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <div>  
      {/* <img src = {img} style={{width:"100%", height:"175px"}} ></img> */}
      <br/><br/><h5 style={{color:'aliceblue', fontFamily:'-moz-initial'}}>Welcome to <i><b>Two wheeled heart</b></i>, where we believe that life is better with two wheels and a healthy dose of humor!<br/>We live our life by the motto: <i>"Four wheels move your body. Two wheels move your soul."</i><br/>And if you're here, you're probably looking to give your soul a good ol' workout!</h5><br/>
      <div className='carousel' align="center">
        <Carousel data-bs-theme="dark" fade>
        <Carousel.Item>
            <img
            className="photo"
            src={land}
            alt="Landscape from heaven"
            />
            <Carousel.Caption>
            <h3 className='photo-text'>View life from<br/>a different perspective</h3>
            <p className='photo-text' style={{fontSize:'20px'}}>Be free on your own terms.<br/>Get on your bike.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="photo"
            src={high}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h3 className='photo-text'>Highway to your dreams<br/></h3>
            <p className='photo-text' style={{fontSize:'20px'}}>It's your chance to chase your life.<br/>Ride the wind on two wheels.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="photo"
            src={town}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3 className='photo-text'>The town is loud <br/> but freedom is louder<br/></h3>
            <p className='photo-text' style={{fontSize:'20px'}}>Why wait for the bus when you<br/>can roar on the streets.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="photo"
            src={repair}
            alt="Fourth slide"
            />
            <Carousel.Caption>
            <h3 className='photo-text'>Need a fix but don't trust<br/>the mechanic?</h3>
            <p className='photo-text' style={{fontSize:'20px'}}>Get the best tools and bike parts<br/>from our shop. Trust us. Your ride<br/>will thank you.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>

        <Feature className="ft"></Feature>

        <div className='ptext'>
          Whether you're a seasoned rider or a newbie gearing up for your first adventure, you've stumbled upon your new favorite hangout spot. From outrageous tales of motorcycle mishaps to expert advice on how to rock that leather jacket like a pro, we've got it all.
        </div>

        <hr style={{color:'white'}}/> <br/>
        <div className='tools-container'>
          <Container>
            <figure>
              <img src={tools} style={{justifyContent:'left', width:'50%', maxHeight:'400px', justifyContent:'left', marginRight:'20px'}} align='left'></img>
              <figcaption>
                <h2 style={{color:'aliceblue', fontFamily:'-moz-initial', textAlign:'left', padding:'40px'}}>Stuck on the road? Must be glad you got your tool supply from us.</h2>
                <p style={{color:'aliceblue', fontFamily:'-moz-initial', fontSize:'20px', textAlign:'justify'}}>Don't let any event catch you unprepared. Introducing our premium line of motorcycle tools, meticulously designed to empower riders like you to conquer every ride with ease. From tire repair kits to versatile multi-tools, our range ensures you're always ready for the road. Gear up, stay safe, and ride on with confidence. Explore our collection today and elevate your riding experience.</p>
              </figcaption>
            </figure>
          </Container>
        </div>
        <div style={{ clear: 'both' }}></div>
        <hr style={{color:'white'}}/>
    </div>
    
  )
}

export default Home