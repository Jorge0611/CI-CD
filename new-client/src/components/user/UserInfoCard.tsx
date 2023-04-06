import { useUser } from "@/hooks/useUser";
import {
  ActionIcon,
  Avatar,
  Card,
  Divider,
  Flex,
  Group,
  LoadingOverlay,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconLuggage,
  IconMapPin,
  IconPencil,
  IconUserCog,
} from "@tabler/icons-react";

export function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export function UserInfoCard() {
  const { data: user, isLoading } = useUser();
  const numFriends = user?.friends.length || 0;

  return (
    <Card withBorder>
      {isLoading && (
        <Card.Section h={{ base: "20vh", md: "40vh" }}>
          <LoadingOverlay visible={true} />
        </Card.Section>
      )}

      {!!user && (
        <>
          <Card.Section py={8} px={20}>
            <Flex direction={"row"} justify={"space-between"} align={"center"}>
              <Flex direction={"row"} align={"center"}>
                <Avatar
                  src={"/api/assets/" + user.picturePath}
                  radius="xl"
                  size={"lg"}
                />

                <Space w="md" />

                <Flex direction={"column"}>
                  <Text fw={700}>{user.firstName + " " + user.lastName}</Text>
                  <Text fz={"xs"}>{user.friends.length} friends</Text>
                </Flex>
              </Flex>

              <ActionIcon>
                <IconUserCog size="1.125rem" />
              </ActionIcon>
            </Flex>
          </Card.Section>

          <Divider my="xs" />

          <Card.Section py={8} px={20}>
            <Stack>
              <Group>
                <IconMapPin size="1.5rem" />
                <Text fz={"xs"}>{user.location}</Text>
              </Group>

              <Group>
                <IconLuggage size="1.5rem" />
                <Text fz={"xs"}>Client</Text>
              </Group>
            </Stack>
          </Card.Section>

          <Divider my="xs" />

          <Card.Section py={8} px={20}>
            <Stack>
              <Flex
                direction={"row"}
                justify={"space-between"}
                align={"center"}
              >
                <Text fz={"xs"}>Who's viewed your profile?</Text>
                <Text fz={"sm"} fw={700}>
                  {getRandomInt(numFriends)}
                </Text>
              </Flex>

              <Flex
                direction={"row"}
                justify={"space-between"}
                align={"center"}
              >
                <Text fz={"xs"}>Impressions of your post</Text>
                <Text fz={"sm"} fw={700}>
                  {getRandomInt(numFriends)}
                </Text>
              </Flex>
            </Stack>
          </Card.Section>

          <Divider my="xs" />

          <Card.Section py={8} px={20}>
            <Text fz={"md"} fw={700}>
              Social Profiles
            </Text>
            <Space h="md" />
            <Stack>
              <Flex
                direction={"row"}
                justify={"space-between"}
                align={"center"}
              >
                <Group>
                  <IconBrandTwitter size="1.5rem" />
                  <Flex direction={"column"}>
                    <Text fz={"xs"} fw={700}>
                      Twitter
                    </Text>
                    <Text fz={"xs"}>
                      @{user.firstName + "_" + user.lastName}
                    </Text>
                  </Flex>
                </Group>

                <ActionIcon>
                  <IconPencil size="1.125rem" />
                </ActionIcon>
              </Flex>

              <Flex
                direction={"row"}
                justify={"space-between"}
                align={"center"}
              >
                <Group>
                  <IconBrandLinkedin size="1.5rem" />
                  <Flex direction={"column"}>
                    <Text fz={"xs"} fw={700}>
                      LinkedIn
                    </Text>
                    <Text fz={"xs"}>
                      @{user.firstName + "_" + user.lastName}
                    </Text>
                  </Flex>
                </Group>

                <ActionIcon>
                  <IconPencil size="1.125rem" />
                </ActionIcon>
              </Flex>
            </Stack>
          </Card.Section>
        </>
      )}
    </Card>
  );
}
