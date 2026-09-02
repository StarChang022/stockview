function switchTab(tabId) {
  // 切換按鈕狀態
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const targetBtn = document.getElementById('tab-' + tabId);
  if (targetBtn) targetBtn.classList.add('active');

  // 切換分頁面板
  document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
  const targetPanel = document.getElementById('panel-' + tabId);
  if (targetPanel) targetPanel.classList.add('active');

  // 平滑滾動至頂部
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 初始化進度條平滑動畫
document.addEventListener('DOMContentLoaded', () => {
  const fills = document.querySelectorAll('.progress-fill');
  fills.forEach(fill => {
    const targetWidth = fill.style.width;
    fill.style.width = '0%';
    setTimeout(() => {
      fill.style.width = targetWidth;
    }, 150);
  });
});
