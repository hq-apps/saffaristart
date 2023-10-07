<script>
  import { baseURL, header } from "./search"
</script>

<form class="searchbar" action={$baseURL || "https://duckduckgo.com/"}>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  <input placeholder="Search...." name={$header || "q"}>
</form>

<style>
  .searchbar {
    position: relative;
    width: 90%;
  }
  input {
    box-sizing: border-box;
    background-color: rgba(255,255,255,0.5);
    border: none;
    border-radius: 50000px;
    padding: 8px;
    position: relative;
    padding-left: 40px;
    width: 100%;
  }
  .feather-search {
    color: black;
    position: absolute;
    top: 4px;
    left: 8px;
    z-index: 1000;
  }
</style>