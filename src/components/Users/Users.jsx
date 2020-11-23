import React from "react";
import styles from './users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {


        props.setUsers([

            {
                id: 1,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/T7Sc0cmahculosmnQl7eVteFQZXB6rttiYwApxKiT_eSYo8TC-OHsqI59KNenIariDYrUUA1hLkLtt3qWQ'
                ,
                followed: false,
                fullName: 'Vlad',
                status: 'funny',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/T7Sc0cmahculosmnQl7eVteFQZXB6rttiYwApxKiT_eSYo8TC-OHsqI59KNenIariDYrUUA1hLkLtt3qWQ'
                ,
                followed: true,
                fullName: 'Sasha',
                status: 'Hi',
                location: {city: 'Moskow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://lh3.googleusercontent.com/proxy/T7Sc0cmahculosmnQl7eVteFQZXB6rttiYwApxKiT_eSYo8TC-OHsqI59KNenIariDYrUUA1hLkLtt3qWQ'
                ,
                followed: false,
                fullName: 'Dima',
                status: 'I am cool',
                location: {city: 'Kiev', country: 'Ukraine'}
            }]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div> <img src={u.photoUrl} className={styles.usersPhoto}/></div>
                    <div>
                        {u.followed ?<button onClick={() => {props.unfollow(u.id)} }> UnFollow </button > : <button onClick={() => {props.follow(u.id)}}> Follow </button>}

                    </div>

                </span>
                <span>
                 <span>
                     <div>{u.fullName}</div>
                     <div>{u.status}</div>
                 </span>
                 <span>
                     <div>{u.location.country}</div>
                     <div>{u.location.city}</div>
                 </span>
                </span>

            </div>)
        }
    </div>

}

export default Users;