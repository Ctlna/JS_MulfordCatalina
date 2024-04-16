// Replace Words
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let palabra = sentence.split("");
    let letra = []
    
    for (let j of palabra){
        let root = j;
        for (let i of dictionary){
            if (j.startsWith(i)&& i.lenght < root.lenght){
                letra=i
            }
        }
        letra.push(root)
    }

}

dictionary = ["cat","bat","rat"];
sentence = "the cattle was rattled by the battery";
console.log (replaceWords(dictionary,sentence));

// 