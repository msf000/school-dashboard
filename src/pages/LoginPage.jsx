import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("مدير مدرسة");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    // ربط المسارات حسب نوع المستخدم
    if (userType === "مدير نظام")
      navigate('/system-admin');
    else if (userType === "مدير مدرسة")
      navigate('/');
    else if (userType === "معلم")
      navigate('/teacher-dashboard');
    else if (userType === "مقيم")
      navigate('/evaluator-dashboard');
    else
      alert("يرجى اختيار نوع المستخدم الصحيح");
  }

  return (
    <div style={{ fontFamily: 'Tajawal, Arial', direction: 'rtl', background: "#f7f7f7", minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleLogin} style={{ background: '#fff', boxShadow:'0 10px 28px #dbdbfa', borderRadius: 14, padding: '40px 36px', minWidth: '340px' }}>
        <h2 style={{ color: '#2365b1', textAlign: 'center', marginBottom: '20px' }}>تسجيل الدخول</h2>
        <div style={{ marginBottom: '18px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: 4, display:'block' }}>نوع المستخدم</label>
          <select value={userType} onChange={e => setUserType(e.target.value)} style={{ width:'100%', padding:7, borderRadius:7, border:'1px solid #e0e0e0' }}>
            <option>مدير نظام</option>
            <option>مدير مدرسة</option>
            <option>معلم</option>
            <option>مقيم</option>
          </select>
        </div>
        <div style={{ marginBottom: '18px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: 4, display:'block' }}>اسم المستخدم</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} required
                 style={{ width:'100%', padding:7, borderRadius:7, border:'1px solid #e0e0e0' }} />
        </div>
        <div style={{ marginBottom: '28px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: 4, display:'block' }}>كلمة المرور</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
                 style={{ width:'100%', padding:7, borderRadius:7, border:'1px solid #e0e0e0' }} />
        </div>
        <button type="submit"
                style={{ width:'100%', background:'#2365b1', color:'#fff', border:0, borderRadius:9, fontSize:18, padding:'12px 0', marginTop:'6px', fontWeight:'bold', cursor:'pointer' }}>
          دخول
        </button>
      </form>
    </div>
  );
}