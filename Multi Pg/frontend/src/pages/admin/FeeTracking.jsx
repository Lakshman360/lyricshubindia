import React from 'react';
import { IndianRupee, TrendingUp, AlertCircle, Download } from 'lucide-react';

const FeeTracking = () => {
    const feeRecords = [
        { id: 1, name: 'Lakshman Reddy', room: '204', amount: '₹6,500', dueDate: '05 Apr 2026', status: 'Unpaid' },
        { id: 2, name: 'Amit Kumar', room: '102', amount: '₹6,000', dueDate: '05 Apr 2026', status: 'Pending Verification' },
        { id: 3, name: 'Rahul Sharma', room: '101', amount: '₹6,000', dueDate: '05 Mar 2026', status: 'Paid', receipt: '#REC-8923' },
    ];

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Fee Collections & Tracking</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel p-6 border-l-4 border-l-secondary">
                    <p className="text-sm text-muted mb-1">Total Collected (This Month)</p>
                    <div className="flex items-center gap-2">
                        <h3 className="text-3xl font-bold">₹7,80,000</h3>
                        <span className="text-xs bg-secondary/20 text-secondary px-2 py-0.5 rounded-full flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" /> +12%
                        </span>
                    </div>
                </div>
                <div className="glass-panel p-6 border-l-4 border-l-orange-400">
                    <p className="text-sm text-muted mb-1">Expected Collection</p>
                    <h3 className="text-3xl font-bold">₹9,25,000</h3>
                </div>
                <div className="glass-panel p-6 border-l-4 border-l-red-500">
                    <p className="text-sm text-muted mb-1">Outstanding Amount</p>
                    <div className="flex items-center gap-2">
                        <h3 className="text-3xl font-bold text-red-400">₹1,45,000</h3>
                        <span className="text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="h-3.5 w-3.5" /> 22 Students
                        </span>
                    </div>
                </div>
            </div>

            <div className="glass-panel overflow-hidden mt-8">
                <div className="p-5 border-b border-white/10 flex justify-between items-center bg-surface/50">
                    <h3 className="text-lg font-semibold">Payment Status List</h3>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-white/10 transition-colors">
                        <Download className="h-4 w-4" /> Export CSV
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 uppercase text-xs text-muted border-b border-white/10">
                            <tr>
                                <th className="px-6 py-4">Student</th>
                                <th className="px-6 py-4">Room</th>
                                <th className="px-6 py-4">Amount</th>
                                <th className="px-6 py-4">Due Date</th>
                                <th className="px-6 py-4 text-center">Status</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {feeRecords.map(record => (
                                <tr key={record.id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4 font-medium">{record.name}</td>
                                    <td className="px-6 py-4 font-mono">{record.room}</td>
                                    <td className="px-6 py-4 font-medium">{record.amount}</td>
                                    <td className="px-6 py-4 text-muted">{record.dueDate}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`px-2.5 py-1 text-xs font-medium rounded-full border
                                            ${record.status === 'Paid' ? 'bg-secondary/10 text-secondary border-secondary/20' : 
                                              record.status === 'Unpaid' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 
                                              'bg-orange-500/10 text-orange-400 border-orange-500/20'}
                                        `}>
                                            {record.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {record.status === 'Paid' ? (
                                            <span className="text-xs text-muted mr-2">{record.receipt}</span>
                                        ) : (
                                            <button className="text-xs bg-primary hover:bg-blue-600 text-white px-3 py-1.5 rounded transition-colors">
                                                {record.status === 'Pending Verification' ? 'Verify' : 'Mark Paid'}
                                            </button>
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

export default FeeTracking;
