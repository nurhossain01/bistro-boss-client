import { useEffect, useState } from "react";

const useMenu = () =>{
  const [dataItems, setDataItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
    fetch('http://localhost:5000/menu')
    .then(res => res.json())
    .then(data => {
      setDataItems(data)
      setLoading(false);
    });
  },[]);
  return [dataItems, loading];
}
export default useMenu;