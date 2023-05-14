import { useState, useEffect } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from "axios"


export interface FetchResponse<T> {
  count: number;
  results: T[]
}

const useData = (endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {

  const [data, setData] = useState<[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(null)


  useEffect(() => {

    const controller = new AbortController()
    setIsLoading(true)
    apiClient.get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then(res => {
        setData(res.data.results)
        setIsLoading(false)
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message)
      })
    return () => controller.abort()
  }, deps ? [...deps] : [])

  return { data, isLoading, error }
}

export default useData
