import { Link, Button, chakra, Heading, Stack, Text } from "@chakra-ui/react";
import useMediaQuery from "../hook/useMediaQuery";
import { FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";
import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";
import ReactGA from "react-ga4";

export default function ContactMe({ contactMe }) {
  const isLargerThan800 = useMediaQuery(800);
  const handleClick = (event) => {
    ReactGA.event({
      category: "click",
      action: event,
    });
  };

  return (
    <Stack alignItems="center" justifyContent="center" w="100%" spacing={10}>
      <SlideUpWhenVisible>
        <Heading fontSize={{ base: "4xl", md: "5xl" }} textAlign="center">
          Get In Touch.
        </Heading>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Text color="textSecondary" fontSize="md" textAlign="center">
          {/* {contactMe[0].fields.title}{" "} */}
          <chakra.span
            color="button1"
            display={{ base: "block", md: "inline" }}
          >
            {" "}
            {contactMe[0].fields.highlightText}
          </chakra.span>
          <br />
          {contactMe[0].fields.description}
        </Text>
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Stack isInline spacing={4}>
          <Link
            href="https://www.linkedin.com/in/jmcnabb1995"
            isExternal
            onClick={() => handleClick("contact_linkedin")}
          >
            <Button
              pos="static"
              color="white"
              leftIcon={<FaLinkedin fill="#3CCF91" />}
              size={isLargerThan800 ? "md" : "sm"}
            >
              LinkedIn
            </Button>
          </Link>
          <Link
            href="mailto:info@joshuamcnabb.ca"
            isExternal
            onClick={() => handleClick("contact_email")}
          >
            <Button
              pos="static"
              color="white"
              transition="0.3s"
              leftIcon={<FaEnvelope fill="#3CCF91" />}
              size={isLargerThan800 ? "md" : "sm"}
            >
              Email
            </Button>
          </Link>
          <Link
            download="Joshua_McNabb_Resume.pdf"
            href="/pdf/Joshua_McNabb_Resume.pdf"
            onClick={() => handleClick("contact_resume")}
          >
            <Button
              pos="static"
              color="white"
              leftIcon={<FaFileAlt fill="#3CCF91" />}
              size={isLargerThan800 ? "md" : "sm"}
            >
              Resume
            </Button>
          </Link>
        </Stack>
      </SlideUpWhenVisible>
    </Stack>
  );
}
