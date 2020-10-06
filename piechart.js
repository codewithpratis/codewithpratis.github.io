window.onload = function () {

	var chart = new CanvasJS.Chart("chartContainer", {
		exportEnabled: true,
		animationEnabled: true,
		title: {
			text: "Skills"
		},
		legend: {
			cursor: "pointer",
			itemclick: explodePie
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "{name}: <strong>{y}%</strong>",
			indexLabel: "{name} - {y}%",
			dataPoints: [
				{ y: 50, name: "Coding (Python, JavaScript, HTML5/CSS3, Matlab, Data Manipulation, R, SQL, NoSQL)", exploded: true },
				{ y: 30, name: "Business Analysis (Tableau, Requirements Gathering, Documentation)" },
				{ y: 20, name: "Research (Econometrics, Statistical Analysis)" }
			]
		}]
	});
	chart.render();
}

function explodePie(e) {
	if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}