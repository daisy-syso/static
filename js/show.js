function show(){ 
		var box = document.getElementById("txt3"); 
		var text = box.innerHTML; 
		var newBox = document.createElement("span"); 
		var btn = document.createElement("a"); 
		newBox.innerHTML = text.substring(0,20); 
		btn.innerHTML = text.length > 20 ? "...显示全部" : ""; 
		btn.href = "###"; 
		btn.onclick = function(){ 
		if (btn.innerHTML == "...显示全部"){ 
		btn.innerHTML = "收起"; 
		newBox.innerHTML = text; 
		}else{ 
		btn.innerHTML = "...显示全部"; 
		newBox.innerHTML = text.substring(0,20); 
		} 
		} 
		box.innerHTML = ""; 
		box.appendChild(newBox); 
		box.appendChild(btn); 
		} 
		show(); 