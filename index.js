function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
  console.log(string.toUpperCase());
  }
  logShout ('HELLO');
  function logWhisper(string) {
    console.log(string.toLowerCase());
    }
    logWhisper ('Hello');
    
    function sayHiToHeadphonedRoommate(string) {
if (string === string.toLowerCase()) {
string = "I can\'t hear you!"
} else if (string === string.toUpperCase()) {
    string = "YES INDEED!"
} else if (string === "Let\'s have dinner together!") {
    string = "I would love to!"
}
return string;
}

console.log (sayHiToHeadphonedRoommate);
