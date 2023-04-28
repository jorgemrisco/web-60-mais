import { useContentContext } from "@src/context/ContentContext";
import ContentCard from "./ContentCard";
import { Divider } from "@mui/material";
import styles from "@styles/Contents.module.css";
import LoadingPost from "./Loading";

export default function ContentsList() {
  const { contents, isLoading, error } = useContentContext();
  if (isLoading) {
    return (
      <>
        <LoadingPost />
        <LoadingPost />
        <LoadingPost />
      </>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="content" className={styles.main}>
      <h1>Conteúdos</h1>
      <Divider />
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
