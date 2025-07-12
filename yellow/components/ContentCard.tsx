
import React from 'react';

interface ContentCardProps {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}

export const ContentCard: React.FC<ContentCardProps> = ({ title, icon, children }) => {
    return (
        <section className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    <div className="text-sky-600 mr-4">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                </div>
                <div className="prose prose-slate max-w-none text-slate-600">
                    {children}
                </div>
            </div>
        </section>
    );
};
