import React, { useEffect, useState } from 'react';
import ArrayBar from './ArrayBar';
import GenerateArrays from './GenerateArrays';
import { BubbleSort } from './SortingAlgorithms';

import './styles/styles.css'

const SortingVisualizer = ()=> {

    const [atts, setAtts] = useState({
        total: 50,
        max: 500,
        min: 0,
    })
    const [array, setArray] = useState(GenerateArrays(atts));

    const resetArray = () => {
        setArray(GenerateArrays(atts));
    }


    const Sort = () => {
        BubbleSort(array, {setArray});
    }


    const testAlgorithm = () => {
        for(let i=0; i<100; i++){
            testSort();
            resetArray();
        }
    }

    const testSort = () => {
        const sorted = [...array].sort((a,b) => {return(a-b)});
        const testResult = BubbleSort(array);
        
        const result = (a, b) => {
            for(let i=0; i<a.length; i++){
                if(a[i] !== b[i])
                    return false;
            }
            return true;
        }   
        console.log(result(sorted, testResult));
    }

    const PlayAround = () =>{
        const delay = 1000;
        for(let i=0; i<1000; i++){
            setTimeout(() => {
                console.log(i);
            }, delay);
        }
    }

    return (
    <div>
        <div className='functionBar'>
            <button onClick={resetArray}>reset arrays</button>
            <button onClick={Sort}>Bubble Sort</button>
            <button onClick={PlayAround}>Play around</button>
        </div>
        <div className="barContainer">
            {array.map((number, index) => 
                <ArrayBar key={index} number={number}></ArrayBar>)}
        </div>
    </div>
    );
}


export default SortingVisualizer;