import img from '../../assets/photo-portfolio 2.png'
import backgroundBlob from '../../assets/blob.svg'
import {TiSocialLinkedin} from "react-icons/ti";
import {FaWhatsapp} from "react-icons/fa";
import {SiGithub} from "react-icons/si";
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerConstant/variants';
import {TypeAnimation} from 'react-type-animation';
export const Home = () => {

    return (
        <>
            <div className="row d-flex  align-items-center justify-content-between   px-2 pt-5 pb-0" data-section='home' id="home" style={{minHeight: "100vh"}}>
                {/* <div className='w-100' style={{height: "50px"}}></div> */}
                <div className="col-12 col-lg-6    d-flex   flex-column ">
                    {/* <motion.span
                        variants={fadeIn("up",0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true,amount: 0.7}}
                        className='fs-1  fw-bold d-inline-block'
                    >
                        Hi ,👋
                    </motion.span> */}
                    <motion.span
                        variants={fadeIn("up",0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true,amount: 0.7}}
                        className='fs-3 lh- fw-bold d-inline-block'
                    >
                        <TypeAnimation
                            sequence={[
                                'Flutter Developer',
                                2000,
                                'Mobile App Developer',
                                2000,
                            ]}
                            wrapper="span"
                            speed={10}
                            style={{display: 'inline-block',color: "rgb(21,181,114)"}}
                            repeat={Infinity} />
                        {/* <span style={{color: "rgb(21,181,114)"}}> Piyush Dixit</span> */}
                    </motion.span>

                    <motion.span
                        variants={fadeIn("up",0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true,amount: 0.7}}
                        className='fs-1 text-white fw-bold d-inline-block'
                    >
                        Harsh Dixit
                    </motion.span>
                    <motion.span
                        variants={fadeIn("up",0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true,amount: 0.7}}
                        className='fs-6 text-white-50 fw-bold d-inline-block'>
                        currently  working on <span className=' text-white'>web wider&apos;s solutions</span>
                    </motion.span>
                    <motion.span
                        variants={fadeIn("up",0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: true,amount: 0.7}}
                        className='fs-6 text-white-50 fw-bold d-inline-block'>
                        Need a full custom app ? <a href="#" className=' text-white custom-icon text-decoration-none'>let&apos;s talk</a>
                    </motion.span>    

                    <motion.ul
                        variants={fadeIn("up",0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false,amount: 0.7}}
                        className="nav fs-1 lh-lg mt-3  d-flex justify-content-evenly justify-content-md-start  align-items-center list-unstyled d-flex">
                        <li className="ms-sm-0"><a className="text-white" title="linkedin" target='_blank' rel='noreferrer' href="https://linkedin.com/in/harsh-dixit-1247a1233"><TiSocialLinkedin className='custom-icon' size={40} /></a></li>
                        <li className="ms-sm-4"><a className="text-white" title="Github" target='_blank' href="https://github.com/PiyushDixit12" rel="noreferrer"><SiGithub className='custom-icon' size={30} /></a></li>
                        <li className="ms-sm-4">
                            <a className="text-white" target='_blank' title="whats'app" href="https://web.whatsapp.com/" rel="noreferrer"><FaWhatsapp className='custom-icon' size={30} /></a></li>
                    </motion.ul>
                </div>
                <motion.div
                    variants={fadeIn("down",0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true,amount: 0.7}}
                    className="col-12 col-lg-6  d-flex justify-content-center align-items-center mt-5 mt-md-0 position-relative overflow-hidden  ">
                    <motion.div
                        initial={{top: -0,scale: 1.22,left: 0}}
                        // whileHover={{top: -50,cursor: "pointer",type: "tween"}}
                        className=' position-absolute  w-100 h-100'>
                        <img src={backgroundBlob} alt="photo self " />
                    </motion.div>
                    <motion.img

                        src={img} alt="photo self" className=' position-relative z-1' style={{width: "70%",height: "60%"}} />
                </motion.div>

            </div>
        </>
    )
}
