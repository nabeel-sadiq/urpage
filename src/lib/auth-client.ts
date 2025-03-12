import { createAuthClient } from "better-auth/svelte"

export const authClient = createAuthClient()

export const signInWithGoogle = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  })
}