import axios from "axios";
import { useEffect, useState } from "react";
import { PiSeatbeltLight } from "react-icons/pi";

const useMenu  = () => {
    const [menu,setMenu] = useState([]);

    const [loading,setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        
        fetch("http://localhost:5000/menu")
        .then(res => res.json())
        .then(data => {
            setMenu(data)
            setLoading(false)
        })
    },[])
    return [menu,loading]
}
export default useMenu;