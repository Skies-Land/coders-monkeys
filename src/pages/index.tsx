import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design-system/typography/button/button";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkers" description="Description..." />

      <div className="flex items-center gap-4 p-10">
        <Button size="small">Accent</Button>
        <Button size="small" variant="secondary">Accent</Button>
        <Button size="small" variant="outline">Accent</Button>
        <Button size="small" variant="disable">Accent</Button>
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button>Accent</Button>
        <Button variant="secondary">Accent</Button>
        <Button variant="outline">Accent</Button>
        <Button variant="disable">Accent</Button>
      </div>

      <div className="flex items-center gap-4 p-10">
        <Button size="large">Accent</Button>
        <Button size="large" variant="secondary">Accent</Button>
        <Button size="large" variant="outline">Accent</Button>
        <Button size="large" variant="disable">Accent</Button>
      </div>

      {/* <div className="space-y-5">
        <Typography >Coders Monkeys</Typography>
        <Typography theme="primary" variant="body-lg" component="h1">Coders Monkeys</Typography>
        <Typography theme="secondary" variant="h1" component="div">Coders Monkeys</Typography>
        <Typography variant="lead" component="div">Coders Monkeys</Typography>
        <Typography variant="body-sm" component="div">Coders Monkeys</Typography>
        <Typography variant="caption4" component="div">Coders Monkeys</Typography>
        <Typography variant="caption4" weight="medium" component="div">Coders Monkeys</Typography>
      </div> */}

    </>
  );
}
