import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import WeddingWeb from './weddingWeb/WeddingWeb';
import InvitationCards from './InvitationCards/InvitationCards';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon
  } from 'mdb-react-ui-kit';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
function App() {
    const [showNav, setShowNav] = useState(false);
    return (
        <>
            <BrowserRouter>
                <MDBNavbar expand='lg' light bgColor='light'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>
                            <img className="wed_couple_header wed_white_couple animated extra" src="wedding/images/black_white_couple-50x45.png" alt=""/>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler
                            type='button'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowNav(!showNav)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                        <MDBCollapse navbar show={showNav}>
                            <MDBNavbarNav>
                                <MDBNavbarItem>
                                    {/* <MDBNavbarLink href='/'>Features</MDBNavbarLink> */}
                                    <MDBNavbarLink><Link to="/" style={{color:'rgba(0,0,0,.55)'}}>WEDDING</Link></MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                <MDBNavbarLink><Link to="/InvitationCards" style={{color:'rgba(0,0,0,.55)'}}>INVITATION</Link></MDBNavbarLink>
                                    {/* <MDBNavbarLink href='/InvitationCards'>Pricing</MDBNavbarLink> */}
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
                <Routes>
                    <Route exact path='/' element={< WeddingWeb />}></Route>
                    <Route exact path='/InvitationCards' element={< InvitationCards />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
