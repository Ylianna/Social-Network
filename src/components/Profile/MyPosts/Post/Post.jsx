import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
      <div className={s.item}>
      <img src='https://sun9-42.userapi.com/c836225/v836225327/af18/YYOO1aNUqDY.jpg' alt=''/>
      {props.message}
      <div>
    <span>Like</span> {props.quantity}
      </div>
      </div>
   );
}

export default Post;