import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style/write.css';

function Write() {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [team, setTeam] = useState('');
    const [recipient, setRecipient] = useState('');
    const navigate = useNavigate();

    const teams = ["신한FM", "몰리고", "뉴스쿨", "신밧드", "신메뉴", "샤이닝", "신화", "시나리오", "신아이", "스윗", "신입사원", "크라임씬"];

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://3.38.148.174:8080/guestbook', { name, content, team, recipient });
        // 폼 제출 후 필드 초기화
        setName('');
        setContent('');
        setTeam('');
        setRecipient('');
        // 페이지 이동 또는 사용자에게 알림 표시
        navigate('/tree'); // useNavigate를 이용한 경로 이동
    };

    return (
        <div className="write-form">
            <form onSubmit={handleSubmit}>
                <input
                    className="form-element"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름"
                />
                <select
                    className="form-element"
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                >
                    <option value="">본인의 소속팀을 선택하세요</option>
                    {teams.map((team, index) => (
                        <option key={index} value={team}>{team}</option>
                    ))}
                </select>
                <select
                    className="form-element"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                >
                    <option value="">편지를 보낼 팀을 선택하세요</option>
                    {teams.map((show_team, index) => (
                        <option key={index} value={show_team}>{show_team}</option>
                    ))}
                </select>
                <textarea
                    className="form-element"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="편지 내용을 입력하세요"
                />
                <button type="submit" className="form-element">전송</button>
            </form>
        </div>
    );
}

export default Write;
