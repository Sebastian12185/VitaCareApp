import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import client1 from '../assets/client1.webp';
import client2 from '../assets/client2.webp';
import client3 from '../assets/client3.webp';
import 'swiper/css';
import 'swiper/css/pagination';

interface ReviewItem {
  author: string;
  age: string;
  text: string;
  webp: string;
}

export function Reviews() {
  const reviews: ReviewItem[] = [
    {
      author: 'Marlena Tokarska',
      age: '34 lata',
      text: 'Bardzo profesjonalna obsługa i szybki termin wizyty. Polecam!',
      webp: client1,
    },
    {
      author: 'Tomasz Nowak',
      age: '41 lat',
      text: 'Nowoczesny sprzęt i świetni specjaliści. Jestem bardzo zadowolony z wizyty.',
      webp: client2,
    },
    {
      author: 'Łukasz Kowalczuk',
      age: '29 lat',
      text: 'Bardzo miła obsługa i szybka rejestracja. Polecam klinikę VitaCare.',
      webp: client3,
    },
  ];

  return (
    <section id="reviews-section" className="scroll-mt-20 px-6 py-16 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-3">
          Opinie naszych pacjentów
        </h2>
        <p className="text-slate-500">
          Sprawdź, jak oceniane są nasze usługi i zespół medyczny.
        </p>
      </div>
      <div className="max-w-sm mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {reviews.map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-6 shadow-sm min-h-[320px] mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center text-3xl">
                    <img src={review.webp} alt={review.author} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">
                      {review.author}
                    </h3>
                    <p className="text-slate-400">
                      {review.age}
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed mb-10">
                  "{review.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}