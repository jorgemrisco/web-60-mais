import Head from "next/head";
import styles from "../styles/FakeNewsPage.module.css";
import Image from "next/image";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Tooltip,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

export default function FakeNews() {
  return (
    <div>
      <Head>
        <title>Fake News</title>
        <meta name="description" content="asdf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1> O que você precisa saber sobre fake news?</h1>
        <h2> Guia de sobrevivência</h2>
        <div className={styles.accordionContainer}>
          <CustomAccordion
            title="Boas Práticas"
            textInMarkdown={`
Vivemos em uma sociedade conectada e precisamos ter boas práticas de cidadania digital. Melhorar a qualidade do conteúdo nas mídias sociais e o combate à desinformação, depende de todos nós.
Algumas dicas para boa convivência:

1. Não compartilhe conteúdo com discurso de ódio;
2. Seja tolerante, respeite opiniões diferentes da sua;
3. Na dúvida, não compartilhe!`}
          />

          <CustomAccordion
            title="Para ficar de olho"
            textInMarkdown={`
1. Fique atento à fonte da notícia;
2. Leia todo o conteúdo antes de compartilhar;
3. Verifique mais de uma fonte;
4. Confira se o conteúdo não está descontextualizado;`}
          />

          <CustomAccordion
            title="Teoria de conspiração"
            textInMarkdown={`
Teorias e consipiração costumam misturar ficção e fatos reais. Fique atento, fatos conspiratórios causam desinformação!
        `}
          />
          <CustomAccordion
            title="Sou vítima, e agora?"
            textInMarkdown={`
1. Registre um boletim de ocorrência em uma delegacia (alguns estados possuem delegacia de crimes cibernéticos);
2. Pedir a remoção do conteúdo da plataforma pela própria rede social ou via judicial;
3. Faça uma Ata Notarial do conteúdo - É realizada em cartório;

Não tenha medo, mantenha-se calmo(a).
Você pode buscar ajuda na Defensoria Púbilca ou com um advogado.
        `}
          />

          <CustomAccordion
            title="Fake News é crime?"
            textInMarkdown={`
Fake News não é tipificado como crime, porém isso não significa que não pode ser responsabilizado:
- Na esfera cível;
- Ser responsabilizado por dano moral e material caso publique, compartilhe conteúdo falso ou enganoso.

**Na esfera criminal:**

- Código Penal - Art. 138 - Caluniar alguém, imputando-lhe falsamente fato definido como crime:
    - Pena: Detenção, de seis meses a dois anos, e multa.

- Código penal - Art. 139 - Difamar alguém, imputando-lhe fato ofensivo à sua reputação:
    - Pena: Detenção, de três meses a um ano, e multa.
    
- Código penal - Art. 140 - Injuriar alguém, ofendendo-lhe a dignidade ou o decoro:
    - Pena: Detenção, de um a seis meses, ou multa.
`}
          />
        </div>
        <div className={styles.imageContainer}>
          <div
            style={{
              width: "100%",
              alignContent: "center",
              display: "flex",
              margin: "8px",
              flexDirection: "column",
              alignSelf: "center",
              alignItems: "center",
              alignmentBaseline: "central",
            }}
          >
            <Button variant="contained" href="/#content" target="_blank">
              {"Verificar a disponibilidade do curso sobre Fake News"}
            </Button>
          </div>
          <Image
            src="/fake-news1.jpg"
            alt="Fake News Image"
            layout="responsive"
            width={1200}
            height={800}
          />
        </div>
      </main>
    </div>
  );
}

const CustomAccordion = (props: { title: string; textInMarkdown: string }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAccordion = () => {
    setExpanded((prev: boolean) => !prev);
  };

  return (
    <Tooltip title="Clique para expandir e ver os conteúdos">
      <Accordion expanded={expanded} onChange={toggleAccordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon onClick={toggleAccordion} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactMarkdown>{props.textInMarkdown}</ReactMarkdown>
        </AccordionDetails>
      </Accordion>
    </Tooltip>
  );
};
