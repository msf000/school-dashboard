import React from 'react';

export default function SystemAdminDashboard() {
  return (
    <div style={{ fontFamily: 'Tajawal, Arial', direction: 'rtl', padding: '36px', minHeight: '100vh', background: "#f7f7f7" }}>
      <h2 style={{ color: '#2365b1', marginBottom: '30px' }}>لوحة مدير النظام</h2>
      <div style={{ background: "#fff", borderRadius: '14px', boxShadow:'0 0 12px #e3e6ec', padding:'32px', maxWidth:'500px', margin:'0 auto' }}>
        <ul style={{ fontSize: '18px', color: '#23448c', lineHeight: '2.0' }}>
          <li>إدارة المدارس على مستوى النظام بالكامل</li>
          <li>إدارة المستخدمين (مدير مدرسة / معلم / مقيم)</li>
          <li>إعداد الصلاحيات والوصول</li>
          <li>التحليلات الشاملة على النظام</li>
          <li>إشراف على جميع الطلبات والاعتراضات</li>
        </ul>
      </div>
    </div>
  );
}