import {useEffect,useState} from 'react';
import {Navbar,Nav,Offcanvas} from 'react-bootstrap';
import logo from '../../assets/logo-no-background.png'
export function Header() {
    const [activeLink,setActiveLink] = useState('home');

    const handleNavItemClick = (link) => {
        if(activeLink == link) {
            document.querySelector(".nav__link.active").classList.remove("active");
        }
        // setActiveLink(link);
        // }
    };

    useEffect(() => {
        const sections = document.querySelectorAll("[data-section]");
        window.addEventListener("scroll",() => {
            let currenSection;
            sections.forEach(section => {
                if(window.scrollY >= section.offsetTop) {
                    currenSection = section.id;
                    // if(activeLink != currenSection) {
                    // setActiveLink(currenSection);
                    // const activeLink = document.querySelectorAll(".nav__link.active");
                    // activeLink.forEach((link) => {
                    //     link.classList.remove("active")
                    // document.querySelector(".nav__link.active").classList.remove("active");
                    // });
                    setActiveLink(currenSection);
                    // }
                }
            });
            const activeLink = document.querySelectorAll(".nav__link");
            activeLink.forEach((link) => {
                if(link.href.includes(currenSection)) {
                    document.querySelectorAll(".nav__link.active").forEach(val => val.classList.remove("active"))
                    link.classList.add("active")
                }
            });
        });
    },[]);
    return (
        <Navbar expand="md" id='header' className=" position-fixed z-3 w-100 start-0 d-flex justify-content-between  p-2 px-md-5 rounded-2 bg-white shadow">
            {/* <div className="px-2"><h4>Piyush Dixit</h4></div> */}
            <Navbar.Brand href="#home" className=' ps-4  fs-4 fst-italic ' style={{color: "#ac41ff"}}>
                {/* Piyush_Dixit */}
                <img src={logo} width={80} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='offCanvasNavbar-expand-md' />
            <Navbar.Offcanvas id={`offCanvasNavbar-expand-md`}
                aria-labelledby={`offCanvasNavbarLabel-expand-md`}
                placement="end"   >

                <Offcanvas.Header closeButton closeVariant='purple' ></Offcanvas.Header>
                <Offcanvas.Body className='w-100 d-flex justify-content-end'>
                    <Nav className="me-auto me-md-0 h-25 d-flex justify-content-between">
                        <Nav.Link
                            href="#home"
                            className={`nav__link fs-5 text-black text-decoration-none mx-3 ${activeLink === 'home' ? 'active' : ''
                                }`}
                            onClick={() => handleNavItemClick('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={`fs-5 nav__link text-black text-decoration-none mx-3 ${activeLink === 'about' ? 'active' : ''
                                }`}
                            onClick={() => handleNavItemClick('about')}
                        >
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={`fs-5 nav__link text-black text-decoration-none mx-3 ${activeLink === 'skills' ? 'active' : ''
                                }`}
                            onClick={() => handleNavItemClick('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#project"
                            className={`fs-5 nav__link text-black text-decoration-none mx-3 ${activeLink === 'project' ? 'active' : ''
                                }`}
                            onClick={() => handleNavItemClick('project')}
                        >
                            Project
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            className={`fs-5 nav__link text-black text-decoration-none mx-3 ${activeLink === 'contact' ? 'active' : ''
                                }`}
                            onClick={() => handleNavItemClick('contact')}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>

            </Navbar.Offcanvas>

        </Navbar>
    );
}
