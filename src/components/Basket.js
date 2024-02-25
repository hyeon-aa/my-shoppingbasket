import React, { useState } from 'react';
import BasketModal from './BasketModal';
import MenuItem from './MenuItem';

const Basket = () => {

    const [basketList,setBasketList]=useState([])
    const [isModalOpen,setIsModalOpen]=useState(false);
    
    const changeBasketList=(id,name,price,quantity)=>{
        //이미 있는 아이템이면 수량만 변경?
        const filteredArray = basketList.filter((basketList) => id === basketList.id)
        if (filteredArray.length===0){
        setBasketList([{
            id : id,
            name : name,
            price: price, 
            quantity: parseInt(quantity)
        },
        ...basketList])
        }
        else {
            if (id ===basketList.id){[{
            }]
            }         
        }}

    // const changeBasketList=(id,name,price,quantity)=>{     
    //     setBasketList([{
    //         id : id,
    //         name : name,
    //         price: price, 
    //         quantity: parseInt(quantity)
    //     },
    //     ...basketList])
         
    //     }}
    


    const changeModalhandler=()=>{
        setIsModalOpen(true)
    }

    return (
        <div>
            <MenuItem addBasketList={changeBasketList}></MenuItem>
            <button onClick={changeModalhandler}>장바구니</button>
            {isModalOpen===true && <BasketModal basketList={basketList}></BasketModal>}
        </div>
    );
};

export default Basket;