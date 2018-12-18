function check(){
	//var studentNumber = document.forms["student-info"]["course-num"].value;
	//var studentName = document.forms["student-info"]["st-name"].value;
	var points = 0;
	var answers = [1, 5, 9, 11, 13, 18, 19];
	for (var i = 0; i < answers.length; i++){
		if (document.getElementById(answers[i].toString()).checked == true){
			points++;
		}
	}
	
	alert("Оценка: " + generateMark(points));
}

function generateMark(points){
	var wordMark = "";
	switch(points){
		case 0:
		case 1:
		case 2: wordMark = "Слаб 2"; break;
		case 3: wordMark = "Среден 3"; break;
		case 4: wordMark = "Добър 4"; break;
		case 5: wordMark = "Много добър 5"; break;
		case 6:
		case 7: wordMark = "Отличен 6"; break;
	}
	return wordMark;
}

