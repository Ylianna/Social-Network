import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {

    let newMessageElement = React.createRef ();

    let addMessage = () => {
        let texts = newMessageElement.current.value;
        alert(texts);
    }


    return <div className={s.message}>{props.message}

 <div>
  <textarea ref={ newMessageElement }></textarea>
 </div>
    <div>
    <button onClick={ addMessage }> Add Message </button>
    </div>
    </div>
}


export default Message;