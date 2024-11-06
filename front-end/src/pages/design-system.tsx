// COMPONENTS
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";

// DESIGN SYSTEM
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

// ICONS
import { RiArrowRightSLine, RiNotification3Line } from "react-icons/ri";

export default function DesignSystem() {
    return (
        <>
            <Seo 
                title="Design System" 
                description="Explorez et découvrez les composants et les styles utilisés dans l'application pour assurer une cohérence visuelle et fonctionnelle." />
            <Layout>
                <Container className="space-y-5 py-10">
                {/* Typography */}
                <div className="space-y-2">
                    <Typography variant="lead" theme="primary" weight="medium">
                    Typography
                    </Typography>

                    <div className="p-5 space-y8 border-t-4 border-gray-400 rounded">
                    <div className="pb-5 space-y-2">
                        <Typography variant="caption3" weight="medium" theme="secondary">Display</Typography>
                        <Typography variant="display">Text Display</Typography>
                    </div>
                    </div>

                    <div className="p-5 space-y8 border-t-4 border-gray-400 rounded">
                    <div className="pb-5 space-y-2">
                        <Typography variant="caption3" weight="medium" theme="secondary">H1</Typography>
                        <Typography variant="h1">Texte H1</Typography>
                    </div>
                    </div>

                    <div className="p-5 space-y8 border-t-4 border-gray-400 rounded">
                    <div className="pb-5 space-y-2">
                        <Typography variant="caption3" weight="medium" theme="secondary">H2</Typography>
                        <Typography variant="h2">Texte H2</Typography>
                    </div>
                    </div>

                    <div className="p-5 space-y8 border-t-4 border-gray-400 rounded">
                    <div className="pb-5 space-y-2">
                        <Typography variant="caption3" weight="medium" theme="secondary">H3</Typography>
                        <Typography variant="h3">Texte H3</Typography>
                    </div>
                    </div>

                    <div className="p-5 space-y8 border-t-4 border-gray-400 rounded">
                    <div className="pb-5 space-y-2">
                        <Typography variant="caption3" weight="medium" theme="secondary">H4</Typography>
                        <Typography variant="h4">Texte H4</Typography>
                    </div>
                    </div>

                    <div className="p-5 space-y8 border-t-4 border-gray-400 rounded">
                    <div className="pb-5 space-y-2">
                        <Typography variant="caption3" weight="medium" theme="secondary">H5</Typography>
                        <Typography variant="h5">Texte H5</Typography>
                    </div>
                    </div>

                    <div className="p-5 space-y8 border-t-4 border-gray-400 rounded">
                    <div className="pb-5 space-y-2">
                        <Typography variant="caption3" weight="medium" theme="secondary">Lead</Typography>
                        <Typography variant="lead">Lead</Typography>
                    </div>
                    </div>

                    <div className="p-5 space-y8 border-t-4 border-gray-400 rounded">
                    <div className="pb-5 space-y-2">
                        <Typography variant="caption3" weight="medium" theme="secondary">Body Lg</Typography>
                        <Typography variant="body-lg">Body Lg</Typography>
                    </div>
                    </div>

                    <div className="p-5 space-y8 border-t-4 border-gray-400 rounded">
                    <div className="pb-5 space-y-2">
                        <Typography variant="caption3" weight="medium" theme="secondary">Body base</Typography>
                        <Typography variant="body-base">Body base</Typography>
                    </div>
                    </div>

                    <div className="p-5 space-y8 border-t-4 border-gray-400 rounded">
                    <div className="pb-5 space-y-2">
                        <Typography variant="caption3" weight="medium" theme="secondary">Body sm</Typography>
                        <Typography variant="body-sm">Body sm</Typography>
                    </div>
                    </div>
                </div>

                <div className="flex items-start gap-7">
                    {/* Spinner */}
                    <div className="space-y-2 mt-3">
                        <Typography variant="lead" theme="primary" weight="medium">
                            Spinners
                        </Typography>
                        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                            <Spinner size="small" />
                            <Spinner />
                            <Spinner size="large" />
                        </div>
                    </div>

                    {/* Avatar */}
                    <div className="space-y-2 mt-3">
                        <Typography variant="lead" theme="primary" weight="medium">
                            Avatar
                        </Typography>
                        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                            <Avatar size="small" src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash1.png" alt="Avatar de profil"/>
                            <Avatar src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash1.png" alt="Avatar de profil"/>
                            <Avatar size="large" src="/assets/images/daniel-lincoln-pe-X2NUwVQo-unsplash1.png" alt="Avatar de profil"/>
                        </div>
                    </div>

                    {/* Logo */}
                    <div className="space-y-2 mt-3">
                        <Typography variant="lead" theme="primary" weight="medium">
                            Logo
                        </Typography>
                        <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
                            <Logo size="very-small" />
                            <Logo size="small" />
                            <Logo />
                            <Logo size="large" />
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="space-y-2 mt-3">
                    <Typography variant="lead" theme="primary" weight="medium">
                        Buttons
                    </Typography>
                    <div className="p-5 space-y8 border border-gray-400 rounded">

                        <div className="space-y-2">
                            <Typography variant="body-lg" weight="medium">
                                Small
                            </Typography>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Button size="small">Accent</Button>
                                    <Button size="small" variant="secondary">Secondary</Button>
                                    <Button size="small" variant="outline">Outline</Button>
                                    <Button size="small" variant="disable">Disable</Button>
                                    <Button size="small" variant="sucess">Sucess</Button>
                                    <Button size="small" icon={{ icon: RiArrowRightSLine }}iconPosition="left">Accent</Button>
                                    <Button size="small" icon={{ icon: RiArrowRightSLine }}>Accent</Button>
                                    <Button size="small" variant="ico" icon={{ icon: RiNotification3Line }} />
                                    <Button size="small" variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="secondary" />
                                    <Button size="small" variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="gray" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Button isLoading size="small">Accent</Button>
                                <Button isLoading size="small" variant="secondary">Secondary</Button>
                                <Button isLoading size="small" variant="outline">Outline</Button>
                                <Button isLoading size="small" variant="disable">Disable</Button>
                                <Button isLoading size="small" icon={{ icon: RiArrowRightSLine }} iconPosition="left">Accent</Button>
                                <Button isLoading size="small" icon={{ icon: RiArrowRightSLine }}>Accent</Button>
                                <Button isLoading size="small" variant="ico" icon={{ icon: RiNotification3Line }} />
                                <Button isLoading size="small" variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="secondary" />
                                <Button isLoading size="small" variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="gray"/>
                            </div>
                        </div>

                        <div className="space-y-2 mt-8">
                            <Typography variant="body-lg" weight="medium">
                                Medium
                            </Typography>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Button>Accent</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="disable">Disable</Button>
                                    <Button variant="sucess">Sucess</Button>
                                    <Button icon={{ icon: RiArrowRightSLine }} iconPosition="left">Accent</Button>
                                    <Button icon={{ icon: RiArrowRightSLine }}>Accent</Button>
                                    <Button variant="ico" icon={{ icon: RiNotification3Line }} />
                                    <Button variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="secondary" />
                                    <Button variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="gray"/>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Button isLoading >Accent</Button>
                                <Button isLoading variant="secondary">Secondary</Button>
                                <Button isLoading variant="outline">Outline</Button>
                                <Button isLoading variant="disable">Disable</Button>
                                <Button isLoading icon={{ icon: RiArrowRightSLine }} iconPosition="left">Accent </Button>
                                <Button isLoading icon={{ icon: RiArrowRightSLine }}>Accent</Button>
                                <Button isLoading variant="ico" icon={{ icon: RiNotification3Line }} />
                                <Button isLoading variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="secondary" />
                                <Button isLoading variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="gray" />
                            </div>
                        </div>

                        <div className="space-y-2 mt-8">
                            <Typography variant="body-lg" weight="medium">
                                Large
                            </Typography>
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Button size="large">Accent</Button>
                                    <Button size="large" variant="secondary">Secondary</Button>
                                    <Button size="large" variant="outline">Outline</Button>
                                    <Button size="large" variant="disable">Disable</Button>
                                    <Button size="large" variant="sucess">Sucess</Button>
                                    <Button size="large" icon={{ icon: RiArrowRightSLine }}iconPosition="left">Accent</Button>
                                    <Button size="large" icon={{ icon: RiArrowRightSLine }}>Accent</Button>
                                    <Button size="large" variant="ico" icon={{ icon: RiNotification3Line }} />
                                    <Button size="large" variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="secondary" />
                                    <Button size="large" variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="gray" />
                                </div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Button isLoading size="large">Accent</Button>
                                <Button isLoading size="large" variant="secondary">Secondary</Button>
                                <Button isLoading size="large" variant="outline">Outline</Button>
                                <Button isLoading size="large" variant="disable">Disable</Button>
                                <Button isLoading size="large" icon={{ icon: RiArrowRightSLine }} iconPosition="left">Accent</Button>
                                <Button isLoading size="large" icon={{ icon: RiArrowRightSLine }}>Accent</Button>
                                <Button isLoading size="large" variant="ico" icon={{ icon: RiNotification3Line }} />
                                <Button isLoading size="large" variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="secondary" />
                                <Button isLoading size="large" variant="ico" icon={{ icon: RiNotification3Line }} iconTheme="gray"/>
                            </div>
                        </div>

                    </div>
                </div>
                </Container>
            </Layout>
        </>
    )
}