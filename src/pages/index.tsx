// COMPONENTS
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

// MODULES
import { LandingPageContainer } from "@/ui/modules/landing-page/landing-page.container";

export default function Home() {
  return (
    <>
      <Seo title="Coders Monkers" description="Description..." />
      <Layout isdisplayBreadcrumb={false}>
        <LandingPageContainer />
      </Layout>
    </>
  );
}
