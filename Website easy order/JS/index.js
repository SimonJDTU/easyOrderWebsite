var rootRef = firebase.database().ref().child("Beboere");

rootRef.on("child_added", snap => {

	var key = snap.key;
	var smørrebrød = snap.val();

	$("#table_body").append("<tr><td><input type='checkbox' id='checkbox' value='checkbox'></td><td>" 
		+ key + "</td><td>" + smørrebrød + "</td></tr>");
});

/*$("input[type='checkbox']:checked").each(
	function() {
		alert("hello");
	}
);*/