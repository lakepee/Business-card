import profile_img from "../assets/info-img.png";
import '../App.css'


function Info(){
return (
        <>
            <div className="info bg-theme">
                <img src={profile_img} alt="Profile Photo" />
            </div>
        </>
    )
}

export default Info;