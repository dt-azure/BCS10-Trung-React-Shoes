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
            state.details = action.item;
            
            return {...state};
        };

        case 'ADD_TO_CART': {
            let newCart = [...state.cart]

            let index = newCart.findIndex((n) => {
              return n.id === action.item.id
            })
        
            if (index === -1) {
              let newItem = { ...action.item, amount: 1 }
              newCart.push(newItem)
            }
            else {
              newCart[index].amount++
            }

            state.cart.push(action.item)

            state.cart = newCart;

            return {...state};
        };

        case 'CHANGE_AMOUNT': {
          let newCart = [...state.cart]

          let index = newCart.findIndex((n) => {
            return n.id === action.id
          })

          newCart[index].amount += action.value;

          if (action.value === 0 || newCart[index].amount === 0) {
            newCart.splice(index, 1);
          }

          state.cart = newCart;

          return {...state}
        }
        

        default:
            return {...state};
    }
};