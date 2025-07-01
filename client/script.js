// axios.get("http://localhost:3000/example").then(response => {
//     console.log(response.data);
// });

document.querySelector("#createPost").addEventListener("click", () => {
    axios
        .post("http://localhost:3000/posts", {
            username: document.querySelector("#username-input").value,
            postName: document.querySelector("#post-name-input").value,
            postContent: document.querySelector("#post-content-input").value,
        })
        .then((response) => {
            console.log(response.data);
        });
});