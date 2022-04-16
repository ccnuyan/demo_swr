import getValueByKey, { SWRConfig } from "swr";
import React, { Suspense } from "react";
import { fetcher } from "./fetcher";
import { ErrorBoundary } from "./ErrorBoundary";

function User() {
  const { data } = getValueByKey("https://api.github.com/users/ccnuyan");
  return <h1>{data.login}</h1>;
}

function Repos() {
  const { data } = getValueByKey("https://api.github.com/users/ccnuyan/repos");
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
    <SWRConfig value={{ fetcher, suspense: true }}>
      <ErrorBoundary>
        <Suspense fallback={<div>loading</div>}>
          <User />
          <Repos />
        </Suspense>
      </ErrorBoundary>
    </SWRConfig>
  );
}

export default App;

// loading, error handling， flashing
// waterfall
// race conditions

// more:
// nesting

// spinner gray out current page
// spinner at another place.

// https://css-tricks.com/react-suspense-in-practice/
// https://reactjs.org/docs/concurrent-mode-suspense.html#approach-3-render-as-you-fetch-using-suspense
// https://github.com/arackaf/micro-graphql-react
