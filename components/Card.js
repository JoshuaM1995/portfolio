import {
  Center,
  Divider,
  Link,
  ScaleFade,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import ReactGA from "react-ga4";
import {
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaGithub,
  FaJs,
  FaLaravel,
  FaPepperHot,
  FaPython,
  FaReact,
  FaSass,
  FaNodeJs,
} from "react-icons/fa";
import { SiChakraui, SiNextdotjs } from "react-icons/si";
import useMediaQuery from "../hook/useMediaQuery";
import Image from "next/image";

export default function Cards({ imageURL, title, slug, desc, tag }) {
  const isLargerThan800 = useMediaQuery(800);

  const getTag = (tag) => {
    let values = ["gray", FaCode];

    switch (tag) {
      case "React":
        values = ["blue", FaReact];
        break;
      case "Node.JS":
        values = ["green", FaNodeJs];
        break;
      case "Python":
        values = ["orange", FaPython];
        break;
      case "Javascript":
        values = ["yellow", FaJs];
        break;
      case "Sass":
        values = ["pink", FaSass];
        break;
      case "Flask":
        values = ["green", FaPepperHot];
        break;
      case "Laravel":
        values = ["red", FaLaravel];
        break;
      case "Bootstrap":
        values = ["purple", FaBootstrap];
        break;
      case "SQL":
        values = ["blue", FaDatabase];
        break;
      case "Next.js":
        values = ["gray", SiNextdotjs];
        break;
      case "Chakra UI":
        values = ["teal", SiChakraui];
        break;
      default:
        values = ["gray", FaCode];
    }

    return values;
  };

  const Tags = tag.map((item) => (
    <Tag
      key={item}
      colorScheme={getTag(item)[0]}
      size={isLargerThan800 ? "md" : "sm"}
    >
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ));
  const handleClick = (event) => {
    ReactGA.event({
      category: "click",
      action: event,
    });

    if (slug) {
      router.push(`/projects/${slug}`);
    }
  };

  return (
    <Stack
      minH="320px"
      bg="secondary"
      border="1px"
      borderColor={{ base: "#333", md: "borderColor" }}
      borderRadius="10px"
    >
      <Link href={slug ? `/projects/${slug}` : undefined}>
        <ScaleFade transition={{ duration: 1 }} in={true}>
          <Center w="auto">
            <Image
              width={800}
              height={400}
              sizes="100vw"
              minH="270px"
              borderRadius="10px 10px 0px 0px"
              transition="0.3s"
              objectFit="cover"
              style={{
                borderRadius: "10px 10px 0px 0px",
                objectFit: "cover",
                width: "100%",
                height: "auto",
              }}
              alt={title}
              src={imageURL}
            />
          </Center>
          <Stack px={4} py={2}>
            <Stack alignItems="center" justifyContent="space-between" isInline>
              <Text color="displayColor" fontFamily="ubuntu" fontSize="2xl">
                {title}
              </Text>
              <Stack
                alignItems="center"
                justifyContent="flex-end"
                isInline
                spacing={4}
              >
                <Link
                  color="white"
                  href={slug ? `/projects/${slug}` : undefined}
                  onClick={() =>
                    handleClick(`project_${title.replace("@", "-at")}`)
                  }
                >
                  <FaExternalLinkAlt aria-label="project link" size={20} />
                </Link>
              </Stack>
            </Stack>
            <Stack isInline>{Tags}</Stack>
            <Divider />
            <Text color="textSecondary" fontSize={["sm", "md"]}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Stack>
  );
}
