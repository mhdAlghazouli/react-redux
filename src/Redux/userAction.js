const actionIncrement = (amount) => {
  console.log("action Increment Fired! ", amount)
  return {
    type: 'increment',
    payload: amount
  }
}

const actionDecrement = (amount) => {
  console.log("action Decrement Fired! ", amount)
  return {
    type: "decrement",
    payload: amount
  }
}

export { actionIncrement, actionDecrement }