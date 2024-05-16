// import {SlLocationPin} from "react-icons/sl";
import {IoLocationSharp} from "react-icons/io5";
import {IoIosMail} from "react-icons/io";
import {FaPhoneAlt} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import {motion} from "framer-motion";
import {fadeIn} from "../../framerConstant/variants";


export const Contact = () => {

    return (
        <div id="contact" className="" data-section='contact'>


            <div className="py-2">
                <>
                    <section
                        className="-5">
                        <div className="row">


                            <motion.div variants={fadeIn("right",0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{once: true,amount: 0.7}} className="col text-center">
                                <ul className="list-unstyled d-flex flex-column flex-sm-row flex-wrap justify-content-between align-items-center mb-0">
                                    <li className=" mb-3">
                                        {/* <SlLocationPin size={30} className="custom-icon" /> */}
                                        <IoLocationSharp size={30} className="custom-icon" /><br />
                                        <span>3421 sector E sudama nagar</span><br />
                                        <span> near sent Mary champion school,  </span><br />
                                        <span>indore (M.P.) India  </span><br />
                                    </li>
                                    <li>
                                        <FaPhoneAlt size={30} className="custom-icon" />
                                        <p>+91 82695 28451 </p>
                                    </li>
                                    <li>
                                        <IoIosMail size={40} className="custom-icon" />
                                        <p>harshdixit991@gmail.com</p>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </section>
                </>

            </div>
        </div>
    )
}
