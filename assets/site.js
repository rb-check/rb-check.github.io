'use strict';

// Native details elements handle language, navigation and FAQ without JavaScript.
// Close a mobile menu after choosing a section so it does not cover the content.
for (const menu of document.querySelectorAll('.mobile-menu')) {
    for (const link of menu.querySelectorAll('a')) {
        link.addEventListener('click', () => { menu.open = false; });
    }
}

// Each Telegram example has its own scroll position and follows its last message.
function initializeDemoChat(chat) {
    let followingLatest = true;
    const showLatest = () => {
        if (chat) {
            followingLatest = true;
            chat.scrollTop = chat.scrollHeight;
        }
    };
    if (chat) {
        const atBottom = () => chat.scrollHeight - chat.scrollTop - chat.clientHeight < 12;
        chat.addEventListener('scroll', () => {
            if (atBottom()) followingLatest = true;
        }, { passive: true });
        // Only a reader's input leaves the bottom; layout changes must not do so.
        chat.addEventListener('wheel', event => { if (event.deltaY < 0) followingLatest = false; }, { passive: true });
        chat.addEventListener('pointerdown', () => { followingLatest = false; });
        chat.addEventListener('pointerup', () => { if (atBottom()) followingLatest = true; });
        chat.addEventListener('touchstart', () => { followingLatest = false; }, { passive: true });
        chat.addEventListener('touchend', () => { if (atBottom()) followingLatest = true; }, { passive: true });
        chat.addEventListener('keydown', event => {
            if (['Home', 'PageUp', 'ArrowUp'].includes(event.key) || (event.key === ' ' && event.shiftKey)) followingLatest = false;
            if (event.key === 'End') {
                event.preventDefault();
                showLatest();
            }
        });
        // Keep the last message visible when line wrapping or image width changes.
        // A reader who scrolled into the history keeps their own position.
        const resizeObserver = new ResizeObserver(() => { if (followingLatest) showLatest(); });
        resizeObserver.observe(chat);
        resizeObserver.observe(chat.querySelector('.tg-chat-history'));
    }
    window.requestAnimationFrame(showLatest);
    return showLatest;
}

const showLatestByChat = new WeakMap();
for (const chat of document.querySelectorAll('[data-demo-chat]')) {
    showLatestByChat.set(chat, initializeDemoChat(chat));
}

// Three synthetic status examples. No network requests or real monitoring.
const demo = document.querySelector('.hero-visual');
if (demo) {
    const chat = demo.querySelector('[data-demo-chat]');
    const showLatest = showLatestByChat.get(chat);
    const timeFormat = new Intl.DateTimeFormat(document.documentElement.lang === 'en' ? 'en-GB' : 'ru-RU', {
        hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23'
    });
    const updateClock = () => {
        const now = new Date();
        const time = timeFormat.format(now);
        for (const clock of demo.querySelectorAll('[data-demo-update-time]')) {
            clock.textContent = time;
            clock.dateTime = now.toISOString();
        }
        for (const clock of demo.querySelectorAll('[data-demo-edited-time]')) {
            clock.textContent = time.slice(0, 5);
            clock.dateTime = now.toISOString();
        }
    };
    const openedAt = Date.now();
    for (const clock of demo.querySelectorAll('[data-demo-sent-time]')) {
        const sentAt = new Date(openedAt - Number(clock.dataset.demoMinutesAgo) * 60000);
        clock.textContent = timeFormat.format(sentAt).slice(0, 5);
        clock.dateTime = sentAt.toISOString();
    }
    updateClock();
    window.setInterval(updateClock, 60000);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) updateClock(); });

    const controls = [...demo.querySelectorAll('[data-notification-state]')];
    const notices = [...demo.querySelectorAll('[data-notice-state]')];
    const cards = [...demo.querySelectorAll('[data-monitor-state]')];
    for (const control of controls) {
        control.addEventListener('click', () => {
            const state = control.dataset.notificationState;
            if (!['online', 'game', 'offline'].includes(state)) return;
            const atBottom = chat && chat.scrollHeight - chat.scrollTop - chat.clientHeight < 12;
            for (const button of controls) button.setAttribute('aria-pressed', String(button === control));
            for (const panel of notices) panel.hidden = panel.dataset.noticeState !== state;
            for (const panel of cards) panel.hidden = panel.dataset.monitorState !== state;
            if (atBottom) showLatest();
        });
    }
}
