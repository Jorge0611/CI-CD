import {
  Avatar,
  Button,
  Card,
  Divider,
  Flex,
  Group,
  Space,
  Textarea,
} from "@mantine/core";
import {
  IconMicrophone,
  IconPaperclip,
  IconPhoto,
  IconVideo,
} from "@tabler/icons-react";

export function PostEditor() {
  return (
    <Card withBorder>
      <Flex direction={"row"}>
        <Avatar radius="xl" size={"lg"} />
        <Space w="md" />
        <Textarea
          radius={"md"}
          w={"100%"}
          placeholder={"What's on your mind..."}
        />
      </Flex>
      <Divider my={"md"} />
      <Group position={"apart"}>
        <Button leftIcon={<IconPhoto />} variant="subtle" color="dark">
          Image
        </Button>
        <Button leftIcon={<IconVideo />} variant="subtle" color="dark">
          Clip
        </Button>
        <Button leftIcon={<IconPaperclip />} variant="subtle" color="dark">
          Attachment
        </Button>
        <Button leftIcon={<IconMicrophone />} variant="subtle" color="dark">
          Audio
        </Button>
        <Button>Post</Button>
      </Group>
    </Card>
  );
}
