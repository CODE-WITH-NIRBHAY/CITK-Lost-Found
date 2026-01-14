import { db } from "./firebase.js";
import { collection, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const box = document.getElementById("adminItems");

async function load(col) {
  const snap = await getDocs(collection(db, col));
  snap.forEach(d => {
    const x = d.data();
  box.innerHTML += `
  <div class="card card-admin">
    <h3>${x.name}</h3>
    <img src="${x.imageUrl}">
    <p>Status: <b>${x.status}</b></p>
    ${
      x.status !== "returned"
        ? `<button onclick="mark('${col}','${d.id}')">Mark as Returned</button>`
        : "<p style='color:green; font-weight:600;'>Returned ✔</p>"
    }
  </div>
`;

  });
}

window.mark = async (c, id) => {
  if (!confirm("Are you sure you want to mark this item as returned?")) return;
  await updateDoc(doc(db, c, id), { status: "returned" });
  location.reload();
};

load("lostItems");
load("foundItems");
