import React, { useState } from 'react';

const MenuItem = (props) => {
    const MenuList =[{
        id : 0,
        name : 'pizza',
        price: 20000,
    },
    {
        id : 1,
        name : 'pasta',
        price: 5000,
    },
    ]


    const [quantity,setQuantity] =useState(1)

    const changeQuantityhandler=(event)=>{
        setQuantity(event.target.value)
    }

    const addBaskethandler=(id,name,price,quantity)=>{
        props.addBasketList(id,name,price,quantity)
    }

    return (
        //input 각 메뉴별로 입력할 수 있게하기
        <div>
          {MenuList.map((item)=>(
              <div key={item.id}>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <input value={quantity} onChange={changeQuantityhandler}></input>
              <button onClick={()=>addBaskethandler(item.id,item.name,item.price,quantity)}>추가하기</button>
              </div>
          ))}
        </div>
    );
};

export default MenuItem;