import {
  Avatar,
  Button,
  Card,
  Divider,
  FileButton,
  Flex,
  Group,
  Space,
  Text,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  IconMicrophone,
  IconPaperclip,
  IconPhoto,
  IconVideo,
} from "@tabler/icons-react";

export interface FormValues {
  description: string;
  picture: File | null;
}

interface PostEditorProps {
  onSubmit: (values: FormValues) => void;
}

export function PostEditor(props: PostEditorProps) {
  const form = useForm<FormValues>({
    initialValues: {
      description: "",
      picture: null,
    },
    validate: {
      description: (val) =>
        val.length < 0
          ? "Description should include at least 1 characters"
          : null,
    },
  });

  return (
    <Card withBorder>
      <form onSubmit={form.onSubmit((values) => props.onSubmit(values))}>
        <Flex direction={"row"}>
          <Avatar radius="xl" size={"lg"} />
          <Space w="md" />
          <Textarea
            radius={"md"}
            w={"100%"}
            placeholder={"What's on your mind..."}
            value={form.values.description}
            onChange={(event) =>
              form.setFieldValue("description", event.currentTarget.value)
            }
          />
        </Flex>
        <Divider my={"md"} />
        <Group position={"apart"}>
          <FileButton
            accept="image/png,image/jpeg"
            onChange={(file) => form.setFieldValue("picture", file)}
          >
            {(props) => (
              <Button
                leftIcon={<IconPhoto />}
                variant="subtle"
                color="dark"
                {...props}
              >
                Image
              </Button>
            )}
          </FileButton>
          <Button leftIcon={<IconVideo />} variant="subtle" color="dark">
            Clip
          </Button>
          <Button leftIcon={<IconPaperclip />} variant="subtle" color="dark">
            Attachment
          </Button>
          <Button leftIcon={<IconMicrophone />} variant="subtle" color="dark">
            Audio
          </Button>
          <Button type={"submit"}>Post</Button>
        </Group>
      </form>
      {form.values.picture ? (
        <Text size="sm" mt="sm">
          Picked file: {form.values.picture.name}
        </Text>
      ) : null}
    </Card>
  );
}
