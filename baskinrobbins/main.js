        // Family Site 버튼 클릭 실행
        const site_btn = document.getElementById("btnFam");
        const site_list = document.getElementById("famsite");

        site_btn.addEventListener('click', e => {
            // e.preventDefault();
            if (site_list.style.display == 'none') {
              site_btn.classList.remove('off');
              site_btn.classList.add('on');
              site_list.style.display = 'block';
            } else {
              site_list.style.display = 'none';
              site_btn.classList.remove('on');
              site_btn.classList.add('off');
            }
        });

        // dropdown btn 마우스
        const menu_bar = document.querySelector(".top-menu");
        const down_hover = document.querySelector(".mover");

        down_hover.addEventListener('mouseover', e => {
          e.preventDefault();
          down_hover.style.display = 'block';
        });

        menu_bar.addEventListener('mouseover', e => {
            e.preventDefault();
              down_hover.style.display = 'block';
        });

        menu_bar.addEventListener('mouseout', e => {
          e.preventDefault();
            down_hover.style.display = 'none';
        })
         

