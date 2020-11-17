import React from 'react';
import s from'./ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.imge}>
                <img src="https://static.make.ua/catalog/01/nature-00385__1365108164__615.jpg" alt=''></img>
            </div>
            <div className={s.descriptionBlock}>
                ava + describtion
            </div>
        </div>);
}

export default ProfileInfo;