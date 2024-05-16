
import {ApiCard} from "./ApiCard";
import {motion} from "framer-motion";
import {FaCcStripe} from "react-icons/fa6";
import {FaPaypal} from "react-icons/fa";
import {fadeIn} from "../../framerConstant/variants";
import {SiRazorpay} from "react-icons/si";
import {SiGooglemaps} from "react-icons/si";
import orangeMoney from '../../assets/apicard/orange-money-logo.svg';
import airtel from '../../assets/apicard/airtel.svg';
import twilio from '../../assets/apicard/twilio (2).png';
import Mvola from '../../assets/apicard/mvola 2.png';
const ThirdPartyData = [
    {
        languageName: "Google Maps",
        languageIcon: <SiGooglemaps size={"150px"} color='rgb(21,181,114)' />
    },
    {
        languageName: "Orange Money",
        languageIcon: <img src={orangeMoney} width={"150px"} alt="" />

    },{
        languageName: " Money", // airtel money
        languageIcon: <img src={airtel} width={"150px"} alt="" />
    },
    {
        languageName: "Telma Mvola",
        languageIcon: <img src={Mvola} width={"150px"} alt="" />

    },{
        languageName: "Stripe",
        languageIcon: <FaCcStripe size={"150px"} color='rgb(21,181,114)' />
    },
    {
        languageName: "Paypal",
        languageIcon: <FaPaypal size={"150px"} color='rgb(21,181,114)' />

    },{
        languageName: "Razor Pay",
        languageIcon: <SiRazorpay size={"150px"} color='rgb(21,181,114)' />
    }
    ,{
        languageName: "Twilio",
        languageIcon: <img src={twilio} width={"150px"} alt="" />
    }
];
export const ThirdPartyApi = () => {
    return (
        <>
            <div style={{minHeight: "100vh"}} className="pt-3" data-section='ThirdParty' id="ThirdParty">
                <motion.h1
                    variants={fadeIn("left",0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: true,amount: 0.7}}
                    className="w-100 text-center pt-5"> <span className="heading-title"> Third Party</span> Apis</motion.h1>
                <div className=" py-5  my-5 row d-flex justify-content-start align-items-center  mb-5">
                    {ThirdPartyData && ThirdPartyData.map((detail,index) => {
                        return <ApiCard key={index} {...detail} />
                    })}
                </div>
            </div>
        </>
    )
}