function  speak(text, language){
 if('speechSynthesis' in window){
    var speech = new SpeechSynthesisUtterance(text);
    speech.lang = language;
    window.speechSynthesis.speak(speech);
 }
}


function english(text){   speak(text,'en-us'); }
function chinese(text){   speak(text,'zh-cn'); }
function spanish(text){   speak(text,'es-pe'); }


