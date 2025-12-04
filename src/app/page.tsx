// app/page.tsx
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="page">
      <Header />

      {/* MAIN CONTENT */}
      <main className="main">
        <section id="about" className="content">
          <p>
            “How hard could it be?” is a student podcast produced by the Society
            for Natural Sciences at UCL. We choose everyday things and ask a
            seemingly simple but thought-provoking question: how hard could it
            be to do that?
          </p>

          <p>
            In each episode, Charlie and Vedh work with scientists, engineers,
            and experts from different disciplines to uncover the hidden
            scientific principles behind familiar experiences – from making
            people laugh, to designing clothes, to watching football matches as
            a blind fan, to making up convincing lies. Along the way, we explore
            the intersection of different scientific fields and how real
            scientific research is closely related to everyday life.
          </p>

          <p>
            This podcast is produced by students and is aimed at students. It is
            light-hearted but never shallow; we go beyond the basic knowledge of
            textbooks while keeping the content clear and easy to understand –
            suitable for anyone in STEM-related fields. Whether you are a school
            pupil, a university student, or just someone who loves science,
            “How hard could it be?” offers a glimpse into the wonderful world of
            natural sciences – and might even spark ideas for what you’d like to
            study next.
          </p>
        </section>

        <aside className="doodles">
          <div className="doodle-item">
            <Image
              src="/doodle-flask.jpeg"
              alt="Flask doodle"
              width={160}
              height={160}
            />
          </div>
          <div className="doodle-item">
            <Image
              src="/doodle-light.jpeg"
              alt="Test tubes doodle"
              width={160}
              height={160}
            />
          </div>
          <div className="doodle-item">
            <Image
              src="/doodle-planet.jpeg"
              alt="Microscope doodle"
              width={160}
              height={160}
            />
          </div>
          <div className="doodle-item">
            <Image
              src="/doodle-plant.jpeg"
              alt="Cell doodle"
              width={160}
              height={160}
            />
          </div>
        </aside>
      </main>

      {/* CONTACT FOOTER (includes #contact anchor inside the component) */}
      <Footer />
    </div>
  );
}
