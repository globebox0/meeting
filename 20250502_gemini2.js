document.addEventListener('DOMContentLoaded', function () {
    // 부드러운 스크롤링
    document.querySelectorAll('#navbar a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#toggle-all') return; // 전체 토글 버튼은 제외

            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                let offset = 60; // 고정 네비게이션 바 높이
                if (window.innerWidth <= 768) { // 모바일에서는 네비바가 static일 경우
                    const navbar = document.getElementById('navbar');
                    if (getComputedStyle(navbar).position === 'static') {
                        offset = 0;
                    }
                }
                
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // FontAwesome 아이콘 동적 로드 (Kit ID를 사용하지 않을 경우)
    // 또는 HTML에 직접 FontAwesome 스크립트 태그 삽입
    // 예: <script src="https://kit.fontawesome.com/YOUR_KIT_ID.js" crossorigin="anonymous"></script>
    // 위 HTML에 FontAwesome kit 주석 처리해두었으니, 실제 kit ID로 교체하거나, 아래와 같이 CDN을 사용할 수 있습니다.
    // (만약 아이콘을 사용하고 싶다면, head 태그에 아래와 유사한 링크를 추가해주세요)
    /*
    const fontAwesomeLink = document.createElement('link');
    fontAwesomeLink.rel = 'stylesheet';
    fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
    document.head.appendChild(fontAwesomeLink);
    */
    // HTML 쪽에 FontAwesome Kit ID를 넣는 것을 권장합니다. (예시로 fas fa-bullhorn 등을 사용)
    // 만약 아이콘이 보이지 않는다면, FontAwesome 설정이 올바르게 되었는지 확인해주세요.
    // CSS에서 사용된 `fas fa-xxx` 클래스는 FontAwesome 아이콘입니다.
});