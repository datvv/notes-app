import "./App.css";
import Dashboard from "./components/Dashboard";

import { useState, useEffect } from "react";
import { supabase } from "./supabase/supabaseClient";
import Auth from "./components/login/Auth";

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
    <div>
      {!session ? (
        <Auth />
      ) : (
        <div className="flex justify-center items-center h-screen bg-gray-400">
          <Dashboard key={session.user.id} session={session} />
        </div>
      )}
    </div>
  );
}

export default App;
