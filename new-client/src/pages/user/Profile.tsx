import { ProfileInfoCard } from "@/components/user/ProfileInfoCard";
import { Stack } from "@mantine/core";

export function Profile() {
  return (
    <Stack>
      <ProfileInfoCard />
      <ProfileInfoCard />
    </Stack>
  );
}
