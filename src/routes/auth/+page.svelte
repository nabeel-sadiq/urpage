<script>
  import { signInWithGoogle } from "$lib/auth-client";

  async function handleGoogleSignIn() {
    await signInWithGoogle();
  }
</script>

<div class="flex flex-col justify-center items-center min-h-screen">
  <button class="btn btn-accent" onclick={handleGoogleSignIn}>
    <span class="loading loading-spinner"></span>
    Login with Google</button
  >
</div>
