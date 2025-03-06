function replaceTextInDOM(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.nodeValue = node.nodeValue.replace(
      /VIETSKY TOURIST/gi,
      "VSK TRAVEL & GUIDE"
    );
  } else {
    node.childNodes.forEach(replaceTextInDOM);
  }
}

document.querySelectorAll("a.logo-header img").forEach((img) => {
  img.src =
    "https://vsktravel.com/thumbs/360x75x1/upload/photo/final-logo-2001-2260.png";
});

replaceTextInDOM(document.body);
