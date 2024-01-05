<!-- login page -->
<script>
import { goto } from "$app/navigation";
import AuthController from "./../../lib/network/auth.controller.js";
/**@type {string} */
let username;
/**@type {string} */
let password;
/**@type {string} */
let error;

const SUCSESS_REDIRECT = "/";
function login() {
  AuthController.login(username, password)
    .then(() => {
      goto(SUCSESS_REDIRECT);
    })
    .catch((err) => {
      error = err.message;
    });
}
</script>

<form on:submit|preventDefault={login}>
  <input type="text" bind:value={username} placeholder="username" />
  <input type="password" bind:value={password} placeholder="password" />
  <button type="submit">Login</button>
</form>

{#if error}
  <p style="color: red">{error}</p>
{/if}
