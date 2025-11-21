import React from 'react';

export default function TransferRequestsPage() {
  // بيانات تجريبية لطلبات النقل
  const transfers = [
    { id: 1, teacher: "أحمد علي", from: "مدرسة النور", to: "مدرسة الرحمة", status: "قيد الدراسة" },
    { id: 2, teacher: "سعاد منصور", from: "مدرسة الهدى", to: "مدرسة النخبة", status: "مقبول" }
  ];
  return (
    <div style={{ fontFamily: 'Tajawal, Arial', direction: 'rtl', minHeight: '100vh', background: "#f7f7f7", padding: "36px" }}>
      <h2 style={{ color: '#2365b1' }}>طلبات النقل</h2>
      <table style={{ width: '100%', background: '#fff', borderRadius: '12px', boxShadow: '0 0 5px #e3e7eb', marginTop: 18 }}>
        <thead style={{ background: '#e4ecf7', color: '#2b4c99' }}>
          <tr>
            <th>اسم المعلم</th>
            <th>من مدرسة</th>
            <th>إلى مدرسة</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {transfers.map(t => (
            <tr key={t.id}>
              <td>{t.teacher}</td>
              <td>{t.from}</td>
              <td>{t.to}</td>
              <td>{t.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}