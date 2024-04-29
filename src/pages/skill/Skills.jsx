import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {TbBrandBootstrap} from "react-icons/tb";
import {TbBrandJavascript} from "react-icons/tb";
import {FaGitAlt} from "react-icons/fa";
import {BiLogoFlutter} from "react-icons/bi";
import {TbBrandVscode} from "react-icons/tb";
import {SiFirebase} from "react-icons/si";
import {SkillCard} from "./SkillCard";
import {motion} from "framer-motion";
import dart from '../../assets/dart language.svg'
import {fadeIn} from "../../framerConstant/variants";
const skillsData = [
    {
        languageName: "HTML",
        languageIcon: <FaHtml5 size={"150px"} color='rgb(21,181,114)' />
    },
    {
        languageName: "CSS",
        languageIcon: <FaCss3Alt size={"150px"} color='rgb(21,181,114)' />

    },{
        languageName: "Bootstrap",
        languageIcon: <TbBrandBootstrap size={"150px"} color='rgb(21,181,114)' />
    },
    {
        languageName: "Vs Code",
        languageIcon: <TbBrandVscode size={"150px"} color='rgb(21,181,114)' />

    },{
        languageName: "Git",
        languageIcon: <FaGitAlt size={"150px"} color='rgb(21,181,114)' />
    },
    {
        languageName: "Dart",
        languageIcon: <img src={dart} width={"150px"} alt="" />

    },{
        languageName: "Flutter",
        languageIcon: <BiLogoFlutter size={"150px"} color='rgb(21,181,114)' />
    }
    ,{
        languageName: "Firebase",
        languageIcon: <SiFirebase size={"150px"} color='rgb(21,181,114)' />
    },
];
export const Skills = () => {
    return (
        <>
            <div style={{minHeight: "100vh"}} className="pt-3" data-section='skills' id="skills">
                <motion.h1
                    variants={fadeIn("left",0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true,amount: 0.7}}
                    className="w-100 text-center pt-5"> <span className="heading-title"> Skill</span>s</motion.h1>
                <div className=" py-5  my-5 row d-flex justify-content-center align-items-center  mb-5">
                    {skillsData && skillsData.map((detail,index) => {
                        return <SkillCard key={index} {...detail} />
                    })}
                </div>
            </div>
        </>
    )
}
