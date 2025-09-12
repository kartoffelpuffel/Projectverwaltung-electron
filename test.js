const result = [{ "projektname": "Nochma", "beschreibung": "Nochmal", "progress": 100, "subtasks": [{ "title": "test", "done": true }] }, { "projektname": "Ncoh ein Test", "beschreibung": "noch einer", "progress": 0, "subtasks": [{ "title": "Test", "done": false }] }, { "projektname": "test", "beschreibung": "test", "progress": 0, "subtasks": [{ "title": "eset", "done": false }] }, { "projektname": "Noch ein TEst", "beschreibung": "einer geht noch rein", "progress": 50, "subtasks": [{ "title": "einer geht noch", "done": true }, { "title": " einer geht noch rein", "done": false }] }, { "projektname": "Beta Gamma Alpha TEST", "beschreibung": "ein einfacher TEST", "progress": 0, "subtasks": [{ "title": "Beta Gamma Alpha TEST", "done": false }] }, { "projektname": "Better Gamer Alfonso", "beschreibung": "baune", "progress": 67, "subtasks": [{ "title": "Beta", "done": true }, { "title": "Gamme", "done": true }, { "title": "Alpha", "done": false }] }]

const index = result.findIndex((element, index) => {
    return element.projektname == "Nochma"
})

console.log(index)

result.splice(index, 1)

console.log(result)