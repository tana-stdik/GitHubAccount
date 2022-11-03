export default function GitHubAccount({ login, id, avatarUrl }) {
  return (
    <>
      <p> Login: {login} </p>
      <p> id: {id} </p>
      <img src={avatarUrl} alt={login} height={150} />
    </>
  );
}
