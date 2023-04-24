import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "@styles/Contact.module.css";
import { CardMedia, Divider, Link } from "@mui/material";
import { Email, WhatsApp } from "@mui/icons-material";
import { useContactContext } from "@src/context/ContactContext";
import { numberToTelephoneString } from "@src/utils/string.utils";
import { ContactDto } from "./api/get-contact";
import SocialIcons from "@src/components/SocialIcons";

export default function Contato() {
  const { contact, isLoading, error } = useContactContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.main}>
      <main className={styles.card}>
        <ContentCard {...contact} />
      </main>
    </div>
  );
}

function ContentCard(contact: ContactDto) {
  return (
    <Card sx={{ minWidth: "90vw" }}>
      <CardContent>
        <h1>Contato</h1>
        <Typography sx={{ mb: 0.5 }} color="text.secondary">
          Entre em contato por nossos canais oficiais de comunicação
        </Typography>
        <Divider />
        {contact.phoneNumber && (
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
                {numberToTelephoneString(contact.phoneNumber)}
              </p>
            </Link>
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            color: "black",
          }}
        >
          <Email style={{ color: "black" }} />
          <Link href={`mailto:\${contact.email}`} target="_blank">
            <p
              style={{
                paddingLeft: "10px",
                color: "blue",
              }}
            >
              {contact.email}
            </p>
          </Link>
        </div>
        <SocialIcons
          facebookUrl={contact.facebook}
          instagramUrl={contact.instagram}
          youtubeUrl={contact.youtube}
        />
        <CardMedia component="img" height="600" image="/contact.jpg" />
      </CardContent>
    </Card>
  );
}
