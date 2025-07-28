// DOM読み込み完了後に実行
document.addEventListener('DOMContentLoaded', function() {
    
    // FAQ アコーディオン機能
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            // 他のアクティブなアイテムを閉じる
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 現在のアイテムをトグル
            item.classList.toggle('active');
        });
    });
    
    // スムーズスクロール機能
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // スクロールアニメーション
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // アニメーション対象要素
    const animateElements = document.querySelectorAll('.feature-card, .faq-item, .contact-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // ヘッダーの背景色変更（スクロール時）
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(46, 204, 113, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #2ecc71, #27ae60)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ボタンのホバーエフェクト強化
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 画像プレースホルダーのアニメーション
    const imagePlaceholders = document.querySelectorAll('.image-placeholder');
    
    imagePlaceholders.forEach(placeholder => {
        placeholder.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 15px 40px rgba(0,0,0,0.3)';
        });
        
        placeholder.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
        });
    });
    
    // ローディングアニメーション
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // フォーム送信のシミュレーション（実際のGoogleフォームに置き換える）
    const contactForm = document.querySelector('.btn-primary');
    
    if (contactForm) {
        contactForm.addEventListener('click', function(e) {
            // 実際のGoogleフォームURL
            const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd8UdacJj3xqT--bMaUWk8uPbcI6NfNxUwz4d84vUUPloUXbg/viewform?usp=sharing&ouid=106510367837705548959';
            
            // 新しいタブでGoogleフォームを開く
            window.open(googleFormUrl, '_blank');
        });
    }
    
    // 電話番号クリック時の確認
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const phoneNumber = this.getAttribute('href').replace('tel:', '');
            const confirmed = confirm(`電話番号 ${phoneNumber} に電話をかけますか？`);
            
            if (!confirmed) {
                e.preventDefault();
            }
        });
    });
    
    // メールリンククリック時の確認
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const email = this.getAttribute('href').replace('mailto:', '');
            const confirmed = confirm(`メールアドレス ${email} にメールを送信しますか？`);
            
            if (!confirmed) {
                e.preventDefault();
            }
        });
    });
    
    // パフォーマンス最適化：画像の遅延読み込み
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // コンソールメッセージ（開発者向け）
    console.log('🌿 草刈り代行サービス Webサイトが読み込まれました');
    console.log('📞 お問い合わせ: 0000-000-000');
    console.log('✉️ メール: info@example.com');
}); 