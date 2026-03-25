import React from 'react';
import { Users, DoorOpen, IndianRupee, QrCode } from 'lucide-react';
import { useHostel } from '../../context/HostelContext';

const DashboardOverview = () => {
    const { rooms } = useHostel();
    // Mock Data for now
    const stats = {
        totalStudents: rooms.reduce((acc, r) => acc + r.occupants, 0),
        totalRooms: rooms.length,
        feeStats: { paid: 120, unpaid: 25 },
        attendanceToday: { present: 130, absent: 15 }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Dashboard Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Stat Cards */}
                <div className="glass-panel p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Users className="text-primary h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm text-muted">Total Students</p>
                        <p className="text-2xl font-bold">{stats.totalStudents}</p>
                    </div>
                </div>
                <div className="glass-panel p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                        <DoorOpen className="text-secondary h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm text-muted">Total Rooms</p>
                        <p className="text-2xl font-bold">{stats.totalRooms}</p>
                    </div>
                </div>
                <div className="glass-panel p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                        <QrCode className="text-accent h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm text-muted">Present Today (Mess)</p>
                        <p className="text-2xl font-bold">{stats.attendanceToday.present}</p>
                    </div>
                </div>
                <div className="glass-panel p-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                        <IndianRupee className="text-red-400 h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm text-muted">Unpaid Fees</p>
                        <p className="text-2xl font-bold text-red-400">{stats.feeStats.unpaid}</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                {/* Recent Activity Mock */}
                <div className="glass-panel p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Mess Scans</h3>
                    <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                                <div className="flex gap-3 items-center">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold font-mono">
                                        R{200 + i}
                                    </div>
                                    <div>
                                        <p className="font-medium text-sm">Student Name {i}</p>
                                        <p className="text-xs text-muted">QR Scanned</p>
                                    </div>
                                </div>
                                <span className="text-xs text-secondary font-medium">08:{15 + i} AM</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="glass-panel p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl transition-all flex flex-col items-center justify-center gap-2">
                            <Users className="text-primary h-6 w-6" />
                            <span className="text-sm font-medium">Add Student</span>
                        </button>
                        <button className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl transition-all flex flex-col items-center justify-center gap-2">
                            <DoorOpen className="text-secondary h-6 w-6" />
                            <span className="text-sm font-medium">Assign Room</span>
                        </button>
                        <button className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl transition-all flex flex-col items-center justify-center gap-2">
                            <IndianRupee className="text-accent h-6 w-6" />
                            <span className="text-sm font-medium">Log Payment</span>
                        </button>
                        <button className="p-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl transition-all flex flex-col items-center justify-center gap-2">
                            <QrCode className="text-muted h-6 w-6" />
                            <span className="text-sm font-medium">Manual Attendance</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardOverview;
