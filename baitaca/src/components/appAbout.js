import React from "react";
import { Card, CardHeader, CardBody, Grid, Page, PageContent, PageHeader, Paragraph, Text } from "grommet";
import { AppHeader } from "./appHeader";

export const AppAbout = () => {
 
    return (
        <Page background={{"color":"background-back"}}>
            <PageContent>
                <AppHeader appName="Palavragem"/>
            </PageContent>
            <PageContent>
                <PageHeader title="O que somos?" subtitle="O que é e para que serve o Palavragem?" />
                <Grid columns={["1/3","1/3","1/3"]} pad="small">
                    <Card pad="medium" hoverIndicator>
                        <CardHeader align="center" direction="row" flex={false} justify="between" gap="medium" pad="small">
                        <Text size="xsmall">
                            Radical
                        </Text>
                        </CardHeader>
                        <CardBody pad="small">
                        <Text size="large" weight="bold" color="dark-2" textAlign="center">
                            Palavra
                        </Text>
                        </CardBody>
                    </Card>
                    <Card pad="medium">
                        <CardHeader align="center" direction="row" flex={false} justify="between" gap="medium" pad="small" />
                        <CardBody pad="small">
                        <Text size="large" weight="bold" color="dark-2" textAlign="center">
                            +
                        </Text>
                        </CardBody>
                    </Card>
                    <Card pad="medium" hoverIndicator>
                        <CardHeader align="center" direction="row" flex={false} justify="between" gap="medium" pad="small">
                        <Text size="xsmall">
                            Sufixo
                        </Text>
                        </CardHeader>
                        <CardBody pad="small">
                        <Text size="large" weight="bold" color="dark-2" textAlign="center">
                            -agem
                        </Text>
                        </CardBody>
                    </Card>
                </Grid>
                <Grid columns="auto" pad="small">
                    <Card margin={{"vertical":"medium"}} >
                        <CardBody pad="small">
                            <Paragraph fill="true">
                            Palavragem é um conjunto, um ajuntamento de palavras.  Usadas para qual quer fim ou propósito. 
                            Informar, entreter, curiosar. Não há limites para a língua, nem para a linguagem. 
                            Está em dúvida na palavra-cruzada? 
                            Quer navegar pelos conjuntos de palavras que tem alguma coisa em comum?
                            </Paragraph>
                            <Paragraph fill="true">
                            Então venha para cá e busque o que quer e o que precisa!
                            </Paragraph>
                        </CardBody>
                        </Card>
                        <Card margin={{"vertical":"medium"}}>
                        <CardBody pad="small">
                            <Paragraph fill="true">
                            Este site utiliza a lista de palavras do Português brasileiro obtida em <a href="https://github.com/pythonprobr/palavras">https://github.com/pythonprobr/palavras</a>
                            </Paragraph>
                            <Paragraph fill="true">
                            Uso sob licença <a href="https://github.com/pythonprobr/palavras/blob/master/LICENSE">Mozilla Public Licence Version 2.0</a>
                            </Paragraph>
                        </CardBody>
                    </Card>
                </Grid>
            </PageContent>
        </Page>
    )
}