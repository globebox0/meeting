document.addEventListener('DOMContentLoaded', function() {
    const issues = [
        {
            icon: "🗣️", // 협상, 요구
            title: "조근 → 야간 근무형태 변경 요구",
            description: "조근 → 야간 변경 요청에 물류실장 비용/유연성 이유로 부정적. 노조는 의지 문제라 반박. 5/15까지 답변 요구, 미응답 시 처장/이사장 면담.",
            priority: "High",
            dueDate: "2025-05-15",
            status: "진행 중",
            fullDetails: `[핵심 논의 사항 요약]
- 문제 제기: 노조(A)는 조근 근무 비정규직의 야간 근무 형태 변경을 국내 물류실장에게 요구.
- 사측 입장 (물류실장):
    - 권한 문제: 본인 권한이 아닌 국내 물류실장 권한 사항이라고 언급.
    - 비용 및 고용 유연성: 기간제(1~3개월 단위 계약) 운영 중. 야간 고정 시 물량 감소에 따른 계약 해지 어려움, 인건비 부담 우려.
    - 정규직과의 형평성: 정규직은 총액임금제로 임금 동결, 시간 외 근무 축소 후 해당 업무 기간제 이전.
- 노조 반박 및 주장 (A, B):
    - 근무 시간 동일: 기존 8시간 근무를 유지하는 것이므로 실질적 부담 증가 아님.
    - 경영진 의지 부족: 정규직(주임, 팀장 증원 등) 요구는 수용하면서 소수 비정규직(10명 미만) 요구는 인건비 핑계로 거부하는 것은 차별.
    - 현장 관리자 동의: 소장, 팀장 등 현장 관리자들도 근무 형태 변경에 긍정적.
    - 경영지원실장 지지: 경영지원실장도 노조 측 논리가 맞다고 하며 적극 검토 권유.
- 해결 방안 및 최후통첩:
    - A는 5월 15일까지 물류실장의 답변 요구.
    - 미응답 시 처장 및 이사장 면담 신청하여 결론 도출 예정.
    - 정규직에게만 유리한 사측의 행태(팀장/주임 증원 시 발송 도우미 미감축 등)를 상세히 설명할 예정.
    - 단순 근무 형태 변경이 아닌, 필요시(예: 9월, 12월) 인력 채용 시 적용할 사전 조사 요청임에도 거부하는 것은 문제라고 지적.`
        },
        {
            icon: "💰", // 돈, 임금
            title: "명절 보로금 통상임금 산입 및 주휴수당 문제",
            description: "명절보로금 통상임금 산입 결정. 주휴수당 연동 인상 법적 근거 있으나 사측 반응 미지수. 강경 대응 시 불이익 우려.",
            priority: "Medium",
            dueDate: null,
            status: "향후 논의",
            fullDetails: `[핵심 논의 사항 요약]
- 명절 보로금 해결: 연합노조와 공동 대응 결과, 명절 보로금을 통상임금에 산입하여 6월 말 전 지급하기로 결론.
- 주휴수당 연동 문제 (C):
    - 법적 근거: 통상임금 인상 시 주휴수당도 인상되어야 함.
    - 사측 반응 불확실: 사측이 자동으로 인상해줄지 미지수.
    - 과거 판례: 대법원은 기존 수당(직무수당 등)에 주휴수당이 암묵적으로 포함되었다고 판단한 바 있음.
    - 최근 판결 시사점: 이번 명절 보로금 통상임금 소송 판결 내용 중, 통상임금 증가분이 주휴수당에 반영되어야 한다는 언급이 있었던 것으로 기억 (정확한 출처는 불분명).
- 잠재적 리스크 (C):
    - 주휴수당 문제 강하게 제기 시: 사측이 우편 집중국처럼 주 5일 연차/병가 사용 시 주휴수당을 삭감하는 방식으로 대응할 가능성 우려.
- 노조 내부 의견 대립 (A, B):
    - 소극론(A): 문제를 건드리지 않는 것이 나을 수 있다는 의견.
    - 적극론(B): 소수 조합원의 희생을 감수하더라도 전체 조합원의 권익(주휴수당 인상)을 위해 추진해야 한다는 의견.
- 예상 인상액 (C, A):
    - 1인당 월 3천원 ~ 1만 2천원 수준.
    - 야간 근무자는 수개월 합산 시 10만원 이상 가능.
- 기타: 성과급은 법원 판단(2~3년 소요 예상) 대기 중. 사측은 법률 검토 후 명절 보로금 지급 결정.`
        },
        {
            icon: "💰", // 돈, 임금
            title: "연차 수당 산정 방식 문제",
            description: "연차 수당 산정 방식 문제. 민주노총 통해 노무사/법무사 자문 예정.",
            priority: "Low",
            dueDate: null,
            status: "향후 논의",
            fullDetails: `[핵심 논의 사항 요약]
- 문제 제기: 연차 수당 산정 방식에 대한 문제 인식.
- 해결 방안:
    - 민주노총을 통해 노무사 또는 법무사 소개 요청.
    - 추 국장과 함께 소개받은 전문가에게 방문하여 상담 진행 예정.`
        },
        {
            icon: "🏢", // 건물, 사무실
            title: "노조 사무실 확보 문제",
            description: "성남지부 사무실 공동사용 문제. 본조 사무실 규정 미달. 공정대표의무 위반 주장하며 지속 요구. 단협 명문화 논의.",
            priority: "Medium",
            dueDate: null,
            status: "진행 중",
            fullDetails: `[핵심 논의 사항 요약]
- 지부 사무실 (성남지부 사례 - K):
    - 확보 근거: 성남지부 조합원 수가 규정(소속부 조합원의 20% 이상) 충족.
    - 문제점: 단협 부속 합의에 '교섭단체 노조 공동 사용' 조항으로 인해 타 노조(민주노총 공공운수노조)와 공동 사용해야 하며, 이에 대한 조합원들의 거부감 존재.
    - 결정: 공동 사용하더라도 지부 사무실을 확보하여 활용하기로 함.
- 본조 사무실 (K):
    - 미확보 사유: 규정(5개 이상 광역시, 2개 이상 지부 보유) 미충족.
    - 노조 주장: 규정 충족 여부와 무관하게 본조 사무실 미제공은 공정 대표 의무 위반이라고 지속 주장.
    - 사측 입장: 양천 임시청사 및 부천 집중국 자리 없음, 타 우체국 공간 제안.
- 규정 명문화 필요성 (M, K, C):
    - 현황: 사측의 '묵시적' 기준(조합원 10% 이상 시 지급)은 내부 문서에만 존재하며, 단협 부속 합의에는 명시되어 있지 않음 (M의 경우).
    - 제안: 향후 단체협약 시 근로시간 면제와 함께 노조 사무실 지급 규정을 부속 합의에 명문화하도록 요구하는 방안 논의.
    - 과거 시도: 노동위원회에서 단협 미비 문제를 지적하고 단협으로 정하도록 요구했으나, 공정대표 의무 위반으로 연결시키지는 못함.`
        },
        {
            icon: "⚖️", // 저울, 교섭
            title: "물류 노동자의 분리 교섭 주장 검토",
            description: "물류 노동자 분리교섭 필요성 제기. 현실적 어려움(노동위 결정, 교대노조 과반) 및 노노갈등 우려. 워크숍에서 심도 논의 예정.",
            priority: "Medium",
            dueDate: null,
            status: "향후 논의",
            fullDetails: `[핵심 논의 사항 요약]
- 분리 교섭 제안 배경 (F):
    - 전국 택배노조의 분리 교섭권 획득 사례 참고.
    - 물류 노동자도 운송 중심의 기존 교섭단위와 분리하여 독자적 교섭 필요.
    - 물류 노조 운동의 판을 흔들고, 물류 노동자끼리 단결하여 독자 교섭 추진 목적.
- 현실적 어려움 및 법적 문제 (G, H):
    - 결정 주체: 분리 교섭은 노사 합의가 아닌 노동위원회의 결정 사항.
    - 인정 기준: 동일 사업장 내에서는 업무 성격이 명확히 다른 경우(예: 택배기사-자영업자 속성) 외에는 인정받기 어려움 (사무직/생산직 분리 교섭 시도 기각 사례 언급).
    - 현 교대노조 상황: 분리 교섭이 되더라도 현재 교대노조 소속 물류 조합원은 그대로 유지될 가능성. 물류 노동자만으로도 교대노조가 과반수를 점유하고 있어 실효성 의문.
    - 개별 교섭 가능성: 사용자가 노조별 개별 교섭에 합의할 수는 있으나, 교대노조의 영향력으로 인해 현실적으로 어려움.
- 노조 내부 의견 및 우려 (F, G, H, I):
    - 홍보 효과: '분리 교섭' 용어 없이도 물류 노동자 단결 메시지 전달만으로 충분하다는 의견 (G).
    - 구체적 목표 필요: 뭉쳐서 임금 교섭 등 독자적 활동 목표가 있어야 단결력이 생긴다는 의견 (F).
    - 과거 경험: 대자보 등 기존 홍보 활동의 효과 미미 (I).
    - 노노 갈등 심화 우려: 직접적인 분리 주장 등은 노노 갈등을 심화시켜 직장 내 스트레스 유발 가능성 (G).
- 향후 계획 (F):
    - 워크숍에서 심도 있게 논의.
    - 초청 강사(오상현 위원장)에게 자문 구할 예정.`
        },
        {
            icon: "🎉", // 파티, 행사
            title: "워크숍 개최",
            description: "6/13 15시 골드밸류 펜션 워크숍 개최. 운영위원 중심, 일부 대의원 연차 사용 참여. 5월 말 인원 확정.",
            priority: "High",
            dueDate: "2025-06-13",
            status: "결정됨",
            fullDetails: `[핵심 논의 사항 요약]
- 개최 일정 및 장소: 6월 13일 (목) 오후 3시, 골드밸류 펜션.
- 목적: 운영위원회 회의 겸 워크숍.
- 프로그램:
    - 15:00 입실.
    - 15:30 ~ 16:00 간략한 운영위원회.
    - 초청 강사 강연 (오상현 위원장, 노조 발전 관련 내용).
    - 화합의 장.
- 참석자 범위 및 인원 (최대 17명 예약):
    - 운영위원 기본 참석.
    - 대의원 참석 여부 논의:
        - 과거 워크숍 시 대의원 공식 초대는 없었음.
        - 대의원 참석 시 명칭 변경(예: 총회) 또는 연차 사용 필요성.
        - 최종적으로 운영위원 중심으로 하되, 연차를 사용하고 참석 가능한 대의원은 참여하는 방향.
    - 5월 말까지 각 지부별 참석 인원 파악하여 최종 확정 예정.
- 기타: 공무직 노조는 6월 말 중앙우체국에서 지부 간부 대상 당일 워크숍 별도 진행 계획.`
        },
        {
            icon: "🤝", // 악수, 조합원 관계
            title: "조합원 감동 및 참여 유도 방안",
            description: "조합원 '감동'과 '인간미' 활동 필요. 생일파티, 음료/아이스크림 제공 등 제안. 예산 필요. 지부장 검토.",
            priority: "Low",
            dueDate: null,
            status: "향후 논의",
            fullDetails: `[핵심 논의 사항 요약]
- 제안 배경 (E):
    - 타 노조와 차별화되는 '감동'과 '인간미'를 제공하여 조합원 참여 유도.
    - 조합이 조합원을 알아주고 챙긴다는 느낌 전달 중요.
- 구체적 활동 제안 (E, B, A):
    - 월별 생일 조합원 대상 소규모 생일 파티 또는 케이크/선물(상품권 등) 제공.
    - 하절기 시원한 음료수 또는 아이스크림 제공.
    - 휴게실 내 커피/차 비치 등.
- 현황 및 고려사항 (B, E):
    - 일부 지부(A)는 이미 생일 조합원에게 2만원 상품권 및 케이크 등 지원 중.
    - 조합원들이 공개적인 축하를 부끄러워하거나 부담스러워할 수 있음.
    - 작은 활동이라도 꾸준히 지속하는 것이 중요.
    - 활동에는 예산 확보가 선행되어야 함.
- 결론: 지부장들이 아이디어를 참고하여 각 지부 상황에 맞게 검토 및 시행.`
        },
        {
            icon: "⏱️", // 시간, 근무
            title: "알바 근무 시간 임의 단축 문제",
            description: "부평지부 알바 근무시간 임의 단축 관행 문제. 계약 위반 소지 및 알바 어려움 야기.",
            priority: "Medium",
            dueDate: null,
            status: "진행 중",
            fullDetails: `[핵심 논의 사항 요약]
- 문제 상황 (부평지부 사례 - E):
    - 사측(사무실)이 물량이 없다는 이유로 알바 근무자의 퇴근 시간을 임의로 앞당김 (예: 저녁 7시 출근, 새벽 6시 퇴근 계약이나 새벽 4시 퇴근 지시).
    - 초기에는 반발 있었으나 점차 조용해짐.
- 문제점 (E, I):
    - 계약 위반 소지: 일일 계약서에 명시된 근무 시간을 지키지 않음.
    - 알바 근로자 어려움: 대중교통 부재로 퇴근 곤란, 일부는 이로 인해 퇴사.
    - 사측의 비용 절감 우선 태도: 알바생의 편의나 계약 조건보다 비용 절감만 고려.
    - 추가 계약 시 동의 강요 정황: 퇴근 시간 변경에 동의하지 않으면 재계약하지 않는 방식으로 압박 가능성.
- 논점: 계약서상 근무 시간이 명시되어 있음에도 불구하고 사측이 일방적으로 변경하는 것은 부당하다는 문제의식.`
        },
        {
            icon: "⚖️", // 저울, 소송
            title: "우본 공무직 노조 임금협상 및 근속기간 인정 소송",
            description: "임금협상 진전 없음. 근속기간 인정 소송 6/10 2차 변론 예정. 변호사 준비 미흡. 사측 주장 반박 준비.",
            priority: "High",
            dueDate: "2025-06-10",
            status: "진행 중",
            fullDetails: `[핵심 논의 사항 요약]
- 임금 협상 (K):
    - 현재까지 별다른 진전 없음.
    - 교대 노조와 우정사업본부 간 진행 사항을 중간 보고 받는 형태이나, 특별한 보고 없음.
- 근속 기간 인정 소송 (K, L):
    - 진행 상황: 2024년 7월 소송 제기, 2025년 4월 1일 1차 변론 진행.
    - 2차 변론 예정: 6월 10일.
    - 1차 변론 평가: 변호사 준비가 다소 미흡했던 것으로 보임. 우본 측 준비서면에 대한 반박 준비 부족.
    - 향후 진행: 변호사가 우본 측 주장에 대한 반박 서면을 준비하여 노조 측 컨펌 후 제출 예정. (아직 서면 미수신)
    - 주요 쟁점: 회사가 다르다는 사측 주장에 대한 반박.
    - 증거 활용: 타 지부(안양, 부평)에서 과거 우편집중국 근무 경력을 인정받은 사례들을 변호사에게 전달.
- 기타: 중부지부와의 회의는 지리적 문제로 화상회의로 진행함.`
        },
        {
            icon: "📋", // 클립보드, 회의 안건
            title: "회의 방식 개선 제안",
            description: "회의 시 직책/지부 관련 안건 1가지씩 준비/발표 제안. 차차기 회의부터 적용 권장.",
            priority: "Low",
            dueDate: null,
            status: "향후 논의",
            fullDetails: `[핵심 논의 사항 요약]
- 제안 내용 (E):
    - 본조 간부들이 운영위원회 등 회의 참석 시, 각자의 직책에 맞는 안건 또는 소속 지부 관련 안건을 한 가지씩 의무적으로 준비하여 발표.
- 제안 목적:
    - 회의 참여도 증진.
    - 보다 실질적이고 다양한 논의 유도.
- 적용 시점: 차기 회의는 워크숍이므로, 차차기 회의부터 적용할 것을 권장.`
        }
    ];

    const issueBoard = document.getElementById('issue-board');
    const modal = document.getElementById('issueModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');
    const closeButton = document.querySelector('.close-button');

    function formatDate(dateString) {
        if (!dateString) return '기한 없음';
        const date = new Date(dateString);
        const userTimezoneOffset = date.getTimezoneOffset() * 60000;
        const correctedDate = new Date(date.getTime() + userTimezoneOffset);
        return correctedDate.toLocaleDateString('ko-KR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    function openModal(issue) {
        modalTitle.textContent = `${issue.icon} ${issue.title}`; // Add icon to modal title
        const safeDetails = issue.fullDetails
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/\n/g, "<br>");
        modalDetails.innerHTML = safeDetails;
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    closeButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    function renderIssues() {
        issueBoard.innerHTML = '';

        issues.forEach(issue => {
            const card = document.createElement('div');
            card.classList.add('issue-card');
            if (issue.priority) {
                card.classList.add(`priority-${issue.priority.toLowerCase()}`);
            }

            const titleContainer = document.createElement('div');
            titleContainer.classList.add('title-container');

            const iconSpan = document.createElement('span');
            iconSpan.classList.add('icon');
            iconSpan.textContent = issue.icon || '📄'; // Default icon if not specified

            const title = document.createElement('h2');
            title.textContent = issue.title;

            titleContainer.appendChild(iconSpan);
            titleContainer.appendChild(title);


            const description = document.createElement('p');
            description.classList.add('description');
            description.textContent = issue.description;

            const detailsDiv = document.createElement('div');
            detailsDiv.classList.add('details');

            const prioritySpan = document.createElement('span');
            prioritySpan.classList.add('priority');
            if (issue.priority) {
                 prioritySpan.classList.add(`priority-${issue.priority.toLowerCase()}`);
            }
            prioritySpan.textContent = `우선순위: ${issue.priority || '미지정'}`;

            const dueDateSpan = document.createElement('span');
            dueDateSpan.classList.add('due-date');
            dueDateSpan.textContent = `마감일: ${formatDate(issue.dueDate)}`;
            if (issue.dueDate) {
                const today = new Date();
                today.setHours(0,0,0,0);
                const dueDate = new Date(issue.dueDate);
                const userTimezoneOffset = dueDate.getTimezoneOffset() * 60000;
                const correctedDueDate = new Date(dueDate.getTime() + userTimezoneOffset);
                if (correctedDueDate < today) {
                    dueDateSpan.classList.add('overdue');
                    dueDateSpan.textContent += ' (기한 초과)';
                }
            }

            const statusSpan = document.createElement('span');
            statusSpan.classList.add('status');
            if (issue.status) {
                const statusClass = issue.status.replace(/\s+/g, '-');
                statusSpan.classList.add(`status-${statusClass}`);
            }
            statusSpan.textContent = `상태: ${issue.status || '미지정'}`;

            detailsDiv.appendChild(prioritySpan);
            detailsDiv.appendChild(dueDateSpan);
            detailsDiv.appendChild(statusSpan);

            card.appendChild(titleContainer); // Add title container (icon + title)
            card.appendChild(description);
            card.appendChild(detailsDiv);

            card.addEventListener('click', function() {
                openModal(issue);
            });

            issueBoard.appendChild(card);
        });
    }

    renderIssues();
});