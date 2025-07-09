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
            alert("New post has been succesfully created!")
        })
        .catch((err) => {
            console.log("Error while waiting for server responce: " + err)
            alert("There was an error while creating post, please try again. If the issue presists inform the owner of the site about the issue and provide them with this info: " + err)
        })
});

