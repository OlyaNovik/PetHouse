import s from './Style_Page/NewPass.module.scss'
import {NavLink} from 'react-router-dom';
import { useState } from 'react';

const NewPass = () => {
    const svgUnVision = (<svg id='unvision' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M8.05208 5.83655C9.2175 5.32383 10.5322 5.00012 12.0001 5.00012C14.9552 5.00012 17.3089 6.31539 19.0605 7.86435C20.816 9.41683 21.926 11.1705 22.3675 11.9445C22.3792 11.9651 22.383 11.9834 22.383 11.9993C22.3829 12.0155 22.3789 12.0357 22.3656 12.059C22.0998 12.5247 21.5883 13.3515 20.8355 14.2768C20.5741 14.5981 20.6226 15.0705 20.944 15.3319C21.2653 15.5933 21.7377 15.5447 21.9991 15.2234C22.8157 14.2196 23.3724 13.3209 23.6683 12.8025C23.9513 12.3067 23.957 11.7037 23.6705 11.2013C23.1856 10.3513 21.9798 8.44363 20.0542 6.74071C18.1246 5.03428 15.432 3.50012 12.0001 3.50012C10.3048 3.50012 8.78515 3.8753 7.44804 4.46355C7.0689 4.63035 6.89676 5.07293 7.06356 5.45207C7.23036 5.83122 7.67294 6.00335 8.05208 5.83655Z" fill="#656773" />
    <path fillRule="evenodd" clipRule="evenodd" d="M19.1661 17.9873C17.328 19.3788 14.9332 20.5001 12.0001 20.5001C8.56818 20.5001 5.87558 18.966 3.94599 17.2595C2.02036 15.5566 0.814485 13.6488 0.329674 12.7989C0.0435153 12.2972 0.0480022 11.6949 0.331371 11.1984C0.790863 10.3933 1.89664 8.64044 3.64799 7.01109L1.31696 5.36231C0.978792 5.12312 0.898556 4.65507 1.13775 4.3169C1.37694 3.97873 1.84499 3.89849 2.18316 4.13769L22.6832 18.6377C23.0213 18.8769 23.1016 19.3449 22.8624 19.6831C22.6232 20.0213 22.1551 20.1015 21.817 19.8623L19.1661 17.9873ZM4.90184 7.89796C3.17125 9.43933 2.07433 11.1706 1.63414 11.9419C1.6209 11.9651 1.61699 11.985 1.61694 12.0007C1.6169 12.0162 1.6206 12.0346 1.63262 12.0557C2.0741 12.8297 3.18417 14.5834 4.93968 16.1359C6.69122 17.6848 9.04495 19.0001 12.0001 19.0001C14.3337 19.0001 16.2908 18.1805 17.8737 17.0732L14.358 14.5865C13.7359 15.1539 12.9084 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 11.5167 8.59795 11.0563 8.77508 10.6376L4.90184 7.89796Z" fill="#656773" />
</svg>)
const svgVision = (<svg id='vision' width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.4999 12C15.4999 13.933 13.9329 15.5 11.9999 15.5C10.0669 15.5 8.49988 13.933 8.49988 12C8.49988 10.067 10.0669 8.5 11.9999 8.5C13.9329 8.5 15.4999 10.067 15.4999 12Z" fill="#656773" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12 3.50012C8.5681 3.50012 5.8755 5.03429 3.94591 6.74074C2.02028 8.44368 0.814406 10.3514 0.329595 11.2014C0.0449209 11.7005 0.0449199 12.2998 0.329594 12.7989C0.814405 13.6488 2.02028 15.5566 3.94591 17.2595C5.8755 18.966 8.5681 20.5001 12 20.5001C15.4319 20.5001 18.1245 18.9659 20.0541 17.2595C21.9797 15.5565 23.1856 13.6488 23.6704 12.7988C23.955 12.2997 23.955 11.7004 23.6704 11.2013C23.1856 10.3513 21.9797 8.44363 20.0541 6.74071C18.1245 5.03428 15.4319 3.50012 12 3.50012ZM1.63254 11.9446C2.07402 11.1706 3.18409 9.41688 4.9396 7.86438C6.69114 6.3154 9.04487 5.00012 12 5.00012C14.9552 5.00012 17.3089 6.31539 19.0604 7.86435C20.8159 9.41683 21.926 11.1705 22.3674 11.9445C22.3805 11.9675 22.3839 11.9861 22.3839 12.0001C22.3839 12.014 22.3805 12.0326 22.3674 12.0556C21.926 12.8296 20.8159 14.5833 19.0604 16.1358C17.3089 17.6848 14.9552 19.0001 12 19.0001C9.04487 19.0001 6.69114 17.6848 4.9396 16.1359C3.18409 14.5834 2.07402 12.8297 1.63254 12.0557C1.61942 12.0327 1.61609 12.0141 1.61609 12.0001C1.61609 11.9861 1.61942 11.9676 1.63254 11.9446Z" fill="#656773" />
</svg>
)
const [vision_pass, SetVision] = useState(svgUnVision)
const [vision_pass_conf, SetVisionConf] = useState(svgUnVision)
const [inputType, setInputType] = useState('password');
const [inputTypeConf, setInputTypeConf] = useState('password');
const Vision = () => {
    if (vision_pass.props.id === svgVision.props.id) {
        SetVision(svgUnVision);
        setInputType('password')
    } else {
        SetVision(svgVision)
        setInputType('text')
    }
}

const Vision_Conf = () => {
    if (vision_pass_conf.props.id === svgVision.props.id) {
        SetVisionConf(svgUnVision)
        setInputTypeConf('password')
    } else {
        setInputTypeConf('text')
        SetVisionConf(svgVision)
    }
}

function isValidEmail(email) {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
}
function isValidPassword(password) {
    return password.length >= 8;
}
function isValidName(name) {
    return name.length >= 2;
}

const initialFormState = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
};
const errorState = {
    emailError: 'none',
    passwordError: 'none',
    firstNameError: 'none',
    lastNameError: 'none',

}
const [formData, setFormData] = useState(initialFormState);
const [error, setError] = useState(errorState)

