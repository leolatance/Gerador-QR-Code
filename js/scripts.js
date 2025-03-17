const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');

const qrCodeInput = document.querySelector('#qr-form input');

const qrCodeImage = document.querySelector('#qr-code img');

// Eventos

// Gerar QR Code

function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = 'Gerando código...';

    qrCodeImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;


    qrCodeImage.addEventListener('load', () => {
    container.classList.add('active');
    qrCodeBtn.innerText = 'Código gerado!';

        });
    }

qrCodeBtn.addEventListener('click', () => {
  generateQrCode();
});

  qrCodeInput.addEventListener('keydown', () => {
    if (e.code === 'Enter') {
        generateQrCode();
    }
});


// Limpar Area do QR Code
qrCodeInput.addEventListener("keyup", () => {

    if(!qrCodeInput.value) {
        container.classList.remove('active');
        qrCodeBtn.innerText = "Gerar QR Code";

    }


});