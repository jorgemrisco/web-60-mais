// components/Footer.tsx
import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import SocialIcons from "./SocialIcons";
import Image from "next/image";
import { useContactContext } from "@src/context/ContactContext";
import { numberToTelephoneString } from "@src/utils/string.utils";

const Footer = () => {
  const theme = useTheme();
  const { contact, isLoading, error } = useContactContext();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main, py: 4 }}>
      <Container maxWidth="md">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box>
            <Typography variant="body2" color="text.secondary" mb={1}>
              {contact.address}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {contact.phoneNumber &&
                numberToTelephoneString(contact.phoneNumber)}
            </Typography>
          </Box>
          <Box>
            <Image
              src="/logos/ICMC-cropped.svg"
              alt="Footer Image 1"
              width={150}
              height={150}
            />
            <Image
              src="/logos/PRCEU-cropped.svg"
              alt="Footer Image 2"
              width={150}
              height={150}
            />
          </Box>
          <Box mt={{ xs: 2, sm: 0 }}>
            <SocialIcons
              facebookUrl={contact.facebook}
              instagramUrl={contact.instagram}
              youtubeUrl={contact.youtube}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
