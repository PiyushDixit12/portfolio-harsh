import p1 from '../../assets/projects/p1.jpg'
import p2 from '../../assets/projects//p2.jpg'
import p3 from '../../assets/projects/p3.jpg'
import p4 from '../../assets/projects/p4.jpg'
import {ProjectCard} from './ProjectCard'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerConstant/variants'

const projectData = [
    {
        img: p1,
        title: "Trader",
        description: "S Trader is a virtual trading app that helps to learn trading, now experience virtual trading with real-time quotes of financial instruments and various asset classes. Get access to a complete set of trade orders, including pending orders with various types of trade execution and tools to keep a track of your trades with a detailed trading history.",
        // aboutLocation: "currently working in S.S.I.S.M. College",
        aboutLocation: "create at September 2023 to feb 2024 ",
        // demoURL: "https://exam-easy.netlify.app/",
        demoURL: "https://exams.ssism.org/",
        android: "https://play.google.com/store/apps/details?id=com.strader.app&pli=1",
        ios: "https://apps.apple.com/in/app/s-trader/id6474853308",
        web: "",
        animationPosition: "left",
    },
    {
        img: p2,
        title: "Recite Pro ",
        description: 'Recite Pro is a fun learning experience for everyone! Whether you are a beginner or an experienced Quran reader! Recite your favorite Surah on karaoke with scrolling song! Quran anytime, anywhere. Record solo and enjoy improving your performance!',
        aboutLocation: "create at December 2023 to April 2024",
        animationPosition: "right",
        android: "https://play.google.com/store/apps/details?id=com.recitepro.app.recitepro",
        ios: "https://apps.apple.com/us/app/recitepro/id6480403594",
        web: "",
        demoURL: "https://book-store-project-by-piyushdixit.netlify.app/",
    },
    {
        img: p3,
        title: "Ocultar Información Kamaleon",
        description: " A perfect application that allows you to secretly save and hide your PDF, Word, Excel files, as well as photographs, videos, audios, among others, developed with technology and securely out of the reach of people or those who want to grab your device.Having your information such as photos and videos hidden locally is no longer enough,since a scan on the computer can reveal your files,thinking about that KAMALEON was designed to save information in the cloud,which you will have access to.with your username and password.",
        aboutLocation: "created at june 2023 to september 2023",
        demoURL: "https://fashi-ecommerce-ui.netlify.app/",
        animationPosition: "left",
        android: "https://play.google.com/store/apps/details?id=com.kamaleon.app",
        ios: "https://apps.apple.com/dk/app/ocultar-informacion-kamaleon/id6473605038",
        web: "",
    },{
        img: p4,
        title: "HCME",
        description: "HCME is an document which is used to read an author novel in form of vedio , document and pdf file. HCME also provide save vedio locally to read when internet is not available.",
        aboutLocation: "created at june to august 2023",
        demoURL: "https://fashi-ecommerce-ui.netlify.app/",
        animationPosition: "left",
        android: "",
        ios: "",
        web: "",
    },
];

export const Projects = () => {
    return (
        <div style={{minHeight: "100vh"}} className='py-5' data-section='project' id="project">
            <div className='w-100' style={{height: "50px"}}></div>

            <motion.h1 variants={fadeIn("right",0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: true,amount: 0.7}}
                className='w-100 text-center pt-5' > <span className='heading-title'>Project</span>s</motion.h1>
            <div
                className=" row my-5 py-5">
                {/* <div className=" col-11 p-2  mx-auto rounded-3 shadow">
                    <div className=" card  border-0" >
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src={examEasy} className="img-fluid rounded-start w-100 h-100" alt="..." />
                            </div>
                            <div className="px-3 col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title fs-3 lh-lg">Exam Easy </h5>
                                    <p className="card-text text-justify">I developed this project to address the real-world challenge of deterring student cheating. With its user-friendly and responsive design, it promotes academic integrity. Additionally, I&apos;ve implemented features such as voice recording, auto submission on tab switch and time expiration, along with random photo capture and screenshots to enhance security.</p>
                                    <p className="card-text"><small className="text-body-secondary">currently working in S.S.I.S.M. College</small></p>

                                    <Nav.Link href='https://exam-easy.netlify.app/' target='_blank' className=' text-center custom-color fs-6 fw-bold'> DEMO</Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {projectData && projectData.map((projectDetail,index) => {
                    return <ProjectCard key={index} {...projectDetail} />
                })}
            </div>
        </div>
    )
}
