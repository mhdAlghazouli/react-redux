import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionIncrement, actionDecrement} from "../Redux/userAction"

const Account = () => {
  //local state to hold input box temporary
  const [input, setInput] = useState(0);
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const handleDeposit = (e) => {
    e.preventDefault();
    console.log("deposit button clicked");
    dispatch(actionIncrement(input));
    setInput(0);
  }

  const handleWithdraw = (e) => {
    e.preventDefault();
    console.log("Withdraw button clicked");
    dispatch(actionDecrement(input));
    setInput(0);
  }

  return ( 
    <div className="card">
        <h2>My Account Balance</h2>
        <h3>{balance}</h3>
        <form>
          <label>Deposit or Withdraw
            <input type="text" placeholder="Enter Amount" onChange={e => setInput(Number(e.target.value))} />
          </label>
          <button onClick={(e) => handleDeposit(e)}>Deposit</button>
          <button onClick={(e) => handleWithdraw(e)}>Withdraw</button>
          
        </form>
        
      </div>
   );
}
 
export default Account;