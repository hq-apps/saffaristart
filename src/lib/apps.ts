import { store, type Store } from "./store";

let homelinks = [
  {title: "hq apps", icon: "https://hqapps.org/icens/512.png", link: "https://hqapps.org", system: true},
  {title: "Saffari WebSite", icon: "https://saffari.tk/icon.png", link: "https://saffari.tk", system: true},
  {title: "HQ Gaming", icon: "/gaming.png", link: "https://games.hqapps.org", system: true},
  {title: "Saffari Start", icon: "https://saffari.tk/icon.png", link: "https://start.saffari.tk", system: true},
  {title: "join", icon: "/discord-mark-blue.png", link: "https://hqapps.org/dc", system: true},
  {title: "subscribe hq apps", icon: "https://icons.duckduckgo.com/ip3/www.youtube.com.ico", link: "https://www.youtube.com/@hq_apps?sub_confirmation=1", system: true},
]

export function readFromStorage(): Object[] {
  return JSON.parse(window.localStorage.getItem("saffaristartapps") || "null")
}

export let appsList: Store<Object[]> = store(readFromStorage() || homelinks);

export function writeToStorage() {
  window.localStorage.setItem("saffaristartapps", JSON.stringify(appsList.get()))
}

export let editMode: Store<boolean> = store(false);