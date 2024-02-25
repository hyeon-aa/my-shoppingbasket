import React, { useEffect, useReducer, useState } from 'react';

const BasketModal = ({basketList}) => {

    
    // 장바구니에서 이미 추가된 수량 가져오고 ,  버튼 누를 때 그 수량에 +1,-1  하기
    const basketItem=basketList
    const [itemquantity,setitemQuantity] = useState(basketItem.quantity)


    //장바구니 합계 계산
    useEffect(()=>{
        let totalPrice=0
        for (let i=0; i<basketItem.length;i++){
            totalPrice+= (basketItem[i].quantity * basketItem[i].price)
        }
        return ()=>{
        }
    },[itemquantity]);

    //1.usestate
    const addquantityhandler =(id)=>{
        for (let i=0; i<basketItem.length;i++){
            if (id === basketItem[i].id) {
                let itemquantity= basketItem[i].quantity+=1
                setitemQuantity(itemquantity);
            }}
    }

    const minusquantityhandler =(id)=>{
        for (let i=0; i<basketItem.length;i++){
            if (id === basketItem[i].id) {
                let itemquantity= basketItem[i].quantity-=1
                setitemQuantity(itemquantity);
            }}
    }

    //2.usereducer


    return (
        <div>
            {basketList.map((item)=>(
                <div key={item.id}>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div>{item.quantity}</div>
                <button onClick={()=>addquantityhandler(item.id)}>+</button>
                <button onClick={()=>minusquantityhandler(item.id)}>-</button>
                </div>
            ))}
            {/* {totalPrice} */}
        </div>
    );
};

export default BasketModal;