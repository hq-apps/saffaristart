import { store, type Store } from "./store";

export function readURLFromStorage(): string {
  return window.localStorage.getItem("saffaristartsearchurl") || "https://duckduckgo.com"
}

export function readHeaderFromStorage(): string {
  return window.localStorage.getItem("saffaristartsearchheader") || "q"
}

export let baseURL: Store<string> = store(readURLFromStorage());
export let header: Store<string> = store(readHeaderFromStorage());

export function writeToStorage() {
  window.localStorage.setItem("saffaristartsearchurl", baseURL.get())
  window.localStorage.setItem("saffaristartsearchheader", header.get())
}