import React from 'react';

export default function TopbarUserProfile({ name="المدير" }) {
  return (
    <div style={{ background: '#2365b1', color: '#fff', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>لوحة مدير المدرسة</span>
      </div>
      <div>
        <span style={{ marginLeft: '12px', fontWeight: '500' }}>مرحبا، {name}</span>
        <img src="/profile-icon.svg" alt="مدير المدرسة" style={{ width: 36, height: 36, borderRadius: '50%', verticalAlign: 'middle' }} />
      </div>
    </div>
  );
}