import React from 'react';

export default function ObjectionsPage() {
  // بيانات تجريبية لاعتراضات المعلمين
  const objections = [
    { id: 1, teacher: "عبدالله الزهراني", school: "مدرسة النور", type: "اعتراض تقييم", status: "جاري المعالجة" },
    { id: 2, teacher: "أسماء القحطاني", school: "مدرسة الهدى", type: "اعتراض نقل", status: "مغلق" }
  ];
  return (
    <div style={{ fontFamily: 'Tajawal, Arial', direction: 'rtl', minHeight: '100vh', background: "#f7f7f7", padding: "36px" }}>
      <h2 style={{ color: '#2365b1' }}>اعتراضات المعلمين</h2>
      <table style={{ width: '100%', background: '#fff', borderRadius: '12px', boxShadow: '0 0 5px #e3e7eb', marginTop: 18 }}>
        <thead style={{ background: '#e4ecf7', color: '#2b4c99' }}>
          <tr>
            <th>اسم المعلم</th>
            <th>اسم المدرسة</th>
            <th>نوع الاعتراض</th>
            <th>الحالة</th>
          </tr>
        </thead>
        <tbody>
          {objections.map(o => (
            <tr key={o.id}>
              <td>{o.teacher}</td>
              <td>{o.school}</td>
              <td>{o.type}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}