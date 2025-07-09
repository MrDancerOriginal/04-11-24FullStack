document.body.onload = () => {
    axios.get(
        "http://localhost:3000/posts"
    ).then((response) => {
        // alert(JSON.stringify(response.data, null, 2));
        const posts = response.data;
        const container = document.querySelector("main");

        posts.forEach((post) => {
            const card = document.createElement("div");
            card.className = "card mb-3 mx-3 border-2";
            card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${post.username}</h5>
            <h5 class="card-title">${post.postname}</h5>
            <p class="card-text">${post.postcontent}</p>
          </div>
        `;
            container.appendChild(card);
        });
    }).catch((err) => {
        console.log("Error while waiting for server responce: " + err)
        alert("There was an error while getting the list of all posts, please try again. If the issue presists inform the owner of the site about the issue and provide them with this info: " + err)
    })
}