const handleFieldChange = (fieldName, value) => {
    setFormData({
        ...formData,
        [fieldName]: value,
    });
    console.log(formData);

};
    return (
        <>
            <div className={s.main_logo}>
                <div className={s.form_login}>
                <NavLink to="/#"> <div className={s.cont_logo}>
                    </div></NavLink>
                    <div className={s.container}>
                        
                    
                    <div className={s.main_text}><p>Welcome!</p></div>
                    <p className={s.title}>Create password now to acess the platform</p>
                    <div className={s.formLogIn}>
                        <form action="" className={s.inp_group}>
                        <label htmlFor="password">Create password</label>
                            <input
                                type={inputType}
                                name="password"
                                autoComplete="pass"
                                id={s.password}
                                onChange={(e) => {
                                    handleFieldChange('password', e.target.value);
                                }}
                                placeholder='Enter you password' />
                            {/* <p id={s.error} style={{display:error.passwordError}} >*entered incorrectly</p> */}

                            <label htmlFor="password">Confirm password</label>
                            <input
                                type={inputTypeConf}
                                name="password"
                                autoComplete="conf_pass"
                                id={s.password_reset}
                                
                                placeholder='Repeat you password' />

                            <div className={s.eye_cont} onClick={Vision}>{vision_pass}</div>

                        <div className={s.confirm} onClick={Vision_Conf}>{vision_pass_conf}</div>
                        </form>

                        <div className={s.btn_log}>
                        <NavLink to="#"><input type="button"
                            value="Log in" /></NavLink>
                        </div>
                    </div>
                    </div>

                    <div className={s.footer_log}>© 2023 PetHome. All rights reserved.</div>
                </div>

            </div>
        </>
    )

}

export default NewPass;