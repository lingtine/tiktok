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
import HeadLessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useState } from 'react';
import { Wrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/menu';
import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([]);
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
                    <img inco src={images.logo} alt="Logo-TiTok"></img>
                </div>
                <HeadLessTippy
                    visible={searchResult.length}
                    interactive={true}
                    render={() => (
                        <div className={cx('search-result')} tabIndex={-1}>
                            <Wrapper>
                                <h4 className={cx('search-title')}>
                                    Tài Khoản
                                </h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </Wrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder={'Tìm kiếm tên tài khoản và video'}
                            className={cx('search-input')}
                        ></input>
                        <div className={cx('search-buttons')}>
                            <button className={cx('search-delete')}>
                                <FontAwesomeIcon
                                    icon={faTimesCircle}
                                ></FontAwesomeIcon>
                            </button>
                            <button className={cx('search-loading')}>
                                <FontAwesomeIcon
                                    icon={faSpinner}
                                ></FontAwesomeIcon>
                            </button>
                        </div>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                            ></FontAwesomeIcon>
                        </button>
                    </div>
                </HeadLessTippy>
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
                                    <FontAwesomeIcon icon={faEnvelope} />
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
                            <img
                                src={
                                    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/784eca88f8bf6b4e86154b47d400745c~c5_100x100.jpeg?x-expires=1660122000&x-signature=Fz9DZflDEti6F63TCwEX%2F3iax8w%3D'
                                }
                                className={cx('avatar-img')}
                                alt={'avatar'}
                            />
                        ) : (
                            <button className={cx('menu-items')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;