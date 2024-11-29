import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/react";
import ReactGA from "react-ga4";
import SlideUpWhenVisible from "../hook/SlideUpWhenVisible";
import Cards from "./Card";

export default function FeaturedProjects({ projects }) {
  const isLargerThan800 = useMediaQuery(800);

  const handleClick = (event) => {
    ReactGA.event({
      category: "click",
      action: event,
    });
  };

  return (
    <>
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ base: 8, md: 16 }}>
          <SlideUpWhenVisible threshold={0.1}>
            <Stack spacing={1}>
              <Stack
                isInline
                alignItems="center"
                justifyContent="space-between"
              >
                <Heading
                  color="displayColor"
                  fontFamily="ubuntu"
                  fontWeight="500"
                  fontSize={{ base: "xl", md: "2xl" }}
                >
                  All Creative Works.
                </Heading>
                {/* <NextLink passHref href="/projects">
                  <Link
                    onClick={() => handleClick("featuredprojects_explore more")}
                  >
                    <Text
                      _hover={{ color: "button2" }}
                      color="button1"
                      display={{ base: "block", md: "none" }}
                      fontSize={{ base: "sm", md: "xl" }}
                    >
                      {" "}
                      Explore more &rarr;
                    </Text>
                  </Link>
                </NextLink> */}
              </Stack>
              <Text color="textSecondary" fontSize={{ base: "md", md: "xl" }}>
                Here's some of my projects that I have worked on.
              </Text>
              {/* <NextLink href="/projects">
                <Link
                  onClick={() => handleClick("featuredprojects_explore more")}
                >
                  <Text
                    display={{ base: "none", md: "block" }}
                    fontSize={{ base: "md", md: "xl" }}
                  >
                    Explore more &rarr;
                  </Text>
                </Link>
              </NextLink> */}
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Box>
              <Cards
                slug={projects[0].fields.slug}
                desc={projects[0].fields.description}
                imageURL={`https:${projects[0].fields.image.fields.file.url}`}
                tag={projects[0].fields.tags}
                title={projects[0].fields.title}
              />
            </Box>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Box mt={{ md: "-75%" }}>
              <Cards
                slug={projects[1].fields.slug}
                desc={projects[1].fields.description}
                imageURL={`https:${projects[1].fields.image.fields.file.url}`}
                tag={projects[1].fields.tags}
                title={projects[1].fields.title}
              />
            </Box>
          </SlideUpWhenVisible>
          <Box
            visibility={isLargerThan800 ? "visible" : "hidden"}
            display={isLargerThan800 ? "none" : "block"}
          >
            <SlideUpWhenVisible threshold={0.8}>
              <Cards
                slug={projects[1].fields.slug}
                desc={projects[1].fields.description}
                imageURL={projects[1].fields.imageUrl}
                tag={projects[1].fields.tags}
                title={projects[1].fields.title}
              />
            </SlideUpWhenVisible>
          </Box>
        </SimpleGrid>
      </Stack>
    </>
  );
}
