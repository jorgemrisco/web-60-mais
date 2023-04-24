// components/SocialIcons.tsx
import { IconButton } from "@mui/material";
import { Facebook, Instagram, YouTube } from "@mui/icons-material";

interface SocialIconsProps {
  facebookUrl?: string;
  instagramUrl?: string;
  youtubeUrl?: string;
}

const SocialIcons: React.FC<SocialIconsProps> = ({
  facebookUrl,
  instagramUrl,
  youtubeUrl,
}) => {
  return (
    <>
      {facebookUrl && (
        <IconButton
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </IconButton>
      )}
      {instagramUrl && (
        <IconButton
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </IconButton>
      )}
      {youtubeUrl && (
        <IconButton href={youtubeUrl} target="_blank" rel="noopener noreferrer">
          <YouTube />
        </IconButton>
      )}
    </>
  );
};

export default SocialIcons;
