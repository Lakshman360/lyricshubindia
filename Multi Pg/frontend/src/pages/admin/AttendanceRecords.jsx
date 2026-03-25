import React, { useState } from 'react';
import { Calendar, CheckCircle, XCircle } from 'lucide-react';

const AttendanceRecords = () => {
    const [selectedDate, setSelectedDate] = useState('2026-03-15');
    const [selectedMeal, setSelectedMeal] = useState('Breakfast');

    const meals = ['Breakfast', 'Lunch', 'Snacks', 'Dinner'];

    // Mock records
    const records = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        studentName: `Student Name ${i + 1}`,
        room: `${Math.floor(Math.random() * 4 + 1)}0${Math.floor(Math.random() * 8 + 1)}`,
        status: Math.random() > 0.2 ? 'Present' : 'Absent',
        time: `08:${Math.floor(Math.random() * 50 + 10)} AM`
    }));

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Mess Attendance Log</h2>

            <div className="glass-panel p-6 flex flex-col md:flex-row gap-6 items-end justify-between">
                <div className="flex flex-wrap gap-4 w-full">
                    <div className="space-y-2 flex-1 min-w-[200px]">
                        <label className="text-sm text-muted font-medium">Select Date</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                            <input 
                                type="date" 
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                className="w-full bg-background border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary text-sm transition-colors text-white [color-scheme:dark]"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 flex-1 min-w-[200px]">
                        <label className="text-sm text-muted font-medium">Meal Time</label>
                        <div className="flex gap-2">
                            {meals.map(meal => (
                                <button 
                                    key={meal}
                                    onClick={() => setSelectedMeal(meal)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 ${selectedMeal === meal ? 'bg-primary text-white shadow-md' : 'bg-background border border-white/10 text-muted hover:bg-white/5'}`}
                                >
                                    {meal}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="h-full flex items-center justify-center p-4 bg-primary/10 rounded-xl border border-primary/20 shrink-0">
                    <div className="text-center">
                        <p className="text-sm font-medium text-primary">Total Scans</p>
                        <p className="text-3xl font-bold text-primary">134 <span className="text-sm text-muted font-normal">/ 145</span></p>
                    </div>
                </div>
            </div>

            <div className="glass-panel overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 uppercase text-xs text-muted border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 font-medium">Scan Time</th>
                                <th className="px-6 py-4 font-medium">Student Info</th>
                                <th className="px-6 py-4 font-medium">Room No.</th>
                                <th className="px-6 py-4 font-medium text-right">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {records.map((record) => (
                                <tr key={record.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 text-muted font-mono">{record.time}</td>
                                    <td className="px-6 py-4 font-medium">{record.studentName}</td>
                                    <td className="px-6 py-4 font-mono">{record.room}</td>
                                    <td className="px-6 py-4 text-right">
                                        {record.status === 'Present' ? (
                                            <div className="inline-flex items-center gap-1.5 bg-secondary/10 text-secondary px-2.5 py-1 rounded-md text-xs font-medium">
                                                <CheckCircle className="h-3.5 w-3.5" /> Checked In
                                            </div>
                                        ) : (
                                            <div className="inline-flex items-center gap-1.5 bg-red-400/10 text-red-400 px-2.5 py-1 rounded-md text-xs font-medium">
                                                <XCircle className="h-3.5 w-3.5" /> Absent
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AttendanceRecords;
