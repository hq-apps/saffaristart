<script lang="ts">
  import { editMode } from "./apps"

  export let title: string;
  export let icon: string;
</script>

<div class={"card" + ($editMode ? " wiggle" : "")}>
  <img src={icon} alt={`Icon OF the amazinh App ${title}`}>
  <span>{title}</span>
  {#if $editMode}
    <button class="delete">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
    </button>
  {/if}
</div>

<style>
  .card {
    display: flex;
    background-color: rgba(255,255,255,0.5);
    border-radius: 8px;
    width: 64px;
    height: 80px;
    padding: 8px;
    font-size: 0.8rem;
    flex-direction: column;
    color: black;
    text-decoration: none;
    transition: transform 250ms;
    position: relative;
  }

  .delete {
    position: absolute;
    top: 0;
    right: 0;
    border: gray 1px solid;
    border-radius: 100%;
    aspect-ratio: 1/1;
    background-color: white;
  }

  span {
    text-align: center;
  }

  img {
    border-radius: 16px;
  }

  @keyframes wiggle {
    0% {
      transform: scale(0.9) rotate(-10deg);
    }
    50% {
      transform: scale(0.9) rotate(10deg);
    }
    100% {
      transform: scale(0.9) rotate(-10deg);
    }
  }

  .wiggle {
    transform: scale(0.9);
    animation: wiggle 200ms infinite;
  }
</style>