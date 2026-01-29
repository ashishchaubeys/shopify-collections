document.querySelectorAll('.showcase-collection-list--text').forEach(el => {
        el.addEventListener('mouseenter', () => changeImageForTab(el));
        el.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                changeImageForTab(el);
            }
        });
    });

    // To add is-active class to the clicked tab and corresponding content and image
    function changeImageForTab(activeTab) {
        const tabs = document.querySelectorAll('.showcase-collection-list--text');
        const contents = document.querySelectorAll('[data-tab-content]');
        const images = document.querySelectorAll('.showcase-collection-list--img-item');

        tabs.forEach(el => el.classList.remove('is-active'));
        contents.forEach(el => el.classList.remove('is-active'));
        images.forEach(el => el.classList.remove('is-active'));

        const index = Array.from(tabs).indexOf(activeTab);
        activeTab.classList.add('is-active');
        contents[index]?.classList.add('is-active');
        images[index]?.classList.add('is-active');
    }
