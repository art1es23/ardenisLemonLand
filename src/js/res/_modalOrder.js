import gsap from 'gsap';

const modalOrder = () => {

    const modalOrder = document.querySelector('.modal-order');
    const closeBtn = document.querySelector('.btn--close');

    document.querySelectorAll('.btn--order').forEach(item =>
        item.addEventListener('click', e => {
            modalOrder.classList.add('modal-order--active');
            document.body.classList.add('scroll--hidden')
        })
    );

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modalOrder) {
            modalOrder.classList.remove('modal-order--active');
            document.body.classList.remove('scroll--hidden')
        }
    };

    closeBtn.addEventListener('click', (e) => {
        if (e.target == closeBtn) {
            modalOrder.classList.remove('modal-order--active');
            document.body.classList.remove('scroll--hidden')
        }
    });
};

export default modalOrder;