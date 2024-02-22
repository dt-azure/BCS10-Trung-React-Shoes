import { shoesData } from "../data"

let initialState = {
    shoesArr: shoesData,
    details: {
        name: '',
        price: 0,
        desc: '',
        quantity: 0,
    },
    cart: [],
};

export let dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DETAILS': {
            state.details = action.payload;
            
            return {...state};
        };

        case 'ADD_TO_CART': {
            let newCart = [...state.cart]

            let index = newCart.findIndex((n) => {
              return n.id === action.payload.id
            })
        
            if (index === -1) {
              let newItem = { ...action.payload, amount: 1 }
              newCart.push(newItem)
            }
            else {
              newCart[index].amount++
            }

            state.cart = newCart;

            return {...state};
        };

        case 'CHANGE_AMOUNT': {
          let newCart = [...state.cart]

          let index = newCart.findIndex((n) => {
            return n.id === action.payload.id
          })

          newCart[index].amount += action.payload.value;

          if (action.payload.value === 0 || newCart[index].amount === 0) {
            newCart.splice(index, 1);
          }

          state.cart = newCart;

          return {...state}
        }
        

        default:
            return {...state};
    }
};