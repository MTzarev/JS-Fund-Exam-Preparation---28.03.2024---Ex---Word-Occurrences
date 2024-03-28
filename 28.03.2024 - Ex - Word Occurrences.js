function wordOcc(input) {
    let wordObj = {};

    for (let word of input) {
        if (!wordObj.hasOwnProperty(word)) {
            wordObj[word] = 1
        } else {
            wordObj[word] += 1
        }
    }
    let sorted = Object.entries(wordObj).sort((a, b) => b[1] - a[1]);

    for (let i = 0; i < sorted.length; i++) {
        let [word, count] = sorted[i]
        console.log(`${word} -> ${count} times`);
    }

}
wordOcc([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );