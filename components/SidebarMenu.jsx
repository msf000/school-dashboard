import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SidebarMenu() {
  const navigate = useNavigate();
  return (
    <nav style={{ minWidth: '200px', padding: '16px', background: '#fff', borderRadius: '12px', boxShadow: '0 0 8px #e5e7eb', marginLeft: '20px', fontFamily: 'Tajawal' }}>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: '17px' }}>
        <li style={{ marginBottom: '16px' }}>
          <a href="#" style={{ color: '#2365b1', textDecoration: 'none' }} onClick={()=>navigate('/')}>لوحة التحكم</a>
        </li>
        <li style={{ marginBottom: '16px' }}>
          <a href="#" style={{ color: '#2365b1', textDecoration: 'none' }} onClick={()=>navigate('/schools')}>إدارة المدارس</a>
        </li>
        <li style={{ marginBottom: '16px' }}>
          <a href="#" style={{ color: '#2365b1', textDecoration: 'none' }} onClick={()=>navigate('/teachers')}>إدارة المعلمين</a>
        </li>
        <li>
          <a href="#" style={{ color: '#2365b1', textDecoration: 'none' }} onClick={()=>navigate('/analytics')}>التحليلات والإحصائيات</a>
        </li>
      </ul>
    </nav>
  );
}