// Event handling
document.addEventListener("DOMContentLoaded",
	function (event) {
		function sayHello (event) {
			console.log(this);
			var name = document.getElementById("name").value;
			var message = "<h2>Hello " + name + "!</h2>";

			document.getElementById("content").innerHTML = message;

			if (name === "stydent") {
				var title = document.querySelector("#title").textContent;
				title += "& Lovin' it!";
				document.querySelector("h1").textContent = title;
			}
		}

		// Unobstrusive event binding
		document.querySelector("button").addEventListener("click", sayHello);
	}
)

// document.querySelector("button").click = sayHello;