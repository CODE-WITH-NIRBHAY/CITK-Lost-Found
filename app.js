import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 50);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function setLoading(button, loading, text = "Submit") {
  if (loading) {
    button.disabled = true;
    button.innerText = "Submitting...";
  } else {
    button.disabled = false;
    button.innerText = text;
  }
}

const CLOUD_NAME = "daghjfamd";
const UPLOAD_PRESET = "citk-lost-found";

async function uploadImage(file) {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("upload_preset", UPLOAD_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: "POST", body: fd }
  );

  if (!res.ok) {
    throw new Error("Cloudinary upload failed");
  }

  const data = await res.json();
  return data.secure_url;
}

window.submitLost = async function (event) {
  const btn = event.target;
  setLoading(btn, true);
  try {
    const name = document.getElementById("itemName").value;
    const desc = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const imageFile = document.getElementById("image").files[0];

    if (!name || !desc || !location || !imageFile) {
      alert("Please fill all fields and select image");
      return;
    }

    const imageUrl = await uploadImage(imageFile);

    await addDoc(collection(db, "lostItems"), {
      name,
      desc,
      location,
      imageUrl,
      status: "open",
      createdAt: new Date()
      
    });

  showToast("Lost item submitted successfully");
  setLoading(btn, false);

  } catch (err) {
    setLoading(btn, false);
    console.error(err);
    alert("❌ Error submitting lost item");
  }
  document.querySelector("form")?.reset();

};

window.submitFound = async function (event) {
  const btn = event.target;
  setLoading(btn, true);

  try {
    const name = document.getElementById("itemName").value;
    const desc = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const imageFile = document.getElementById("image").files[0];

    if (!name || !desc || !location || !imageFile) {
      alert("Please fill all fields and select image");
      return;
    }

    const imageUrl = await uploadImage(imageFile);

    await addDoc(collection(db, "foundItems"), {
      name,
      desc,
      location,
      imageUrl,
      status: "open",
      createdAt: new Date()
    });

    showToast("Found item submitted successfully");
    setLoading(btn, false);

  } catch (err) {
    setLoading(btn, false);
    console.error(err);
    alert("❌ Error submitting found item");
  }
  itemName.value = "";
description.value = "";
location.value = "";
image.value = "";

};
