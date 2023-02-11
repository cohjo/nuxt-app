import { createClient } from "@supabase/supabase-js";

export const useSupabase = () => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.supabaseUri,
    config.public.supabaseSecret
  );
  return { supabase };
};
