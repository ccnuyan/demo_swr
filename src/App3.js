import useSWR, { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function User() {
  const { data, error } = useSWR("https://api.github.com/users/ccnuyan");

  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading</div>;
  }

  return <h1>{data.login}</h1>;
}

function Repos() {
  const { data, error } = useSWR("https://api.github.com/users/ccnuyan/repos");

  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading</div>;
  }

  return (
    <ul>
      {data.map((repo) => (
        <li>{repo.name}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <SWRConfig value={{ fetcher: fetcher }}>
      <User />
      <Repos />
    </SWRConfig>
  );
}

export default App;
