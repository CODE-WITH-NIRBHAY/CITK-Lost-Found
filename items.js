import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const div = document.getElementById("items");

async function load(col, type) {
  const snap = await getDocs(collection(db, col));
  snap.forEach(d => {
    const x = d.data();
    div.innerHTML += `
  <div class="card ${type === "Lost" ? "card-lost" : "card-found"}">
  <span class="badge badge-${type === "Lost" ? "lost" : "found"}">${type}</span>
    <h3>${type}: ${x.name}</h3>
    <img src="${x.imageUrl}">
    <p>${x.desc}</p>
    <p><b>Location:</b> ${x.location}</p>
    <p><b>Status:</b> ${x.status}</p>
  </div>
`;
  });
}
if (!div.innerHTML.trim()) {
  div.innerHTML = "<p>No items reported yet.</p>";
}


load("lostItems", "Lost");
load("foundItems", "Found");
