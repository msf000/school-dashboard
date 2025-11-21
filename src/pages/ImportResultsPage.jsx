import React from 'react';

export default function ImportResultsPage() {
  const successful = [
    { row: 1, nin: "1042444334", name: "أحمد صالح", specialty: "رياضيات", mobile: "0551122334", user: "user123", status: "نجاح" },
  ];
  const failed = [
    { row: 2, nin: "1012728345", name: "منصور كمال", specialty: "علوم", mobile: "0545685231", user: "user456", status: "فشل: رقم الهوية مكرر" },
  ];

  return (
    <div style={{ fontFamily: 'Tajawal', direction: 'rtl', minHeight: '100vh', background: "#f7f7f7", padding: "36px" }}>
      <h2 style={{ color: '#2365b1' }}>نتائج استيراد المعلمين</h2>
      <div style={{ display: 'flex', gap: '40px', margin: '30px 0' }}>
        <div>
          <h4 style={{ color: "#25a765" }}>عمليات استيراد ناجحة ({successful.length})</h4>
          <table style={{ background: '#fff', marginTop: 10, borderRadius: 10, boxShadow: '0 0 4px #e7eaf0', width: '400px' }}>
            <thead>
              <tr>
                <th>رقم الصف</th>
                <th>رقم الهوية</th>
                <th>الاسم</th>
                <th>التخصص</th>
                <th>الجوال</th>
                <th>المستخدم المسند</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {successful.map(item => (
                <tr key={item.row}>
                  <td>{item.row}</td>
                  <td>{item.nin}</td>
                  <td>{item.name}</td>
                  <td>{item.specialty}</td>
                  <td>{item.mobile}</td>
                  <td>{item.user}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h4 style={{ color: "#b12525" }}>عمليات استيراد فاشلة ({failed.length})</h4>
          <table style={{ background: '#fff', marginTop: 10, borderRadius: 10, boxShadow: '0 0 4px #e7eaf0', width: '400px' }}>
            <thead>
              <tr>
                <th>رقم الصف</th>
                <th>رقم الهوية</th>
                <th>الاسم</th>
                <th>التخصص</th>
                <th>الجوال</th>
                <th>المستخدم المسند</th>
                <th>الحالة</th>
              </tr>
            </thead>
            <tbody>
              {failed.map(item => (
                <tr key={item.row}>
                  <td>{item.row}</td>
                  <td>{item.nin}</td>
                  <td>{item.name}</td>
                  <td>{item.specialty}</td>
                  <td>{item.mobile}</td>
                  <td>{item.user}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}