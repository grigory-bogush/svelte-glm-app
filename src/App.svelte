<script lang="ts">
import MainPage from "./components/MainPage.svelte";
import AuthApi from "./modules/AuthApi";


	let username = '';
	let password = '';
	let isLoggedIn = false;

	const authApi = new AuthApi(import.meta.env.VITE_GML_API_URL);

	function onSubmit(event: SubmitEvent) {
		event.preventDefault();

		authApi.checkCredentials({ username, password }).
			then(isAuth => {
				if (!isAuth) {
					alert("Incorrect username or password");
					return;
				}
				isLoggedIn = true;
			});
	}
</script>

<main>
	<h1>GLM app</h1>
	{#if !isLoggedIn}
		<form on:submit={onSubmit}>
			<input name="username" bind:value={username} placeholder="Username" required/>
			<input name="password" bind:value={password} placeholder="Password" required/>
			<button type="submit">Log In</button>
		</form>
	{:else}
		<MainPage authApi={authApi}/>
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>