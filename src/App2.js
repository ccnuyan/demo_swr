import useSWR from "swr";

function User() {
  const { data, error } = useSWR(
    "https://api.github.com/users/ccnuyan",
    (url) => fetch(url).then((res) => res.json())
  );

  if (error) {
    return <div>error</div>;
  }

  if (!data) {
    return <div>loading</div>;
  }

  return <h1>{data.login}</h1>;
}

function Repos() {
  const { data, error } = useSWR(
    "https://api.github.com/users/ccnuyan/repos",
    (url) => fetch(url).then((res) => res.json())
  );

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
    <div>
      <User></User>
      <Repos></Repos>
    </div>
  );
}

export default App;
