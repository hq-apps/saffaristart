import { store, type Store } from "./store";

let homelinks = [
  {title: "hq apps", icon: "https://hqapps.org/icens/512.png", link: "https://hqapps.org"}
]

export function readFromStorage(): Object[] {
  return JSON.parse(window.localStorage.getItem("saffaristartapps") || "null")
}

export let appsList: Store<Object[]> = store(readFromStorage() || homelinks);

export function writeToStorage() {
  window.localStorage.setItem("saffaristartapps", JSON.stringify(appsList.get()))
}

export let editMode: Store<boolean> = store(false);