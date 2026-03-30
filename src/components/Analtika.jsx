import { useEffect, useState } from 'react'

function Analitika() {

  const [anal, setAnal] = useState([])

  function getAnal() {
    fetch('http://192.168.100.5:5000/api/sales')
      .then((res) => { return res.json() })
      .then((anal) => setAnal(anal))
  }

  useEffect(() => {
    getAnal()
  }, [])

  return (
    <>
      <table className="table">
        {anal.map((item, index) => {
          return (
            <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.qty}</td>
              <td>{item.total_price}</td>
              <td>{item.date}</td>
            </tr>
          )
        })}
      </table>
    </>
  )
}

export default Analitika
