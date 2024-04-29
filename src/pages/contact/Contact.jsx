// import {SlLocationPin} from "react-icons/sl";
import {IoLocationSharp} from "react-icons/io5";
import {IoIosMail} from "react-icons/io";
import {FaPhoneAlt} from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Row,Col} from 'react-bootstrap';
import {motion} from "framer-motion";
import {fadeIn} from "../../framerConstant/variants";
import {ErrorMessage,Formik} from "formik";
import * as yup from 'yup'
import {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
const validation = yup.object().shape({
    name: yup.string().min(2).max(50).required("name is require !"),
    email: yup.string().email("enter a valid email").required("email is require !"),
    subject: yup.string().min(2).max(150).required("subject is require !"),
    message: yup.string().min(10).max(1500).required("message is require !"),
})
export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        // e.preventDefault();
        console.log(e);
        emailjs.sendForm('service_hudclxo','template_43judnv',form.current,{
            publicKey: 'hmcfOZhjGCeHLqW1m',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...',error.text);
                },
            );
    };
    return (
        <div id="contact" style={{minHeight: "100vh"}} className=" my-5 py-5" data-section='contact'>

            <motion.h1
                variants={fadeIn("left",0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true,amount: 0.7}}
                className="w-100 text-center py-5"> <span className=" heading-title">Contac</span>t</motion.h1>
            <div className="py-5">
                <>
                    <section
                        className="mb-5">
                        <motion.p variants={fadeIn("right",0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{once: true,amount: 0.7}} className="text-center w-responsive mx-auto mb-5">
                            Do you have any questions? Please do not hesitate to contact me directly.
                        </motion.p>
                        <div className="row">
                            <motion.div variants={fadeIn("right",0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{once: true,amount: 0.7}} className="col-md-9 mb-md-0 mb-5">
                                <Formik
                                    initialValues={{name: "",email: "",subject: "",message: ""}}
                                    validationSchema={validation}
                                    onSubmit={(values,{resetForm}) => {
                                        console.log(values);
                                        sendEmail();
                                        Swal.fire({
                                            title: "Thanks!",
                                            text: "Thank you for contacting me , I will reach you soon...  ",
                                            icon: "success"
                                        });

                                        resetForm();
                                    }}
                                >
                                    {({handleChange,handleSubmit,handleBlur,values}) => {
                                        return <Form
                                    id="contact-form"
                                    name="contact-form"
                                    className="form"
                                            ref={form}
                                            onSubmit={handleSubmit}
                                >
                                    <Row>
                                        <Col md={6}>
                                            <Form.Group className=" form-floating mb-3 rounded-3 border ">
                                                        <Form.Control type="text"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.name}
                                                            id="name"
                                                            name="name" />
                                                <Form.Label htmlFor="name">Your name</Form.Label>
                                            </Form.Group>
                                                    <ErrorMessage component={"div"} className=" text-danger pb-2 ps-1" name="name" />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Group className="form-floating mb-3  rounded-3 border">
                                                        <Form.Control
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email} />
                                                <Form.Label htmlFor="email">Your email</Form.Label>

                                            </Form.Group>
                                                    <ErrorMessage component={"div"} className=" text-danger pb-2 ps-1" name="email" />
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md={12}>
                                            <Form.Group className="form-floating mb-3  rounded-3 border">
                                                        <Form.Control
                                                            type="text"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.subject}
                                                            id="subject" name="subject" />
                                                <Form.Label htmlFor="subject">Subject</Form.Label>
                                            </Form.Group>
                                                    <ErrorMessage component={"div"} className=" text-danger pb-2 ps-1" name="subject" />

                                        </Col>
                                    </Row>

                                    <Row>
                                                <Col md={12} className="pb-2">
                                            <Form.Group className="form-floating mb-3  rounded-3 border">
                                                <Form.Control
                                                    as="textarea"
                                                    id="message"
                                                    name="message"
                                                    rows={2}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.message}
                                                />
                                                <Form.Label htmlFor="message">Your message</Form.Label>
                                            </Form.Group>
                                                    <ErrorMessage component={"div"} className=" text-danger pb-2 ps-1" name="message" />

                                        </Col>
                                            </Row>
                                <div className="text-center text-md-left p-3">
                                                <button
                                        className="btn btn-custom"
                                                    type="submit"

                                    // onclick="document.getElementById('contact-form').submit();"
                                    >
                                        Submit
                                                </button>
                                </div>
                                        </Form>
                                    }}
                                </Formik>
                                <div className="status" />
                            </motion.div>

                            <motion.div variants={fadeIn("right",0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{once: true,amount: 0.7}} className="col-md-3 text-center">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        {/* <SlLocationPin size={30} className="custom-icon" /> */}
                                        <IoLocationSharp size={30} className="custom-icon" />
                                        <p>bijapur, Dewas,(M.P.) India</p>
                                    </li>
                                    <li>
                                        <FaPhoneAlt size={30} className="custom-icon" />
                                        <p>+91 91713 04392</p>
                                    </li>
                                    <li>
                                        <IoIosMail size={40} className="custom-icon" />
                                        <p>dixitp034@gmail.com</p>
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
