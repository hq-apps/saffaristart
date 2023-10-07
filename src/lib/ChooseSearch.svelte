<script>
  import { baseURL, header, writeToStorage } from "./search"

  const engines = {
    google: {base: "https://google.com", header: "q"},
    ddg: {base: "https://duckduckgo.com", header: "q"},
    bing: {base: "https://bing.com", header: "q"},
    yahoo: {base: "https://search.yahoo.com/search", header: "p"},
    yandex: {base: "https://yandex.ru/search", header: "text"},
    startpage: {base: "https://startpage.com/sp/search", header: "query"},
    wikipedia: {base: "https://en.wikipedia.org/wiki/Special:Search", header: "search"},
    amazon: {base: "https://amazon.com/s", header: "k"},
    youtube: {base: "https://youtube.com/results", header: "search_query"},
    cornhub: {base: "https://cornhub.website/search", header: "q"},
  }

  let selectedEngine = window.localStorage.getItem("saffaristartsearch") || "ddg";

  function updateSearch() {
    window.localStorage.setItem("saffaristartsearch", selectedEngine)
    baseURL.set(engines[selectedEngine].base)
    header.set(engines[selectedEngine].header)
    writeToStorage()
  }
</script>

<label for="choosese">Choose a search:</label>

<select name="search engines" id="choosese" bind:value={selectedEngine} on:change={updateSearch}>
  <option value="google">Goggle</option>
  <option value="ddg">DuckFUckGO</option>
  <option value="bing">Bing</option>
  <option value="yahoo">yaHOO!!!</option>
  <option value="yandex">Яндекс YanDex</option>
  <option value="startpage">StartPage</option>
  <option value="wikipedia">wikipedia</option>
  <option value="amazon">amaZon</option>
  <option value="youtube">Youtube</option>
  <option value="cornhub">CornHub 🌽🌽🌽</option>
</select>