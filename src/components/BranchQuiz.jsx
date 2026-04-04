import { useState } from 'react'

export default function BranchQuiz({ quiz, branchName }) {
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)

  const handleAnswer = (index, value) => {
    setAnswers(prev => ({ ...prev, [index]: value }))
  }

  const calculateResult = () => {
    let score = 0
    let maxScore = 0
    quiz.forEach((q, i) => {
      maxScore += q.weight * 5
      if (answers[i] !== undefined) {
        score += answers[i] * q.weight
      }
    })
    const percentage = Math.round((score / maxScore) * 100)
    let verdict, className
    if (percentage >= 80) {
      verdict = `Excellent fit! ${branchName} aligns well with your interests.`
      className = 'high'
    } else if (percentage >= 60) {
      verdict = `Good fit! You have strong potential for ${branchName}.`
      className = 'medium'
    } else if (percentage >= 40) {
      verdict = `Moderate fit. ${branchName} could work, but explore other options too.`
      className = 'medium'
    } else {
      verdict = `This branch may not be the best fit for your interests. Consider exploring other branches.`
      className = 'low'
    }
    setResult({ percentage, verdict, className })
  }

  const allAnswered = Object.keys(answers).length === quiz.length

  return (
    <div className="quiz-container">
      <div className="quiz-questions">
        {quiz.map((q, i) => (
          <div key={i} className="quiz-question">
            <p className="quiz-q-text">{i + 1}. {q.question}</p>
            <div className="quiz-options">
              {[
                { value: 1, label: 'Not at all' },
                { value: 2, label: 'A little' },
                { value: 3, label: 'Somewhat' },
                { value: 4, label: 'Quite a bit' },
                { value: 5, label: 'Absolutely!' },
              ].map(opt => (
                <button
                  key={opt.value}
                  className={`quiz-option${answers[i] === opt.value ? ' selected' : ''}`}
                  onClick={() => handleAnswer(i, opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="btn btn-primary quiz-submit"
        onClick={calculateResult}
        disabled={!allAnswered}
        style={{ opacity: allAnswered ? 1 : 0.5, width: '100%', justifyContent: 'center' }}
      >
        🎯 See My Result
      </button>

      {result && (
        <div className={`quiz-result ${result.className}`}>
          <div className="quiz-score">
            <span className="quiz-percentage">{result.percentage}%</span>
            <span className="quiz-score-label">Match Score</span>
          </div>
          <p className="quiz-verdict">{result.verdict}</p>
        </div>
      )}
    </div>
  )
}
