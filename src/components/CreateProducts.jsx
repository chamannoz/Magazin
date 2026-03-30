import { useEffect, useState } from "react"
import './CreateProducts.css'

function CreateProduct() {
  const[data, setData]= useState([])
  const[fromData, setFromData]=useState({name: '',stock:'', price:''})

  console.log(fromData)

  function getData() {
    fetch('http://192.168.100.5:5000/api/products')
    .then((res)=>{return res.json()})
    .then(data =>setData(data))
  }
  useEffect(()=>{
    getData()
  },[])

  function addProduct(e){
  e.preventDefault()
  fetch('http://192.168.100.5:5000/api/add-product',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(fromData)
  })
  .then(()=>{setFromData({name:'', stock: '', price:''}),getData(),alert('Qo`shildi')})
  }

  return (
    <div>
      <form onSubmit={(e)=>{addProduct(e)}}>
        <input  type="text" placeholder='Nomi' onChange={(e)=>{setFromData({...fromData, name: e.target.value})}} />
        <input type="number" placeholder='Soni' onChange={(e)=>{setFromData({...fromData, stock: e.target.value})}} />
        <input type="number" placeholder='Narxi' onChange={(e)=>{setFromData({...fromData, price: e.target.value})}} />
        <button className='btn btn-warning'>Add Product</button>
      </form>
    </div>
  )
}

export default CreateProduct


  
