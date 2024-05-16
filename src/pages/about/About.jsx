
import {motion} from 'framer-motion';
import {fadeIn} from '../../framerConstant/variants';
export const About = () => {
    // const [ref,inView] = useInView({
    //     threshold: 0.5
    // });

    return (
        <>
            <div className="row d-flex align-items-center py-5" id="about" data-section='about' style={{minHeight: "100vh"}}>
                <div className='w-100' style={{height: "50px"}}></div>
                <motion.h1
                    variants={fadeIn("up",0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true,amount: 0.7}}
                    className="w-100 text-center"> <span className="heading-title">Abou</span>t </motion.h1>
                {/* <motion.div
                    variants={fadeIn("left",0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true,amount: 0.7}}
                    className="col-12 col-md-6  d-flex justify-content-center align-content-center  mt-55 mt-md-0 position-relative overflow-hidden h-100 ">
                    <motion.div
                        initial={{top: 150,scaleY: 1.4,scaleX: 1.2,left: 0}}
                        // whileHover={{top: 120,scaleY: 1.7,scaleX: 1.5,cursor: "pointer",type: "tween"}}
                        // initial={{top: 120,scaleY: 1.7,scaleX: 1.5,cursor: "pointer",type: "tween"}}
                        className=' w-100 h-100 position-absolute '>
                        <img src={backgroundBlob} alt="photo self" className='' />
                    </motion.div>
                    <img src={img} alt="photo self" className=' position-relative z-1 w-75' />
                </motion.div> */}
                <motion.div
                    variants={fadeIn("right",0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true,amount: 0.7}}
                    className='col-12  d-flex flex-column justify-content-center mt-5 mt-md-0 '>
                    <p className="about  fs-5 lh-lg  px-lg-4 my-4">Hello, I&apos;m Harsh Dixit, a seasoned Flutter developer with 2.5 years of dedicated experience crafting dynamic and visually stunning cross-platform mobile applications. Throughout my journey in the field, I&apos;ve honed my skills in leveraging Flutter&apos;s robust framework to deliver seamless user experiences across various devices and platforms.</p>
                    <p className="about  fs-5 lh-lg  px-lg-4 my-4">
                        Driven by a passion for innovation and a keen eye for detail, I thrive on turning ideas into polished, functional realities. My portfolio showcases a diverse range of projects, each reflecting my commitment to excellence and my ability to adapt to evolving industry trends.</p>
                    <p className="about  fs-5 lh-lg  px-lg-4 my-4">
                        From conceptualization to deployment, I specialize in translating client visions into intuitive and feature-rich applications that resonate with users. With a strong foundation in both front-end and back-end development, I bring a comprehensive approach to every project, ensuring scalability, performance, and user satisfaction.</p>
                    <p className="about  fs-5 lh-lg  px-lg-4 my-4">
                        Let&apos;s collaborate to bring your next app idea to life with the magic of Flutter!</p>
                </motion.div>
            </div>
        </>
    )
}
