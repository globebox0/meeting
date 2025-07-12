
import React from 'react';

interface Point {
    title: string;
    content: string;
}

interface DebatePointProps {
    ourSide: Point;
    otherSide: Point;
}

export const DebatePoint: React.FC<DebatePointProps> = ({ ourSide, otherSide }) => {
    return (
        <div className="mt-4 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4 not-prose">
            {/* Our Side */}
            <div className="bg-sky-50 border-l-4 border-sky-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-sky-800 flex items-center">
                    <i className="fas fa-check-circle mr-2 text-sky-600"></i>
                    {ourSide.title}
                </h4>
                <p className="text-sm text-slate-700 mt-2">{ourSide.content}</p>
            </div>

            {/* Other Side */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-red-800 flex items-center">
                    <i className="fas fa-times-circle mr-2 text-red-600"></i>
                    {otherSide.title}
                </h4>
                <p className="text-sm text-slate-700 mt-2">{otherSide.content}</p>
            </div>
        </div>
    );
};
