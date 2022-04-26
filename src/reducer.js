export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token:'BQAwK_x0N7kNC32SMWHswfOJSG3QcJ18DpSRMfYOKDDG25aR5fN6G2KCEubUSOIkQxrqzCynOMMHeikxFzOPeOP3h8p1GaqEwwbqH1kvrDEsHFgbC4pyPHRA-Ee7eQmeISUR7bKQOV8sF-M-ov5_4-9SQXUbRFa3uRjB9bndVLh6o62K6LzP',
};

const reducer = (state, action) => {
console.log(action);

switch(action.type) {
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        }
    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        }
    
    default: 
        return state;
    }
}

export default reducer;