import { useState } from 'react'

export default function SyllabusAccordion({ syllabus }) {
  const [openSemester, setOpenSemester] = useState(0)

  const toggle = (index) => {
    setOpenSemester(openSemester === index ? -1 : index)
  }

  return (
    <div className="accordion">
      {syllabus.map((sem, i) => (
        <div key={i} className={`accordion-item${openSemester === i ? ' open' : ''}`}>
          <button className="accordion-header" onClick={() => toggle(i)}>
            <span className="accordion-title">
              <span className="accordion-badge">Sem {sem.semester}</span>
              Semester {sem.semester}
            </span>
            <span className="accordion-arrow">{openSemester === i ? '▲' : '▼'}</span>
          </button>
          <div className={`accordion-body${openSemester === i ? ' show' : ''}`}>
            <ul className="subject-list">
              {sem.subjects.map((subject, j) => (
                <li key={j} className="subject-item">
                  <span className="subject-dot"></span>
                  {subject}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
