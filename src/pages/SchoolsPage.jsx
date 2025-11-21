import React, { useState } from 'react';

export default function SchoolsPage() {
  const [schools, setSchools] = useState([
    {
      id: 1,
      name: "مدرسة النور",
      stage: "ابتدائي",
      type: "حكومي",
      ministryNumber: "35434",
      principal: "محمد علي",
      assessor: "د. صالح",
    },
    {
      id: 2,
      name: "مدرسة الهدى",
      stage: "متوسط",
      type: "أهلي",
      ministryNumber: "23523",
      principal: "سعاد منصور",
      assessor: "أ. ريم",
    },
  ]);
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div style={{ fontFamily: 'Tajawal, Arial', direction: 'rtl', padding: '32px', background: '#f7f7f7', minHeight: '100vh' }}>
      <h2 style={{ color: '#2365b1' }}>إدارة المدارس</h2>
      <button 
        onClick={() => setShowAddModal(true)} 
        style={{ background: '#2365b1', color: '#fff', padding: '10px 22px', borderRadius: 8, margin: '20px 0', border: 0, fontSize: 17 }}
      >
        + إضافة مدرسة جديدة
      </button>
      <table style={{ width: '100%', background: '#fff', borderRadius: '12px', boxShadow: '0 0 5px #e3e7eb', overflow: 'hidden', marginTop: 18 }}>
        <thead style={{ background: '#e4ecf7', color: '#2b4c99' }}>
          <tr>
            <th>اسم المدرسة</th>
            <th>المرحلة التعليمية</th>
            <th>النوع</th>
            <th>الرقم الوزاري</th>
            <th>اسم المدير</th>
            <th>اسم مقيم الأداء</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {schools.map(school => (
            <tr key={school.id}>
              <td>{school.name}</td>
              <td>{school.stage}</td>
              <td>{school.type}</td>
              <td>{school.ministryNumber}</td>
              <td>{school.principal}</td>
              <td>{school.assessor}</td>
              <td>
                <button style={{ margin: '0 5px' }}>إضافة معلم</button>
                <button style={{ margin: '0 5px' }}>عرض</button>
                <button style={{ margin: '0 5px' }}>تحرير</button>
                <button style={{ margin: '0 5px' }}>إعدادات</button>
                <button style={{ margin: '0 5px', color: 'red' }}>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAddModal && (
        <div style={{
          position: 'fixed',
          right: 0, left: 0, top: 0, bottom: 0,
          background: 'rgba(0,0,0,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <form style={{ background: '#fff', padding: 32, borderRadius: 12, boxShadow: '0 0 10px #d1d8e8', minWidth: '340px' }}>
            <h3>إضافة مدرسة جديدة</h3>
            <div style={{ margin: '16px 0' }}>
              <label>اسم المدرسة</label>
              <input type="text" style={{ width: '100%', padding: 7, borderRadius: 7, border: '1px solid #eee' }} />
            </div>
            <div style={{ margin: '16px 0' }}>
              <label>المرحلة التعليمية</label>
              <select style={{ width: '100%', padding: 7, borderRadius: 7, border: '1px solid #eee' }}>
                <option>ابتدائي</option>
                <option>متوسط</option>
                <option>ثانوي</option>
              </select>
            </div>
            <div style={{ margin: '16px 0' }}>
              <label>النوع</label>
              <select style={{ width: '100%', padding: 7, borderRadius: 7, border: '1px solid #eee' }}>
                <option>حكومي</option>
                <option>أهلي</option>
                <option>عالمي</option>
              </select>
            </div>
            <div style={{ margin: '16px 0' }}>
              <label>الرقم الوزاري</label>
              <input type="text" style={{ width: '100%', padding: 7, borderRadius: 7, border: '1px solid #eee' }} />
            </div>
            <div style={{ margin: '16px 0' }}>
              <label>اسم مدير المدرسة</label>
              <input type="text" style={{ width: '100%', padding: 7, borderRadius: 7, border: '1px solid #eee' }} />
            </div>
            <div style={{ margin: '16px 0' }}>
              <label>اسم مقيم الأداء</label>
              <input type="text" style={{ width: '100%', padding: 7, borderRadius: 7, border: '1px solid #eee' }} />
            </div>
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
              <button type="button" style={{ padding: '8px 16px', background: '#eee', border: 0 }} onClick={() => setShowAddModal(false)}>إلغاء</button>
              <button type="submit" style={{ padding: '8px 20px', background: '#2365b1', color: '#fff', border: 0, borderRadius: 7 }}>حفظ</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}