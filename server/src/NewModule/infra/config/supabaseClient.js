
const { createClient } = require('@supabase/supabase-js');
const config = require('./index');

const supabaseUrl = config.supabase.url;
const supabaseKey = config.supabase.serviceKey;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;