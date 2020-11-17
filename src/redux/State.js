import {rerenderEntireTree} from "../render";

let state = {
     profilePage:{
         posts: [
             {id: 1, message: "Hi, how are you?", quantity: 147},
             {id: 2, message: "It's my first post", quantity: 563}
         ]

     },


    dialogsPage: {

        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"}

        ],
        dialogs: [
            {id: 1, name: "Vlad Iodo"},
            {id: 2, name: "Ylianna Iodo"},
            {id: 3, name: "Vlad"},
            {id: 4, name: "Dima"},
            {id: 5, name: "Marina"},
            {id: 6, name: "Marianna Vysotskaya"},
            {id: 7, name: "Misha"}
        ]
    }
}

  export let addPost = (postMessage) => {
    let newPost ={
        id: 5,
        message: postMessage,
        quantity: 153
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;