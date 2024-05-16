import {Nav} from "react-bootstrap"
import {motion} from "framer-motion"

// eslint-disable-next-line react/prop-types
export const ProjectCard = ({img,title,description,aboutLocation,ios,android,web}) => {
    return (
        <motion.div 
            whileHover={{scale: 1.02,border: "1px solid rgb(21,181,114)"}}
            transition={{delay: 0.1,duration: .75,type: "tween",stiffness: 400}}
            className=" col-md-6 p-2  mx-auto my-3 rounded-3 shadow">
            <div className=" card  border-0" >
                <div className=" g-0">
                    <div className="col d-flex justify-content-center align-items-center">
                        <img src={img} style={{maxHeight: "300px"}} className="img-fluid rounded-2 w-100 h-100" alt="project-image" />
                    </div>
                    <div className="px-3 col">
                        <div className="card-body">
                            <h5 className="card-title text-white fs-3 lh-lg"> {title} </h5>
                            <p className="card-text text-justify text-white-50">{description}</p>
                            <p className="card-text w-auto"><small className=" text-light-emphasis">{aboutLocation}</small></p>

                            {android != "" && android != null && <Nav.Link href={android} target='_blank' className=' text-center d-inline-block me-3  custom-color fs-6 fw-bold'> Android</Nav.Link>}

                            {web != "" && web != null && <Nav.Link style={{color: "blue"}} href={web} target='_blank' className=' text-center d-inline-block  me-3  fs-6 fw-bold'> Web</Nav.Link>}
                            {ios != "" && ios != null && <Nav.Link style={{color: "yellow"}} href={ios} target='_blank' className=' text-center d-inline-block me-3  fs-6 fw-bold'> IOS</Nav.Link>}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
