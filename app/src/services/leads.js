import { supabase } from '../lib/supabase'

const TABLE_LEADS = 'leads'

/**
 * Envia lead (email + telefone) para o Supabase.
 * @param {{ email: string, telefone: string }} data
 * @returns {Promise<{ ok: boolean, error?: string }>}
 */
export async function submitLead(data) {
  if (!supabase) {
    return { ok: false, error: 'Supabase não configurado. Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY no .env' }
  }

  const { email, telefone } = data || {}
  if (!email || !telefone) {
    return { ok: false, error: 'Email e telefone são obrigatórios' }
  }

  const { error } = await supabase
    .from(TABLE_LEADS)
    .insert([{ email: email.trim(), telefone: telefone.trim() }])

  if (error) {
    return { ok: false, error: error.message }
  }

  return { ok: true }
}
