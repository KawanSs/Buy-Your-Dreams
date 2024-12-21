document.addEventListener('DOMContentLoaded', function(){
    const NavBtn = document.querySelectorAll('[data-tab-button]');
    const FaqQuestion = document.querySelectorAll('[data-faq-question]');
    const BuyButton = document.querySelectorAll('.cars__list__item__button');

    BuyButton.forEach(BuyButton => {
        BuyButton.addEventListener('click', function(){
            alert('Not yet! But it is good to now you want to')
        })
    })

    for(let i=0; i < NavBtn.length; i++){
        NavBtn[i].addEventListener('click', function(event){
            const TabTarget = event.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${TabTarget}]`);
            TabsHidder();
            BtnHidder();
            tab.classList.add('cars__list--active');
            event.target.classList.add('cars__nav__tabs__button--active');
        })
    }

    for(let i=0; i < FaqQuestion.length; i++){
        FaqQuestion[i].addEventListener('click', answer);
    }
})

function TabsHidder(){
    const tabs = document.querySelectorAll('[data-tab-id]');
    for(let i=0; i < tabs.length; i++){
        tabs[i].classList.remove('cars__list--active');
    }
}
function BtnHidder(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i=0; i < buttons.length; i++){
        buttons[i].classList.remove('cars__nav__tabs__button--active');
    }
}

function answer(event){
    const FaqClass = 'faq__questions__item--open';
    const Daddy = event.target.parentNode;

    Daddy.classList.toggle(FaqClass);
}