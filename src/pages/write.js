import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import './style/write.css';

function Write() {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [team, setTeam] = useState('');
    const navigate = useNavigate(); // useNavigate 사용

    const teams = ["신한FM", "몰리고", "뉴스쿨", "신밧드", "신메뉴", "샤이닝", "신화", "시나리오", "신아이", "스윗", "신입사원", "크라임씬"];

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/guestbook', { name, content, team });
        // 폼 제출 후 필드 초기화
        setName('');
        setContent('');
        setTeam('');
        // 페이지 이동 또는 사용자에게 알림 표시
        navigate('/get'); // useNavigate를 이용한 경로 이동
    };

    return (
        <div className="write-form">
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름"
                />
                <select
                    value={team}
                    onChange={(e) => setTeam(e.target.value)}
                >
                    <option value="">팀을 선택하세요</option>
                    {teams.map((team, index) => (
                        <option key={index} value={team}>{team}</option>
                    ))}
                </select>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="메시지를 입력하세요"
                />
                <button type="submit">전송</button>
            </form>
        </div>
    );
}

export default Write;
