function showgrade() {
	
var grade =	document.getElementById("inputmarks").value;
	var panic = document.getElementById("showit")
	if (grade >= 85 && grade <=100 ){
		panic.textContent= "A+"
	}
	else if (grade >= 80 && grade <=100){
		panic.textContent= "A"
	}
	else if (grade >= 75 && grade <=100){
		panic.textContent= "B+"
	}
	else if (grade >= 60 && grade <=100){
		panic.textContent= "B"
	}
	else if (grade >= 50 && grade <=100){
		panic.textContent= "A"
	}
	else if (grade >= 35 && grade <=100){
		panic.textContent= "C"
	}
	else if (grade >= 0 && grade <=100) {
		panic.textContent= "Failed"
}
else {
	panic.textContent = "Enter Valid Number"
}
}