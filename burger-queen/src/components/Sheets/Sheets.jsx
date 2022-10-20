import style from './Sheets.module.css'

function ChefOrders ({id, client, products, status}) {
  const eachProduct = products.map(product => (
    <div className={style.pendingItem}>
      <p>{product.quantity}</p>
      <p>{product.name}</p>
    </div>
  ))
  return(
    <div className={style.pendingOrder}>
      <h3> Orden N°{id}</h3>
      <h4> Cliente: {client} </h4>
      <div className={style.pendingProducts}>
        {eachProduct}
      </div>
      <div className={style.buttonContainer}>
        <button className={style.pendingButton}>{status}</button>
      </div>
      
    </div>
  )
}

export {ChefOrders}