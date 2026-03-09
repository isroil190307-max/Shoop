document.addEventListener('DOMContentLoaded', function() {
    
    // Досуңуздун чыныгы номери (боштуксуз жана + белгисисиз жазыңыз)
    const myFriendNumber = "996502152021"; 

    // 1. Байланыш баскычын иштетүү
    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            alert("Биздин номер: +996 502 152 021 \nДарегибиз: Бишкек ш.");
        });
    }

    // 2. Меню баскычтарын иштетүү (Секцияларга жылдыруу)
    const menuButtons = document.querySelectorAll('.menu-btn');
    menuButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // 3. WhatsApp аркылуу заказ берүү (ОҢДОЛГОН БӨЛҮМ)
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Товардын атын алуу
            const productName = this.getAttribute('data-name');
            
            // Билдирүүнү даярдоо
            const message = `Саламатсызбы! Мен ушул товарды сатып алайын дедим эле: ${productName}`;
            
            // WhatsApp шилтемесин түзүү (Туура формат: https://wa.me/номер)
            const whatsappUrl = `https://wa.me/${myFriendNumber}?text=${encodeURIComponent(message)}`;
            
            // Жаңы терезеде ачуу
            window.open(whatsappUrl, '_blank');
        });
    });

});