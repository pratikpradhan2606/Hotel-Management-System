import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decNumber, incNumber } from './action'

function Counter() {
    const dispatch=useDispatch();
    const myState=useSelector((state)=>state.ChangeTheNumber)
  return (
    <>
        <div>
            <div className=' pt-5 col d-flex justify-content-center'>
                <div className='border border-primary p-5 rounded-top'>
                <h5 className='text-center'>Using Redux</h5>
                    <button onClick={()=>dispatch(incNumber())}className="btn btn-success m-2">
                        Increment
                    </button>
                    <button>
                        {myState}
                    </button>
                    {/* <label className="btn btn-info m-2" value='myState'> {} </label> */}
                    <button onClick={()=>dispatch(decNumber())}className="btn btn-danger m-2">
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter