import { DiAndroid, DiTerminal, DiJava, DiHtml5 } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
  {
    slug: "android",
    Component: DiAndroid,
    title: "Android",
    Description: () => <>Applications Android, ROMs et Kernels</>,
  },
  {
    slug: "flutter",
    Component: RiFlutterFill,
    title: "Flutter",
    Description: () => <>Développement d'applications multiplateformes</>,
  },
  {
    slug: "kotlin",
    Component: TbBrandKotlin,
    title: "Kotlin",
    Description: () => <>Applications Android et fonc</>,
  },
  {
    slug: "dart",
    Component: SiDart,
    title: "Dart",
    Description: () => <>Applications Flutter uniquement</>,
  },
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Applications Android et fonctions Lambda</>,
  },

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Pages web statiques et projets de portfolio</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Mise en forme de mes pages web</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Stockage des données clients et utilisateurs</>,
  },
  {
    slug: "aws",
    Component: SiAmazonaws,
    title: "AWS Lambda",
    Description: () => <>Fonctions Lambda pour la création d'APIs</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Scripts d'automatisation et de compilation</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Authentification, base de données et analyses</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Gestion du code et contributions open source</>,
  },
];

