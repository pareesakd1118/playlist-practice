
export function getSongs() {
    return fetch("http://localhost:8080/api/v1/playlist")
    .then(res => res.json())
}