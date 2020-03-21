const toggleLike = e => {
    const parentClassList = e.target.parentElement.classList
    parentClassList.contains("liked") ? parentClassList.remove("liked") : parentClassList.add("liked")
}

document.querySelector("img").onclick = toggleLike