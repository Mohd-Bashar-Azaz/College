import React, { useState } from 'react';
import './App.css';
function App() {
    const [candidates, setCandidates] = useState([
        { name: 'Candidate 1', votes: 0 },
        { name: 'Candidate 2', votes: 0 },
        { name: 'Candidate 3', votes: 0 },
    ]);
    const voteForCandidate = (index) => {
        const newCandidates = [...candidates];
        newCandidates[index].votes += 1;
        setCandidates(newCandidates);
    };
    return (
        <div className="App">
            <h1>Voting Application</h1>
            <div className="candidates">
                {candidates.map((candidate, index) => (
                    <div key={index} className="candidate">
                        <h2>{candidate.name}</h2>
                        <p>Votes: {candidate.votes}</p>
                        <button onClick={() => voteForCandidate(index)}>
                            Vote
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default App;

