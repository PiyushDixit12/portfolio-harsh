import {FaHtml5,FaNode,FaNodeJs,FaReact} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {TbBrandBootstrap} from "react-icons/tb";
import {FaGitAlt} from "react-icons/fa";
import {BiLogoFlutter} from "react-icons/bi";
import {TbBrandVscode} from "react-icons/tb";
import {SiExpress, SiFirebase} from "react-icons/si";
import {SkillCard} from "./SkillCard";
import {motion} from "framer-motion";
import dart from '../../assets/dart language.svg'
import {fadeIn} from "../../framerConstant/variants";
import {SiStrapi} from "react-icons/si";
import {DiJavascript} from "react-icons/di";
import {IoLogoGooglePlaystore} from "react-icons/io5";
import {FaAppStoreIos} from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
const skillsData = [
    {
        languageName: "Dart",
        languageIcon: <img src={dart} width={"150px"} alt="" />

    },
    {
        languageName: "Flutter",
        languageIcon: <BiLogoFlutter size={"150px"} color='rgb(21,181,114)' />
    },
    {
        languageName: "Git",
        languageIcon: <FaGitAlt size={"150px"} color='rgb(21,181,114)' />
    },
    {
        languageName: "Vs Code",
        languageIcon: <TbBrandVscode size={"150px"} color='rgb(21,181,114)' />

    },
    {
        languageName: "App Store",
        languageIcon: <FaAppStoreIos size={"150px"} color='rgb(21,181,114)' />
    }
    ,{
        languageName: "Play Store",
        languageIcon: <IoLogoGooglePlaystore size={"150px"} color='rgb(21,181,114)' />
    },
    {
        languageName: "Firebase",
        languageIcon: <SiFirebase size={"150px"} color='rgb(21,181,114)' />
    },
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
    },{
        languageName: "Java Script",
        languageIcon: <DiJavascript size={"150px"} color='rgb(21,181,114)' />
    }
    , {
        languageName: "Node",
        languageIcon: <FaNodeJs size={"150px"} color='rgb(21,181,114)' />
    }, {
        languageName: "Express",
        languageIcon: <SiExpress size={"150px"} color='rgb(21,181,114)' />
    },
    {
        languageName: "MySQL",
        languageIcon: <GrMysql size={"150px"} color='rgb(21,181,114)' />
    },
    {
        languageName: "React",
        languageIcon: <FaReact size={"150px"} color='rgb(21,181,114)' />
    },
    {
        languageName: "Strapi Js",
        languageIcon: <SiStrapi size={"150px"} color='rgb(21,181,114)' />
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
                <div className=" py-5  my-5 row d-flex justify-content-start align-items-center  mb-5">
                    {skillsData && skillsData.map((detail,index) => {
                        return <SkillCard key={index} {...detail} />
                    })}
                </div>
            </div>
        </>
    )
}
