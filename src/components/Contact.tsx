import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Imię musi zawierać minimum 2 znaki'),
  contact: z.string().min(5, 'Podaj prawidłowy numer telefonu lub email'),
  message: z.string().min(10, 'Wiadomość musi mieć przynajmniej 10 znaków'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Zgłoszenie wysłane pomyślnie!');
    reset();
  };

  return (
    <section
      id="contact-section"
      className="px-6 py-16 bg-white border-t border-slate-100"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-brand-dark mb-3">
            Skontaktuj się z nami
          </h2>
          <p className="text-slate-500">
            Umów wizytę lub zadaj pytanie naszym specjalistom
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <iframe
                title="Lokalizacja VitaCare"
                src="https://maps.google.com/maps?q=ul.%20Zdrowa%2015,%20Gda%C5%A4sk&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="320"
                className="border-0"
                loading="lazy"
              />
            </div>
            <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200/60 shadow-sm">
              <h3 className="text-xl font-bold text-brand-dark mb-4">
                Dane kontaktowe
              </h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <p className="font-semibold text-brand-dark">Adres</p>
                  <p>ul. Zdrowa 15, 80-001 Gdańsk</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">Telefon</p>
                  <p>+48 500 600 700</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">E-mail</p>
                  <p>kontakt@vitacare.pl</p>
                </div>
                <div>
                  <p className="font-semibold text-brand-dark">
                    Godziny otwarcia
                  </p>
                  <p>Pon - Pt: 8:00 - 20:00</p>
                  <p>Sob: 8:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-900/5">
            <h3 className="text-2xl font-black text-brand-dark mb-2">
              Umów wizytę
            </h3>
            <p className="text-slate-500 mb-6">
              Wypełnij formularz, a skontaktujemy się z Tobą
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
              noValidate
            >
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  {...register('name')}
                  placeholder="Jan Kowalski"
                  className="w-full p-4 border border-slate-200 bg-white rounded-xl focus:outline-none focus:border-brand-blue"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Telefon lub e-mail
                </label>
                <input
                  type="text"
                  {...register('contact')}
                  placeholder="+48 500 600 700"
                  className="w-full p-4 border border-slate-200 bg-white rounded-xl focus:outline-none focus:border-brand-blue"
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.contact.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Wiadomość
                </label>
                <textarea
                  rows={5}
                  {...register('message')}
                  placeholder="Opisz swoją sprawę ..."
                  className="w-full p-4 border border-slate-200 bg-white rounded-xl resize-none focus:outline-none focus:border-brand-blue"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-brand-blue hover:bg-brand-dark text-white font-bold py-4 rounded-xl transition-all cursor-pointer"
              >
                {isSubmitting ? 'Wysyłanie...' : 'Umów wizytę'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}