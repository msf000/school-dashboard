import React from 'react';

export default function SubscriptionsPage() {
  // بيانات تجريبية للاشتراكات
  const subscriptions = [
    { id: 1, school: "مدرسة النور", startDate: "2025-01-01", endDate: "2025-12-31", status: "ساري" },
    { id: 2, school: "مدرسة الهدى", startDate: "2024-10-01", endDate: "2025-09-30", status: "منتهي" }
  ];
  return (
    <div style={{ fontFamily: 'Tajawal, Arial', direction: 'rtl', minHeight: '100vh', background: "#f7f7f7", padding: "36px" }}>
      <h2 style={{ color: '#2365b1' }}>اشتراكاتي</h2>
      <table style={{ width: '100%', background: '#fff', borderRadius: '12px', boxShadow: '0 0 5px #e3e7eb', marginTop: 18 }}>
        <thead style={{ background: '#e4ecf7', color: '#2b4c99' }}>
          <tr>
            <th>اسم المدرسة</th>
            <th>تاريخ البداية</th>
            <th>تاريخ النهاية</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map(s => (
            <tr key={s.id}>
              <td>{s.school}</td>
              <td>{s.startDate}</td>
              <td>{s.endDate}</td>
              <td>{s.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}