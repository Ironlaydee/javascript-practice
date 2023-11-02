function generateSentence(desc, arr) {
    let baseString = `The ${arr.length} ${desc} are `
    consts lastIndex = arr.length - 1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            baseString += arr[i]
        } else {
            baseString += arr[i] + ", "
        }
    }
    return baseString
}

const sentence = generateSentence("highest mountains", ["K2", "Mount Everest"])
console.log(sentence)