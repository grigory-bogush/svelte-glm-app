<script lang="ts">
import GmlApi from "../modules/GmlApi";
import Record from "./Record.svelte";
  import type AuthAPi from "../modules/AuthApi";
  export let authApi: AuthAPi;

  const gmlApi = new GmlApi(import.meta.env.VITE_GML_API_URL, authApi);

  const recordsPromise = gmlApi.listRecords();
</script>

<main class="main-content">
	<h1>Records list</h1>
  {#await recordsPromise}
	  <p>...loading</p>
  {:then records}
    <div class="record-container">
      {#each records as record (record.id)}
        <Record
          name={record.name}
          platform={record.platform}
          complete_time_hours={record.complete_time_hours}
          medal={record.medal}
          genre={record.genre}
        />
      {/each}
    </div>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</main>

<style>
  .record-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>