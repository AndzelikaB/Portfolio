
$(document).ready(function () {
    // Get DOM Elements
    const modal1 = document.querySelector('#my-modal1');
    const modal2 = document.querySelector('#my-modal2');
    const modal3 = document.querySelector('#my-modal3');
    const modal4 = document.querySelector('#my-modal4');
    const modal5 = document.querySelector('#my-modal5');


    const modalBtn1 = document.querySelector('#modal-btn1');
    const modalBtn2 = document.querySelector('#modal-btn2');
    const modalBtn3 = document.querySelector('#modal-btn3');
    const modalBtn4 = document.querySelector('#modal-btn4');
    const modalBtn5 = document.querySelector('#modal-btn5');


    const closeBtn1 = document.querySelector('.close1');
    const closeBtn2 = document.querySelector('.close2');
    const closeBtn3 = document.querySelector('.close3');
    const closeBtn4 = document.querySelector('.close4');
    const closeBtn5 = document.querySelector('.close5');


    // Events
    modalBtn1.addEventListener('click', openModal1);
    modalBtn2.addEventListener('click', openModal2);
    modalBtn3.addEventListener('click', openModal3);
    modalBtn4.addEventListener('click', openModal4);
    modalBtn5.addEventListener('click', openModal5);


    closeBtn1.addEventListener('click', closeModal1);
    closeBtn2.addEventListener('click', closeModal2);
    closeBtn3.addEventListener('click', closeModal3);
    closeBtn4.addEventListener('click', closeModal4);
    closeBtn5.addEventListener('click', closeModal5);



    window.addEventListener('click', outsideClick);

    // Open
    function openModal1() {
        modal1.style.display = 'block';
    }
    function openModal2() {
        modal2.style.display = 'block';
    }
    function openModal3() {
        modal3.style.display = 'block';
    }
    function openModal4() {
        modal4.style.display = 'block';
    }
    function openModal5() {
        modal5.style.display = 'block';
    }

    // Close
    function closeModal1() {
        modal1.style.display = 'none';
    }
    function closeModal2() {
        modal2.style.display = 'none';
    }

    function closeModal3() {
        modal3.style.display = 'none';
    }
    function closeModal4() {
        modal4.style.display = 'none';
    }
    function closeModal5() {
        modal5.style.display = 'none';
    }
    // Close If Outside Click
    function outsideClick(e) {
        if (e.target == modal1) {
            modal1.style.display = 'none';
        } else if (e.target == modal2) {
            modal2.style.display = 'none';
        } else if (e.target == modal3) {
            modal3.style.display = 'none';
        } else if (e.target == modal4) {
            modal4.style.display = 'none';
        } else if (e.target == modal5) {
            modal5.style.display = 'none';
        }
    }
});