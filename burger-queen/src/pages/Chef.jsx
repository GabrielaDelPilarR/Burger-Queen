import React from 'react'
import Header from '../components/Header/Header'
import NavChef from '../components/Nav/NavChef'
import Order from '../components/Sheets/Sheets'
import chef from '../img/chef.png'

function Chef () {
    const order = {
        id: '001',
        name: 'Gabriela',
        products: [
            {
                id: '001',
                product: 'Café con leche',
                qyt: '3'
            }
        ]
    }


    return(
        <>
            <Header img={chef} view={'chef'} nav={<NavChef/>}/>
            <Order id={order.id} client={order.name} products={order.products}></Order>
        </>
    )
}

export default Chef