import s from './Style_Page/LinkSend.module.scss';
import {NavLink} from 'react-router-dom'


const LinkSend = () => {

    return (
        <>
            <div className={s.main_logo}>
                <div className={s.form_login}>
                <NavLink to="/#"><div className={s.cont_logo}>
                    </div></NavLink>
                    <div className={s.container}>
                    <div className={s.main_text}><p>All done!</p></div>
                    <p className={s.title}>A reset link was sent to your email</p>
                    <div className={s.formLogIn}>
                        <div className={s.btn_reset}>
                        <NavLink to="/login"><input type="button"
                            value="Go back to Log In" /></NavLink>
                    </div>

                </div>
                </div>
                    <div className={s.footer_log}><p>© 2023 PetHome. All rights reserved.</p></div>

            </div>
            </div>
        </>
    )

}

export default LinkSend;