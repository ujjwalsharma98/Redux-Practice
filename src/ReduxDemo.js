import React, { Component } from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component{

    render(){

        //  step2
        const reducer = function(state, action){
            if(action.type === "ABC"){
                return action.payload;
            }
            if(action.type === "DEF"){
                return action.payload;
            }
            return state;
        }

        //  step1
        const store = createStore(reducer, "XYZ");

        //  step3
        store.subscribe(() => {
            console.log("store is now", store.getState());
        })

        //  step4
        store.dispatch({type:"ABC", payload: "H2 aa gya"})
        store.dispatch({type:"DEF", payload: "H3 aa gya"})

        return(
            <div>
                Hello
            </div>
        )
    }
}

export default ReduxDemo;







