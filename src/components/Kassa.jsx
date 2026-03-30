import { useEffect, useState } from "react"
import './Kassa.css'
function Kassa() {

  const [data, setData]= useState([])
  const [savat, setSavat] = useState([])

  console.log(data);

  function getData(){
    fetch('http://192.168.100.5:5000/api/products')
    .then((res)=>{ return res.json()})
    .then(data => setData(data))
  }
  
  useEffect(()=>{
    getData()
  }, [])

  function addCard(prod){
    const tanlanganProduct = savat.find((item)=>{
      return prod.id === item.id
    })

    if(tanlanganProduct){
      setSavat(savat.map(x => x.id === prod.id ? {...tanlanganProduct, qty: tanlanganProduct.qty + 1} : x))
    }else{

      setSavat([...savat, {...prod, qty: 1}])
    }
    
  }

  function addpayment(){
    fetch('http://192.168.100.5:5000/api/sell-batch',{
      method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ items: savat.map(i => ({ id: i.id, qty: i.qty, price: i.price })) })
    })
    .then(()=>{setSavat([]), getData(), alert('Sotildi')})
  }

  return (
    <div>
      <h1>Kassa</h1>
      <table className="table">
  <thead>
    <tr >
      <th scope="col">#</th>
      <th scope="col">Nomi</th>
      <th scope="col">Soni</th>
      <th scope="col">Narxi</th>
    </tr>
  </thead>
  <tbody>

    {data.map((item, index)=>{
      return(
        <tr key={item.id} onClick={()=>{ addCard(item)}}>
      <th scope="row">{index + 1} </th>
      <td>{item.name}</td>
      <td>{item.stock}</td>
      <td>{item.price}</td>
    </tr>
      )
    })}
    
  </tbody>
</table>

<div className="savat">

  <ul>
  <h1>Savat</h1>
    {savat.map((item)=>{
       return(
        <li key={item.id}>
          <span>{item.name} x </span>
          <span>{item.qty} = </span>
          <span>{item.price * item.qty}</span>
        </li>
       )
    })}
    
  </ul>

  <div className="payment">
    <h1>{savat.reduce((a, b)=> a + b.price * b.qty, 0)}</h1>
    <button className="btn btn-primary" onClick={addpayment}>To'lash</button>
  </div>

</div>
    </div>
  )
}

export default Kassa