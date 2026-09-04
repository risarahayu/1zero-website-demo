import { useEffect } from "react";

const bookingUrl =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3gWtjZcsb5BZb78RjU3eDJJcflGsC7oDWdx__RBcaDFHzZ1ivl2IZrigY4R9-r63sLfDdRjvmQ";

export default function BookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-raisin-black px-4 py-12 text-sea-salt sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h1 className="font-sans text-4xl font-extrabold sm:text-6xl">Book a Call</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-sea-salt/70 sm:text-lg">
            Choose a time that works for you and let&apos;s talk about your next project.
          </p>
        </div>

        <iframe
          src={bookingUrl}
          title="Book a call with 1zero"
          className="h-[760px] w-full rounded-2xl border border-sea-salt/20 bg-sea-salt"
          loading="lazy"
        />
      </div>
    </section>
  );
}