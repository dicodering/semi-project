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
            if(curPos < 8) {
                editor_prev_btn.removeAttribute('disabled')
                positionValue -= LIST_WIDTH;
                // x축으로 positionValue만큼 이동한다
                editor_list.style.transform = `translateX(${positionValue}px)`;
                editor_list.style.transition = '0.6s ease-out';
                curPos += 1;
            }
            if(curPos === 8) {
                editor_prev_btn.setAttribute('disabled', 'true');
            }
        }
        // prev Btn : 이전 li로 돌아가
        function prev() {
            if(curPos > 0) {
                editor_next_btn.removeAttribute('disabled')
                positionValue += LIST_WIDTH;
                // x축으로 positionValue만큼 이동한다
                editor_list.style.transform = `translateX(${positionValue}px)`;
                editor_list.style.transition = '0.6s ease-out';
                curPos -= 1;
            }
            if(curPos === 0) {
                editor_next_btn.setAttribute('disabled', 'true');
            }
        }

        // 초기화 및 실행
        function init() {
           editor_prev_btn.setAttribute('disabled', 'true');
           editor_prev_btn.addEventListener("click", prev);
           editor_next_btn.addEventListener("click", next);
        }
        init();       


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
            if(curPos_recom < 11) {
                recom_prev_btn.removeAttribute('disabled')
                positionValue_recom -= RECOM_WIDTH;
                // x축으로 positionValue만큼 이동한다
                recom_list.style.transform = `translateX(${positionValue_recom}px)`;
                recom_list.style.transition = '0.6s ease-out';
                curPos_recom += 1;
            }
            if(curPos_recom === 11) {
                recom_prev_btn.setAttribute('disabled', 'true');
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
            }
        }

        // 초기화 및 실행
        function initRecom() {
        recom_prev_btn.setAttribute('disabled', 'true');
           recom_prev_btn.addEventListener("click", prevRecom);
           recom_next_btn.addEventListener("click", nextRecom);
        }
        initRecom();       

        




        
        // // 10) editor : 에디터 픽

        
        // const link_btn_num = document.querySelectorAll(".link-page");

        // for (const lb of link_btn_num) {
        //     lb.addEventListener('click', e => {
        //         // 모든 버튼에 대한 on클래스 해제
        //         for (const item of document.querySelectorAll(".link-page")) {
        //             item.classList.remove('on');
        //         }

        //         // 클릭된 자기 자신은 on클래스 적용
        //         e.currentTarget.classList.add('on');

        //         // 화면상에 보이는 모든 페이지를 숨김
        //         for (const editor_list of document.querySelectorAll(".slide-list")) {
        //             this.scrollRight -= window.scrollX * 100;
        //         //     editor_list.style.transform = 'translate(-20%)';
        //         }

        //         // 클릭된 버튼에 적용된 'data-id'값을 취득
        //         const data_num = e.currentTarget.dataset.num;
        //         // 취득한 값을 id속성으로 사용하는 페이지에게 on 적용 -> 화면에 표시
        //         document.getElementById(data_id).style.transform = 'translate(900vw)';
        //     });
        // }