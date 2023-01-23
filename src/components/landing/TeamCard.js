// import Image from '@material-tailwind/react/Image';

export default function LandingTeamCard({ img, name}) {
    return (
        <div className="w-full text-center">
            <div
                className="px-6 position-relative max-w-max w-full mx-auto "
                style={{
                border: "solid 1px #ffffff40",
                background: "linear-gradient(45deg, #793b992b, #ffffff40",
                width: "264px",
                height: "324px",
                padding: "1rem",
                }}
            >
                <img src={img} alt={name} raised className="team-img" />
            </div>
        </div>
    );
}
