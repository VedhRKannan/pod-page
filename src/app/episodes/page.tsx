// app/episodes/page.tsx
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const episodes = [
    {
      title: "Episode 1 — How Hard Could It Be to Make People Laugh?",
      image: "/ep1.jpeg",
      audio: "/audio/ep1.mp3",
      description:
        "In this episode, Charlie and Vedh sit down with Professor Sophie Scott to explore the science behind laughter: how our brains respond to humour, why laughter spreads so quickly, and what makes it so difficult to produce on cue. They look at how researchers study laughter in the lab, what different kinds of laughter can reveal about our relationships, and why some environments make us crack up more easily than others. Tune in to learn why laughter is so central to human connection and how tricky it can be to create it on purpose.",
  
      resources: {
        externalLink: "https://www.ucl.ac.uk/brain-sciences/icn/research/research-groups/speech-communication"
      },
      references: [
        `Yim, J (2016). "Therapeutic Benefits of Laughter in Mental Health: A Theoretical Review." Tohoku J Exp Med. Jul;239(3):243–9. doi: 10.1620/tjem.239.243.`,
      ],
    },
  ];
  

export default function EpisodesPage() {
  return (
    <div className="page">
      <Header />

      <main className="episodes-main">
        <h1 className="episodes-title">Episodes</h1>

        <div className="episodes-grid">
  {episodes.map((ep) => (
    <div key={ep.title} className="episode-card">

      {/* EPISODE IMAGE (not a link anymore) */}
<div className="episode-image-wrapper">
  <Image
    src={ep.image}
    alt={ep.title}
    width={300}
    height={300} 
    className="episode-image"
  />
</div>

{/* EMBEDDED AUDIO PLAYER — streams directly, no download */}
<audio
  controls
  preload="none"
  className="episode-audio"
  src={ep.audio}   // see below — ep.audio instead of ep.link
>
  Your browser does not support the audio element.
</audio>


      <p className="episode-caption">{ep.title}</p>
      <p className="episode-description">{ep.description}</p>

      {/* RESOURCES SECTION */}
      <div className="episode-resources">
        <h3>Resources</h3>

        <div className="resources-grid">
          {/* External Link */}
          {ep.resources?.externalLink && (
            <a
              href={ep.resources.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              UCL Speech Communication Research Group →
            </a>
          )}

        </div>
        {/* REFERENCES SECTION */}
{ep.references && ep.references.length > 0 && (
  <div className="episode-references">
    <h3>References</h3>
    <ul>
      {ep.references.map((ref, i) => (
        <li key={i}>{ref}</li>
      ))}
    </ul>
  </div>
)}
      </div>
    </div>
  ))}
</div>

        <section className="credits">
  <h2 className="credits-title">Credits</h2>

  <div className="credits-list">
    <p><strong>Hosts:</strong> Charlie & Vedh</p>
    <p><strong>Editing:</strong> Vedh & Alenka</p>
    <p><strong>Social Media:</strong> Jingyi</p>
  </div>
</section>



      </main>
      <Footer />
    </div>
  );


}