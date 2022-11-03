import "./styles.css";
import { useState, useEffect } from "react";
import GitHubAccount from "./GitHubAccount.jsx";
import { BallTriangle } from "react-loader-spinner";

export default function App() {
  const [data, setData] = useState(""); //if data is received => success
  const [loading, setLoading] = useState(false); //if data is received => success

  const [error, setError] = useState(""); //if data is received => success

  console.log(data);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("https://api.github.com/users/pjhyett")
        .then((response) => response.json())
        .then((response) => setData(response))
        .then(() => setLoading(false))
        .catch(setError);
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }

  if (error) {
    return <h1> Something went Wrong... </h1>;
  }
  if (data) {
    return (
      <pre>
        <GitHubAccount
          login={data.login}
          id={data.id}
          avatarUrl={data.avatar_url}
        />
      </pre>
    );
  }
  return (
    <>
      <h1>No DATA</h1>
    </>
  );
}
