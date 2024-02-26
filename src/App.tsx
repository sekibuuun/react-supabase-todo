import useUser from "./hooks/useUser";

function App() {
  const { session, signOut, signInWithGithub } = useUser();

  return (
    <>
      {session ? (
        <button onClick={() => signOut()}>サインアウト</button>
      ) : (
        <button onClick={() => signInWithGithub()}>GitHubでログイン</button>
      )}
    </>
  );
}

export default App;
