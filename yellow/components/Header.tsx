
import React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-lg">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-12 text-center">
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <i className="fas fa-envelope-open-text mr-3"></i>
                    '노란봉투법', 쉽고 명쾌하게 알아보기
                </h1>
                <p className="mt-4 text-lg text-sky-100">
                    우리 모두의 권리를 위한 필독 가이드
                </p>
            </div>
        </header>
    );
};
