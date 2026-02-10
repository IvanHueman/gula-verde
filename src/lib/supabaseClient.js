// Archivo temporal para evitar errores de compilación
export const supabase = {
  auth: {
    signInWithPassword: () => console.log("Supabase desactivado de momento"),
    getSession: () => ({ data: { session: null } })
  }
}