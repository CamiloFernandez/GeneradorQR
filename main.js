const container = document.getElementById('containerQR')
const form = document.getElementById('form')
const link = document.getElementById('input')

const QR = new QRCode(container)

form.addEventListener('submit', (e) => {
  e.preventDefault()
  QR.makeCode(link.value)
})

QR.makeCode('www.linkedin.com/in/camilo-fernandez-dev')

