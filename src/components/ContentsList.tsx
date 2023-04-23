import { useContentContext } from "@src/context/ContentContext";
import ContentCard from "./ContentCard";

export default function ContentsList() {
  const { contents, isLoading, error } = useContentContext();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {contents.map((content) => (
        <ContentCard
          externalLinks={content.externalLinks}
          id={content.id}
          image={content.image}
          shortDescription={content.shortDescription}
          subscribeLink={content.subscribeLink}
          timeInfo={content.timeInfo}
          title={content.title}
          key={content.id}
        />
      ))}
    </div>
  );
}
