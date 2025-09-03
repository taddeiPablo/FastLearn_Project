import { createClient } from '@supabase/supabase-js';

const fastlearnWebappUrl = process.env.fastlearnWebappUrl;
const fastlearnAnonKey = process.env.fastlearnAnonKey;

export const supabase = createClient(fastlearnWebappUrl, fastlearnAnonKey);