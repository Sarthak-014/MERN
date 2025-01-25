import React , {useState} from 'react'

function Comp1() {
    const[num1,setnum1]=useState(0);
    const[num2,setnum2]=useState(0);
    const[res,setres]=useState(0);

    const storenum1 = (e)=>{
        setnum1(parseFloat(e.target.value))
        console.log(num1);
    }

    const storenum2 = (e)=>{
        setnum2(parseFloat(e.target.value))
        console.log(num2);
    }
    const addition=(e)=>{
        var c= num1+num2;
        setres(c);
    }
    const substraction=(e)=>{
        var c= num1-num2;
        setres(c);
    }
    const multiplication=(e)=>{
        var c= num1*num2;
        setres(c);
    }
    const division=(e)=>{
        var c= num1/num2;
        setres(c);
    }

  return (
    <>
    <div>
        <h1>Calculator</h1>
        <form action ="">
            <input type="number" id='num1' placeholder='Enter first number' onChange={storenum1}/>
            <br/>
            <input type="number" id='num' placeholder='Enter Second number' onChange={storenum2}/>
            <br/>
            <input type="button" value='add' onClick={addition} />
            <input type="button" value='sub' onClick={substraction} />
            <input type="button" value='mul' onClick={multiplication} />
            <input type="button" value='div' onClick={division} />


        </form>
        <h1>Result: {res}</h1>
    </div>
    
    
    </>

    
  )
}

export default Comp1