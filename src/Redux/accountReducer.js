
//Default state
const defaultState = {
  balance: 0,
};

const account = (state = defaultState, action) => {
  console.log("Cylon Account is Reducing!!")
  switch (action.type) {
    case "increment" : 
      return {
        balance: state.balance + action.payload
      }
    case "decrement" :
      return{
        balance: state.balance - action.payload
      }

    default :
      return state
  }
}

export default account;