const booking=document.querySelector('#bookingDialog');
const lightbox=document.querySelector('#lightbox');
const gallery=document.querySelector('#galleryDialog');
const whatsappNumber=(window.SITE_CONFIG?.whatsappNumber||'').replace(/\D/g,'');
const galleryImages=['wedding-stage','wedding-detail','wedding-candid','wedding-portrait','wedding-arrival','wedding-pier','wedding-prep','wedding-house','wedding-cafe','wedding-road','wedding-scooter','hero'];

function openBooking(service,item,selectAll){
  document.querySelectorAll('input[name=service]').forEach(i=>i.checked=selectAll || (service ? i.value===service : false));
  document.querySelector('textarea[name=notes]').value=item ? `Saya berminat dengan ${item}.` : '';
  booking.showModal();
}

document.querySelectorAll('.open-booking').forEach(b=>b.addEventListener('click',()=>openBooking(b.dataset.service,b.dataset.item,b.dataset.all==='true')));
document.querySelectorAll('dialog .dialog-close').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
document.querySelectorAll('.product-image').forEach(b=>b.addEventListener('click',()=>{lightbox.querySelector('img').src=b.dataset.image;lightbox.showModal()}));

document.querySelector('[data-gallery=wedding]').addEventListener('click',()=>{
  const grid=gallery.querySelector('.gallery-grid');
  if(!grid.children.length) grid.innerHTML=galleryImages.map((n,i)=>`<button aria-label="Besarkan foto ${i+1}"><img src="assets/${n}.webp" alt="Koleksi wedding ${i+1}" loading="lazy"></button>`).join('');
  grid.querySelectorAll('button').forEach(b=>b.onclick=()=>{lightbox.querySelector('img').src=b.querySelector('img').src;lightbox.showModal()});
  gallery.showModal();
});

const menu=document.querySelector('.mobile-menu');
document.querySelector('.menu-button').addEventListener('click',()=>{menu.classList.add('open');menu.setAttribute('aria-hidden','false')});
document.querySelector('.menu-close').addEventListener('click',()=>{menu.classList.remove('open');menu.setAttribute('aria-hidden','true')});
menu.querySelectorAll('a,.open-booking').forEach(el=>el.addEventListener('click',()=>menu.classList.remove('open')));

document.querySelector('#bookingForm').addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(e.target);
  const services=data.getAll('service');
  if(!services.length){alert('Sila pilih sekurang-kurangnya satu servis.');return}
  const lines=[
    `Hai Faithnlove Stories! Saya ${data.get('name')}.`,
    `Saya berminat dengan: ${services.join(', ')}.`,
    data.get('date')?`Tarikh: ${data.get('date')}`:'',
    data.get('location')?`Lokasi: ${data.get('location')}`:'',
    data.get('notes')?`Catatan: ${data.get('notes')}`:'',
    'Boleh saya tahu maklumat tempahan dan kekosongan?'
  ].filter(Boolean);
  const whatsappUrl=whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`
    : `https://wa.me/?text=${encodeURIComponent(lines.join('\n'))}`;
  window.open(whatsappUrl,'_blank','noopener');
});

document.querySelector('#year').textContent=new Date().getFullYear();

const revealObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));
