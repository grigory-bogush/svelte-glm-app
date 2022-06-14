<script lang="ts">
  import type { IGmlMedal } from "../modules/GmlApi";

  export let name: string;
  export let platform: string;
  export let medal: IGmlMedal;
  export let complete_time_hours: number;
  export let genre: string = "Not specificed";
</script>

<div class="record-item">
  <div>
    <div>{name}</div>
    <div>{platform}</div>
    <div>{medal}</div>
  </div>
  <div>
    <div>Genre: {genre}</div>
    <div>Completed in: {complete_time_hours}</div>
  </div>
</div>

<style>
  .record-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 400px;
    height: 100px;
    background: lightgray;
    border: 1px solid black;
    padding: 5px 20px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
</style>
