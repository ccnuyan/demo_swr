import useSWR, { SWRConfig } from "swr";
import React from "react";
import { fetcher } from "./fetcher";
import { ErrorBoundary } from "./ErrorBoundary";

function User() {
  const { data } = useSWR("https://ap1i.github.com/users/ccnuyan");

  if (!data) {
    return <div>loading</div>;
  }

  return <h1>{data.login}</h1>;
}

function Repos() {
  const { data } = useSWR("https://ap1i.github.com/users/ccnuyan/repos");

  if (!data) {
    return <div>loading</div>;
  }

  return (
    <ul>
      {data.map((repo) => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <ErrorBoundary>
        <User />
        <Repos />
      </ErrorBoundary>
    </SWRConfig>
  );
}

export default App;
