import examEasy from '../../assets/exam-easy.png'
import bookStore from '../../assets/book-store.png'
import fashionEcommerce from '../../assets/fashion-ecommerce.png'
import {ProjectCard} from './ProjectCard'
import {motion} from 'framer-motion'
import {fadeIn} from '../../framerConstant/variants'

const projectData = [
    {
        img: examEasy,
        title: "Exam Easy",
        description: "I developed this project to address the real-world challenge of deterring student cheating. With its user-friendly and responsive design, it promotes academic integrity. Additionally, I've implemented features such as voice recording, auto submission on tab switch and time expiration, along with random photo capture and screenshots to enhance security.",
        // aboutLocation: "currently working in S.S.I.S.M. College",
        aboutLocation: "OCT-2023 to JAN-2024 at SSS company",
        // demoURL: "https://exam-easy.netlify.app/",
        demoURL: "https://exams.ssism.org/",
        animationPosition: "left"
    },
    {
        img: bookStore,
        title: "Book Store",
        description: 'I created a Bookstore project allowing users to search by author, fiction, and non-fiction categories. The website is responsive, adapting to various devices seamlessly. Additionally, I implemented unit testing using the Testing Library with ReactJS for robust functionality. Firebase integration ensures efficient data management and storage.',
        aboutLocation: "JAN-FEB 2024 for Capstone project OdinSchool",
        animationPosition: "right",
        demoURL: "https://book-store-project-by-piyushdixit.netlify.app/",
    },
    {
        img: fashionEcommerce,
        title: "Fashion Ecommerce",
        description: "I created a fashion ecommerce clone inspired by Colorlib's website template to showcase my UI design and frontend skills.Developed using HTML,CSS,and Bootstrap,it's fully responsive.This project solely aims to demonstrate my ability to craft visually appealing user interfaces for online shopping experiences.",
        aboutLocation: "Nov 2023 for demonstrate UI designing ",
        demoURL: "https://fashi-ecommerce-ui.netlify.app/",
        animationPosition: "left"

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
