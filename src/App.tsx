import useUser from "./hooks/useUser";

function App() {
  const { session, user, signOut, signInWithGithub } = useUser();

  return (
    <>
      {session ? (
        <div>
          <p>Hello, {user && user.fullname}</p>
          <button onClick={() => signOut()}>ログアウト</button>
        </div>
      ) : (
        <button onClick={() => signInWithGithub()}>GitHubでログイン</button>
      )}
    </>
  );
}

export default App;
