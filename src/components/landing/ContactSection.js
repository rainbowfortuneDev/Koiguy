import { Accordion } from 'react-bootstrap'
import Image1 from "assets/img/019.png";
import Image2 from "assets/img/Untitled-1.png";
import Image3 from "assets/img/eth.png";
import Image4 from "assets/img/001.png";
import Image5 from "assets/img/000.png";
import Image6 from "assets/img/077.png";
import Image7 from "assets/img/092.png";
import Team1 from "assets/img/team1.png";
import Team2 from "assets/img/team2.png";
import TeamCard1 from "components/landing/TeamCard1";
import LandingTeamCard from './TeamCard';
// import Icon from "@material-tailwind/react/Icon";
import { SiDiscord } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
export default function ContactSection() {
  return (
    <section
      id="key"
      className="relative block bg-gray-100"
      style={{ backgroundColor: "#370d4c" }}
    >
      <div className="container max-w-7xl mx-auto px-4 mb-14 pt-10">
        <div className="flex justify-center">
          <button className="btn-custom">Key Information</button>
        </div>

        <div
          className="grid  md:grid-cols-3
          md:justify-between mt-12 gap-20  lg:gap-x-40"
        >
          <div className="">
            <div
              className=" w-full mx-auto key-image"
              style={{
                border: "solid 1px #ffffff40",
                background: "linear-gradient(45deg, #793b992b, #ffffff40",
              }}
            >
              <img src={Image1} alt="" className="mx-auto" />
            </div>
            <p className="text-white  max-w-xs mx-auto w-full mt-6 text-center font-medium ">
              1888 KoiGuys with more than 8 million Combinations!
            </p>
          </div>
          <div className="">
            <div
              className=" w-full mx-auto key-image"
              style={{
                border: "solid 1px #ffffff40",
                background: "linear-gradient(45deg, #793b992b, #ffffff40",
              }}
            >
              <img src={Image2} alt="" className="mx-auto" />
            </div>
            <p className="text-white  max-w-xs mx-auto w-full mt-6 text-center font-medium ">
              Pricing: 0.08 ETH Flat price to give everyone a fair chance to
              join the club!
            </p>
          </div>
          <div className="">
            <div
              className=" w-full mx-auto py-5 key-image"
              style={{
                border: "solid 1px #ffffff40",
                background: "linear-gradient(45deg, #793b992b, #ffffff40",
              }}
            >
              <img src={Image3} alt="" className="mx-auto" />
            </div>
            <p className="text-white  max-w-xs mx-auto w-full mt-6 text-center font-medium ">
              Our ERC-721-KoiGuys come with full ownership & commercial usage
              rights.
            </p>
          </div>
        </div>
      </div>
      {/* ROADMAP */}
      <div className="container max-w-7xl mx-auto px-4 mb-14 pt-10">
        <div className="flex justify-center" id="road">
          <button className="btn-custom">Road map</button>
        </div>
      </div>
      {/* PHASE1 */}
      <div className="flex flex-wrap mt-12 lg:mt-0 justify-start">
        <div
          className="flex justify-between lg:justify-end items-start  w-full flex-1 text-right"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.5) opacity:0.6",
            background:
              "linear-gradient(45deg, rgb(55 13 76), rgb(117 26 164))",
          }}
        >
          <div className="lg:hidden flex-shrink-0 roadmap-image">
            <img src={Image4} alt="" />
          </div>
          <div className="h-full flex flex-col justify-center">
            <div className="mr-5 text-white ">
              <p className="text-xl  sm:text-2xl md:text-4xl font-bold">
                PRE SALES
              </p>
            </div>
            <div className="mr-5 text-white">
              <p className="text-xs sm:text-base sm:pl-4">
                Secured 2 Otherside Plots 1 with a KODA LOCKED in out KoiGuys DOA Vault!
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <TeamCard1
            img={Image4}
            name="Ryan Tompson"
            position="Web Developer"
          />
        </div>
        <div className="hidden lg:block flex-1"></div>
      </div>
      {/* PHASE2 */}
      <div className="flex flex-wrap justify-start mt-10 lg:mt-0">
        <div className="hidden lg:block flex-1  pr-5 "></div>
        <div className="hidden lg:block">
          <TeamCard1
            img={Image5}
            name="Ryan Tompson"
            position="Web Developer"
          />
        </div>
        <div
          className="flex justify-between lg:justify-start pl-5 items-start flex-1 text-left"
          style={{
            border: "1px solid rgba(243, 217, 217, 0.5) opacity:0.6",
            background:
              "linear-gradient(240deg, rgb(55 13 76), rgb(117 26 164))",
          }}
        >
          <div className="text-left h-full  flex flex-col justify-center">
            <div className=" text-white">
              <p className="text-xl  sm:text-2xl md:text-4xl font-bold">
                25% SOLD
              </p>
            </div>
            <div className=" text-white">
              <p className="text-xs sm:text-base sm:pr-4">
                We will create 3D versions of ALL Original KoiGuy & they will Airdropped directly to current token holders!
              </p>
            </div>
          </div>
          <div className="flex justify-end lg:hidden flex-shrink-0 roadmap-image">
            <img src={Image5} alt="" />
          </div>
        </div>
      </div>
      {/* PHASE3 */}
      <div className="flex flex-wrap mt-12 lg:mt-0 justify-start">
        <div
          className="flex justify-between lg:justify-end items-start  w-full flex-1 text-right"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.5) opacity:0.6",
            background:
              "linear-gradient(45deg, rgb(55 13 76), rgb(117 26 164))",
          }}
        >
          <div className="lg:hidden flex-shrink-0 roadmap-image">
            <img src={Image6} alt="" />
          </div>
          <div className="h-full flex flex-col justify-center">
            <div className="mr-5 text-white ">
              <p className="text-xl  sm:text-2xl md:text-4xl font-bold">
                75% SOLD
              </p>
            </div>
            <div className="mr-5 text-white">
              <p className="text-xs sm:text-base sm:pl-4">
                We will create a community wallet that is funded with 50% of secondary sales; this wallet will be used to add liquidity to the $KOIFISH Token. (10% of Secondary Sales will be Donated to Sterling Animal Shelter, Inc (Koi and Goldfish Rescue and Adoption Services)
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <TeamCard1
            img={Image6}
            name="Ryan Tompson"
            position="Web Developer"
          />
        </div>
        <div className="hidden lg:block flex-1"></div>
      </div>
      {/* PHASE4 */}
      <div className="flex flex-wrap justify-start mt-10 lg:mt-0">
        <div className="hidden lg:block flex-1 pr-5"></div>
        <div className="hidden lg:block">
          <TeamCard1
            img={Image7}
            name="Ryan Tompson"
            position="Web Developer"
          />
        </div>
        <div
          className="flex justify-between lg:justify-start pl-5 items-start  w-full flex-1 text-left"
          style={{
            border: "1px solid rgba(243, 217, 217, 0.5) opacity:0.6",
            background:
              "linear-gradient(240deg, rgb(55 13 76), rgb(117 26 164))",
          }}
        >
          <div className="text-left h-full flex flex-col justify-center">
            <div className=" text-white">
              <p className="text-xl  sm:text-2xl md:text-4xl font-bold">
                SOLD OUT
              </p>
            </div>
            <div className=" text-white">
              <p className="text-xs sm:text-base sm:pr-4">
                All Holders who have Staked their Koi and hold $KOIFISH token will be able to redeem a 16x20” High-Res Canvas print of your KoiGUY Shipped FREE Worldwide! We will also unlock our Roadmap 2.0 that Includes Breeding of Baby Koi and development of Otherside KoiPond!
              </p>
            </div>
          </div>
          <div className="flex justify-end lg:hidden flex-shrink-0 roadmap-image">
            <img src={Image7} alt=""/>
          </div>
        </div>
      </div>
      {/* PHASE5 */}
      {/* <div className="flex flex-wrap mt-12 lg:mt-0 justify-start">
        <div
          className="flex justify-between lg:justify-end items-start  w-full flex-1 text-right"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.5) opacity:0.6",
            background:
              "linear-gradient(45deg, rgb(55 13 76), rgb(117 26 164))",
          }}
        >
          <div className="lg:hidden flex-shrink-0 roadmap-image">
            <img src={Image8} alt="" />
          </div>
          <div className="h-full flex flex-col justify-center py-2">
            <div className="mr-5 text-white">
              <p className="text-xl  sm:text-2xl  md:text-4xl font-bold">
                100% Sales
              </p>
            </div>
            <div className="mr-5 text-white">
              <p className="text-xs sm:text-base sm:pl-4">
              Holders who have Staked their Koi & hold $KOIFISH will be able to redeem a 16x20” High-Res Canvas
               of your KoiGUY Shipped FREE Worldwide! We will also unlock our Roadmap 2.0 that Includes Breeding
                & Baby Koi.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <TeamCard1
            img={Image8}
            name="Ryan Tompson"
            position="Web Developer"
          />
        </div>
        <div className="hidden lg:block flex-1"></div>
      </div> */}
        
      {/* TEAM */}
      <div className="container max-w-7xl mx-auto px-4 mb-14 pt-10">
        <div className="flex justify-center" id="team">
          <button className="btn-custom">Team</button>
        </div>
      </div>

      <div className="lg:flex lg:justify-between mt-10 lg:mt-0">
        <div className="flex lg:justify-between h-full my-5 lg:my-0 lg:w-1/2" >
          <div className="hidden lg:block">
            <LandingTeamCard
              img={Team1}
              name="Ryan Tompson"
            />
          </div>
          <div
            className="flex justify-between lg:justify-start pr-1 items-start flex-1 text-left"
            style={{
              border: "1px solid rgba(243, 217, 217, 0.5) opacity:0.6",
              background:
                "linear-gradient(240deg, rgb(55 13 76), rgb(117 26 164))",
            }}
          >
            <div className="lg:hidden flex-shrink-0 roadmap-image team">
              <img src={Team1} alt="" className='rounded-2xl'/>
            </div>
            <div className="text-left h-full  flex flex-col justify-center">
              <div className=" text-white">
                <p className="text-xl  sm:text-2xl md:text-4xl font-bold sm:ml-5 ml-2">
                  TyFromThe012
                </p>
              </div>
              <div className=" text-white">
                <p className="text-xs sm:text-base sm:pr-4 sm:ml-5 ml-2">
                  OG Holder Since 5/13 #BAYC #4434 Lifelong Philadelphia Fan! Dilly Dilly!, Co-Founder KoiGuys @StonedApe4434
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-between h-full my-5 lg:my-0 lg:w-1/2" >
          <div className="hidden lg:block">
            <LandingTeamCard
              img={Team2}
              name="Ryan Tompson"
            />
          </div>
          <div
            className="flex justify-between lg:justify-start pr-1 items-start flex-1 text-left"
            style={{
              border: "1px solid rgba(243, 217, 217, 0.5) opacity:0.6",
              background:
                "linear-gradient(240deg, rgb(55 13 76), rgb(117 26 164))",
            }}
          >
            <div className="lg:hidden flex-shrink-0 roadmap-image team">
              <img src={Team2} alt="" className='rounded-2xl'/>
            </div>
            <div className="text-left h-full  flex flex-col justify-center">
              <div className=" text-white">
                <p className="text-xl  sm:text-2xl md:text-4xl font-bold sm:ml-5 ml-2">
                  KoiKing
                </p>
              </div>
              <div className=" text-white">
                <p className="text-xs sm:text-base sm:pr-4 sm:ml-5 ml-2">
                  Finance, Revenue & Utility Consultant, KoiGuys Co-Founder @KoiGuysNFT
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 mb-14 pt-10">
        <div className="flex justify-center" id="faq">
          <button className="btn-custom">faq</button>
        </div>
      </div>
      <div className='max-w-4xl mx-auto'>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is Mint Costs and Supply?</Accordion.Header>
              <Accordion.Body>
                Public Minting will be 0.08 ETH our Premint WL Sale will be 0.06 ETH.
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>When and where do I mint?</Accordion.Header>
              <Accordion.Body>
                Minting will be on our website Koiguys.io on July 9th (Time) TBD.
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What do we get for owning a KoiGuy NFT?</Accordion.Header>
              <Accordion.Body>
                Exclusive 3D Versions of your KoiGuys! $KoiGuy Token Airdrops and Access to our exclusive Otherside Deed KoiGuys DOA!
              </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>What is KoiGuys DOA?</Accordion.Header>
              <Accordion.Body>
              KoiGuys DOA is a still in the forming process “Decentralized Autonomous Organization,” is a community-led entity with no central authority. It is fully autonomous and transparent: smart contracts lay the foundational rules, execute the agreed upon decisions, and at any point, proposals, voting etc.. The DOA will control how the KoiGuys Otherside Deed and Koda is Developed and used in the Future!
              </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      
      {/* FOOTER */}
      <div className="container mt-8 pb-8">
        <div className="flex flex-wrap mt-12 lg:mt-0 pb-8 justify-center">
          <p className="text-white">Copyright KoiGuys 2022</p>
        </div>
        <div className="grid grid-flow-col gap-4 mt-6  md:mb-0  justify-center">
          <a
            className="grid place-items-center bg-white text-blue-400 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none text-xl"
            href="https://twitter.com/KoiGuysNFT"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            className="grid place-items-center bg-white text-indigo-500 shadow-md font-normal h-10 w-10 items-center justify-center align-center rounded-lg outline-none focus:outline-none text-xl"
            href="https://discord.gg/MtudMRc4zd"
            target="_blank"
            rel="noreferrer"
          >
            <SiDiscord />
          </a>
        </div>
      </div>
    </section>
  );
}
