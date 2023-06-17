import { legacy_createStore as createStore } from 'redux'

const initialState = {
    numOfLpatops : 100
}

const buyLaptop = ()=>{
    return {
        type: "BUY_LAPTOP"
    }
}

const reducer = (state=initialState, action ) =>{
    // if(action.type == "BUY_LAPTOP"){
    //     return {numOfLpatops : state.numOfLpatops -1 }
    // }
    // else {
    //     return state;
    // }

    switch (action.type){
        case "BUY_LAPTOP" :
            return {numOfLpatops : state.numOfLpatops -1 }
        ßdefault:
                return state;
    }
}

console.log(createStore);
const store =   createStore(reducer) ;

console.log(store);

