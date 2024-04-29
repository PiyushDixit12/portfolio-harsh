import {TiSocialLinkedin} from "react-icons/ti";
import {TiSocialGithub} from "react-icons/ti";
import {IoIosMail} from "react-icons/io";
import {Container} from "react-bootstrap";
export const Footer = () => {
    return (
        <>
            <footer className=" px-0 px-sm-3  p-3 mt-5 py-5 border-top " style={{backgroundColor: "rgb(172, 65, 255)"}}>
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div></div>   
                <Container className="d-flex flex-wrap justify-content-between align-items-center ">

                    <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-start align-items-center">
                        <span className="mb-3 mb-md-0 text-white fs-5">© 2024 all rights are reserved. </span>
                    </div>

                    <ul className="nav col-12 col-md-4 d-flex justify-content-evenly justify-content-md-end  align-items-center list-unstyled d-flex">
                        <li className="ms-sm-3"><a className="text-white" title="Github" target='_blank' href="https://github.com/PiyushDixit12" rel="noreferrer"><TiSocialGithub size={40} /></a></li>
                        <li className="ms-sm-3"><a className="text-white" title="linkedin"
                            target='_blank' rel='noreferrer' href="https://linkedin.com/in/piyush-dixit-37066724a"><TiSocialLinkedin size={40} /></a></li>
                        <li className="ms-sm-3"><a className="text-white" title='e-mail'

                            rel="noreferrer" href="mailto:dixitp034@gmail.com"><IoIosMail size={40} /></a></li>
                    </ul>
                    <p className="w-100 text-center fs-5 pt-3 text-white"> This website is created with ❤️ by Piyush Dixit.</p> 
                </Container>
            </footer>
        </>
    )
}
