function ReplaceString() {
	var dictionary = [];
	$.getJSON( "data.txt", function( data ) {
		data.data.forEach(element => var dictionary.push({ key:   element[0], value: element[1] });  ); 
	//console.log(data);
	});
	var dictionary = { "a": "m", "b": "h", "c": "t", "d": "f", "e": "g", "f": "k", "g": "b", "h": "p", "i": "j", "j": "w", "k": "e", "l": "r", "m": "q", "n": "s", "o": "l", "p": "n", "q": "i", "r": "u", "s": "o", "t": "x", "u": "z", "v": "y", "w": "v", "x": "d", "y": "c", "z": "a", "A": "M", "B": "H", "C": "T", "D": "F", "E": "G", "F": "K", "G": "B", "H": "P", "I": "J", "J": "W", "K": "E", "L": "R", "M": "Q", "N": "S", "O": "L", "P": "N", "Q": "I", "R": "U", "S": "O", "T": "X", "U": "Z", "V": "Y", "W": "V", "X": "D", "Y": "C", "Z": "A" },
    string = document.getElementById("input").value;
	var result = string;
		for (const [key, value] of Object.entries(dictionary)) 
		{
			 result = result.replace(key,value); 
		}

   document.getElementById("output").innerHTML = result;
 }