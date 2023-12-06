import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './style/Guestbook.css';

function Guestbook() {
    const [entries, setEntries] = useState([]);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [team, setTeam] = useState('');
    const [teamSetting, setTeamSetting] = useState('');

    useEffect(() => {
        fetchEntries();
    }, [teamSetting]); // Dependency array includes teamSetting

    async function fetchEntries() {
        try {
            const response = await axios.get(`http://localhost:8080/guestbook/${teamSetting}`);
            setEntries(response.data.reverse()); // 최신순으로 가져오기
        } catch (error) {
            console.error('Error fetching entries:', error);
            // Handle error appropriately
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/guestbook', { name, content, team });
            setName('');
            setContent('');
            setTeam('');
            fetchEntries(); // Refresh entries after submission
        } catch (error) {
            console.error('Error submitting entry:', error);
            // Handle error appropriately
        }
    }

 

    return (
        <div className="guestbook">
            <input
                value={teamSetting}
                onChange={(e) => setTeamSetting(e.target.value)}
                placeholder="팀별조회"
                className="name-input"
            />
           
            <div className="entries">
                {entries.map((entry, index) => (
                    <div key={index} className="entry">
                        <strong>{entry.name}:</strong> {entry.content}
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
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="메시지를 입력하세요"
                    className="content-textarea"
                />
                <textarea
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                    placeholder="팀을 입력하세요"
                    className="content-textarea"
                />
                <button type="submit" className="submit-btn">전송</button>
            </form>
        </div>
    );
}

export default Guestbook;
