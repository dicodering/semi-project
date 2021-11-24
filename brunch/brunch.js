        // 스크롤
        window.addEventListener('scroll', (e) => {
            const top_menu = document.getElementById('header');
            const top_banner = document.getElementById('banner');
            const sm_banner = document.getElementById('ban-sm');
            const windowHeight = window.screen.availHeight;

            // 1) 광고 배너
            if (window.scrollY <= 0){ 
                top_banner.style.margin = '0px 0px 0px 0px';
                top_banner.style.transition = '0.6s ease-out';
                sm_banner.style.display = 'none';
            }
            else if (window.scrollY > 0){
                top_banner.style.margin = ' -420px 0px 0px 0px';
                sm_banner.style.display = 'block';
            }

            // 2) 헤더 (가로)
            if (window.scrollY <= 500){
                // alert("hi!");
                top_menu.classList.remove('header-content');
                // return;
            }
            else if (window.scrollY > 500){
                top_menu.classList.add('header-content');
            }

            // 3) 탑 버튼
            const top_btn = document.getElementById('go-top-icon');
            if (window.scrollY <= 500){
                top_btn.style.position = 'absolute';
            }
            else if (500 < window.scrollY && window.scrollY <= 3550){
                top_btn.style.position = 'fixed';
            }
            else if (window.scrollY > 3550){
                top_btn.style.position = 'absolute';
            }

        });




        // 4-1) 버튼 -> 헤더(세로) 등장
        const t_btn = document.querySelector(".toggle-btn");
        t_btn.addEventListener('click', e => {
            e.preventDefault();
            const h_side = document.getElementById('header-side');
            h_side.style.display = 'block';
        });

        // 4-2) 버튼 -> 헤더(세로) 닫기
        const h_side_hide = document.querySelector("#bcWrap");
        h_side_hide.addEventListener("click", function(e) {
            if (e.screenX > 260){
                const h_side = document.getElementById('header-side');
                h_side.style.display = 'none';
            }
        });




        // 5) 브런치 작가 -> 클릭 (탭 형식)
        const writer_btn = document.querySelectorAll(".writer-btn-item");

        for (const wb of writer_btn) {
            wb.addEventListener('click', e => {
                // 모든 버튼에 대한 on클래스 해제
                for (const item of document.querySelectorAll(".writer-btn-item")) {
                    item.classList.remove('on');
                }

                // 클릭된 자기 자신은 on클래스 적용
                e.currentTarget.classList.add('on');

                // 화면상에 보이는 모든 페이지를 숨김
                for (const writer_list of document.querySelectorAll(".writer-list-box")) {
                    writer_list.style.display = 'none';
                }

                // 클릭된 버튼에 적용된 'data-id'값을 취득
                const data_id = e.currentTarget.dataset.id;
                // 취득한 값을 id속성으로 사용하는 페이지에게 on 적용 -> 화면에 표시
                document.getElementById(data_id).style.display = 'block';
            });
        }




        // 6-1) editor : 에디터 픽 (슬라이드)

        // editor : 에디터 전체 영역
        // editor-rwap : 슬라이드 전체 영역
        // slide : ul 태그
        // slide-list : li 태그
        // editor-page : 페이지 버튼 전체
        // link-page : a 태그

        let curPos = 0; // 현재 보여지는 .slide-list 들의 인덱스 번호
        let positionValue = 0; // .slide-list 태그의 위치 값 지정할 변수
        const LIST_WIDTH = 940;

        const editor_prev_btn = document.querySelector('.btn-prev');
        const editor_next_btn = document.querySelector('.btn-next');
        const editor_list = document.querySelector('.slide');

        // next Btn : 다음 li로 넘어가
        function next() {
            // 버튼 : 회색처리
            btn_init();
            
            if(curPos < 8) {
                editor_prev_btn.removeAttribute('disabled')
                positionValue -= LIST_WIDTH;
                // x축으로 positionValue만큼 이동한다
                editor_list.style.transform = `translateX(${positionValue}px)`;
                editor_list.style.transition = '0.6s ease-out';
                curPos += 1;
            }
            
            switch (curPos) {
                case 0:
                    num_img1.style.backgroundPosition = '0px -10px';
                    break;
                case 1:
                    num_img2.style.backgroundPosition = '-20px -10px';
                    break;
                case 2: 
                    num_img3.style.backgroundPosition = '-40px -10px';
                    break;
                case 3:
                    num_img4.style.backgroundPosition = '-60px -10px';
                    break;
                case 4:
                    num_img5.style.backgroundPosition = '-80px -10px';
                    break;
                case 5:
                    num_img6.style.backgroundPosition = '-100px -10px';
                    break;
                case 6:
                    num_img7.style.backgroundPosition = '-120px -10px';
                    break;
                case 7:
                    num_img8.style.backgroundPosition = '-140px -10px';
                    break;
                case 8:
                    num_img9.style.backgroundPosition = '-160px -10px';
                    break;
            }

            if(curPos === 8) {
                editor_prev_btn.setAttribute('disabled', 'true');
                editor_next_btn.style.display = 'none';
            }
            if(curPos === 1) {
                editor_prev_btn.style.display = 'block';
            }
        }

        // prev Btn : 이전 li로 돌아가
        function prev() {
            // 버튼 : 회색처리
            btn_init();

            if(curPos > 0) {
                editor_next_btn.removeAttribute('disabled')
                positionValue += LIST_WIDTH;
                // x축으로 positionValue만큼 이동한다
                editor_list.style.transform = `translateX(${positionValue}px)`;
                editor_list.style.transition = '0.6s ease-out';
                curPos -= 1;
            }

            switch (curPos) {
                case 0:
                    num_img1.style.backgroundPosition = '0px -10px';
                    break;
                case 1:
                    num_img2.style.backgroundPosition = '-20px -10px';
                    break;
                case 2: 
                    num_img3.style.backgroundPosition = '-40px -10px';
                    break;
                case 3:
                    num_img4.style.backgroundPosition = '-60px -10px';
                    break;
                case 4:
                    num_img5.style.backgroundPosition = '-80px -10px';
                    break;
                case 5:
                    num_img6.style.backgroundPosition = '-100px -10px';
                    break;
                case 6:
                    num_img7.style.backgroundPosition = '-120px -10px';
                    break;
                case 7:
                    num_img8.style.backgroundPosition = '-140px -10px';
                    break;
                case 8:
                    num_img9.style.backgroundPosition = '-160px -10px';
                    break;
            }
            if(curPos === 0) {
                editor_next_btn.setAttribute('disabled', 'true');
                editor_prev_btn.style.display = 'none';
            }
            if(curPos === 7) {
                editor_next_btn.style.display = 'block';
            }
        }

        // 초기화 및 실행
        function init() {
           editor_prev_btn.setAttribute('disabled', 'true');
           editor_prev_btn.addEventListener("click", prev);
           editor_next_btn.addEventListener("click", next);
           if (curPos === 0 ) { editor_prev_btn.style.display = 'none'; }
           if (curPos === 8 ) { editor_next_btn.style.display = 'none'; }
        }
        init();       

        // 버튼 클릭 처리 (디폴트로 최상단 돌아가는거 방지)
        editor_prev_btn.addEventListener("click", e => { e.preventDefault(); });
        editor_next_btn.addEventListener("click", e => { e.preventDefault(); });




        // 6-2) editor : 에디터 픽 (번호 버튼)

        function btn_init() {
            num_img1.style.backgroundPosition = '0 1px';
            num_img2.style.backgroundPosition = '-20px 1px';
            num_img3.style.backgroundPosition = '-40px 1px';
            num_img4.style.backgroundPosition = '-60px 1px';
            num_img5.style.backgroundPosition = '-80px 1px';
            num_img6.style.backgroundPosition = '-100px 1px';
            num_img7.style.backgroundPosition = '-120px 1px';
            num_img8.style.backgroundPosition = '-140px 1px';
            num_img9.style.backgroundPosition = '-160px 1px';
        }

        // 공통
        let positionValue_num = 0; // .slide-list 태그의 위치 값 지정할 변수
        const slide_num = document.getElementById('slide');

        const num_img1 = document.getElementById('b1');
        const num_btn1 = document.getElementById('btn1');
        const num_img2 = document.getElementById('b2');
        const num_btn2 = document.getElementById('btn2');
        const num_img3 = document.getElementById('b3');
        const num_btn3 = document.getElementById('btn3');
        const num_img4 = document.getElementById('b4');
        const num_btn4 = document.getElementById('btn4');
        const num_img5 = document.getElementById('b5');
        const num_btn5 = document.getElementById('btn5');
        const num_img6 = document.getElementById('b6');
        const num_btn6 = document.getElementById('btn6');
        const num_img7 = document.getElementById('b7');
        const num_btn7 = document.getElementById('btn7');
        const num_img8 = document.getElementById('b8');
        const num_btn8 = document.getElementById('btn8');
        const num_img9 = document.getElementById('b9');
        const num_btn9 = document.getElementById('btn9');

        // no.1
        num_btn1.addEventListener('click', (e) => {
            // 포지션 적용(슬라이드와 공유되는 변수)
            curPos = 0;
            positionValue = 0;
            editor_prev_btn.style.display = 'none';
            editor_next_btn.style.display = 'block';

            // 버튼 : 회색처리
            btn_init();

            num_img1.style.backgroundPosition = '0px -10px';
            slide_num.style.transition = '0.6s ease-out';
            slide_num.style.transform = `translateX(${positionValue}px)`;
        });

        // no.2
        num_btn2.addEventListener('click', (e) => {
            // 포지션 적용(슬라이드와 공유되는 변수)
            curPos = 1;
            positionValue = -1 * LIST_WIDTH;
            editor_prev_btn.style.display = 'block';
            editor_next_btn.style.display = 'block';

            // 버튼 : 회색처리
            btn_init();

            num_img2.style.backgroundPosition = '-20px -10px';
            slide_num.style.transition = '0.6s ease-out';
            slide_num.style.transform = `translateX(${positionValue}px)`;
        });

        // no.3
        num_btn3.addEventListener('click', (e) => {
            // 포지션 적용(슬라이드와 공유되는 변수)
            curPos = 2;
            positionValue = -2 * LIST_WIDTH;
            editor_prev_btn.style.display = 'block';
            editor_next_btn.style.display = 'block';

            // 버튼 : 회색처리
            btn_init();

            num_img3.style.backgroundPosition = '-40px -10px';
            slide_num.style.transition = '0.6s ease-out';
            slide_num.style.transform = `translateX(${positionValue}px)`;
        });

        // no.4
        num_btn4.addEventListener('click', (e) => {
            // 포지션 적용(슬라이드와 공유되는 변수)
            curPos = 3;
            positionValue = -3 * LIST_WIDTH;
            editor_prev_btn.style.display = 'block';
            editor_next_btn.style.display = 'block';

            // 버튼 : 회색처리
            btn_init();

            num_img4.style.backgroundPosition = '-60px -10px';
            slide_num.style.transition = '0.6s ease-out';
            slide_num.style.transform = `translateX(${positionValue}px)`;
        });

        // no.5
        num_btn5.addEventListener('click', (e) => {
            // 포지션 적용(슬라이드와 공유되는 변수)
            curPos = 4;
            positionValue = -4 * LIST_WIDTH;
            editor_prev_btn.style.display = 'block';
            editor_next_btn.style.display = 'block';

            // 버튼 : 회색처리
            btn_init();

            num_img5.style.backgroundPosition = '-80px -10px';
            slide_num.style.transition = '0.6s ease-out';
            slide_num.style.transform = `translateX(${positionValue}px)`;
        });

        // no.6
        num_btn6.addEventListener('click', (e) => {
            // 포지션 적용(슬라이드와 공유되는 변수)
            curPos = 5;
            positionValue = -5 * LIST_WIDTH;
            editor_prev_btn.style.display = 'block';
            editor_next_btn.style.display = 'block';

            // 버튼 : 회색처리
            btn_init();

            num_img6.style.backgroundPosition = '-100px -10px';
            slide_num.style.transition = '0.6s ease-out';
            slide_num.style.transform = `translateX(${positionValue}px)`;
        });

        // no.7
        num_btn7.addEventListener('click', (e) => {
            // 포지션 적용(슬라이드와 공유되는 변수)
            curPos = 6;
            positionValue = -6 * LIST_WIDTH;
            editor_prev_btn.style.display = 'block';
            editor_next_btn.style.display = 'block';

            // 버튼 : 회색처리
            btn_init();

            num_img7.style.backgroundPosition = '-120px -10px';
            slide_num.style.transition = '0.6s ease-out';
            slide_num.style.transform = `translateX(${positionValue}px)`;
        });

        // no.8
        num_btn8.addEventListener('click', (e) => {
            // 포지션 적용(슬라이드와 공유되는 변수)
            curPos = 7;
            positionValue = -7 * LIST_WIDTH;
            editor_prev_btn.style.display = 'block';
            editor_next_btn.style.display = 'block';

            // 버튼 : 회색처리
            btn_init();

            num_img8.style.backgroundPosition = '-140px -10px';
            slide_num.style.transition = '0.6s ease-out';
            slide_num.style.transform = `translateX(${positionValue}px)`;
        });

        // no.9
        num_btn9.addEventListener('click', (e) => {
            // 포지션 적용(슬라이드와 공유되는 변수)
            curPos = 8;
            positionValue = -8 * LIST_WIDTH;
            editor_prev_btn.style.display = 'block';
            editor_next_btn.style.display = 'none';

            // 버튼 : 회색처리
            btn_init();

            num_img9.style.backgroundPosition = '-160px -10px';
            slide_num.style.transition = '0.6s ease-out';
            slide_num.style.transform = `translateX(${positionValue}px)`;
        });

        // 버튼 클릭 처리 (디폴트로 최상단 돌아가는거 방지)
        num_btn1.addEventListener("click", e => { e.preventDefault(); });
        num_btn2.addEventListener("click", e => { e.preventDefault(); });
        num_btn3.addEventListener("click", e => { e.preventDefault(); });
        num_btn4.addEventListener("click", e => { e.preventDefault(); });
        num_btn5.addEventListener("click", e => { e.preventDefault(); });
        num_btn6.addEventListener("click", e => { e.preventDefault(); });
        num_btn7.addEventListener("click", e => { e.preventDefault(); });
        num_btn8.addEventListener("click", e => { e.preventDefault(); });
        num_btn9.addEventListener("click", e => { e.preventDefault(); });




        // 7) recommend : 추천 (슬라이드)
        
        // recommend - 추천 전체 영역
        // recom-text-box - 추천 타이틀
        // recom-list - 추천 리스트 슬라이드
        // recom-list-box - 추천 ul
        // recom-list-item - li
        // recom-side - 양 사이드 버튼
        // recom-btn-prev - a 태그 (이전)
        // recom-btn-next - a 태그 (이후)

        
        let curPos_recom = 0; // 현재 보여지는 .slide-list 들의 인덱스 번호
        let positionValue_recom = 0; // .slide-list 태그의 위치 값 지정할 변수
        const RECOM_WIDTH = 940;

        const recom_prev_btn = document.querySelector('.recom-btn-prev');
        const recom_next_btn = document.querySelector('.recom-btn-next');
        const recom_list = document.querySelector('.recom-list-box');

        // next Btn : 다음 li로 넘어가
        function nextRecom() {
            if(curPos_recom < 3) {
                recom_prev_btn.removeAttribute('disabled')
                positionValue_recom -= RECOM_WIDTH;
                // x축으로 positionValue만큼 이동한다
                recom_list.style.transform = `translateX(${positionValue_recom}px)`;
                recom_list.style.transition = '0.6s ease-out';
                curPos_recom += 1;
            }
            if(curPos_recom === 3) {
                recom_prev_btn.setAttribute('disabled', 'true');
                recom_next_btn.style.display = 'none';
            }
            if(curPos_recom === 1) {
                recom_prev_btn.style.display = 'block';
            }
        }
        
        // prev Btn : 이전 li로 돌아가
        function prevRecom() {
            if(curPos_recom > 0) {
                recom_next_btn.removeAttribute('disabled')
                positionValue_recom += RECOM_WIDTH;
                // x축으로 positionValue 만큼 이동한다
                recom_list.style.transform = `translateX(${positionValue_recom}px)`;
                recom_list.style.transition = '0.6s ease-out';
                curPos_recom -= 1;
            }
            if(curPos_recom === 0) {
                recom_next_btn.setAttribute('disabled', 'true');
                recom_prev_btn.style.display = 'none';
            }
            if(curPos_recom === 2) {
                recom_next_btn.style.display = 'block';
            }
        }

        // 초기화 및 실행
        function initRecom() {
           recom_prev_btn.setAttribute('disabled', 'true');
           recom_prev_btn.addEventListener("click", prevRecom);
           recom_next_btn.addEventListener("click", nextRecom);
           if (curPos_recom === 0 ) { recom_prev_btn.style.display = 'none'; }
           if (curPos_recom === 8 ) { recom_next_btn.style.display = 'none'; }
        }
        initRecom();       


        // 버튼 클릭 처리 (디폴트로 최상단 돌아가는거 방지)
        recom_prev_btn.addEventListener("click", e => { e.preventDefault(); });
        recom_next_btn.addEventListener("click", e => { e.preventDefault(); });
        