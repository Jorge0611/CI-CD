import { User } from "@/api/auth";
import { getRandomInt } from "@/components/user/UserInfoCard";
import { Avatar, Card, Flex, Group, Space, Stack, Text } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

export function ProfileInfoCard(props: User) {
  const numFriends = props.friends?.length || 0;

  return (
    <Card withBorder>
      <Flex direction={"row"} justify={"space-between"} align={"center"}>
        <Flex direction={"row"} align={"center"}>
          <Avatar
            src={"/api/assets/" + props.picturePath}
            radius="xl"
            size={"lg"}
          />
          <Space w="md" />
          <Flex direction={"column"}>
            <Text fw={700}>{props.firstName + " " + props.lastName}</Text>
            <Text fz={"xs"}>{numFriends} friends</Text>
          </Flex>
        </Flex>

        <Stack align={"end"}>
          <Group>
            <Text fz={"xs"}>Followers</Text>
            <Text fz={"sm"} fw={700}>
              {getRandomInt(numFriends * 100)}
            </Text>
          </Group>
          <Group>
            <Text fz={"xs"}>Impressions</Text>
            <Text fz={"sm"} fw={700}>
              {getRandomInt(numFriends * 100)}
            </Text>
          </Group>
        </Stack>
      </Flex>

      <Space h="md" />

      <Group spacing={"lg"}>
        <Group spacing={"xs"}>
          <IconBrandTwitter size="1.5rem" />
          <Text fz={"xs"}>Twitter</Text>
        </Group>

        <Group spacing={"xs"}>
          <IconBrandLinkedin size="1.5rem" />
          <Text fz={"xs"}>LinkedIn</Text>
        </Group>

        <Group spacing={"xs"}>
          <IconBrandInstagram size="1.5rem" />
          <Text fz={"xs"}>Instagram</Text>
        </Group>
      </Group>
    </Card>
  );
}
