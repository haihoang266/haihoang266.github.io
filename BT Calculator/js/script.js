var FlagNewNum = false;
var readOut = document.getElementById("result");
var AddOpt = "";
var otherNum = 0;

function press(button) {
	var num = button.innerHTML;
	if(FlagNewNum) {
		readOut.value = num;
		FlagNewNum = false;
	}
	else
		if (readOut.value == "0")
			readOut.value = num;
		else
			readOut.value += num;
}

function Operation(opt){
	if (FlagNewNum && AddOpt != "=");
	else
	{
		FlagNewNum = true;
		if ( '+' == AddOpt)
			otherNum += parseFloat(readOut.value);
		else
			if ( '-' == AddOpt)
				otherNum -= parseFloat(readOut.value);
			else
				if ( '*' == AddOpt)
					otherNum *= parseFloat(readOut.value);
				else
					if ( '/' == AddOpt)
						otherNum /= parseFloat(readOut.value);
					else
						otherNum = parseFloat(readOut.value);
		readOut.value = otherNum;
		AddOpt = opt;
	}
}

function dot() {
	var currentRead = readOut.value;
	if(FlagNewNum) {
		currentRead = "0.";
		FlagNewNum = false;
	}
	else
		if (currentRead.indexOf(".") < 0)
			currentRead += ".";

	readOut.value = currentRead;

}

function comeBack(){
	readOut.value = "0";
	FlagNewNum = true;	
}

function percent() {
	readOut.value = (parseFloat(readOut.value)/100) ;
}

function squareRoot(){
	readOut.value = Math.sqrt(parseFloat(readOut.value)) ;
}

function factorial(){
	var temp = readOut.value;
	if (temp == "0")
		readOut.value = "1" ;
	else
	{
	var N = 1;
	for (var i=1; i<=Number(temp); i +=1)
		N = N*i;
	readOut.value = N + "";
	}
}