import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './style/Guestbook.css';


function Guestbook() {
    const [entries, setEntries] = useState([]);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [team, setTeam] = useState('');

    useEffect(() => {
        async function fetchEntries() {
            const response = await axios.get('http://localhost:8080/guestbook');
            setEntries(response.data.reverse()); // 최신순으로 가져오기
        }
        fetchEntries();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/guestbook', { name, content, team });
        setName('');
        setContent('');
        setTeam('');
        const response = await axios.get('http://localhost:8080/guestbook');
        setEntries(response.data.reverse());
    }
    

    return (
        <div className="guestbook">
            <div className="entries">
                {entries.map((entry, index) => (
                    <div key={index} className="entry">
                        <strong>{entry.name} ({entry.team}):</strong> {entry.content}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="form">
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름"
                    className="name-input"
                />
                <input
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    placeholder="팀명"
                    className="team-input"
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="메시지를 입력하세요"
                    className="content-textarea"
                />
                <button type="submit" className="submit-btn">전송</button>
            </form>
        </div>
    );
}

export default Guestbook;