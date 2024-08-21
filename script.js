function colorizeElement(node) {
  node.classList.add("new-class");
  node.style.color = "#f1f1f1";
  node.style.fontSize = "12px";
  node.setAttribute("data-tag", node.tagName);
  return node;
}
const element = document.querySelector("#test");
const modifiedElement = colorizeElement(element);
console.log(element);
