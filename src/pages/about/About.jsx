import img from '../../assets/photo-portfolio.png'
import backgroundBlob from '../../assets/blobAbout.svg'
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
                <motion.div
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
                </motion.div>
                <motion.div
                    variants={fadeIn("right",0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true,amount: 0.7}}
                    className='col-12 col-md-6  d-flex justify-content-center mt-5 mt-md-0 '>
                    <p className="about  fs-5 lh-lg  px-lg-4 my-4">Hey! I&apos;m Piyush Dixit , a passionate frontend developer excited about building websites that make people smile. I&apos;m all about learning and love working with others to make cool stuff happen. Currently on the lookout for a job where I can grow and contribute my passion. Let&apos;s team up and create awesome online experiences together!</p>
                </motion.div>
            </div>
        </>
    )
}
