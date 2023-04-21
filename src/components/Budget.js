import React, {useContext} from 'react';
import { AppContext} from '../context/AppContext';

const Budget = () => {
    const {dispatch, budget, expenses, currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = e => {
        if (e.target.value < totalExpenses){
            alert("You cannot reduce the budget value lower than spending.");
         //   setCost("");
            return;
        }


      dispatch({
        type: 'SET_BUDGET',
        payload: e.target.value,
        });
    };
  
    return (
        <div className='alert alert-secondary'>
            {/*<span>Budget: £{budget}</span>*/}
            Budget: {currency}{
            <input
                        required='required'
                        type='number'
                        id='budget'
                        max='20000'
                        value={budget}
                        style={{size: 10}}
                        step='10'
                        onChange={handleBudgetChange}>
                        </input>}
            
        </div>
    );
}

export default Budget;