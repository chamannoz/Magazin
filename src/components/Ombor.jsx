
import React ,{useState, useEffect} from "react"
import "./Ombor.css"
function Ombor() {
  const [data,setData] = useState([])
  const [editingProduct,setEditingProduct] = useState(null)

  console.log(editingProduct);
   function getData() {
    fetch('http://192.168.100.5:5000/api/products')
    .then((res)=>{return res.json()})
    .then(data =>setData(data))
  }
  useEffect(()=>{
    getData()
  },[])
function editProduc(){

 fetch(`http://192.168.100.5:5000/api/product/${editingProduct.id}`,{
    method:'PUT',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(editingProduct)
  })
  .then(()=>{
    setEditingProduct(null);
   getData();
alert('Yangilandi');
  });

}
function delete1(item) {
  fetch(`http://192.168.100.5:5000/api/products/${item.id}`,{
    method:'DELETE',
    headers: {'Content-Type':'application/json'}
  }).then(()=>getData(), alert('ochirish')
)
}

  return (
    <div>
      <h1>Ombor</h1>
       <table className="table">
  <thead>
    <tr >
      <th scope="col">#</th>
      <th scope="col">Nomi</th>
      <th scope="col">Soni</th>
      <th scope="col">Narxi</th>
       <th scope="col">Amallar</th>
    </tr>
  </thead>
  <tbody>

    {data.map((item, index)=>{
      return(
        <tr key={item.id}>
      <th scope="row">{index + 1} </th>
      <td>{item.name}</td>
      <td>{item.stock}</td>
      <td>{item.price}</td>
      <td><button className="btn" onClick={()=>setEditingProduct(item)}>✏️Tahrirlash</button></td>
      <td><button className="btn1"onClick={()=>{delete1(item)}} >🗑️O'chirish</button></td>
    </tr>
      )
    })}
    
  </tbody>
</table>l
  {editingProduct && <form className="editForm">
        <input type="text" placeholder='Nomi'value={editingProduct.name} onChange={(e)=>{setEditingProduct({...editingProduct, name: e.target.vaue})}} />
        <input type="number" placeholder='Soni'value={editingProduct.stock} onChange={(e)=>{setEditingProduct({...editingProduct, stock: e.target.value})}} />
        <input type="number" placeholder='Narxi'value={editingProduct.price} onChange={(e)=>{setEditingProduct({...editingProduct, price: e.target.value})}} />
        
<div className="d">
<button className="btn3">Bekor qilish</button>
<button className="btn4" onClick={()=>{editProduc()}}>Saqlash</button>
</div>

      </form>}


    </div>
  )
}

export default Ombor

