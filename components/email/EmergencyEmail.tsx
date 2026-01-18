
import * as React from 'react';

interface EmergencyEmailProps {
    type: 'breakdown' | 'tyres' | 'jumpstart';
    data: any;
}

export const EmergencyEmail: React.FC<Readonly<EmergencyEmailProps>> = ({
    type,
    data,
}) => (
    <div style={{
        fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        backgroundColor: '#f8fafc',
        padding: '40px 20px',
        color: '#0f172a'
    }}>
        <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
            {/* Header */}
            <div style={{
                backgroundColor: '#0f172a',
                padding: '30px',
                textAlign: 'center'
            }}>
                <h1 style={{
                    color: '#ffffff',
                    margin: 0,
                    fontSize: '24px',
                    fontWeight: '900',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                }}>
                    🚨 Emergency Request
                </h1>
                <p style={{
                    color: '#f97316',
                    margin: '10px 0 0',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    textTransform: 'uppercase'
                }}>
                    {type === 'breakdown' ? 'Breakdown Recovery' : type === 'tyres' ? 'Mobile Tyres' : 'Jumpstart'}
                </p>
            </div>

            {/* Content */}
            <div style={{ padding: '40px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px', borderBottom: '2px solid #f1f5f9', paddingBottom: '10px' }}>
                    Customer Details
                </h2>

                <div style={{ marginBottom: '30px' }}>
                    {Object.entries(data).map(([key, value]) => {
                        if (!value || key === 'loading') return null;
                        const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                        return (
                            <div key={key} style={{ marginBottom: '15px' }}>
                                <div style={{ fontSize: '12px', fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {label}
                                </div>
                                <div style={{ fontSize: '16px', fontWeight: '600', color: '#0f172a' }}>
                                    {value as string}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div style={{
                    backgroundColor: '#fff7ed',
                    border: '1px solid #ffedd5',
                    borderRadius: '16px',
                    padding: '20px',
                    textAlign: 'center'
                }}>
                    <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#9a3412' }}>
                        Immediate action required. Response within 30 minutes expected.
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div style={{
                backgroundColor: '#f1f5f9',
                padding: '20px',
                textAlign: 'center',
                fontSize: '12px',
                color: '#64748b'
            }}>
                Sent from Rapid Rescue Web Dashboard
            </div>
        </div>
    </div>
);
