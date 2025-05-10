document.addEventListener('DOMContentLoaded', () => {
    // 모달 요소 가져오기
    const modal = document.getElementById('detailsModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetailsText = document.getElementById('modalDetailsText');
    const closeButton = document.querySelector('.close-button');

    // 모든 칸반 카드에 이벤트 리스너 추가
    const cards = document.querySelectorAll('.kanban-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h4').textContent;
            const details = card.dataset.details; // data-details 속성 값 가져오기

            modalTitle.textContent = title;
            // 간단한 마크다운 형식(*, **)을 HTML 태그로 변환 (선택적)
            let formattedDetails = details.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // **Bold** -> <strong>Bold</strong>
            formattedDetails = formattedDetails.replace(/\*(.*?)\*/g, '<em>$1</em>');     // *Italic* -> <em>Italic</em>
            // \n은 CSS의 white-space: pre-wrap; 으로 처리되므로 JS에서 <br> 변환은 불필요할 수 있습니다.
            // 만약 CSS 처리가 안된다면 아래 주석 해제:
            // formattedDetails = formattedDetails.replace(/\n/g, '<br>');
            
            modalDetailsText.innerHTML = formattedDetails; // HTML로 내용을 넣기 위해 innerHTML 사용

            modal.style.display = 'block'; // 모달 보이기
        });
    });

    // 모달 닫기 버튼 이벤트
    if (closeButton) { // closeButton이 존재할 때만 이벤트 리스너 추가
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }


    // 모달 외부 클릭 시 닫기
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // ESC 키로 모달 닫기
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });

    console.log("칸반 보드가 로드되었고, 카드 클릭 이벤트가 설정되었습니다.");
});