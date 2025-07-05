// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');

    const headerHeight = header.offsetHeight;
    const footerHeight = footer.offsetHeight;
    const windowHeight = window.innerHeight;

    main.style.height = (windowHeight - headerHeight - footerHeight) + 'px';

    document.querySelector('iframe').addEventListener('load', function() {
        console.log('聊天框加载完成');
        // 可添加加载动画隐藏逻辑
    });
});
