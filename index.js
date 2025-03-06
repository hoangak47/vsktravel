function replaceTextInDOM(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.nodeValue = node.nodeValue.replace(
      /VIETSKY TOURIST/g,
      "VSK TRAVEL & GUIDE"
    );
  } else {
    node.childNodes.forEach(replaceTextInDOM);
  }
}

replaceTextInDOM(document.body);
