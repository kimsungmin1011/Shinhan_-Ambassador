import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/GuestbookList.css';
import Letter from '../img/letter.png';

function CrimeList() {
    const [entries, setEntries] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchEntries() {
            const response = await axios.get('http://3.38.148.174:8080/guestbook/샤이닝');
            setEntries(response.data);
        }
        fetchEntries();

        // Function to add snowflakes
        function addSnowflakes() {
            const snowflakeCount = 50;
            for (let i = 0; i < snowflakeCount; i++) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                snowflake.textContent = '❄';
                snowflake.style.left = Math.random() * 100 + 'vw';
                snowflake.style.animationDuration = Math.random() * 3 + 5 + 's';
                snowflake.style.opacity = Math.random();
                snowflake.style.fontSize = Math.random() * 20 + 10 + 'px';
                document.body.appendChild(snowflake);
            }
        }

        addSnowflakes();
    }, []);

    const handleEntryClick = (entry) => {
        setSelectedEntry(entry);
    };

    const renderModal = () => {
        if (!selectedEntry) return null;
        return (
            <div className="modal">
                <h2>편지 내용</h2>
                <p><strong>보낸이:</strong> {selectedEntry.name}</p>
                <p><strong>소속팀:</strong> {selectedEntry.team}</p>
                <p><strong>내용:</strong> {selectedEntry.content} 크리스마스에 공개됩니다!!</p>
                <button onClick={() => setSelectedEntry(null)}>닫기</button>
            </div>
        );
    };

    return (
        <>
        <div className="guestbook-list">
            <div className="entries-grid">
                {entries.map((entry) => (
                    <div key={entry.id} className="entry" onClick={() => handleEntryClick(entry)}>
                        <img src={Letter} alt={`Letter ${entry.id}`} /> {/* Letter represented as an image */}
                    </div>
                ))}
            </div>
            {renderModal()}
        </div>
        </>
    );
}

export default CrimeList;
