
//   التحقق من صحة البيانات    

document.getElementById('booking-form').addEventListener('submit',function(e){



     e.preventDefault();

const name = document.getElementById('name').value.trim();
const phone = document.getElementById('phone').value.trim();
const service = document.getElementById('service').value;
const date = document.getElementById('date').value;
if(!name || !phone || !service || !date ){
  
    alert('  الرجاء ملئ جميع الحقول المطلوبة قبل تأكيد الحجز!  ');
    return;
}


//      رسالة موجهة

const message = `     مرحباً،أود حجز موعد: 
\n-  الاسم:  ${name}
\n-  رقم الهاتف:  ${phone}
\n-   الخدمة:   ${service}
\n-   التاريخ:  ${date}
`;

//    تعريف الرقم والرلبط 

const encodeMessage = encodeURIComponent(message);
const whatsappNum ='963980920526'


const whatsappURL = `https://wa.me/${whatsappNum}?text=${encodeMessage}`;
window.open(whatsappURL,'_blank');
})