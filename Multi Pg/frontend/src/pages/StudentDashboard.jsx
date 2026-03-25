import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { CreditCard, History } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userStr = localStorage.getItem('user');
        if (!userStr) {
            navigate('/login');
            return;
        }
        setUser(JSON.parse(userStr));
    }, [navigate]);

    if (!user) return <div className="text-center p-20">Loading...</div>;

    const qrValue = JSON.stringify({
        uniqueId: user.uniqueQrId,
        studentName: user.name,
        timestamp: Date.now()
    });

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="mb-10">
                <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}</h1>
                <p className="text-muted">Student Dashboard - Room 204</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* QR Code Section */}
                <div className="glass-panel p-8 text-center flex flex-col items-center justify-center">
                    <h2 className="text-xl font-semibold mb-2">Mess Attendance QR</h2>
                    <p className="text-sm text-muted mb-8">Scan this code at the mess entrance</p>
                    
                    <div className="bg-white p-4 rounded-2xl shadow-xl shadow-primary/40 mb-6">
                        <QRCodeSVG value={qrValue} size={200} fgColor="#0a0a0a" />
                    </div>
                    
                    <p className="text-xs text-muted">ID: {user.uniqueQrId}</p>
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                        Active
                    </div>
                </div>

                {/* Right Column: Fee Status & History */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Fee Status */}
                    <div className="glass-panel p-8 relative overflow-hidden">
                        <div className="absolute -right-10 -top-10 text-white/5">
                            <CreditCard className="w-48 h-48" />
                        </div>
                        <div className="relative z-10">
                            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <CreditCard className="h-5 w-5 text-primary" /> Fee Status
                            </h2>
                            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-between bg-white/5 rounded-2xl p-6 border border-white/10">
                                <div>
                                    <p className="text-sm text-muted mb-1">Current Month Status</p>
                                    <h3 className="text-3xl font-bold text-red-400">Unpaid</h3>
                                    <p className="text-sm text-muted mt-2">Due Date: 5th April, 2026</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-muted mb-1">Amount Due</p>
                                    <h3 className="text-3xl font-bold">₹ 6,500</h3>
                                    <button className="mt-4 bg-primary hover:bg-accent px-6 py-2 rounded-xl text-white font-medium transition-all shadow-lg hover:shadow-primary/40">
                                        Pay Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Attendance Output / History */}
                    <div className="glass-panel p-8">
                        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <History className="h-5 w-5 text-primary" /> recent Attendance
                        </h2>
                        
                        <div className="space-y-4">
                            {[
                                { date: '15 Mar 2026', meal: 'Breakfast', time: '08:15 AM', status: 'Present' },
                                { date: '14 Mar 2026', meal: 'Dinner', time: '08:30 PM', status: 'Present' },
                                { date: '14 Mar 2026', meal: 'Lunch', time: '01:20 PM', status: 'Present' },
                            ].map((record, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="flex flex-col">
                                        <span className="font-medium">{record.meal}</span>
                                        <span className="text-sm text-muted">{record.date}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="text-muted">{record.time}</span>
                                        <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full font-medium">
                                            {record.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
