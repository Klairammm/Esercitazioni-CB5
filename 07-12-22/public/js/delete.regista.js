const _DELETE = async (url,id) => {
    const res = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({'id':id})
    });
    return await res.json();
};

function deleteRegista(id) {
    const url = `http://localhost:3000/regista`;
    return _DELETE(url,id);
  }


const delete_btn = document.getElementById("delete-btn");
const idEl = document.getElementById("id");
const container = document.getElementById("container");

delete_btn.addEventListener("click", (e) => {
  e.preventDefault();
  deleteRegista(idEl.value).then((director) => {
    container.textContent = "";
  });
});