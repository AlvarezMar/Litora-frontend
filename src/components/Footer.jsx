import LogoFooter from "./logo/LogoFooter";

import youtube from "../assets/socials/youtube.svg"
import github from "../assets/socials/github.svg"
import facebook from "../assets/socials/facebook.svg"
import instagram from "../assets/socials/instagram.svg"
import linkedin from "../assets/socials/linkedin.svg"
import x from "../assets/socials/x.svg"

function Footer(){

    return <div className="bg-[#6D5DD7] text-white">
        <div className="max-w-screen-xl mx-auto p-8">
            <div className="grid gap-7 pb-5" style={{gridTemplateColumns: "repeat(4, 1fr)"}}>
                <div>
                    <LogoFooter/>
                    <p className="text-sm">Dedicated to curating a diverse collection of books to inspire and delight readers of all ages.</p>

                </div>
                <div>
                    <h2 className="font-bold mb-3 text-white">Help</h2>
                    <ul className="text-sm flex flex-col gap-1">
                        <li><a href="#">Returns</a></li>
                        <li><a href="#">Shipping costs and methods</a></li>
                        <li><a href="#">Frequently asked questions (FAQ)</a></li>
                        <li><a href="#">Order status</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-3">Legal Information</h2>
                    <ul className="text-sm flex flex-col gap-1">
                        <li><a href="#">Terms of use</a></li>
                        <li><a href="#">Contract terms</a></li>
                        <li><a href="#">Data protection policy</a></li>
                        <li><a href="#">Returns and cancellations policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Manage Cookies</a></li>
                        <li><a href="#">Online Dispute Resolution</a></li>
                        <li><a href="#">Office of best practices</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-3">Contact Information</h2>
                    <ul className="text-sm flex flex-col gap-1">
                        <li><a href="#">Evergreen 432-B, San Juan Tihuaca, Azcapotzalco, 02300</a></li>
                        <li><a href="#">alvarez.majuan@hotmail.com</a></li>
                        <li><a href="#">+52 55 1234 5678</a></li>
                        <li><a href="#">+52 55 8765 4321</a></li>
                    </ul>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <span className="text-sm">&copy; 2024 Litora. All Rights Reserved. Designed and developed by Juan Carlos Alvarez.</span>

                <div className="flex gap-4">
                    <img src={youtube} alt="" width="25px"/>
                    <img src={github} alt="" width="25px"/>
                    <img src={facebook} alt="" width="25px"/>
                    <img src={instagram} alt="" width="25px"/>
                    <img src={linkedin} alt="" width="25px"/>
                    <img src={x} alt="" width="25px"/>
                </div>

            </div>

        </div>

    </div>
}

export default Footer;