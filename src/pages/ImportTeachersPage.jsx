import React, { useState } from 'react';

export default function ImportTeachersPage() {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");

  function handleImport(e){
    e.preventDefault();
    alert("عرض نتائج الاستيراد بعد الرفع");
  }

  return (
    <div style={{ fontFamily: 'Tajawal', direction: 'rtl', minHeight: '100vh', background: "#f7f7f7", padding: "36px" }}>
      <h2 style={{ color: '#2365b1' }}>استيراد المعلمين</h2>
      <div style={{ background: '#fff', borderRadius: 12, padding: 28, maxWidth: 430, margin: '30px auto 0' }}>
        <ol style={{ color: '#2365b1', marginBottom: 16 }}>
          <li>حمّل قالب المعلمين المطلوب بصيغة Excel أو CSV.</li>
          <li>حدد فئة المعلم.</li>
          <li>اختر الملف من جهازك وأضغط على زر الاستيراد.</li>
        </ol>
        <a href="/teachers-template.xlsx" download style={{ color: '#2365b1', marginBottom: 14, display: 'inline-block' }}>تحميل القالب</a>
        <form onSubmit={handleImport}>
          <div style={{ marginBottom: 12 }}>
            <label>فئة المعلم</label>
            <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', padding: 8, borderRadius: 8, border: '1px solid #eee', marginTop: 7 }}>
              <option value="">اختر فئة</option>
              <option value="معلم">معلم</option>
              <option value="معلمة روضة">معلمة روضة</option>
              <option value="معلم نشاط طلابي">معلم نشاط طلابي</option>
              <option value="موجه صحي">موجه صحي</option>
              <option value="محضر مختبر">محضر مختبر</option>
              <option value="وكيل مدرسة">وكيل مدرسة</option>
              <option value="مدير مدرسة">مدير مدرسة</option>
            </select>
          </div>
          <div style={{ marginBottom: 14 }}>
            <label>رفع الملف</label>
            <input type="file" accept=".xlsx,.csv" onChange={e => setFile(e.target.files[0])} style={{ width: '100%', marginTop: 7 }} />
          </div>
          <button type="submit" style={{ background: '#2365b1', color: '#fff', padding: '8px 28px', borderRadius: 8, border: 0, fontSize: 17, marginTop: 8 }}>
            استيراد المعلمين
          </button>
        </form>
      </div>
    </div>
  );
}