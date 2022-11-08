import React from 'react';

export const Header = (props)=>{
    return(
        <header className={'d-flex j-content blue space-btw'}>
            <h2>Hello in my shop</h2>
            <div className={'mar pad'}>
                <div>cart: </div>
                <div>wishlist: </div>
            </div>
        </header>
    )
}
