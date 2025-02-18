import s from './Style_main/Header.module.scss';
import Logo from "./Style_main/Logo.png"
import { GlobalSvgSelector } from "../Style/GlobalSelectorSvg";
import {NavLink,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react';
import {handlePetSelect, findSelectedPets} from './JS_main/Header'
import OurPets from './OurPets';
import { connect } from 'react-redux';
import { logOutHandler } from '../auth/actions/userActions';
// import { useEffect } from 'react';

const Header = ({authenticated,logOutHandler}) => {
    const navigate = useNavigate()
    const [inpValue, SetInpValue] = useState('')
    const [selectedPets, setSelectedPets] = useState(["dog"]);
    // const selectedPets = findSelectedPets();
    const handleSingUp = () => {
        SetInpValue('')
    }

    useEffect(() =>{
        // const updatedSelectedPets = findSelectedPets();
        // setSelectedPets(findSelectedPets());
    },[selectedPets])
    return (
        <>
        <div className={s.main}>
            <div className={s.back}>
                <div className={s.header}>
                    <div className={s.container_head}>
                        <img src={Logo} alt="#" className={s.logo} />
                        <div className={s.group_btn}>
                            { !authenticated ?(
                            <>
                            <NavLink to="login"> <input type="button" defaultValue="Log in" className={s.inp_btn} /></NavLink>
                            <NavLink to="signup"> <input type="button" defaultValue="Sign up" className={s.inp_btn}/></NavLink>
                            </>
                            ):(                           
                             <input onClick={()=>{logOutHandler(navigate)}} type="button" defaultValue="Exit" className={s.inp_btn} />                          )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.container_search}>
                <div className={s.windowSearch}>
                    <h2 className={s.text1}>Find your friend</h2>
                    <div className={s.group_search}>
                        <input type="text" className={s.inp_search} placeholder="Search..." value={inpValue} onChange={(event) => {SetInpValue(event.target.value)}} />
                        <div className={s.circle} onClick={handleSingUp} >
                            <GlobalSvgSelector id="Search"/></div>
                            <div className={s.pets_choose} onLoad={(e) => setSelectedPets(findSelectedPets(e))} onClick={(e) => {setSelectedPets(findSelectedPets(e))}} >
                                <div className={s.selected} onClick={(e) => handlePetSelect("dog",e)}>
                                <GlobalSvgSelector  id="dog" />
                                </div>
                                {/* <input type="checkbox" name="" id=""  className={s.check_pets}/> */}
                                <div className={s.not_selected} onClick={(e) => handlePetSelect("cat",e)}>
                                <GlobalSvgSelector  id="cat" />
                                </div>
                                {/* <input type="checkbox" name="" id="" /> */}
                                <div className={s.not_selected} onClick={(e) => handlePetSelect("rabbit",e)}>
                                <GlobalSvgSelector id="rabbit" />
                                </div>
                                {/* <input type="checkbox" name="" id="" /> */}
                                <div className={s.not_selected} onClick={(e) => handlePetSelect("turtle",e)}>
                                <GlobalSvgSelector id="turtle" />
                                </div>
                                {/* <input type="checkbox" name="" id="" /> */}
                            </div>
                         {/* <GlobalSvgSelector id="location" /> */}

                    </div>

                    <div className={s.group_img_search}>
                    </div>
                </div>
            </div>

        </div>
        <OurPets selectedPets = {selectedPets}/>
        </>
    )
}

const mapStateToProps = ({session}) => ({
    authenticated: session.authenticated
})

export default connect(mapStateToProps,{logOutHandler}) (Header);