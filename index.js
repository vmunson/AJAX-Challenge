$(() => {
    let realAnswer
    $('#questionButton').click(() => {
          
        $('#answer').val(' ')
        $('#result').text('?')
        $('#correctAnswer').text('?')
        $.ajax({
            type: 'GET',
            url: 'https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple'
        }).done((res) => {
            console.log(res)
            let question = res.results
            for(q of question){
                $('#question').text(`${q.question}`)
                realAnswer = `${q.correct_answer}`
           } 
           }) 
    })
    
    $('#answerField').submit((e) => {
        e.preventDefault()
        let answer = $('#answer').val()
        let result = answer.toLowerCase() == realAnswer.toLowerCase() ? 'Correct': 'Incorrect. Click the Reveal Answer button'
        $('#result').text(`${result}`)
    })
    $('#revealAnswerButton').click(() => {
        $('#correctAnswer').text(`${realAnswer}`)
    })
})
    