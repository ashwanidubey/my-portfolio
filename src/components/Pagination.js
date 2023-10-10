import React from 'react';
import { useNavigate } from 'react-router-dom'
export default function Pagination({count,setCount}) {
    const navigate=useNavigate();
    const handleNext=()=>{
           if(count===1)
           {
              setCount(2)
              navigate('/education')
           }
           else if(count===2){
            setCount(3)
            navigate('/experience')
           }
           else if(count===3){
            setCount(4)
            navigate('/projects')
           }
           else if( count===4)
           {
            setCount(5)
            navigate('/skills')
           }
    }
    const handlePrevious=()=>{
        if(count===2){
            setCount(1)
            navigate('/')
        }
        else if(count===3)
        {
           setCount(2)
           navigate('/education')
        }
        else if(count===4){
            setCount(3)
            navigate('/experience')
        }
        else if(count===5){
            setCount(4)
            navigate('/projects')
        }
        
    }
    return (
        <div className='my-3'>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-between">
                <button type="button" disabled={count===1} class="btn btn-secondary" onClick={handlePrevious}>Previous</button>
                <button type="button" disabled={count===5} class="btn btn-secondary" onClick={handleNext}>Next</button>
                </ul>
            </nav>
        </div>
    );
}
