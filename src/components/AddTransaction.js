import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState([]);

    const { addTransaction } = useContext(GlobalContext);

    function onSubmit(e) {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }

        
        addTransaction(newTransaction)
    }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter text.."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br/>(negative - expense, positve - income)
                    </label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount.."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;
