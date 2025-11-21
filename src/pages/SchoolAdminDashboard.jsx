import React from 'react';
import { useNavigate } from 'react-router-dom';

function QuickAction({ icon, label, to }) {
  const navigate = useNavigate();
  return (
    <button
      style={{
        background: '#fff',
        border: 'none',
        borderRadius: '8px',
        padding: '14px 20px',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '0 0 8px #e5e7eb',
        minWidth: '130px'
      }}
      onClick={to ? () => navigate(to) : undefined}
    >
      <span style={{ fontSize: '26px', marginLeft: '8px' }}>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function StatsCard({ title, value, icon }) {
  return (
    <div style={{
      background: '#f2f7fd',
      borderRadius: '8px',
      padding: '18px 24px',
      minWidth: '180px',
      textAlign: 'center',
      boxShadow: '0 0 5px #e3e7eb'
    }}>
      <div style={{ fontSize: '32px', marginBottom: '8px' }}>{icon}</div>
      <div style={{ fontSize: '17px', fontWeight: 'bold', marginBottom: '4px' }}>{title}</div>
      <div style={{ fontSize: '21px', color: '#2365b1' }}>{value}</div>
    </div>
  );
}

export default function SchoolAdminDashboard() {
  const navigate = useNavigate();
  return (
    <div style={{ fontFamily: 'Tajawal, Arial', direction: 'rtl', background: '#f7f7f7', height: '100vh' }}>
      <div className="topbar" style={{ background: '#2365b1', color: '#fff', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ fontSize: '20px', fontWeight: 'bold' }}>لوحة مدير المدرسة</span>
        </div>
        <div>
          <span style={{ marginLeft: '12px', fontWeight: '500' }}>مرحبا، المدير</span>
        </div>
      </div>
      <div className="quick-actions" style={{ display: 'flex', justifyContent: 'center', gap: '24px', margin: '28px 0' }}>
        <QuickAction icon="🏫" label="المدارس" to="/schools" />
        <QuickAction icon="🧑‍🏫" label="المعلمين" to="/teachers" />
        <QuickAction icon="⬆️" label="استيراد المعلمين" to="/import-teachers" />
        <QuickAction icon="💳" label="اشتراكاتي" to="/subscriptions" />
        <QuickAction icon="📊" label="التحليلات والإحصائيات" to="/analytics" />
        <QuickAction icon="🚚" label="طلبات النقل" to="/transfers" />
        <QuickAction icon="⚠️" label="اعتراضات المعلمين" to="/objections" />
      </div>
      <div style={{ display: 'flex', margin: '0 5%' }}>
        <main style={{ flex: 1, padding: '24px', background: '#fff', borderRadius: '12px', boxShadow: '0 0 8px #e5e7eb' }}>
          <h2 style={{ color: '#2365b1' }}>تقرير مختصر</h2>
          <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap', marginTop: '24px' }}>
            <StatsCard title="عدد المدارس" value="8" icon="🏫" />
            <StatsCard title="عدد المعلمين" value="53" icon="🧑‍🏫" />
            <StatsCard title="الاعتراضات" value="4" icon="⚠️" />
            <StatsCard title="طلبات النقل" value="2" icon="🚚" />
          </div>
          <div style={{ marginTop: '40px' }}>
            <h3 style={{ color: '#2365b1', marginBottom: '18px' }}>آخر الأنشطة</h3>
            <ul style={{ background: '#f2f7fd', padding: '20px', borderRadius: '8px', listStyle: 'none' }}>
              <li>تم إضافة معلم جديد إلى مدرسة النور (قبل دقيقة)</li>
              <li>تم قبول طلب نقل معلم (قبل ساعة)</li>
              <li>تم استيراد 15 معلم بنجاح (أمس)</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}