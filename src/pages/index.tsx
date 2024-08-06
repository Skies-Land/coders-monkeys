import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkers" description="Description..." />

      <div className="space-y-5">
        <Typography >Coders Monkeys</Typography>
        <Typography theme="primary" variant="body-lg" component="h1">Coders Monkeys</Typography>
        <Typography theme="secondary" variant="h1" component="div">Coders Monkeys</Typography>
        <Typography variant="lead" component="div">Coders Monkeys</Typography>
        <Typography variant="body-sm" component="div">Coders Monkeys</Typography>
        <Typography variant="caption4" component="div">Coders Monkeys</Typography>
        <Typography variant="caption4" weight="medium" component="div">Coders Monkeys</Typography>
      </div>
      
    </>
  );
}
