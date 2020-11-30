import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return  <Preloader />
    }
    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                {props.profile.aboutMe}
                {props.profile.contacts.facebook}
                {props.profile.contacts.website}
                {props.profile.contacts.vk}
                {props.profile.contacts.twitter}
               <div>
                   ava + description
               </div>
            </div>
        </div>
    )
}

export default ProfileInfo;