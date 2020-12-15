import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ]
};

it('length of posts should be incremented', () => {
    let action = addPostActionCreator("Hi")

    let newState = profileReducer(state,action);
   expect(newState.posts.length).toBe(5);
});

it('new message should be added', () => {
    let action = addPostActionCreator("Hi")
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe("Hi");
});


it('after deleting length of messages should be decrement ', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3)
});
it('after deleting length of messages should be decrement if id is incorrect', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4)
});



