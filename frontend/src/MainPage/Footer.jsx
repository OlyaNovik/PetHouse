import s from './Style_main/Footer.module.scss';
import { GlobalSvgSelector } from "../Style/GlobalSelectorSvg";
import logo from "../img/Global_logo.png"
const Footer =() => {

    return(
        <>
        <div className={s.container_footer}>

        
        <div className={s.group_footer}>
        <div className={s.group_logo}>
        <img src={logo} alt="#" />
        <p className={s.foot_text}>Find your bestie</p>
        </div>
        <div className={s.group_text}>
        <div><p className={s.text_contact}>Contact with us:</p></div>
        <div className={s.group_link}>
        <GlobalSvgSelector id="twitter" />
        <GlobalSvgSelector id="insta" />
        <GlobalSvgSelector id="facebook" />
        </div>
       
        </div>
        </div>
    </div>
        </>

    );
}
export default Footer;
    
