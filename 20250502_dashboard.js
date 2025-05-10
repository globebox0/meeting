document.addEventListener('DOMContentLoaded', () => {
    console.log("대시보드 스크립트 로드 완료!");

    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // 마우스 오버 시 카드 살짝 커지는 효과 (CSS로 이미 구현됨, JS로 추가 제어 가능)
        card.addEventListener('mouseenter', () => {
            // card.style.transform = 'scale(1.02)'; // CSS :hover로 대체 가능
        });
        card.addEventListener('mouseleave', () => {
            // card.style.transform = 'scale(1)'; // CSS :hover로 대체 가능
        });

        // 카드 클릭 시 간단한 시각적 피드백 (선택 사항)
        card.addEventListener('click', () => {
            card.classList.add('clicked');
            // 애니메이션 후 클래스 제거
            setTimeout(() => {
                card.classList.remove('clicked');
            }, 300); // CSS 애니메이션 지속 시간과 일치

            // 여기에 카드 클릭 시 특정 동작 추가 가능 (예: 모달 창으로 상세 내용 보기)
            // console.log(card.id + " 카드가 클릭되었습니다.");
        });
    });

    // 날짜/마감일 강조 (예시)
    // 실제 구현 시에는 좀 더 정교한 파싱 및 조건 필요
    const importantDates = document.querySelectorAll('.card-body p');
    importantDates.forEach(p => {
        if (p.textContent.includes('5월 15일') || p.textContent.includes('6월 10일') || p.textContent.includes('6월 13일') || p.textContent.includes('6월 말 전')) {
            p.innerHTML = p.innerHTML.replace(/(5월 15일|6월 10일|6월 13일|6월 말 전)/g, '<strong class="highlight-date">$1</strong>');
        }
    });

    // highlight-date 클래스 스타일 추가 (style.css에 추가해도 됨)
    const styleSheet = document.styleSheets[0];
    try {
        styleSheet.insertRule('.highlight-date { color: var(--status-urgent); font-weight: bold; background-color: #fff0f0; padding: 0 3px; border-radius: 3px;}', styleSheet.cssRules.length);
    } catch (e) {
        console.warn("CSS Rule insertion failed. highlight-date style might not apply via JS.", e);
        // CSS 파일에 직접 추가하는 것이 더 안정적일 수 있습니다:
        // .highlight-date { color: var(--status-urgent); font-weight: bold; background-color: #fff0f0; padding: 0 3px; border-radius: 3px;}
    }


    // 페이지 로드 시 환영 메시지 (예시)
    // alert("물류노조 5월 정기회의 대시보드에 오신 것을 환영합니다!");
    // 또는 콘솔에
    console.log("물류노조 5월 정기회의 대시보드가 성공적으로 로드되었습니다.");

    // 동적으로 내용 업데이트가 필요하다면, 이 곳에서 AJAX 호출 등을 통해 데이터를 가져와
    // DOM을 조작하여 내용을 채울 수 있습니다.
    // 예: fetch('/api/meeting-summary')
    //      .then(response => response.json())
    //      .then(data => { /* 데이터로 카드 내용 업데이트 */ });

});