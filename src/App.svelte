<script lang="ts">
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Link from './lib/Link.svelte'
  import Bar from './lib/Bar.svelte'
  import DialogCreate from './lib/DialogCreate.svelte'
  import EditButton from './lib/EditButton.svelte'
  import ChooseSearch from './lib/ChooseSearch.svelte'
  import { dialogVisible } from './lib/dialogState'
  import { appsList, editMode, writeToStorage } from './lib/apps'

  function plusApp() {
    dialogVisible.set(true)
  }

  function removeElement(i) {
    if(!editMode.get()) return;
    appsList.update(e => {
      e.splice(i, 1);
      return e;
    });
    writeToStorage();
  }
</script>

<main>
  <h1>Saffari Start</h1>
  <Bar />
  <div class="links">
    {#each $appsList as linka, i}
      <a href={$editMode ? "#" : linka.link} on:click={() => removeElement(i)}><Link title={linka.title} icon={linka.icon} /></a>
    {/each}
    {#if !$editMode}
      <span on:click={plusApp}><Link title="Plus App" icon="/plus.svg" /></span>
    {/if}
  </div>
  {#if $editMode}
    <ChooseSearch />
  {/if}
  <EditButton />
  

  {#if $dialogVisible}
    <DialogCreate />
  {/if}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    width: 100%;
  }

  .links {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 8px;
  }
  a:link { text-decoration: none; }

a:visited { text-decoration: none; }

a:hover { text-decoration: none; }

a:active { text-decoration: none; }
</style>
