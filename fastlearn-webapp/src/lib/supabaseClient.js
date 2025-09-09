import { createClient } from '@supabase/supabase-js';

/*const fastlearnWebappUrl = process.env.fastlearnWebappUrl;
console.log(fastlearnWebappUrl);
const fastlearnAnonKey = process.env.fastlearnAnonKey;
*/
export const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);