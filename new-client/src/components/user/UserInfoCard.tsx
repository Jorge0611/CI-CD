import {
  ActionIcon,
  Avatar,
  Card,
  Divider,
  Flex,
  Group,
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

export function UserInfoCard() {
  return (
    <Card withBorder>
      <Card.Section py={8} px={20}>
        <Flex direction={"row"} justify={"space-between"} align={"center"}>
          <Flex direction={"row"} align={"center"}>
            <Avatar radius="xl" size={"lg"} />

            <Space w="md" />

            <Flex direction={"column"}>
              <Text fw={700}>John Doe</Text>
              <Text fz={"xs"}># friends</Text>
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
            <Text fz={"xs"}>Location</Text>
          </Group>

          <Group>
            <IconLuggage size="1.5rem" />
            <Text fz={"xs"}>Luggage</Text>
          </Group>
        </Stack>
      </Card.Section>

      <Divider my="xs" />

      <Card.Section py={8} px={20}>
        <Stack>
          <Flex direction={"row"} justify={"space-between"} align={"center"}>
            <Text fz={"xs"}>Who's viewed your profile?</Text>
            <Text fz={"sm"} fw={700}>
              2
            </Text>
          </Flex>

          <Flex direction={"row"} justify={"space-between"} align={"center"}>
            <Text fz={"xs"}>Impressions of your post</Text>
            <Text fz={"sm"} fw={700}>
              16
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
          <Flex direction={"row"} justify={"space-between"} align={"center"}>
            <Group>
              <IconBrandTwitter size="1.5rem" />
              <Flex direction={"column"}>
                <Text fz={"xs"} fw={700}>
                  Twitter
                </Text>
                <Text fz={"xs"}>@john_doe</Text>
              </Flex>
            </Group>

            <ActionIcon>
              <IconPencil size="1.125rem" />
            </ActionIcon>
          </Flex>

          <Flex direction={"row"} justify={"space-between"} align={"center"}>
            <Group>
              <IconBrandLinkedin size="1.5rem" />
              <Flex direction={"column"}>
                <Text fz={"xs"} fw={700}>
                  LinkedIn
                </Text>
                <Text fz={"xs"}>@john_doe</Text>
              </Flex>
            </Group>

            <ActionIcon>
              <IconPencil size="1.125rem" />
            </ActionIcon>
          </Flex>
        </Stack>
      </Card.Section>
    </Card>
  );
}
