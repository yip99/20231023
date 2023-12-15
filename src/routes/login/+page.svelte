<script>
	// import { onMount } from 'svelte';
    import { writable } from "svelte/store";
    import { setContext } from 'svelte';
    import { getContext } from 'svelte';
    import {user} from '$lib/store/user.js';
    import { goto } from "$app/navigation";
	export let data;
	// onMount(() => {});
    let input = {
        username: '',
        password: ''
    }
    let errorMessage = '';
    let message = '';
    // const user = getContext('user');
    async function login() {
        errorMessage = '';
        message = 'logging in';
        let option = {
            method: "POST",
            body: JSON.stringify(input)
        }
        let response = await fetch('/api/login', option);
        errorMessage = '';
        message = '';
        if(!response.ok) {
            errorMessage = (await response.json()).message;
            return;
        }
        let responseUser = await response.json();
        message = 'login successed';
        $user = responseUser;
        await goto('/');
    }
    async function signup() {
        errorMessage = '';
        message = 'signing up';
        let option = {
            method: "POST",
            body: JSON.stringify(input)
        }
        let response = await fetch('/api/signup', option);
        errorMessage = '';
        message = '';
        if(!response.ok) {
            errorMessage = (await response.json()).message;
            return;
        }
        message = 'signup successed';
    }
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="login-form">
    <div class="inputs">
        <input type="text" name="username" placeholder="username" bind:value="{input.username}" />
        <input type="password" name="password" placeholder="password" bind:value="{input.password}" />
    </div>
    <div class="buttons">
        <button on:click="{signup}">Sign up</button>
        <button on:click="{login}">Login</button>
    </div>
    <div>
        <a href="#">forget password</a>
    </div>
    <div class="messages">
        <span class="error-message">{errorMessage}</span>
        <span class="message">{message}</span>
    </div>
</div>
<style>
    .login-form > * {
        margin: 0 auto;
        width: fit-content;
        display: flex;
    }
    .inputs,
    .messages {
        flex-direction: column;
    }
    .buttons {
        gap: 1em;
    }
    .error-message {
        color: red;
    }
</style>
