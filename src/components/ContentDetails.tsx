import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import style from "@styles/ContentCard.module.css";
import Link from "next/link";
import { ContentDto } from "@src/pages/api/get-contents";

export default function ContentDetail(props: ContentDto) {
  return (
    <div className={style.main}>
      <Card
        sx={{ minWidth: 275 }}
        style={{ backgroundColor: "rgba(196,196,196,.1)" }}
      >
        <CardContent>
          <div className={style.title}>
            <Typography variant="h5" component="div">
              {props.title}
            </Typography>
            <Divider />
          </div>
          <br />

          <div className={style.description}>
            <Typography variant="body2">{props.shortDescription}</Typography>
          </div>
          <Divider />
          <br />
          <Typography variant="body2">
            <strong>Dias da semana:</strong> segunda, quarta.
            <br />
            <strong>Horas por aula:</strong> 60min.
            <br />
            <strong>Início:</strong> 16/06/2022
            <br />
            <strong>Fim:</strong> 25/12/2022
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="inherit"
            variant="contained"
            href={props.subscribeLink}
          >
            Realizar Inscrição
          </Button>
        </CardActions>
      </Card>
      <br />
      <Card>
        <CardContent>
          <div className={style.title}>
            <Typography variant="h5" component="div">
              Links Externos
            </Typography>
            <Divider />
          </div>
          <Divider />
          <br />
          <div className={style.title} />
          <Typography variant="body2">
            <ul>
              {props.externalLinks.map((item, key) => {
                return (
                  <li key={key}>
                    <Link target="_blank" href={item.link} passHref key={key}>
                      <a target="_blank">{item.title}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
