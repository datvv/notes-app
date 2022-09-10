import "./App.css";
import Dashboard from "./components/Dashboard";

import { useState, useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="App flex justify-center items-center h-screen bg-gray-400">
      <Dashboard session={session} />
    </div>
  );
}

export default App;
