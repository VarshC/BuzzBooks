var counter = 0;
function processFormData() {
	console.log("enter processFormData");
	//get form data
	var title = document.getElementById("title");
	var author = document.getElementById("author");
	var date = document.getElementById("date");
	var rating = document.getElementById("rating");
	var review = document.getElementById("review");

	var bookList = document.getElementById("bookList");
	var newBook = title.value;
	var newAuthor = author.value;
	var newDate = date.value;
	var newRating = rating.value;
	var newReview = review.value;

	//create new row for entires
	var row = bookList.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);

	//create show review button
	counter++;
	console.log("counter: " + counter);
	var btn = document.createElement("BUTTON");
	btn.id = "button" + counter;
	btn.innerHTML = "toggle review";
	console.log(btn);
	btn.setAttribute("onclick", "toggleReview(" + counter + ")");
	// btn.addEventListener("click", toggleReview(this));
	console.log("btn id = " + btn.id);
	console.log(btn.onclick.value);

	//populate new row with entires
	cell1.append(newBook);
	cell2.append(newAuthor);
	cell3.append(newDate);
	cell4.append(newRating);
	cell5.append(btn)

	//put review under row
	var reviewrow = bookList.insertRow(2);
	var rowcell = reviewrow.insertCell(0);
	rowcell.append(newReview);
	console.log("counter: " + counter);
	reviewrow.id = "row" + counter;
	reviewrow.setAttribute("display", "block");

	console.log("row id = " + reviewrow.id)

	document.getElementById("form").reset()

	console.log("exit processFormData");

}

function toggleReview(id) {
  console.log('hi');
	console.log("enter toggleReview function");
	console.log(counter + 1);

	var review = document.getElementById("row" + id);
	// console.log(review.innerHTML);
	console.log(review);
	console.log(review.id);
	if (review.style.display === "none") {
		review.style.display = "block";
	} else {
		review.style.display = "none";
	}
	console.log("exit toggleReview function");
}