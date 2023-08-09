import { useState } from "react";
import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {
  const [user, setuser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setuser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
