import { useEffect, useState } from "react";

import { Session } from "@supabase/supabase-js";

import { supabase } from "../lib/supabase-client";
import { User } from "../types/types";

export default function useUser() {
  const [session, setSession] = useState<Session | null>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      },
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const setupUser = async () => {
      if (session?.user.id) {
        const { data: user } = await supabase
          .from("users")
          .select("*")
          .eq("id", session.user.id)
          .single();
        setUser(user);
      }
    };
    setupUser();
  }, [session]);

  function signInWithGithub() {
    supabase.auth.signInWithOAuth({ provider: "github" });
  }

  function signOut() {
    supabase.auth.signOut();
  }

  return {
    session,
    user,
    signInWithGithub,
    signOut,
  };
}
