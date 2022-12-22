import classNames from 'classnames/bind'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { authFormSlice } from '~/redux/slice'
import styles from './AuthForm.module.scss'

const cx = classNames.bind(styles)

function AuthForm({ isShow }) {
    const dispatch = useDispatch()
    const [status, setStatus] = useState('login')

    const handleCloseForm = () => {
        dispatch(authFormSlice.actions.close())
    }

    const handleStopPropagation = (e) => {
        e.stopPropagation()
    }

    const handleChangeForm = () => {
        status === 'login' ? setStatus('register') : setStatus('login')
    }

    return (
        <div className={cx('overlay', { show: isShow })} onClick={handleCloseForm}>
            <div className={cx('wrapper')} onClick={handleStopPropagation}>
                <div className={cx('header')}>
                    <div className={cx('close-btn')} onClick={handleCloseForm}>
                        <Icon icon="ph:x-bold" />
                    </div>
                    <h5 className={cx('title')}>{status === 'login' ? 'Chào mừng trở lại!' : 'Tạo một tài khoản'}</h5>
                </div>

                <div className={cx('body')}>{status === 'login' ? <LoginForm /> : <SignupForm />}</div>

                <div className={cx('footer')}>
                    <span>{status === 'login' ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}</span>
                    <button onClick={handleChangeForm}>{status === 'login' ? 'Đăng ký' : 'Đăng nhập'}</button>
                </div>
            </div>
        </div>
    )
}

export default AuthForm
