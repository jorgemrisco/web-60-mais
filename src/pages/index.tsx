import Head from "next/head";
import Image from "next/image";
import { Button, Divider, Stack, Typography, colors } from "@mui/material";
import styles from "@styles/index.module.css";
import Link from "next/link";
import ContentsList from "@src/components/ContentsList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Projeto 60 mais</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroContent}>
            <Link href="#content" passHref scroll={false}>
              <Button
                style={{ scrollBehavior: "smooth" }}
                LinkComponent={"a"}
                variant={"contained"}
                color={"primary"}
              >
                Acessar conteúdos
              </Button>
            </Link>
            <Divider
              sx={{
                my: 2,
                width: "100%",
                borderColor: "white",
              }}
            />
          </div>

          <Image
            src={"/hero-image.jpg"}
            alt="hero image example"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: "-1",
            }}
          />
        </div>

        <ContentsList />
      </main>
    </>
  );
}
