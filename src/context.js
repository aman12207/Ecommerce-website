import { createContext, useContext,useState, useEffect} from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({children})=>{
  const [list,setList] = useState([]);
  const [selectedItem,setSelectedItem] = useState([]);
  const[id,setId] = useState(null);
  const renderList = async() =>{
    const response = await axios.get("https://fakestoreapi.com/products")
    .catch((err)=>{
      console.log(err)
    })
    setList(response.data);
  }
  useEffect(()=>{
    renderList();
  },[])
  return <AppContext.Provider value={{list,setSelectedItem,selectedItem,setId}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () =>{
  return useContext(AppContext);
}