import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const box = document.getElementById("matches");

async function match() {
  const lost = await getDocs(collection(db, "lostItems"));
  const found = await getDocs(collection(db, "foundItems"));

  lost.forEach(l => {
    found.forEach(f => {
      if (
        l.data().name.toLowerCase()
        .includes(f.data().name.toLowerCase())
      ) {
       box.innerHTML += `
  <div class="card card-found">
    <h3>Possible Match</h3>
    <img src="${l.data().imageUrl}">
    <img src="${f.data().imageUrl}">
    <p><b>${l.data().name}</b> ↔ <b>${f.data().name}</b></p>
  </div>
`;  }
    });
  });
}
if (!box.innerHTML.trim()) {
  box.innerHTML = "<p>No possible matches found yet.</p>";
}


match();
