import s from './Style_Page/ResetPass.module.scss';
import {NavLink} from 'react-router-dom'

const ResetPass = () => {

    return (
        <>
            <div className={s.main_logo}>
                <div className={s.form_login}>
                <NavLink to="/#"> <div className={s.cont_logo}>
                    </div></NavLink>
                    <div className={s.container}>
                        
                    
                    <div className={s.main_text}><p>Password Reset</p></div>
                    <p className={s.title}>Enter your email and we will send you a reset link</p>
                    <div className={s.formLogIn}>
                        <form action="" className={s.inp_group}>
                            <label htmlFor="email">Email address</label>
                            <input
                                type="text"
                                id={s.email}
                                name='email'
                                placeholder='mail@email.com'
                                autoComplete="email"

                            />
                        </form>

                        <div className={s.btn_reset}>
                        <NavLink to="linksend"><input type="button"
                            value="Send me the link" /></NavLink>
                        </div>
                    </div>
                    </div>

                    <div className={s.footer_log}>© 2023 PetHome. All rights reserved.</div>
                </div>

            </div>
        </>
    )

}

export default ResetPass;