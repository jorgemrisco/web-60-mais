import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "@styles/Contact.module.css";
import { CardMedia, Divider, Link } from "@mui/material";
import { Email, WhatsApp } from "@mui/icons-material";

export default function Contato() {
  return (
    <div className={styles.main}>
      <main className={styles.card}>
        <ContentCard />
      </main>
    </div>
  );
}

function ContentCard() {
  return (
    <Card sx={{ minWidth: "90vw" }}>
      <CardContent>
        <h1>Contato</h1>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          Entre em contato por nossos canais oficiais de comunicação
        </Typography>
        <Divider />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "black",
          }}
        >
          <WhatsApp style={{ color: "black" }} />
          <Link href={"/"} target="_blank">
            <p
              style={{
                paddingLeft: "10px",
                color: "blue",
              }}
            >
              +55(16)0000-0000
            </p>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "black",
          }}
        >
          <Email style={{ color: "black" }} />
          <Link href={"mailto:teste@gmail.com"} target="_blank">
            <p
              style={{
                paddingLeft: "10px",
                color: "blue",
              }}
            >
              teste@gmail.com
            </p>
          </Link>
        </div>
        <CardMedia component="img" height="600" image="/contact.jpg" />
      </CardContent>
    </Card>
  );
}
