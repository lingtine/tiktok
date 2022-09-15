import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/img';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpinner,
    faTimesCircle,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faGlobe,
    faQuestionCircle,
    faKeyboard,
    faCoins,
    faCog,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import Menu from '~/components/Popper/menu';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

function Header() {
    const menuItems = [
        {
            content: 'Tiếng việt',
            icon: faGlobe,
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'vn',
                        content: 'Viet Nam',
                    },
                    {
                        code: 'en',
                        content: 'English',
                    },
                ],
            },
        },
        {
            content: 'Phản hồi và trợ giúp',
            icon: faQuestionCircle,
            to: '/feedBack',
        },
        {
            content: 'Phím tắt trên bàn phím',
            icon: faKeyboard,
        },
    ];

    const menuLogin = [
        {
            content: 'Xem Hồ Sơ',
            icon: faUser,
            to: '/user',
        },
        {
            content: 'Nhận xu',
            icon: faCoins,
            to: '/coin',
        },
        {
            content: 'Cài Đặt',
            icon: faCog,
            to: '/Setting',
        },
        ...menuItems,
        {
            content: 'Đăng xuất',
            icon: faSignOutAlt,
            to: '/feedBack',
            separate: true,
        },
    ];

    const isLogin = true;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Logo-TiTok"></img>
                </div>
                <Search />
                <div className={cx('action')}>
                    <>
                        <Button
                            text
                            leftIcon={<FontAwesomeIcon icon={faPlus} />}
                        >
                            Tải lên
                        </Button>
                    </>
                    {isLogin ? (
                        <>
                            <Tippy content={'Tin Nhắn'}>
                                <button className={cx('chat-box')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary className={cx('login')}>
                                Đăng nhập
                            </Button>
                        </>
                    )}
                    <Menu items={isLogin ? menuLogin : menuItems}>
                        {isLogin ? (
                            <Image
                                src={''}
                                className={cx('avatar-img')}
                                alt={'avatar'}
                            />
                        ) : (
                            <button className={cx('menu-items')}>
                                <UploadIcon />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
