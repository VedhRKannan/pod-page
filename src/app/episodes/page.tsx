// app/episodes/page.tsx
import Image from "next/image";
import Header from "@/components/Header";

const episodes = [
  {
    title: "Episode 1 — How Hard Could It Be to make people laugh?",
    image: "/ep1.jpeg",
    link: "https://drive.google.com/your-podcast-link-1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae risus vel augue dapibus interdum.",
  },
];

export default function EpisodesPage() {
  return (
    <div className="page">
      <Header />

      <main className="episodes-main">
        <h1 className="episodes-title">Episodes</h1>
        <p className="episodes-subtitle">
          Click on an episode image to listen on Google Drive.
        </p>

        <div className="episodes-grid">
  {episodes.map((ep) => (
    <a
      key={ep.title}
      href={ep.link}
      target="_blank"
      rel="noopener noreferrer"
      className="episode-card"
    >
      <div className="episode-image-wrapper">
        <Image
          src={ep.image}
          alt={ep.title}
          fill
          sizes="350px"
          className="episode-image"
        />
      </div>

      <p className="episode-caption">{ep.title}</p>
      <p className="episode-description">{ep.description}</p>
      </a>
          ))}
        </div>
      </main>
    </div>
  );
}