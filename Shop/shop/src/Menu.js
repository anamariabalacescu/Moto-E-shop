import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Modal, Button, NavbarBrand } from 'react-bootstrap';
import './styles/Menu.css'
import Signin from './Signin.js';
import Signup from './Signup.js';
import SearchBar from './SearchBar.js';

import logo from './img/logo.png';
import {FaRegUser} from '@react-icons/all-files/fa/FaRegUser'
import {FaHeart} from '@react-icons/all-files/fa/FaHeart'
import {FaCoins} from '@react-icons/all-files/fa/FaCoins'
import {FaOpencart} from '@react-icons/all-files/fa/FaOpencart'
import {FaRegTimesCircle} from '@react-icons/all-files/fa/FaRegTimesCircle'
import {FaUserCog} from '@react-icons/all-files/fa/FaUserCog'
import { MoveRight } from 'lucide-react';
import { useUser } from './hooks/useUser.js';

function Menu() {
  const [showModal, setShowModal] = useState(false);
  const [isSignupMode, setIsSignupMode] = useState(false); // State variable for modal mode

  const [cartTabPosition, setCartTabPosition] = useState(0); // State variable for the position of the cartTab

  const {user, logout} = useUser();


  const handleClose = () => {
    setShowModal(false);
    setIsSignupMode(false); // Reset to sign-in mode when closing the modal
  };

   // Function to toggle the cart tab
   const toggleCartTab = () => {
    setCartTabPosition(cartTabPosition === 0 ? -300 : 0); // Toggle the cartTab position
  };
  
  const handleShow = () => setShowModal(true);

  // Function to switch the modal mode
  const switchModalMode = () => {
    setIsSignupMode(!isSignupMode);
  };

  // Function to open signup form
  const openSignupForm = () => {
    setIsSignupMode(true);
  };



  useEffect(()=>{
    // console.log('first');
  },[])

  useEffect(()=>{
    // console.log('changed');
    // debugger
  }, [showModal])

  return (
    <>
    <Navbar expand="lg" className="Menu " data-bs-theme="dark">
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <img src={logo} alt="Logo" style={{maxHeight: '2rem', maxWidth: '2rem'}} />
        Two wheeled heart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/shop">Shop</Nav.Link>
            { user &&
            <NavDropdown title="Your account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile"><FaRegUser/> Profile</NavDropdown.Item>
              {/* <NavDropdown.Item href="/settings"><FaUserCog/> Settings</NavDropdown.Item>
              <NavDropdown.Item href="/cart"><FaOpencart/> Your cart</NavDropdown.Item>
              <NavDropdown.Item href="/cart"><FaCoins/> Store credit</NavDropdown.Item>
              <NavDropdown.Item href="/cart"><FaHeart/> Favourites</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout"
              onClick={ (e) => {
                e.preventDefault();
                logout();
              }}
              ><FaRegTimesCircle color='red'/> Log out</NavDropdown.Item>
            </NavDropdown>
            }
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <SearchBar/>
        </Nav>
        <Nav style={{marginRight:'20px'}}>
          <Container style={{position:'relative'}}>
          <Nav.Link><FaOpencart className='h4' color="#fff" onClick={toggleCartTab}/>
          <span className='span'>0</span>
          </Nav.Link>
          </Container>
          </Nav>
        {
          !user &&
          <Button onClick={handleShow} variant='outline-primary'>Sign in</Button>
        }
    </Navbar>

    <Modal show={showModal} onHide={handleClose} className='custom-modal'>
     <Modal.Header closeButton style={{backgroundColor:'#1f1f1f'}}>
       <Modal.Title  style={{color:'white'}}>{isSignupMode ? "Sign Up" : "Sign In"}</Modal.Title>
     </Modal.Header>
     <Modal.Body  style={{backgroundColor:'#454545'}}>
      {isSignupMode ? <Signup handleClose={handleClose} /> : <Signin handleClose={handleClose} />}
       {/* Place your sign-in form or content here */}
     </Modal.Body>
     <Modal.Footer style={{backgroundColor:'#1f1f1f', justifyContent:'space-between'}}>
          {
            !isSignupMode &&
            <Button variant="secondary" onClick={openSignupForm}>
                Sign up
            </Button>
          }
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
       {/* You can add more buttons for additional actions if needed */}
     </Modal.Footer>
    </Modal>
   
    <div className='cartTab' style={{ transform: `translateX(${cartTabPosition}px)` }}>
      <h1 class='cart-title' style={{ marginLeft: cartTabPosition + 120}}>Shopping Cart</h1>
        <div className='listCart' style={{ marginLeft: cartTabPosition + 120 }}>
          {/* Render items here */}
        </div>
        <div class="btn">
          <Button className='checkOut' variant='outline-light'>Check Out</Button>
          <Button className='close' variant='outline-light' onClick={toggleCartTab}>CLOSE</Button>
        </div>
    </div>

    </>
    
  );
}


export default Menu;