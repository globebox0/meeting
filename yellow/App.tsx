
import React from 'react';
import { Header } from './components/Header';
import { ContentCard } from './components/ContentCard';
import { DebatePoint } from './components/DebatePoint';
import { UserGroupIcon, MagnifyingGlassIcon, MegaphoneIcon, ScalesIcon, ShieldCheckIcon } from './components/icons';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
            <Header />
            <main className="p-4 sm:p-6 md:p-8 max-w-3xl mx-auto space-y-8">

                <ContentCard
                    title="🤔 '노란봉투법', 도대체 뭔가요?"
                    icon={<MagnifyingGlassIcon />}
                >
                    <p className="text-base leading-relaxed">
                        조합원 동지 여러분, '노란봉투법' 때문에 요즘 뉴스가 시끄럽죠? 이름은 생소하지만, 사실 우리 노동자들의 권리를 지켜주는 아주 중요한 법 개정안입니다. 
                        <br/><br/>
                        크게 두 가지를 기억하시면 됩니다:
                        <br/>
                        <strong className="text-amber-600">첫째, 우리의 진짜 사장님과 직접 대화할 길을 열어주고,</strong>
                        <br/>
                        <strong className="text-amber-600">둘째, 정당한 쟁의행위 때문에 어마어마한 빚더미에 앉는 것을 막아주는 것.</strong>
                        <br/><br/>
                        이 법이 왜 필요하고, 우리에게 어떤 영향을 미치는지 하나씩 쉽게 풀어보겠습니다.
                    </p>
                </ContentCard>

                <h2 className="text-2xl font-bold text-center text-slate-700 pt-4">핵심 쟁점 4가지, 이것만 알면 끝!</h2>

                <ContentCard
                    title="1. 사용자(사장님) 범위 확대"
                    icon={<UserGroupIcon />}
                >
                    <p className="mb-4">
                        하청, 특수고용 노동자들이 진짜 사장님(원청)과 교섭할 수 있는 길을 여는 내용입니다. 
                        우리가 직접 근로계약을 맺지 않았더라도, 우리의 월급이나 노동조건을 실질적으로 결정하는 '진짜 힘 있는 사람'도 우리 사장님으로 인정하자는 겁니다.
                    </p>
                    <DebatePoint
                        ourSide={{
                            title: "우리 입장 (찬성)",
                            content: "하청 노동자의 열악한 노동조건 개선을 위해선 원청이 대화에 나서야 합니다. 이미 법원도 '실질적 지배력'을 인정하는 추세예요. 이걸 법으로 명확히 하자는 겁니다."
                        }}
                        otherSide={{
                            title: "정부/기업 입장 (반대)",
                            content: "'실질적으로 지배한다'는 말이 너무 애매해서, 누가 진짜 사용자인지 혼란만 커지고 법적 안정성을 해친다고 우려합니다."
                        }}
                    />
                </ContentCard>

                <ContentCard
                    title="2. 노동쟁의 범위 확대"
                    icon={<MegaphoneIcon />}
                >
                    <p className="mb-4">
                        지금은 '임금, 근로시간 등 근로조건의 결정'에 관한 것만 합법적인 쟁의 대상으로 보지만, 앞으로는 '모든 근로조건'에 관한 사항으로 넓히는 겁니다. 
                        회사가 단체협약을 어기거나 부당노동행위를 했을 때도 쟁의행위로 맞설 수 있게 됩니다.
                    </p>
                    <DebatePoint
                        ourSide={{
                            title: "우리 입장 (찬성)",
                            content: "회사가 약속을 안 지킬 때마다 법정 싸움으로 가는 건 너무 힘들어요. 노사 간의 힘의 균형을 맞추고, 자율적인 교섭으로 문제를 빨리 해결할 수 있습니다."
                        }}
                        otherSide={{
                            title: "정부/기업 입장 (반대)",
                            content: "해고나 단협 미이행 같은 문제는 소송이나 노동위원회로 해결해야 합니다. 쟁의가 너무 많아져서 갈등 비용만 커질 거라고 걱정합니다."
                        }}
                    />
                </ContentCard>
                
                <ContentCard
                    title="3. 손해배상 책임의 개별화"
                    icon={<ScalesIcon />}
                >
                     <p className="mb-4">
                        쟁의행위로 손해가 발생했을 때, 조합원 전체에게 '연대책임'을 물어 한 명에게 모든 책임을 떠넘기는 것을 막는 겁니다. 
                        법원이 각 조합원이 얼마나 책임이 있는지, 얼마나 기여했는지 따져서 개별적으로 책임을 묻도록 하는 것입니다.
                    </p>
                    <DebatePoint
                        ourSide={{
                            title: "우리 입장 (찬성)",
                            content: "헌법이 보장하는 노동3권을 지키기 위한 최소한의 장치입니다. 파업 한 번에 수십억 빚을 지게 만드는 '노조 파괴'용 손배소를 막아야 합니다."
                        }}
                        otherSide={{
                            title: "정부/기업 입장 (반대)",
                            content: "모두가 함께 한 불법행위는 다 같이 책임지는 게 원칙(민법)인데, 노동쟁의만 예외로 두는 것은 다른 불법행위와 비교해 형평성에 어긋난다고 주장합니다."
                        }}
                    />
                </ContentCard>

                <ContentCard
                    title="4. 신원보증인의 책임 면제"
                    icon={<ShieldCheckIcon />}
                >
                    <p className="mb-4">
                        조합원이 쟁의행위에 참여했다는 이유로 발생한 손해에 대해, 그 조합원의 신원보증인이 대신 돈을 갚지 않도록 보호하는 내용입니다.
                    </p>
                    <DebatePoint
                        ourSide={{
                            title: "우리 입장 (찬성)",
                            content: "신원보증 제도는 노동조합 활동을 위축시키는 낡은 수단입니다. 요즘은 대부분 보증보험으로 대체하는데, 굳이 개인에게 책임을 물을 이유가 없습니다."
                        }}
                        otherSide={{
                            title: "정부/기업 입장 (반대)",
                            content: "이미 신원보증법에 보증인의 책임을 줄여주는 장치가 있습니다. 노동쟁의만 특별히 면제해주는 건 사용자를 불리하게 만드는 것이라며 반대합니다."
                        }}
                    />
                </ContentCard>

                <footer className="text-center py-8">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">결론: 우리에게 왜 중요한가?</h3>
                    <p className="max-w-2xl mx-auto text-slate-600 leading-7">
                        '노란봉투법'은 단순히 법 조항 몇 개를 바꾸는 게 아닙니다. 
                        <strong className="text-amber-600">진짜 사장님과 대화하고, 과도한 손해배상 걱정 없이 우리의 목소리를 낼 수 있는 환경</strong>을 만드는 일입니다.
                        아직 넘어야 할 산이 많지만, 우리가 이 법의 내용을 제대로 알고 힘을 모으는 것이 중요합니다.
                        <br/><br/>
                        <span className="font-bold text-sky-700">우체국물류지원단 물류노동조합</span>
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default App;
