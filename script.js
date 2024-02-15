function addItem() {
    var inputField = document.getElementById("itemInput");
    var inputValue = inputField.value.trim();
  
    if (inputValue === "") {
      alert("Please enter an item.");
      return;
    }
  
    var itemList = document.getElementById("itemList");
    var li = document.createElement("li");
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    
    var label = document.createElement("label");
    label.textContent = inputValue;
    
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    removeButton.onclick = function() {
      li.remove();
    };
    
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(removeButton);
    
    label.addEventListener("click", function() {
      checkbox.checked = !checkbox.checked;
      toggleCompletedStyle(label);
    });
  
    itemList.appendChild(li);
    inputField.value = "";
  }
  
  function toggleCompletedStyle(element) {
    element.parentNode.classList.toggle("completed");
  }
  