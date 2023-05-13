import React from "react";
import { Box, Footer, Grid, Page, PageContent, PageHeader, Sidebar, Text } from "grommet";
import { AppHeader } from "./appHeader";
import WorkingArea from "./workingArea";

export const AppHome = ({RouterContext}) => {
  const { push } = React.useContext(RouterContext)

  return (
    <Page background={{"color":"background-back"}}>
        <PageContent>
            <AppHeader appName="Palavragem"/>
        </PageContent>
        <PageContent>
            <PageHeader title="Pesquisa" margin="xsmall" />
            <Grid 
            rows={["xxsmall","auto","xxsmall"]} 
            a11yTitle="grid" 
            columns={["1/4","3/4"]} 
            areas={[
                {"name":"Header","start":[0,0],"end":[1,0]},
                {"name":"Sidebar","start":[0,1],"end":[0,1]},
                {"name":"Main","start":[1,1],"end":[1,1]},
                {"name":"Footer","start":[0,2],"end":[1,2]}
                ]}
            >
            <Sidebar 
                align="stretch" 
                direction="column" 
                flex={false} 
                gap="large" 
                pad="small" 
                gridArea="Sidebar" 
                background={{"color":"background-back"}}
            >
                <Box align="center" justify="center" />
                <Box align="center" justify="center" />
                <Box align="center" justify="center" />
            </Sidebar>
            <WorkingArea gridArea="Main" />
            <Footer align="center" direction="row" flex={false} justify="between" gap="medium" gridArea="Footer" background={{"color":"brand"}}>
                <Text textAlign="center">
                Palavragem é um produto W&A Soluções Tecnológicas. Todos os direitos reservados.
                </Text>
            </Footer>
            </Grid>
        </PageContent>
    </Page>
  )
}