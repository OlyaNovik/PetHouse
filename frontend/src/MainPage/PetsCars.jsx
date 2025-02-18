import s from './Style_main/OurPets.module.scss';
import {NavLink,useNavigate} from 'react-router-dom';
// import AnimalInfo from '../PageAnimal/PageAnimal';
import { GlobalSvgSelector } from "../Style/GlobalSelectorSvg";



const PetsCard = ({petId,petImage,petName,petLocation})=>{
    const navigate = useNavigate()
    const style_back = {
        width: "90%",
        marginRight:"5%",
        marginLeft:"5%",
        marginTop:"5%",
        height: "300px",
        borderRadius: "20px",
        backgroundImage: `url(${petImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "56.25%",

      };
      const PetsInfo =()=>{
        navigate(`/animalinfo/${encodeURIComponent(petName)}`, {
            state: {petId, petName, petImage, petLocation },
          });
        };
    return(
        <>
         <div onClick={PetsInfo} className={s.Card}>
        <div className={s.pets_foto} style={style_back} id={s.back_pets}></div>
        {/* <img src={petImage} alt="#" className={s.card_foto} /> */}
        <div className={s.card_text}>
        <p>{petName}</p>
        <div className={s.location}>
        <GlobalSvgSelector id="location" />
        <p className={s.location_text}>{petLocation}</p>
        </div>
        
        </div>
        </div>
        
        </>
    )
}


export default PetsCard;