// Importing necessary hooks from React and types from Axios
import { useEffect, useState } from "react";
import apiClient from "../services/api-client"; // Importing the pre-configured Axios instance
import { AxiosRequestConfig, CanceledError } from "axios";

// Defining a TypeScript interface for the expected API response structure
// This is a generic interface where T can be any type
interface FetchResponse<T> {
  count: number; // Total number of items in the response
  results: T[]; // Array of items of generic type T
}

// Defining the custom hook useData as a generic function
const useData = <T>(
  endpoint: string, // API endpoint as a string
  requestConfig?: AxiosRequestConfig, // Optional Axios request configurations
  deps?: any[] // Optional array of dependencies for useEffect
) => {
  // State for storing the fetched data, initially an empty array
  const [data, setData] = useState<T[]>([]);

  // State for storing any error messages, initially an empty string
  const [error, setError] = useState("");

  // State for tracking if the request is currently loading, initially false
  const [isLoading, setLoading] = useState(false);

  // useEffect hook to perform the data fetching side-effect
  useEffect(
    () => {
      // Creating an AbortController for the ability to cancel the fetch request
      const controller = new AbortController();

      // Setting the loading state to true at the start of the data fetch operation
      setLoading(true);

      // Making a GET request using the apiClient (Axios instance) to the given endpoint
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal, // Using AbortController's signal to allow cancellation
          ...requestConfig, // Spreading the optional requestConfig into Axios config
        })
        .then((res) => {
          // Handling the successful response:
          // - Storing the results in the data state
          // - Setting isLoading to false as data fetching is complete
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          // Handling errors:
          // - If the error is an instance of CanceledError, do nothing (request was cancelled)
          // - Otherwise, set the error state to the error message and isLoading to false
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      // Cleanup function of useEffect to abort the request when the component is unmounted
      return () => controller.abort();
    },
    // Dependencies array for useEffect, using the provided deps or an empty array if not provided
    deps ? [...deps] : []
  );

  // Returning the data, error, and isLoading states from the hook
  return { data, error, isLoading };
};

export default useData;
