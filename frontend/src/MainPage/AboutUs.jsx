import s from './Style_main/AboutUs.module.scss';
import ph1 from "../img/photo_1.png"
import ph2 from "../img/photo_2.png"
import ph3 from "../img/photo_3.png"


const AboutUs = ()=>{

    const foto =[ph1,ph2,ph3]
    return(
        <>
        <div className={s.text_about}>
        <p>About Us</p>
        <p className={s.text}>We will find a family for every<br></br> animal and a loving friend for you</p>
        <div className={s.container_foto}>
        <div className={s.foto_group}>
        {foto.map((e,index) => ( <img className={s.foto_people} key={index+e} src={e} alt='#'/>))}
        </div> 
        </div>
        
        </div>
        </>
    )
}


export default AboutUs;