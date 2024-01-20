import axios from 'axios';
import { useState, useEffect } from 'react';

export function useFetchOperation(url) {
    const [operation, setData] = useState({})
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
    return { isLoading, operation }
}
export function useFetchOperationPost(url) {
    const [operation, setData] = useState({})
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        if (!url) return
        async function fetchData() {
            const response = await axios.post(url,{"montant":1,
                "taux":"6170a5a678dc4064246236a5",
                "personne":"6170a096f1ff362a9477cc22",
                "compte":"6170a2da48794a62dcfab6ff",
                "motif":"envoi",
                "destinateur":"61787ac0c8707c43c8e318e2"});
            const data = await response.data.message;
            setData(data)
            setLoading(false)
        }
        setLoading(true)
        fetchData()

    }, [url])
    return { isLoading, operation }
}