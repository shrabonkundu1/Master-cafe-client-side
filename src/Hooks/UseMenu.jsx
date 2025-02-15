// import axios from "axios";
// import { useEffect, useState } from "react";
// import { PiSeatbeltLight } from "react-icons/pi";

import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const useMenu  = () => {
    const axiosPublic = UseAxiosPublic();
    const {data: menu = [], isPending: loading, refetch} =  useQuery({
        queryKey: ["menu"],
        queryFn: async () =>{
            const res = await axiosPublic.get('/menu')
            return res.data
        }
    })
    // const [menu,setMenu] = useState([]);

    // const [loading,setLoading] = useState(false)
    // useEffect(() => {
    //     setLoading(true)
        
    //     fetch("http://localhost:5000/menu")
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenu(data)
    //         setLoading(false)
    //     })
    // },[])
    return [menu,loading,refetch]
}
export default useMenu;