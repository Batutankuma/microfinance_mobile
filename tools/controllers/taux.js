import axios from 'axios';
import { useState, useEffect } from 'react';

export function useFetchTaux(url) {
    const [taux, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        if (!url) return
        async function fetchData() {
            const response = await axios.get(url);
            const data = await response.data.message;
            setData(data)
            setLoading(false)
        }
        setLoading(true)
        fetchData()
    }, [url])
    return { isLoading, taux }
}