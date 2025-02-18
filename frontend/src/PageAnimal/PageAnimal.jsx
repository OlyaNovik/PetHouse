import { useEffect, useState } from 'react';
import s from '../PageAnimal/PageAnimal.module.scss';
import {NavLink, useActionData} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { GlobalSvgSelector } from "../Style/GlobalSelectorSvg";
import Logo from "../MainPage/Style_main/Logo.png"
import Footer from '../MainPage/Footer';
import SliderFoto from './SliderFoto';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const AnimalInfo =  () => {
    const location = useLocation();
    const {petId, petName, petImage, petLocation} = location.state;
    const [fullPetInfo, setFullPetInfo] = useState(null);
    const findAnimal = async () => {
        try {
            const response = await fetch(`${SERVER_URL}/findAnimal?` + new URLSearchParams({
                id: petId
            }));
            const data = await response.json();
            setFullPetInfo(data);
            // console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        findAnimal();
    }, [petId]);

    return (
      <div className={s.maininfo}>
        <div className={s.main_header}>

        
        {/* <h1>{petName}</h1>
        <img src={petImage} alt={petName} /> */}
        <div className={s.group_head}>
        {/* <div className={s.header_logo}> */}
        <img src={Logo} alt="#" className={s.logo} />
        {/* </div> */}
        <NavLink to='/' className={s.back_link}><p >&lt; back</p></NavLink>
        <SliderFoto petName={petName} petImages={fullPetInfo === null ? [petImage]: fullPetInfo.photos}/>
        <div className={s.group_info}>
        <div className={s.info}>
            <p className={s.petName}>{fullPetInfo!== null ? fullPetInfo.basicInfo.name:"🐾"}</p>
            <div className={s.info_global}><p>{
                fullPetInfo === null ? "Breed" 
                : fullPetInfo.dogAttributes !== undefined ? fullPetInfo.dogAttributes.breed_name !== null ? fullPetInfo.dogAttributes.breed_name : "Not Specified Breed"
                : fullPetInfo.catAttributes !== undefined ? fullPetInfo.catAttributes.breed_name !== null ? fullPetInfo.catAttributes.breed_name : "Not Specified Breed"
                : fullPetInfo.rodentAttributes !== undefined ? fullPetInfo.rodentAttributes.type_name !== null ? fullPetInfo.rodentAttributes.type_name : "Not Specified Breed"
                : fullPetInfo.fishAttributes.type_name ? fullPetInfo.fishAttributes.type_name : "Not Specified Breed"
                
                }</p> <p><GlobalSvgSelector id="location" />{petLocation}</p></div>
            <div className={s.line}> </div>
            <div className={s.addition}>
                <p>{fullPetInfo!== null ? fullPetInfo.basicInfo.gender !== null ? fullPetInfo.basicInfo.gender ==="M"?"Male ":"Female " :  "Not Specified Gender ": "Gender "} 🐾 {
                fullPetInfo === null ? "Size " 
                : fullPetInfo.dogAttributes !== undefined ? fullPetInfo.dogAttributes.size !== null ? fullPetInfo.dogAttributes.size : "Not Specified Size"
                : fullPetInfo.catAttributes !== undefined ? fullPetInfo.catAttributes.size !== null ? fullPetInfo.catAttributes.size  : "Not Specified Size"
                : fullPetInfo.rodentAttributes !== undefined ? fullPetInfo.rodentAttributes.size !== null ? fullPetInfo.rodentAttributes.size  : "Not Specified Size"
                : fullPetInfo.fishAttributes.size !== null ? fullPetInfo.fishAttributes.size  : "Not Specified Size"
                } 🐾 {fullPetInfo!== null ? fullPetInfo.basicInfo.age !== null ? fullPetInfo.basicInfo.age+" year ":"Age " : "Not Specified Age"}
                 🐾 {
                fullPetInfo === null ? "Sterelization " 
                : fullPetInfo.dogAttributes !== undefined ? fullPetInfo.dogAttributes.is_neutered !== null ? fullPetInfo.dogAttributes.is_neutered ? "Sterelized ": "Not Sterelized " : "Not Specified Sterelization "
                : fullPetInfo.catAttributes !== undefined ? fullPetInfo.catAttributes.is_neutered !== null ? fullPetInfo.catAttributes.is_neutered ? "Sterelized ": "Not Sterelized " : "Not Specified Sterelization "
                : fullPetInfo.rodentAttributes !== undefined ? fullPetInfo.rodentAttributes.is_domesticated !== null ? fullPetInfo.rodentAttributes.is_domesticated ? "Domesticated " : "Not Domesticated " :  "Not Specified Domestication "
                : fullPetInfo.fishAttributes.is_saltwater ? fullPetInfo.fishAttributes.is_saltwater ? "Saltwater ":"Not Saltwater ": "Not Specified Sterelization " } 
                 🐾 {
                fullPetInfo === null ? "Chiping " 
                : fullPetInfo.dogAttributes !== undefined ? fullPetInfo.dogAttributes.is_microchipped !== null ? fullPetInfo.dogAttributes.is_microchipped ? "Chiped 🐾": "Not Chiped 🐾" : "Not Specified Chiping 🐾"
                : fullPetInfo.catAttributes !== undefined ? fullPetInfo.catAttributes.is_house_trained !== null ? fullPetInfo.catAttributes.is_house_trained ? "House Trained 🐾": "Not House Trained 🐾" : "Not Specified House Training 🐾"
                : ""
                } {
                    fullPetInfo === null ? ""
                    : fullPetInfo.dogAttributes !== undefined ?  fullPetInfo.dogAttributes.is_house_trained !== null ?fullPetInfo.dogAttributes.is_house_trained ? "House Trained 🐾": "Not House Trained 🐾" : "Not Specified House Training 🐾"
                    : ""
                }</p>

            </div>
            <div className={s.line}> </div>
            <div className={s.about_pet}>
                <p>About {petName}</p>
                <p>{fullPetInfo !== null ? fullPetInfo.basicInfo.description : "Loading..."}</p>
            </div>
        </div>
        <div className={s.button_que}>
        <p>Want to Adopt <br />{petName}?</p>
        <div className={s.button_group}>
            <div className={s.btn_click}>
                <p>Click here</p>
            </div>
            <div className={s.btn_donate}>
                <p>Donate</p>
            </div>
        </div>
        </div>
        </div>
        <Footer/>
      </div>
      </div>
      </div>
    );
  };

export default AnimalInfo;