import React from 'react';

export default function AnalyticsPage() {
  return (
    <div style={{ fontFamily: 'Tajawal, Arial', direction: 'rtl', minHeight: '100vh', background: "#f7f7f7", padding: "36px" }}>
      <h2 style={{ color: '#2365b1' }}>التحليلات والإحصائيات</h2>
      <div style={{ background: '#fff', borderRadius: 12, padding: 32, boxShadow: '0 0 6px #e0e6ee', marginTop: 32, maxWidth: 700, marginRight: 'auto', marginLeft: 'auto' }}>
        <h3 style={{ color: '#2365b1' }}>نظرة عامة:</h3>
        <ul style={{ fontSize: "18px", color: "#42444a", marginTop: "18px" }}>
          <li>عدد المدارس: <span style={{ color: '#2565b1', fontWeight: 'bold' }}>8</span></li>
          <li>عدد المعلمين: <span style={{ color: '#2565b1', fontWeight: 'bold' }}>53</span></li>
          <li>طلبات النقل خلال هذه السنة: <span style={{ color: '#b17625', fontWeight: 'bold' }}>5</span></li>
          <li>الاعتراضات الجديدة: <span style={{ color: '#b12525', fontWeight: 'bold' }}>4</span></li>
        </ul>
        {/* مثال رسم بياني */}
        <h4 style={{ marginTop: "30px", color: "#2365b1" }}>توزيع المعلمين حسب التخصص</h4>
        <div style={{ background:'#eef4fa', borderRadius: '8px', minHeight: '130px', marginTop: '12px', padding: '20px 22px', fontWeight: '500' }}>
          <ul style={{margin:'0',padding:'0'}}>
            <li>الرياضيات: 12</li>
            <li>اللغة العربية: 17</li>
            <li>العلوم: 9</li>
            <li>الحاسب: 7</li>
            <li>تخصصات أخرى: 8</li>
          </ul>
        </div>
      </div>
    </div>
  );
}