import useSWR from "swr";

function App() {
  const { data, error } = useSWR(
    "https://api.github.com/users/ccnuyan",
    (url) => fetch(url).then((res) => res.json())
  );

  console.log("data", data);
  console.log("error", error);

  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading</div>;
  }

  return <h1>{data.login}</h1>;
}

export default App;

// https://swr.vercel.app/
// Fast page navigation
// Polling on interval
// Data dependency
// Revalidation on focus
// Revalidation on network recovery
// Local mutation (Optimistic UI)
// Smart error retry
// Pagination and scroll position recovery
// React Suspense