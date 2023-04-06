//This file's aim is to provide utils functions to be use overall code

import { useEffect } from "react";
import { useState } from "react";

export function useFetch(url, headers = {}, postData = {}) {
    const [data, setData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return
        setLoading(true);
        async function fetchData() {
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(postData)
                })
                const data = await response.json()
                setData(data)
            } catch (err) {
                console.log(err);
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url, headers, postData])
    return { isLoading, data, error }
}

