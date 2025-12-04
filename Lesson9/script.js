$(document).ready(function() {
    $('#menu-toggle').click(function() {
        // メニューの出し入れ
        $('#nav-menu').slideToggle();
        // ボタンの形を変える（バツ印アニメーション用）
        $(this).toggleClass('active');
    });
});