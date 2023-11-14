import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './style/Guestbook.css';


function Guestbook() {
    const [entries, setEntries] = useState([]);
    const [name, setName] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        async function fetchEntries() {
            const response = await axios.get('http://13.125.120.242:8080/guestbook');
            setEntries(response.data.reverse()); // 최신순으로 가져오기
        }
        fetchEntries();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://13.125.120.242:8080/guestbook', { name, content });
        setName('');
        setContent('');
        // 전체 페이지를 다시 로드하지 않고 목록을 새로 고치기 위해 항목을 다시 가져옴
        const response = await axios.get('http://13.125.120.242:8080/guestbook');
        setEntries(response.data.reverse());
    }

    return (
        <div className="guestbook">
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
                <button type="submit" className="submit-btn">전송</button>
            </form>
        </div>
    );
}

export default Guestbook;
