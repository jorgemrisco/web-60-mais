import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia, Divider } from "@mui/material";
import style from "@styles/ContentCard.module.css";
import { ContentDto } from "@src/pages/api/get-contents";
import { secondsToDate } from "@src/utils/date.utils";

export default function ContentCard(props: ContentDto) {
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
          <Divider />
          <br />
          <div className={style.asdf} />
          <CardMedia
            component="img"
            height="300"
            image={props.image.url}
            alt={props.image.alt}
          />

          <div className={style.description}>
            <Typography variant="body2">{props.shortDescription}</Typography>
          </div>
          <Divider />
          <br />
          <Typography variant="body2">
            <strong>Dias da semana:</strong>{" "}
            {props.timeInfo.daysOfTheWeek.map((day, index) => {
              //if last index end with '.', if not end with ','
              if (index === props.timeInfo.daysOfTheWeek.length - 1) {
                return day + ".";
              } else {
                return day + ", ";
              }
            })}
            <br />
            <strong>Duração da aula:</strong>{" "}
            {props.timeInfo.timePerClassInMinutes} minutos.
            <br />
            <strong>Início:</strong>{" "}
            {secondsToDate(
              props.timeInfo.startDate.seconds
            ).toLocaleDateString()}
            <br />
            <strong>Fim:</strong>{" "}
            {secondsToDate(props.timeInfo.endDate.seconds).toLocaleDateString()}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            href={props.id}
            size="small"
            color="inherit"
            variant="contained"
          >
            Acessar Conteúdo
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
