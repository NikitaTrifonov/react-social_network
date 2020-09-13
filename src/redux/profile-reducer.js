const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you ?", likesCount: 12 },
    { id: 2, message: "It's  my first post", likesCount: 4 },
  ],

  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPostText = state.newPostText;
      return {
        ...state,
        posts: [...state.posts, { id: 5, message: newPostText, likesCount: 0 }],
        newPostText: "",
      };
    }

    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newPostText };
    }

    default:
      return state;
  }
};

export const addPostCreator = () => ({ type: ADD_POST });
export const updateNewPostTextCreator = (newText) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: newText,
});

export default profileReducer;
