import {motion} from "framer-motion"
// import {fadeIn} from "../../framerConstant/variants";
// eslint-disable-next-line react/prop-types
export const SkillCard = ({languageName,languageIcon}) => {
    return (
        <>
            <motion.div
                // variants={fadeIn("up",0.5)}
                // initial="hidden"
                // whileInView={"show"}
                // viewport={{once: true,amount: 0.7}}
                whileHover={{scale: 1.05}}
                transition={{delay: 0.1,duration: .5,type: "tween",stiffness: 400}}
                className="col-12 bg-transparent col-md-4 col-sm-6  col-lg-3 h-50 my-4 position-relative"
            >
                <motion.div whileHover={{border: "1px solid rgb(21,181,114)"}} className=" card card-skills p-2 py-3  d-flex justify-content-center align-items-center shadow ">
                    {languageIcon}
                    <span className='w-100 fs-4 fw-bold text-center py-3' style={{color: 'rgb(21,181,114)'}}>{languageName}</span>
                </motion.div>
            </motion.div>
        </>
    )
}
