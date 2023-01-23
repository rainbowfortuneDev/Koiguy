import Image from "@material-tailwind/react/Image";

export default function LandingTeamCard({ img, name, text }) {
  return (
    <div className="w-full   text-center">
      <div
        className="px-6 position-relative max-w-max w-full mx-auto "
        style={{
          border: "solid 1px #ffffff40",
          background: "linear-gradient(45deg, #793b992b, #ffffff40",
        }}
      >
        <Image src={img} alt={name} raised />
      </div>
      {/* <p className="text-white  max-w-xs mx-auto w-full mt-4">{text}</p> */}
    </div>
  );
}
