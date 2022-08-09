import Styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/fa3141f339af4e1e991ef11dd0299362.jpeg?x-expires=1656950400&x-signature=EUMo1Cyjy494SGEn%2B5tMmWVifeA%3D"
                alt=""
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Hung Anh</span>
                    <FontAwesomeIcon
                        className={cx('check-icon')}
                        icon={faCheckCircle}
                    />
                </h4>
                <p className={cx('user-name')}>NguyenHungAnh</p>
            </div>
        </div>
    );
}

export default AccountItem;
