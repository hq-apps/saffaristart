<script>
  import { editMode } from "./apps"
  function edit() {
  editMode.update(e => !e)
  }
</script>

<button on:click={edit}>
  {$editMode ? "stop edit" : "edit"}
</button>

<style>
  button {
    border: none;
    background-color: rgba(255,255,255,0.5);
    padding: 8px;
    border-radius: 4px;
    margin-top: 64px;
  }
</style>