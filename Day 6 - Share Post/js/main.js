"use strict";

function copyLink() {
    let link = document.querySelector(".link-box .link");
    let clipboard = navigator.clipboard;
    clipboard.writeText(link.textContent);
    alert("Link copied to clipboard successfully!");
}