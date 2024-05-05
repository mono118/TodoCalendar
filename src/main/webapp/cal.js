const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
const manthList = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const manthList_ja = ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"];
const weeks = ["日", "月", "火", "水", "木", "金", "土"];

function generateCal(year, month){
	const startDay = new Date(year, month + 1, 1).getDay(); //最初の日の曜日
	const endDate = new Date(year, month + 1, 0).getDate(); //最後の日にち

	const calDiv = document.getElementById("calendar");
	let calHtml = ""; //カレンダーを作るところ


	let date = 1;

	calHtml += "<h2>" + year + " / " + manthList[month] + "</h2>";
	calHtml += "<table>" + "<tr>";
	//曜日の行を作成
	for(let i = 0; i < weeks.length; i++){
		calHtml += "<td>" + weeks[i] + "</td>";
	}
	calHtml += "</tr>";
	calHtml += "</table>";
	
	document.querySelector("#calendar").innerHTML = calHtml;
}

generateCal(currentYear, currentMonth);