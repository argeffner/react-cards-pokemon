import React, {useState} from 'react';
import {v4 as uuid} from "uuid";
import axios from "axios";


const useAxios1 = (url) => {
    const [items, setItems] = useState([]);
    const addItem = async () => {
      const response = await axios.get(url) 
      setItems(items => [...items, { ...response.data, id: uuid() }]);
      }
    const clearItems = () => setItems([]);
    return [items, addItem, clearItems]
}
const useAxios2 = (url, name) => {
    const [items, setItems] = useState([]);
    const addItem = async (name) => {
      const response = await axios.get(`${url}${name}`) 
      setItems(items => [...items, { ...response.data, id: uuid() }]);
      }
    const clearItems = () => setItems([]);
    return [items, addItem, clearItems]
}

// const useAxios = (url, name) => {
//     const [items, setItems] = useState([]);
//     // let fullUrl = (name) ? `${url}${name}` : url;
//     // let extra = (name) ? name : "";
    
//     const addItem = async (name = "") => {
//     let response;
//     if (name) {
//       response = await axios.get(`${url}${name}`) 
//       setItems(items => [...items, { ...response.data, id: uuid() }]);
//     }
//     if (!name) {
//       response = await axios.get(url) 
//       setItems(items => [...items, { ...response.data, id: uuid() }]);
//       }
//     // const response = await axios.get(`${url}${name}`)
//     // setItems(items => [...items, { ...response.data, id: uuid() }]);
//     }
//     const clearItems = () => setItems([]);
//     return [items, addItem, clearItems]
// }
// export default useAxios;

export {useAxios1, useAxios2};