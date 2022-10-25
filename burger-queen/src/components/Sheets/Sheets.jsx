import style from './Sheets.module.css'

function ChefOrders ({id, client, products, status, onPutOrders}) {
  const eachProduct = products.map(product => (
    <div className={style.pendingItem} key={product.name}>
      <p>{product.quantity}</p>
      <p>{product.name}</p>
    </div>
  ))
  return(
    <div className={style.pendingOrder} key={id}>
      <h3> Orden N°{id}</h3>
      <h4> Cliente: {client} </h4>
      <div className={style.pendingProducts}>
        {eachProduct}
      </div>
      <div className={style.buttonContainer}>
        <button className={style.pendingButton} onClick={() => onPutOrders()}>{status}</button>
      </div>
      
    </div>
  )
}

function DeliveringOrders ({id, client, products, status }) {
  const eachProduct = products.map(product => (
    <div className={style.pendingItem} key={product.name}>
      <p>{product.quantity}</p>
      <p>{product.name}</p>
    </div>
  ))
  return(
    <div className={style.pendingOrder} key={id}>
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

export {ChefOrders, DeliveringOrders}