import React, { useState } from 'react';

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      nin: "1042444334",
      name: "أحمد صالح",
      specialty: "رياضيات",
      category: "معلم",
      status: "نشط"
    },
    {
      id: 2,
      nin: "1084523345",
      name: "هناء منصور",
      specialty: "لغة عربية",
      category: "معلمة روضة",
      status: "نشط"
    },
  ]);

  return (
    <div style={{ fontFamily: 'Tajawal, Arial', direction: 'rtl', padding: '32px', background: '#f7f7f7', minHeight: '100vh' }}>
      <h2 style={{ color: '#2365b1' }}>إدارة المعلمين</h2>
      <div style={{ margin: '18px 0', display: 'flex', gap: '12px' }}>
        <button style={{ background: '#2365b1', color: '#fff', padding: '8px 22px', borderRadius: 8, border: 0, fontSize: 16 }}>+ إضافة معلم</button>
        <button style={{ background: '#f2f7fd', color: '#2365b1', padding: '8px 22px', borderRadius: 8, border: 0, fontSize: 16 }}>استيراد المعلمين</button>
        <button style={{ background: '#f2f7fd', color: '#2365b1', padding: '8px 22px', borderRadius: 8, border: 0, fontSize: 16 }}>إدارة التخصصات</button>
      </div>
      <table style={{ width: '100%', background: '#fff', borderRadius: '12px', boxShadow: '0 0 5px #e3e7eb', overflow: 'hidden', marginTop: 18 }}>
        <thead style={{ background: '#e4ecf7', color: '#2b4c99' }}>
          <tr>
            <th>رقم الهوية الوطنية</th>
            <th>الاسم الكامل</th>
            <th>التخصص</th>
            <th>فئة المعلم</th>
            <th>الحالة</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr key={teacher.id}>
              <td>{teacher.nin}</td>
              <td>{teacher.name}</td>
              <td>{teacher.specialty}</td>
              <td>{teacher.category}</td>
              <td>{teacher.status}</td>
              <td>
                <button style={{ margin: '0 4px' }}>تقييم المعلم</button>
                <select style={{ margin: '0 4px', padding: '4px 12px', borderRadius: 8 }}>
                  <option>إجراءات</option>
                  <option>عرض</option>
                  <option>تحرير</option>
                  <option>تقييم المعلم</option>
                  <option style={{ color: 'red' }}>حذف</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}