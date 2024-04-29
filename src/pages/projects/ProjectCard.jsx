import {Nav} from "react-bootstrap"
import {motion} from "framer-motion"

// eslint-disable-next-line react/prop-types
export const ProjectCard = ({img,title,description,aboutLocation,demoURL}) => {
    return (
        <motion.div
            whileHover={{scale: 1.02,border: "1px solid rgb(172, 65, 255)"}}
            transition={{delay: 0.1,duration: .75,type: "tween",stiffness: 400}}
            className=" col-11 p-2  mx-auto my-3 rounded-3 shadow">
            <div className=" card  border-0" >
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={img} className="img-fluid rounded-2 w-100 h-100" alt="project-image" />
                    </div>
                    <div className="px-3 col-md-6">
                        <div className="card-body">
                            <h5 className="card-title fs-3 lh-lg"> {title} </h5>
                            <p className="card-text text-justify">{description}</p>
                            <p className="card-text"><small className="text-body-secondary">{aboutLocation}</small></p>

                            <Nav.Link href={demoURL} target='_blank' className=' text-center custom-color fs-6 fw-bold'> DEMO</Nav.Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
