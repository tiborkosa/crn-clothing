import React from 'react';

import SHOP_DATA from './shop.data';

class ShopPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            shopData : SHOP_DATA
        }
    }

    render(){
        return (
            <div>Shop page</div>
        )
    }
}

export default ShopPage;
