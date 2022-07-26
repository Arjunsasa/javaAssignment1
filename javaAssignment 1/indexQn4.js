var en = "Hello, World";

var es = "Hola, Mundo";

var chn = "你好,世界";

var de = "Hallo, Welt";

function helloWorld(language) {
    if (language == es) {
        return (es)
    }
    else if (language == chn) {
        return (chn)
    }
    else if (language == de) {
        return (de)
    }
    else {
        return (en)
    }
}