import React, { useState } from 'react';
import { Search, Plus, Filter, MoreVertical, Edit, Trash2 } from 'lucide-react';

const StudentManagement = () => {
    // Mock Data
    const [students] = useState([
        { id: 1, name: 'Rahul Sharma', room: '101', phone: '9876543210', joinedDate: '10 Jan 2026', feeStatus: 'Paid' },
        { id: 2, name: 'Amit Kumar', room: '102', phone: '9876543211', joinedDate: '12 Jan 2026', feeStatus: 'Pending' },
        { id: 3, name: 'Lakshman Reddy', room: '204', phone: '9876543212', joinedDate: '15 Feb 2026', feeStatus: 'Unpaid' },
        { id: 4, name: 'Srinivas Rao', room: '305', phone: '9876543213', joinedDate: '20 Feb 2026', feeStatus: 'Paid' },
        { id: 5, name: 'Vikram Singh', room: '101', phone: '9876543214', joinedDate: '01 Mar 2026', feeStatus: 'Paid' },
    ]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h2 className="text-2xl font-bold">Students Directory</h2>
                <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium transition-colors shadow-lg shadow-primary/20">
                    <Plus className="h-4 w-4" /> Add Student
                </button>
            </div>

            <div className="glass-panel overflow-hidden">
                <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row justify-between gap-4 bg-surface/50">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                        <input 
                            type="text" 
                            placeholder="Search students by name or room..." 
                            className="w-full bg-background border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-primary text-sm transition-colors"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-background border border-white/10 rounded-lg text-sm hover:bg-white/5 transition-colors">
                        <Filter className="h-4 w-4" /> Filter
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 uppercase text-xs text-muted border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4 font-medium">Student Name</th>
                                <th className="px-6 py-4 font-medium">Room</th>
                                <th className="px-6 py-4 font-medium">Contact</th>
                                <th className="px-6 py-4 font-medium border-l border-white/5">Joined Date</th>
                                <th className="px-6 py-4 font-medium">Fee Status</th>
                                <th className="px-6 py-4 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {students.map((student) => (
                                <tr key={student.id} className="hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-xs shadow-md">
                                                {student.name.charAt(0)}
                                            </div>
                                            <span className="font-medium whitespace-nowrap">{student.name}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-mono font-medium">{student.room}</td>
                                    <td className="px-6 py-4 text-muted whitespace-nowrap">{student.phone}</td>
                                    <td className="px-6 py-4 text-muted whitespace-nowrap border-l border-white/5">{student.joinedDate}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2.5 py-1 text-xs font-medium rounded-md
                                            ${student.feeStatus === 'Paid' ? 'bg-secondary/20 text-secondary' : 
                                              student.feeStatus === 'Pending' ? 'bg-orange-500/20 text-orange-400' : 
                                              'bg-red-500/20 text-red-400'}
                                        `}>
                                            {student.feeStatus}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 text-blue-400 hover:bg-blue-400/20 rounded-md transition-colors">
                                                <Edit className="h-4 w-4" />
                                            </button>
                                            <button className="p-1.5 text-red-400 hover:bg-red-400/20 rounded-md transition-colors">
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between text-sm text-muted bg-surface/30">
                    <span>Showing 1 to 5 of 145 entries</span>
                    <div className="flex gap-1">
                        <button className="px-3 py-1 border border-white/10 rounded hover:bg-white/5 transition-colors disabled:opacity-50">Prev</button>
                        <button className="px-3 py-1 border border-white/10 bg-primary/20 text-primary border-primary/30 rounded transition-colors">1</button>
                        <button className="px-3 py-1 border border-white/10 rounded hover:bg-white/5 transition-colors">2</button>
                        <button className="px-3 py-1 border border-white/10 rounded hover:bg-white/5 transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentManagement;
