import { PlaceholderPage } from "@/components/PlaceholderPage";

type CreatorProfileProps = {
  params: Promise<{ slug: string }>;
};

export default async function CreatorProfileRoute({
  params,
}: CreatorProfileProps) {
  const { slug } = await params;

  return (
    <PlaceholderPage
      title="Creator Profile"
      description={`The profile for "${slug}" is coming soon.`}
    />
  );
}
