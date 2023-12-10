import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import './style/GuestbookList.css';

function GuestbookList() {
    const [entries, setEntries] = useState([]);
    const [selectedEntry, setSelectedEntry] = useState(null);
    const navigate = useNavigate(); // useNavigate 사용

    useEffect(() => {
        async function fetchEntries() {
            const response = await axios.get('http://localhost:8080/guestbook/신밧드');
            setEntries(response.data);
        }
        fetchEntries();
        // 눈송이 추가
    function addSnowflakes() {
        const snowflakeCount = 50; // 원하는 눈송이의 수
        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.textContent = '❄';
            snowflake.style.left = Math.random() * 100 + 'vw';
            snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // 눈송이가 떨어지는 속도를 랜덤하게 조절
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
                <h2>메시지 상세</h2>
                <p><strong>이름:</strong> {selectedEntry.name}</p>
                <p><strong>소속팀:</strong> {selectedEntry.team}</p>
                <p><strong>내용:</strong> {selectedEntry.content}</p>
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
                        <div className="letter">
                            <p>메시지 #{entry.id}</p>
                        </div>
                    </div>
                ))}
            </div>
            {renderModal()}
        </div>
        </>
    );
}

export default GuestbookList;